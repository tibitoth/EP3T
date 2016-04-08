// ==UserScript==
// @name         Csoportok táblázatának nyújtása
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  az oldal 85%-át kihasználó táblázat a csoportok oldalon.
// @author       Tóth Tibor
// @match        https://www.aut.bme.hu/Course/*/*/*
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
    
    // TODO táblázat formázása
})();