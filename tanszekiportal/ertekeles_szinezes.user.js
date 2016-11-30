// ==UserScript==
// @name         Tanszéki portál értékelések színezése
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  A tanszéki portálon az értékelések listájánál a nem értékelt sorok hátterét kiszínezi
// @author       Ákos Nagy, Dániel Kis-Nagy
// @match        https://www.aut.bme.hu/Course/*/*/*/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var rowSelector = '#gvUserOnAssignmentResult > tbody > tr.gridViewRow';
var rowAltSelector = '#gvUserOnAssignmentResult > tbody > tr.gridViewAltRow';
var rows=$(rowSelector + ', ' + rowAltSelector);
var changedCount = 0;

rows.each(function() {
    var grade = $(this).find('option:selected');
    if (grade.text()=='Értékelje')
    {
        $(this).css('background-color','#FFDFDF');
    }
});

$(rowSelector + ' select, ' + rowAltSelector + ' select').change(function(e) {
    $(e.currentTarget.parentNode.parentNode).css('background-color','#FFCE43');
    changedCount++;
    // Ha több változásunk van, akkor a Ment gombot letiltjuk, ugyanis azzal
    // nagyon könnyen el tudjuk veszíteni az összes többi módosításunkat...
    if (changedCount > 1) {
        $(".btnAccept[value='Ment']").each(function() {
            this.disabled = true;
            this.style.opacity = "0.5";
            this.title = "Több sor is megváltozott. Használd inkább az Összes eredmény mentése gombot!";
        });
    }
});