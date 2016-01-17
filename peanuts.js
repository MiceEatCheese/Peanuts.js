/*
	 ____                        _          _     
	|  _ \ ___  __ _ _ __  _   _| |_ ___   (_)___ 
	| |_) / _ \/ _` | '_ \| | | | __/ __|  | / __|
	|  __/  __/ (_| | | | | |_| | |_\__ \_ | \__ \
	|_|   \___|\__,_|_| |_|\__,_|\__|___(_)/ |___/
	                                     |__/     
	Peanuts.js
	a sort of recurring Bitcoin payments/donations/tips library

	@author  MiceEatCheese.co
	@license Choose one: CC0, MIT
	@version 0.0.1
*/
(function() {
	function Peanuts(btcAddress, btcAmount, btcLabel, btcMessage, icsSummary, icsDescription, icsStart, icsFreq, icsCount) {
		this.btcAddress = btcAddress;
		this.btcAmount = btcAmount;
		this.btcLabel = btcLabel;
		this.btcMessage = btcMessage;
		this.icsSummary = icsSummary;
		this.icsDescription = icsDescription;
		this.icsStart = icsStart;
		this.icsFreq = icsFreq;
		this.icsCount = icsCount;
	}

	Peanuts.prototype.bitcoinURI = function() {
		var params = new Array();
		params.push(this.btcAmount ? "amount=" + this.btcAmount : undefined);
		params.push(this.btcLabel ? "label=" + encodeURIComponent(this.btcLabel) : undefined);
		params.push(this.btcMessage ? "message=" + encodeURIComponent(this.btcMessage) : undefined);

		return "bitcoin:" + this.btcAddress + (this.btcAmount || this.btcLabel || this.btcMessage ? "?" : "") + params.filter(function(n){ return n != undefined }).join("&");
	}

	Peanuts.prototype.rrule = function() {
		var rules = new Array();
		rules.push(this.icsFreq ? "FREQ=" + this.icsFreq : undefined);
		rules.push(this.icsCount ? "COUNT=" + this.icsCount : undefined);

		return rules.filter(function(n){ return n != undefined }).join(";");
	}

	Peanuts.prototype.ics = function() {
		return	"BEGIN:VCALENDAR\r\n" +
				"VERSION:2.0\r\n" +
				"PRODID:github.com/MiceEatCheese/Peanuts.js\r\n" +
				"BEGIN:VEVENT\r\n" +
				"SUMMARY:" + this.icsSummary + "\r\n" +
				"DESCRIPTION:" + this.icsDescription + "\r\n" +
				"URL:" + this.bitcoinURI() + "\r\n" +
				"DTSTART:" + this.icsStart + "\r\n" +
				"RRULE:" + this.rrule() + "\r\n" +
				"END:VEVENT\r\n" +
				"END:VCALENDAR";
	}

	window.Peanuts = Peanuts;
})();
