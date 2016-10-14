// ==UserScript==
// @name         Tanszéki portál összes letöltése
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  Tanszéki portálról minden feltöltött fájl letöltése
// @author       Nagy Ákos, Kis-Nagy Dániel
// @match        https://www.aut.bme.hu/Course/*/*/*/*
// @require      https://raw.githubusercontent.com/Stuk/jszip/master/dist/jszip.js
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function getFiles() {
    var elements=$("li.zip > a, li.docx > a, li.pdf > a, li.txt > a");    
    var links=[];
    $(elements).each(function() {
        var sn = $(this).closest("tr").children().get(0).innerText;
        links.push( { studentName: sn, url: $(this).attr('href')});
    });        
    return links;
}


var files = getFiles();
var zip = new JSZip();
var count = 0;
var studentNames = $("tr.gridViewRow td:first-child, tr.gridViewAltRow td:first-child");

function downloadFile(url, onSuccess) {   
    var xhr = new XMLHttpRequest();            
    xhr.onreadystatechange = function () {         
        if (xhr.readyState == 4) {            
            if (onSuccess) onSuccess(xhr.response);
        }
    } 
    xhr.responseType = "blob";
    xhr.open('GET', url, true);  
    xhr.send();
}

function onDownloadComplete(blobData){      
    if (count < files.length) {        
        blobToBase64(blobData, function(binaryData){                
                var fileName = files[count].studentName + " - " + files[count].url.substring(files[count].url.lastIndexOf('/')+1);
                zip.file(fileName, binaryData, {base64: true});
                if (count < files.length -1){
                    count++;
                    downloadFile(files[count].url, onDownloadComplete);                    
                }
                else {                                             
                     var link = document.getElementById('download-link');
                    
                    if (zip.generateAsync) {
                        zip.generateAsync({type:"blob"}).then(function(content) {
                            var link=document.createElement('a');
                            link.download = $("div#body > div > h1").get(0).innerText+'.zip';
                            link.href = window.URL.createObjectURL(content);
                            link.click();
                        });
                    } else {
                        var blob = zip.generate({type:"blob"});
                        var link=document.createElement('a');
                        link.download = $("div#body > div > h1").get(0).innerText+'.zip';
                        link.href = window.URL.createObjectURL(blob);
                        link.click();
                    }
                }
            });
    }
}

function blobToBase64(blob, callback) {
    var reader = new FileReader();
    reader.onload = function() {
        var dataUrl = reader.result;
        var base64 = dataUrl.split(',')[1];
        callback(base64);
    };
    reader.readAsDataURL(blob);
}


var downloadBgImageData = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuOWwzfk4AAAKMSURBVDhPdZNrSFNhGMdfQqTEjD5EgV2RCGptUeogEwY1Jci+hFHSFlOiCxXlhz4URImReSsRMSwhirCR2CQI0nTqnCjhIBIv8zJNZ5rzNmcOz87+Pe97RrouD/zh3H6/5znvew5bXe9tTpjru/DqwxdU1naivLoDJVVtKHjZggeVjbhbXicSevzvetfUC58/KLKwFIR3ScbcTxmzi0HM+GQB8/qvpKaxR8BegucJnCNwlsBpXxDTCysCXv+U8BuM7QBLvAR2zQAWn4ZduiJ4CJ7yhgt4CQniooDqFMgn4riRshZsjR4Rqniojh7H1ofjiEnNwuS8IvgzDOvWA29qgSs3gcyTgFELnKJh+EB2O9RGEzaokzAxJ2N8NgD3jIzR6QC+URSBRhMaiNcg4C8DFjchI5XhqdmBZMMNRKv1BMsEBzBKAg6PeKSQYPdehXWZAUcepBot/M8ZTPsYqiyfkXSOBBo9xgTMQSXDUwHcLqsngTZREfgqAOcR4C2N3sBQrGb4aHXimCETMZpkMbYAKS6Ch35IuFXaANZH7xq5MRIH9m8TixixPRY7Ew7STmzGnsMpUBUNgB1K/92Vg0OTEgYmA8h+YuXMSnnsDrqgBtOVguXnINqYjYTTlhBMIMGDHJ6Q4Pwu4WpxU7jg8etWzHdY0N9pw7PzGXQzFiPUVRk5QF1X4D7KxYLmcEEhffN1X4f5RbAtOrC0XDqOEucDEyQQ8DJ6xyX0uCVkPrKFC/JeNIW2SOnqEiMrYD915HAfwb3uZXRTjLmt4QL+x/GFctG4fKFWv68AKd3UuXtsGV2Us/fbwgU5FZ9wp0wJ36LsEiuuF1txubAZF/JbYMqzwUBdz+TYkX6vndKOX1JxlU12YFDIAAAAAElFTkSuQmCC')";

$(document).ready(function(){
    if (files && files.length>0)
    {
        document.createEvent ('MouseEvents').initEvent ('click', true, true);
        $("#btnSaveMultiple").after('<input type="button" id="downloadGomb" value="Összes letöltése" />');
        $('#downloadGomb').css("position", "relative");
        $('#downloadGomb').css("left", "5px");    
        $('#downloadGomb').css("margin-right", "5px")
        $('#downloadGomb').css("width", "115px");
        $('#downloadGomb').css("background-image", downloadBgImageData);      
        $('#downloadGomb').css("background-position", "4px 4px");    
        $('#downloadGomb').bind('click', function (){downloadFile(files[count].url,onDownloadComplete);});   
    }
});