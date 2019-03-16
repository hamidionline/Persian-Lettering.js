

## Persian-Lettering.js, a jQuery plugin for radical Persian and Arabic Web Typography

Persian-Lettering is a Javascript `span` injector for radical Web Typography for Persian and Arabic languages. It can be used for kerning, or other creative affects, when working whti Persian and Aranic typography. It is a fork from the original [Lettering.js](https://github.com/davatron5000/Lettering.js).

 The original Lettering.js does well with English typography, but Persian and Arabic typography needs to be treated a little bit differently, because some letters are connected to each other, forming letter groups that we can call them 'ligatures'.

### Individual Letter Control
We'll start with some really basic markup:

```html
<h1 class="fancy_title">عنوان</h1>
```
After including `jQuery 1.6.2+`, download and include the jquery.persian-lettering.js or it's minified minified version in your project. Then a script block with the magical `.lettering()` method:

```html
<script>
	  $(document).ready(function() {
	    $(".fancy_title").lettering();
	  });
</script>
```
The resulting code will churn your `.fancy_title` and output the following:

```html
<h1 class="fancy_title">
  <span class="char1">ع</span>
  <span class="char2">ن</span>
  <span class="char3">و</span>
  <span class="char4">ا</span>
  <span class="char5">ن</span>
</h1>
```

### Control Connected Persian and Arabic Letters
In Persian and Arabic Languages, we don't want our letters to be seperated. Some letters have to be connected to next letters and some shouldn't. So here is where the magic happens:
```html
<script>
	  $(document).ready(function() {
	    $(".fancy_title").lettering('pligatures');
	  });
</script>
```
By adding the `pligatures` method, the resulting html is:
```html
<h1 class="fancy_title">
  <span class="plig1">عنو</span>
  <span class="plig2">ا</span>
  <span class="plig3">ن</span>
</h1>
```
Interesting huh? Now the text is easy to manipulate in your CSS using an ordinal `.plig#` pattern. 

### Letters, ligatuers, words, lines, and more!

There you have it, but Persian-Lettering.js does even more! The same as It's origin, Persian-Lettering.js has the ability to split `words` and `lines` as well. If you want more information, read the Lettering.js Wiki:

[https://github.com/davatron5000/Lettering.js/wiki](https://github.com/davatron5000/Lettering.js/wiki)

#### Best Practices
We've found this to be a pretty quick and elegant solution to create typographical CSS3 posters. It's also a great solution for really custom type headings, while keeping the text selectable. Be smart and use sparingly. You'll probably break your browser if you try to wrap every letter on your page in a `span` tag, so don't do that.  Look to use this in your Headings, Blockquotes, Asides, etc.

#### Kern Well
If you're going through the trouble to load a fancy font and that word or phrase is the largest on the site, then it's important for it to be kerned well.  With Lettering.js, kerning is a breeze. You can simply use `$("#id-of-what-i-want-to-kern").lettering();` and then on each `.char#`, you can set relative position or left/right margin. Works like a charm.

### Accessibility

Persian-Lettering.js is accessible by default. It uses an `aria-label` on the parent element and `aria-hidden` on each of the children to prevent screen readers from pausing while reading each individual characters or words.

### Download, Fork, Commit, Please.
We really want Persian-Lettering.js to be a quality helper for Persian and Arabic web typography.  If you have any feedback or suggestions, please leave those over on the Github. 
