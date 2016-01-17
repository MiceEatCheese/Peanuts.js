## Peanuts.js

![Peanuts.js logo](img/peanuts.png "Peanuts.js logo")

**Peanuts** is a sort of recurring Bitcoin payments/donations/tips system built on top of iCalendar and Bitcoin URI. **Peanuts.js** is its reference JavaScript implementation.

### Usage

**Peanuts.js** has no external dependencies.

```html
<script src="peanuts.min.js"></script>
```

After creating a Peanuts instance, use its own `ics()` method to create an iCalendar document out of it. Support for other formats might be added later.

```js
var peanuts = new Peanuts("1N7t4ZbxrYb6HrRearNxTp7bxWdaT1J6e", 0.001, "Tip to Peanuts.js", "Use it for good, not evil!", "Tip to Peanuts.js", "A monthly tip to MiceEatCheese for creating the Peanuts.js library.", "20160117T120000", "MONTHLY", false).ics();
```

Use data URI to download the document.

```js
document.getElementById("peanutsDownloadLink").setAttribute("href", "data:text/calendar;charset=utf8," + escape(peanuts));
```

An example of a piece of code that you may insert onto a webpage to start receiving recurring monthly tips might look like this:

```html
<a download="peanuts.ics" href="" id="peanutsDownloadLink">Download a recurring iCalendar file and import it into your calendar application of choice.</a>

<script src="https://cdn.rawgit.com/MiceEatCheese/Peanuts.js/master/peanuts.min.js"></script>

<script>
	// Replace the default values with your own address and other parameters that fit your needs
	var peanuts = new Peanuts("1N7t4ZbxrYb6HrRearNxTp7bxWdaT1J6e", 0.001, "Tip to Peanuts.js", "Use it for good, not evil!", "Tip to Peanuts.js", "A monthly tip to MiceEatCheese for creating the Peanuts.js library.", "20160117T120000", "MONTHLY", false).ics();

	document.getElementById("peanutsDownloadLink").setAttribute("href", "data:text/calendar;charset=utf8," + escape(peanuts));
</script>
```

### Peanuts constructor

```js
function Peanuts(btcAddress, btcAmount, btcLabel, btcMessage, icsSummary, icsDescription, icsStart, icsFreq, icsCount) { }
```

You may set `btcAmount`, `btcLabel`, `btcMessage`, `icsFreq`, and `icsCount` to `false` and not include them in the final document.

See [BIP21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) and [iCalender Specification](https://tools.ietf.org/rfc/rfc5545.txt) for more options.

### Import a sample iCalendar document

[Download](https://cdn.rawgit.com/MiceEatCheese/Peanuts.js/master/samples/peanuts.ics) a sample iCalendar document created using **Peanuts.js** and import it into your calendar application of choice.

By tipping us every month, you will support the further development of **Peanuts** and **Peanuts.js**.

Don’t have an access to an iCalendar application? [1N7t4ZbxrYb6HrRearNxTp7bxWdaT1J6e](bitcoin:1N7t4ZbxrYb6HrRearNxTp7bxWdaT1J6e).

### License

Dual CC0 and MIT.
