// ==UserScript==
// @name         Tanszéki portál bcc
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  E-mail küldése minden hallgatónak BCC mezőben, a tárgy neve a subject mezőben
// @author       Ákos Nagy
// @match        https://www.aut.bme.hu/Course/*/*/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';


var a_href = $('#hlSendEmail').attr('href');
if (a_href) {
    var param1=a_href.split("'")[1];
    $('#hlSendEmail').attr('href','#');
}


// Decodes the encoded e-mail adress given as parameter, and creates a mailto link from it
function SendEmailBcc( ) {	
    var body='';
    var subject=$("div#body > h1").get(0).innerText.split(':')[0];    
    var email = DecodeEmailBcc(param1);
	
	var maxUrlLength = 1970 - subject.length - body.length;
	var emails = email.split(';');
	var url = 'mailto:?bcc=';
	
	for (var i = 0; i < emails.length; i++) {
		if (url.length + email[i].length > maxUrlLength) {
			AppendSubjAndBodyAndSendBcc(url, subject, body);

			// Start new mailto link.
			url = 'mailto:?bcc=';
			i--;
		}
		else {
			url += emails[i] + ";";
		}
	}

	// Open a new windows with the last email addresses.
	if (url.length > 6) {
		AppendSubjAndBodyAndSendBcc(url, subject, body);
	}
}

function AppendSubjAndBodyAndSendBcc(url, subject, body) {
	// Concatenate the subject and body part to the url.	    
    if (subject.length > 0)        
		url += '&Subject=' + subject;
	if (body.length > 0)
		url += '&Body=' + body;

	// Open the email client with the email addresses.	
    location.href = url;
}


// Decodes the encoded e-mail adress given as parameter
function DecodeEmailBcc( encodedEmail )
{
	var email = "";
	for( var i = 0; i < encodedEmail.length ; )
	{
		var letter = "";
		letter = encodedEmail.charAt( i ) + encodedEmail.charAt( i+1 );
		email += String.fromCharCode( parseInt( letter, 16 ) );
		i += 2;
	}
	return email;
}

if (a_href) {    
    $('#hlSendEmail').click( SendEmailBcc);
}

