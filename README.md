## Peanuts.js

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
document.getElementById("anAlreadyCreatedPeanutsDownloadLink").setAttribute("href", "data:text/calendar;charset=utf8," + escape(peanuts));
```

### Peanuts constructor

```js
function Peanuts(btcAddress, btcAmount, btcLabel, btcMessage, icsSummary, icsDescription, icsStart, icsFreq, icsCount) { }
```

You may set `btcAmount`, `btcLabel`, `btcMessage`, `icsFreq`, and `icsCount` to `false` and not include them in the final document.

See [BIP21](https://github.com/bitcoin/bips/blob/master/bip-0021.mediawiki) and [iCalender Specification](https://tools.ietf.org/rfc/rfc5545.txt) for more options.

### Import a sample iCalendar document

[Download](peanuts.ics) a sample iCalendar document created using **Peanuts.js** and import it into your calendar application of choice.

By tipping us every month, you will support the further development of **Peanuts** and **Peanuts.js**.

Don’t have an access to an iCalendar application? [1N7t4ZbxrYb6HrRearNxTp7bxWdaT1J6e](bitcoin:1N7t4ZbxrYb6HrRearNxTp7bxWdaT1J6e).

### License

Dual CC0 and MIT.
