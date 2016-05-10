// ==UserScript==
// @name         Tanszéki portál értékelések színezése
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  A tanszéki portálon az értékelések listájánál a nem értékelt sorok hátterét kiszínezi
// @author       Ákos Nagy
// @match        https://www.aut.bme.hu/Course/*/*/*/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var rowSelector = '#gvUserOnAssignmentResult > tbody > tr.gridViewRow';
var rowAltSelector = '#gvUserOnAssignmentResult > tbody > tr.gridViewAltRow';
var rows=$(rowSelector + ', ' + rowAltSelector);


rows.each(function() {
    var grade = $(this).find('option:selected');
    if (grade.text()=='Értékelje')
    {
        $(this).css('background-color','#FFDFDF');
    }
});

$(rowSelector + ' select, ' + rowAltSelector + ' select').change(function(e) {
    $(e.currentTarget.parentNode.parentNode).css('background-color','#FFCE43');
});