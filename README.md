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
This means to style wraps with as absolute and images as fixed 

See solution below for details regarding styling relative to grandparent elements
https://stackoverflow.com/q/25768069
