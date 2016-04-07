// ==UserScript==
// @name         Tanszéki portál értékelések színezése
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A tanszéki portálon az értékelések listájánál a nem értékelt sorok hátterét kiszínezi
// @author       Ákos Nagy
// @match        https://www.aut.bme.hu/Course/*/*/*/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var rows=$('#gvUserOnAssignmentResult > tbody > tr.gridViewAltRow,.gridViewRow');


rows.each(function() {
    var grade = $(this).find('option:selected');
    if (grade.text()=='Értékelje')
    {
        $(this).css('background-color','#FFDFDF');
    }
});