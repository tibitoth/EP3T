// ==UserScript==
// @name         Neptun aktuális félévválasztás
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Oktatói neptunban az aktuális (listában legújabb) félév automatikusan kiválasztásra kerül.
// @author       Tóth Tibor
// @match        https://frame.neptun.bme.hu/oktatoi/main.aspx?ismenuclick=true&ctrl=h_institutionalsubjects
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// From: http://stackoverflow.com/a/2692459/1406798
function findMaxValue(element) {
    var maxValue = undefined;
    $('option', element).each(function() {
        var val = $(this).attr('value');
        val = parseInt(val, 10);
        if (maxValue === undefined || maxValue < val) {
            maxValue = val;
        }
    });
    return maxValue;
}

(function() {
    $('#cmbTerms_cmb').find('option[value='+findMaxValue($('#cmbTerms_cmb'))+']').prop('selected', true);
})();