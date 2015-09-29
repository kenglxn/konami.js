# konami.js
register a function as an easter egg to be called when the konami code is entered.

konami code:

* up up down down left right left right b a enter
* &uarr; &uarr; &darr; &darr; &larr; &rarr; &larr; &rarr; b a &#9166;

# usage

Just add konami script in your page and register an easter egg function like so:

```
var myEasterEgg = function () {
  // something nifty
};

konami(myEasterEgg);
```

# get it

* Download [source version].
* Download [minified version].

[source version]:       https://raw.githubusercontent.com/kenglxn/konami.js/master/konami.js
[minified version]:     https://raw.githubusercontent.com/kenglxn/konami.js/master/konami.min.js