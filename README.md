# msort 🖼 
Please note that when implementing this plugin, your images should preferably share a parent

```
<div class="parent">
    <img src="example.png">
    <img src="example.png">
    <img src="example.png">
<div>
```
Notice the images are not wrapped

If you wish to wrap you images however, you must do so in respect to the grandparent element if wrapped.
This means to style wraps with absolute positions and images as fixed 

See solution below for details regarding styling relative to grandparent elements
https://stackoverflow.com/q/25768069

<b>How to Use</b>

Assuming we are using the example above, we will first create an instance of our Mosaic class and pass our parent element's class as an argument

```let gallery = new Mosaic('.parent'); ```

Then we specify the amount of columns we want and also the amount of padding between images in pixels(defaults to 0 if null)

```gallery.Start(2, 5);```

Make sure the columns do not exceed more than half of the total number of images in your gallery

<b>Class Name</b>

Alternatively you can specify a class name on the parent element

```
<div class="parent type-50">
    <img src="example.png">
    <img src="example.png">
    <img src="example.png">
<div>
```

Above we added a class "type-50" in which the numerical value represents milliseconds. We can specify any speed by simply adding a number(milliseconds) after "type-"
This method will execute when the document has loaded. Only downside to using classes instead of JavaScript is not being able to easily bind to events.
