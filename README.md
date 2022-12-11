# Motion-css
The library of CSS3 animation

![GitHub file size in bytes](https://img.shields.io/github/size/pavlyukpetr/motion-css/motion.min.css?color=success&label=css%20file%20size)
[![GitHub issues](https://img.shields.io/github/issues/pavlyukpetr/motion-css)](https://github.com/pavlyukpetr/motion-css/issues)
[![GitHub forks](https://img.shields.io/github/forks/pavlyukpetr/motion-css)](https://github.com/pavlyukpetr/motion-css/network)
[![GitHub stars](https://img.shields.io/github/stars/pavlyukpetr/motion-css)](https://github.com/pavlyukpetr/motion-css/stargazers)
[![GitHub license](https://img.shields.io/github/license/pavlyukpetr/motion-css)](https://github.com/pavlyukpetr/motion-css/blob/master/LICENSE)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/pavlyukpetr/motion-css?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=https%3A%2F%2Fgithub.com%2Fpavlyukpetr%2Fmotion-css)

<b>Motion CSS</b> is a library of animation for your web projects. It works very simply.
All you need to do is connect the css file and use a specific class to an element that should be animated.</p>
<p>The complete list of classes, see <a href="http://pavliukpetro.github.io/motion-css/">here</a> and here is some <a href="http://pavliukpetro.github.io/motion-css/example.html">example</a>.
	
## Install with NPM

<pre><code>npm install npm i motion-css-animation</code></pre>
<p>After that you can import it into your style file with:</p>
<div class="highlight highlight-source-css"><pre><span class="pl-k">@import</span> <span class="pl-s"><span class="pl-pds">'</span>node_modules/motion-css-animation/main<span class="pl-pds">'</span></span>;</pre></div>

## USE

<p>Connect stylesheet in &lt;head&gt; tag on your site:</p>

<pre><code>&lt;link rel="stylesheet" href=<span style="color:#E93838">"motion.min.css"</span>&gt;</code></pre>

<p>Add class "animation" to an element that should be animated. Now select the kind of animation for your item and add the appropriate class. 
The name of the animation is the class that you have to add.
For example, I want to add animation appearance to the left. It is called "fade-in-left". Here's how it will look my element:
</p>
<div class="highlight highlight-html"><pre><code>&lt;div <span style="color:#FFCE53;">class</span>=<span style="color:#E93838">"animation fade-in-left"</span>&gt;...</code></pre></div>

<p>As you may have guessed, I added a class="animation fade-in-left".</p>

## ADDITIONAL FEATURES

<p>If you want to delay the animation, use one of the classes:</p>

<p>"delay-05s" - 0.5 sec delay,<br> 
"delay-1s" - 1 sec delay,<br> 
"delay-1-5s" - 1.5 second delay,<br> 
"delay-2s" - 2 seconds delay,<br> 
"delay-3s" - 3 seconds delay</p>

<p>or add your own</p>

<pre><code>
<span style="color:#E93838">.delay-Xs</span>
{
    <span style="color:#D9843E">-webkit-animation-delay: Xs! important;<br>
    animation-delay: Xs! important;</span>
}</code></pre>

<p>For endlessly repeating of animation use class "replay".</p>

<p>You can also combine this library with the jQuery, to fully control the animation on the site. For example, you can add the animation class to the element, 
when it appears in the visible area of the screen.</p>

<p>To do this, place the following code before the tag &lt;/body&gt;:</p>

<pre><code>
&lt;script&gt;
	$ (window) .scroll (function () {
	$ (<span style="color:#48BD82">'#elementId'</span>). each (function () {
	var elPosition = $ (this) .offset (). top; 	// Position of the element
	var elHeight = $ (this) .height (); 		// Height of the element
	var windowTop = $ (window) .scrollTop (); 	// Top of the window
	var windowHeight = $ (window) .height (); 	// Height of the window
	if (elPosition < windowTop + windowHeight - elHeight) {
		$ (This) .addClass (<span style="color:#E93838">"animation fade-in"</span>);
	} 						                   // adds the class wheh the element is fully in the visible area of the window
	if (elPosition > windowTop + windowHeight) {
		$ (This) .removeClass (<span style="color:#E93838">"animation fade-in"</span>);
	} 						                   // removes the class when the element is not visible in the window
	if (elPosition + elHeight < windowTop) {
		$ (This) .removeClass (<span style="color:#E93838">"animation fade-in"</span>);
	} 						                   // removes the class when the element is not visible in the window
	});
	});
&lt;/script&gt;</code></pre>

<p>Instead #elementId enter the ID or class of your element. Also replace the class "fade-in" to your animation class.</p>

<p>Remember that for all kinds of entrance animation you need to add to your item id="animation" or css rule "visibility: hidden;". 
In turn, the class "animation" then makes your item is visible. 
Adding class "animation" necessarily to any animation, because it contains "animation-fill-mode: both", 
which prohibit return your item to its original position after the end of the animation.</p>

