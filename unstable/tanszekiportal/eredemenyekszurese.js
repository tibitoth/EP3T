// ==UserScript==
// @name         Szûrés értékelés alapján
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Szûrés értékelés alapján
// @author       Ákos Nagy
// @match        https://www.aut.bme.hu/Course/*/*/*/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';


function filter() {
    var rows=$('#gvUserOnAssignmentResult > tbody > tr.gridViewAltRow,.gridViewRow');
    rows.each(function() {
        $(this).show();
    });
    var filterVal=$( "#filterS option:selected" ).val();
    
    if ( filterVal=="-1" )
    {        
        return;
    }
    
    rows.each(function() {
        var grade = $(this).find('option:selected');
        if (grade.val()!=filterVal)
        {
            $(this).hide();
        }
    });

}

var select=$('#gvUserOnAssignmentResult').find('select').first();
select.attr('id','filterS');
var clone=select.clone();
clone.css('width','100px');

clone.change(filter);

clone.find('option').removeAttr("selected");
clone.append('<option selected value="-1"> Mind</option>');

$('div#body > div > p').after('<h2>Szûrés</h2><p id="filterP">Csak azok mutatása, ahol az eredmény: </p>');
$('#filterP').append(clone);