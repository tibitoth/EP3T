// ==UserScript==
// @name         Diplomaterv portál
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Dipterv portál témalista áttekinthetőségének javítása szokatlan eszközökkel
// @author       Kis-Nagy Dániel
// @match        https://diplomaterv.vik.bme.hu/hu/Supervisor/Default.aspx
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// 1. Csoportosítás megteremtése
function createGroupIfNotEmpty(name, id, items) {
   if (items.length < 1)
       return;
    
   $(".tema-lista").after("<h3 id='" + id + "'>" + name + "</h3>");
   $("#" + id).after("<ul></ul>");
   var ul = $("#" + id + " + ul");
    
   for (var item of items) {
       item.detach();
       ul.append(item);
   }
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

