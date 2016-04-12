// ==UserScript==
// @name         Tanszéki portál: Csoportok táblázatának nyújtása
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A csoportok oldalon a táblázat és az oldalfejléc kinyújtásra kerül az oldal szélességének 85%-ára, és a táblázat belső görgetése helyett a teljes oldal görgethető függőlegesen.
// @author       Tóth Tibor
// @match        https://www.aut.bme.hu/Course/*/*/*
// @exclude      https://www.aut.bme.hu/Course/*/*/*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // oldal formázása 85% szélesre
    $("#page").css("width", "85%");        
    $("#page").css("background-size", "100.1%");  
    
    $("#breadcrumb").css("margin-left", "2px");   
    $("#breadcrumb").css("margin-right", "2px");

    $("#header").css("width", "100%");
    $("#header").parent().css("width", "85%");
    
    $("#footer").css("background-size", "100%");
    $("#footer").css("margin-left", "2px");
    $("#footer").css("margin-right", "2px");

    $("#mainNavBar").css("background-size", "100.7% 29px");   
    $("#mainNavBar").css("width", "100%");
    
    $('#gvStudentAssignment').fixedHeaderTable("destroy");
    $('#gvStudentAssignment').fixedHeaderTable({
					width: "100%",
					height: $('#gvStudentAssignment').outerHeight()+20,
					fixedColumns: 2,
					footer: false,
					cloneHeadToFoot: true //bugos ezért kell köv utasítás
				});

    $("#gvStudentAssignment > tfoot").html($("#gridContainer > div > div > div.fht-fixed-body > div:nth-child(1) > table > thead > tr").clone());
})();
