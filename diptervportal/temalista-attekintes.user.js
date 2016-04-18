// ==UserScript==
// @name         Diplomaterv portál
// @namespace    http://tampermonkey.net/
// @version      0.7
// @description  Dipterv portál témalista áttekinthetőségének javítása szokatlan eszközökkel
// @author       Kis-Nagy Dániel
// @match        https://diplomaterv.vik.bme.hu/hu/Supervisor/Default.aspx
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Decodes the encoded e-mail adress given as parameter, and creates a mailto link from it
function SendEmailBcc(event) {	
    var body='';    
    var email = DecodeEmailBcc(event.data.email);
    var subject=event.data.subject;	
	var maxUrlLength = 1970 - subject.length - body.length;
	var emails = email.split(';');
	var url = 'mailto:?bcc=';
	
	for (var i = 0; i < emails.length; i++) {
		if (url.length + email[i].length > maxUrlLength) {
			AppendSubjAndBodyAndSendBcc(url, subject, body);

			// Start new mailto link.
			url = 'mailto:?bcc=';
			i--;
		}
		else {            
			url += emails[i] + ";";
		}
	}

	// Open a new windows with the last email addresses.
	if (url.length > 6) {
		AppendSubjAndBodyAndSendBcc(url, subject, body);
	}
}

function AppendSubjAndBodyAndSendBcc(url, subject, body) {
	// Concatenate the subject and body part to the url.	    
    if (subject.length > 0)        
		url += '&Subject=' + subject;
	if (body.length > 0)
		url += '&Body=' + body;

	// Open the email client with the email addresses.	
    location.href = url;
}


// Decodes the encoded e-mail adress given as parameter
function DecodeEmailBcc( encodedEmail )
{
	var email = "";
	for( var i = 0; i < encodedEmail.length ; )
	{
		var letter = "";
		letter = encodedEmail.charAt( i ) + encodedEmail.charAt( i+1 );
		email += String.fromCharCode( parseInt( letter, 16 ) );
		i += 2;
	}
	return email;
}


function comp(a,b) {    
    var af=a.find('a+br+a').get(0).innerText;
    var bf=b.find('a+br+a').get(0).innerText;
    return af.localeCompare(bf);
    
}

// 1. Csoportosítás megteremtése
function createGroupIfNotEmpty(name, id, items) {
   if (items.length < 1)
       return;
    
   $(".tema-lista").after("<h3 id='" + id + "'>" + name + "</h3>");
   $("#" + id).after("<ul></ul>");
   var ul = $("#" + id + " + ul");
   var email='';          
   
   items.sort(comp);
   
   for (var item of items) {
       item.detach();
       ul.append(item);
       item.addClass("dolgozat-adatok");
       var a_href = item.find('a+br+a').attr('href');                     
       if (a_href) {                      
           var param1=a_href.split("'")[1];
           email=email+param1+"3B";
       }       
   }
   ul.before("<a href='#' class='hlEmail'>Körlevél küldése</a>");    
   var link=ul.prev();   
   link.click({'email':email,'subject':name},SendEmailBcc);
}

$("h2+a+ul").addClass("tema-lista");

var szakdolgozat = [],
    dipterv1 = [],
    dipterv2 = [],
    egyeb = [];
$(".tema-lista > li > span.meta").each(function(idx, tema_meta) {
    var item = $(".tema-lista > li:eq(" + idx + ")");
    
    if (tema_meta.innerText.indexOf("Szakdolgozat") != -1) {
        szakdolgozat.push(item);
    } else if (tema_meta.innerText.indexOf("Diplomatervezés 1") != -1) {
        dipterv1.push(item);
    } else if (tema_meta.innerText.indexOf("Diplomatervezés 2") != -1) {
        dipterv2.push(item);
    } else {
        egyeb.push(item);
    }                                      
});

createGroupIfNotEmpty("Szakdolgozat", "tm-szakdoga", szakdolgozat);
createGroupIfNotEmpty("Diplomatervezés 1", "tm-dipterv1", dipterv1);
createGroupIfNotEmpty("Diplomatervezés 2", "tm-dipterv2", dipterv2);
createGroupIfNotEmpty("Egyéb", "tm-egyeb", egyeb);

// 2. Feladatok besorolásának módosítása
// (Ha tanszékvezetőre vár, az részemről OK)
var unimportantItems = [];
$(".lblStatusWarning").each(function(idx, label) {
    if (label.innerText.indexOf("Tanszékvezetőre vár") != -1) {
        unimportantItems.push(label);
    }
});

for (var item of unimportantItems) {
    $(item).removeClass("lblStatusWarning")
           .addClass("lblStatusSuccess");
}


// 3. Bírálat elodázása
// (Ha nincs beadott dolgozat, nincs is mit bírálni)
$(".dolgozat-adatok").each(function(idx, item) {
    var tasks = $($(item).find("div").get(0)).find("span");
    var isReviewNeeded = tasks.get(2).innerText.indexOf("Beadva") != -1;
    if (!isReviewNeeded) {
        var reviewStatusSpan = tasks.get(3);
        reviewStatusSpan.innerText = "Még nem aktuális";
        $(reviewStatusSpan).removeClass("lblStatusWarning").addClass("lblStatusSuccess");
    }
});

// 4. Szűrés
function filter() {
    var actives=[]
    $("input:checkbox:checked").each(function() {        
        actives.push($(this).val());
    });    
    $(".dolgozat-adatok").each(function(idx, item) {
        var firstTask = $($(item).find("div").get(0)).find("span.lblStatusWarning:first");
        if (actives.includes(firstTask.text()) || (!firstTask && actives.includes("Done"))) {
            $(item).show();
        } else {
            $(item).hide();
        }
    });    
    
}

function updateList() {
    var warningStatusList=[];
    $(".dolgozat-adatok").each(function(idx, item) {
        var firstTask = $($(item).find("div").get(0)).find("span.lblStatusWarning:first");
        if (firstTask) {
             if (!(warningStatusList.includes(firstTask.text()))) {
                 warningStatusList.push(firstTask.text());
             }
        }        
    }); 
    
    var html="<br/><br/>Témák szűrése az első várakozó feladat állapota szerint:<br/><div id='placeHolder'/>";
    $("select").after(html);        
    var current=$("#placeHolder");    
    for (var status of warningStatusList) {
        var ch = document.createElement("input");
        ch.setAttribute("type","checkbox");
        ch.setAttribute("value",status);
        ch.setAttribute("checked",true);                
        $(ch).change(filter);
        current.after(ch);
        current=$(ch);
        var lb = document.createElement("label");       
        lb.innerText=status;
        current.after(lb);
        current=$(lb);
        var br=document.createElement("br");
        current.after(br);
        current=$(br);
        
    }    
        var ch = document.createElement("input");
        ch.setAttribute("type","checkbox");
        ch.setAttribute("value","Done");
        ch.setAttribute("checked",true);                
        $(ch).change(filter);
        current.after(ch);
        current=$(ch);
        var lb = document.createElement("label");       
        lb.innerText="Kész";
        current.after(lb);
        current=$(lb);
        var br=document.createElement("br");
        current.after(br);
        current=$(br);
        
    
}

updateList();