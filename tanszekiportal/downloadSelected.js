// ==UserScript==
// @name         Tanszéki portál tananyag letöltő script
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Letölti a kiválasztott anyagokat a portálról
// @author       Czeglédi Viktor 
// @match        https://www.aut.bme.hu/Course/*
// @require      https://raw.githubusercontent.com/Stuk/jszip/master/dist/jszip.js
// @grant        none
// ==/UserScript==

var fileURLs = [];
var zip = new JSZip();
var count = 0;

(function() {
    'use strict';

    var downloadBtn = document.createElement("button");
    downloadBtn.innerText="Letöltés";
    downloadBtn.setAttribute("type","button");
    downloadBtn.onclick=downloadAll;

    $("ul#itemPlaceholderContainer").before(downloadBtn);

    $('a#hpyCourseFile').each(function(i, e){
        var jqel = $(e);
        var but = document.createElement("input");
        but.setAttribute("type","checkbox");
        but.setAttribute("value",jqel.attr("href"));
        jqel.before(but);
    });

})();

function downloadAll(){
    var checkedElements = $('a#hpyCourseFile').siblings("input:checked[type=checkbox]");
    if(checkedElements.length === 0) return;
    fileURLs = [];
    for(i = 0; i < checkedElements.length; i++){
        fileURLs.push($(checkedElements[i]).attr("value"));
    }
    count = 0;
    zip = new JSZip();
    downloadFile(fileURLs[0],onDownloadComplete);
}

function downloadFile(url, onSuccess) {   
    debugger;
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
    if (count < fileURLs.length) {        
        blobToBase64(blobData, function(binaryData){                
            var fileName = fileURLs[count].substring(fileURLs[count].lastIndexOf('/')+1);
            zip.file(fileName, binaryData, {base64: true});
            if (count < fileURLs.length -1){
                count++;
                downloadFile(fileURLs[count], onDownloadComplete);                    
            }
            else {                                             
                var link = document.getElementById('download-link');
                var blob = zip.generate({type:"blob"});
                var link=document.createElement('a');
                link.download = $("div#body > h1").get(0).innerText+'.zip';
                link.href = window.URL.createObjectURL(blob);
                link.click();
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