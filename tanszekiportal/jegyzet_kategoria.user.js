// ==UserScript==
// @name         Tanszéki portál: jegyzet kategória megjegyzése
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Új jegyzet feltöltésekor az előzőleg választott kategória megjegyzése és felkínálása. (Globális tárolás, nem tárgyankénti.)
// @author       Kis-Nagy Dániel
// @match        https://www.aut.bme.hu/Course/*/EditFiles
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(localStorage && localStorage.getItem("ddlFileCategory_value")) {
        $("#ddlFileCategory")[0].value = localStorage.getItem("ddlFileCategory_value");
    }


    //FYI, a tanszéki portálon régi a jQuery, nem ismeri az .on(...)-t
    $("#ddlFileCategory").bind("change", function() {
        localStorage.setItem("ddlFileCategory_value", this.value);
    });
})();