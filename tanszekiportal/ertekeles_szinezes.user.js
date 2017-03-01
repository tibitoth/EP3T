// ==UserScript==
// @name         Tanszéki portál értékelések színezése
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  A tanszéki portálon az értékelések listájánál a nem értékelt sorok hátterét kiszínezi
// @author       Ákos Nagy, Dániel Kis-Nagy, Tibor Tóth
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
    var gradeSelect = $(this).find('option:selected');
    if (gradeSelect.text()=='Értékelje')
    {
        $(this).css('background-color','#FFDFDF');
    }
    
    var gradeTextInput = $(this).find('input#txtResult');
    if (gradeTextInput){
        var gradeText = gradeTextInput.val();
        if (!gradeText || /^\s*$/.test(gradeText))
        {
            $(this).css('background-color','#FFDFDF');
        }
    }
});

var inputChangedHandler = function(e) {
    $(e.currentTarget.parentNode.parentNode).css('background-color','#FFCE43');

    if ($(e.currentTarget.parentNode.parentNode).data('changed') == null){
        $(e.currentTarget.parentNode.parentNode).data('changed', true);
        changedCount++;
    }

    // Ha több változásunk van, akkor a Ment gombot letiltjuk, ugyanis azzal
    // nagyon könnyen el tudjuk veszíteni az összes többi módosításunkat...
    if (changedCount > 1) {
        $(".btnAccept[value='Ment']").each(function() {
            this.disabled = true;
            this.style.opacity = "0.5";
            this.title = "Több sor is megváltozott. Használd inkább az Összes eredmény mentése gombot!";
        });
    }
};

$(rowSelector + ' select, ' + rowAltSelector + ' select').change(inputChangedHandler);

$(rowSelector + ' input#txtResult, ' + rowAltSelector + ' input#txtResult').live('change keydown paste', inputChangedHandler);

$(rowSelector + ' textArea#txtStaffComment, ' + rowAltSelector + ' textArea#txtStaffComment').live('change keydown paste', inputChangedHandler);
$(rowSelector + ' textArea#txtComment, ' + rowAltSelector + ' textArea#txtComment').live('change keydown paste', inputChangedHandler);