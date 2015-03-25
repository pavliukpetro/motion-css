# Awesome-CSS3-animation
The library of CSS3 animation

Awesome CSS3 animation is a library of animation for your web projects. It works very simply.
All you need to do is connect the css file and use a specific class to an element that should be animated.

USE

Connect stylesheet in <head> tag on your site:

<link rel = "stylesheet" href = "awesome.min.css">

Add class "animation" to an element that should be animated. Now select the kind of animation for your item and add the appropriate class. 
The name of the animation is the class that you have to add.
For example, I want to add animation appearance to the left. It is called "fade-in-left". Here's how it will look my element:

<div class="animation fade-in-left">

As you may have guessed, I added a class="animation fade-in-left".

ADDITIONAL FEATURES

If you want to delay the animation, use one of the classes:

"delay-05s" - 0.5 sec delay, 
"delay-1s" - 1 sec delay, 
"delay-1-5s" - 1.5 second delay, 
"delay-2s" - 2 seconds delay, 
"delay-3s" - 3 seconds delay

or add your own

.delay-Xs
{
    -webkit-animation-delay: Xs! important;
    animation-delay: Xs! important;
}

For endlessly repeating of animation use class "replay".

You can also combine this library with the jQuery, to fully control the animation on the site. For example, you can add the animation class to the element, 
when it appears in the visible area of the screen.

To do this, place the following code before the tag </ body>:

<script>
	$ (window) .scroll (function () {
	$ ('# elementId'). each (function () {
	var elPosition = $ (this) .offset (). top; 	// Position of the element
	var elHeight = $ (this) .height (); 		// Height of the element
	var windowTop = $ (window) .scrollTop (); 	// Top of the window
	var windowHeight = $ (window) .height (); 	// Height of the window
	if (elPosition <windowTop + windowHeight - elHeight) {
		$ (This) .addClass ("animation fade-in");
	} 						// adds the class wheh the element is fully in the visible area of the window
	if (elPosition> windowTop + windowHeight) {
		$ (This) .removeClass ("animation fade-in");
	} 						// removes the class when the element is not visible in the window
	if (elPosition + elHeight <windowTop) {
		$ (This) .removeClass ("animation fade-in");
	} 						// removes the class when the element is not visible in the window
	});
	});
</script>

Instead #elementId enter the ID or class of your element. Also replace the class "fade-in" to your animation class.

Remember that for all kinds of entrance animation you need to add to your item id="animation" or css rule "visibility: hidden;". 
In turn, the class "animation" then makes your item is visible. 
Adding class "animation" necessarily to any animation, because it contains "animation-fill-mode: both", 
which prohibit return your item to its original position after the end of the animation.

