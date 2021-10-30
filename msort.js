/*
#####################################################################################
#####################################################################################
##                                                                                 ##
## Author: Makana O' Ke Akua Edwards                                               ##
##                                                                                 ##
## Date: 10/24/2021                                                              ##
##                                                                                 ##
## Time: 9:01 pm EST                                                              ##
##                                                                                 ##
## Description: A plugin for creating the Mosaic layout for image galleries        ##
##                                                                                 ##
#####################################################################################
#####################################################################################
*/
class Mosaic{
    constructor(obj, resizable){
        if(!resizable){ this.resizable = false }
        else{ this.resizable = resizable }
        if(obj != null){ this.obj = document.querySelector(obj) }
        if(this instanceof Mosaic){ /* ignore */ }
        else{ return new Mosaic(obj) }
    }
    Sort(col, pad, rounded) {
        if(!rounded){
            rounded = 0;
        }
        //col represents the amount of columns in the gallery
        //pad represents the amount of space between each image
        let nodes = this.obj.getElementsByTagName('img');
        let images = [...nodes];
        //return if col is greate than half the img items
        if(col > images.length/2 || col <= 0){ console.log('Error: col must not exceed half of images in gallery') }
        
        //Get the difference to check for odd number of images
        const diff = images.length % col;
        //set the counter which will represent each row of our gallery
        const cout = (images.length - diff) / col;
        this.obj.style.fontSize = "0";
        //if there is a differenc(Odd number of images) then scale the last image appropriately

        if(diff >= 0){
            /* Get the offsetWidth of the gallery which Holds 
            our images, these values will be used to scale our images initially 
            and dynamically on window resizing */

            let galleryWidth = this.obj.getBoundingClientRect().width; 
    

            //Set the height each image dynamically
            for(let image in images){
                //create a styles object to change our image styling
                var styles = {
                    boxSizing: 'border-box',
                    position: 'relative',
                    height: galleryWidth / col + "px",
                    width: "auto",
                    display: "inline-block",
                    float: 'auto',
                    margin: '0',
                    fontSize: '0px', 
                    padding: pad + "px",         
                };
                //Assign the styles object to our image style properties
                Object.assign(images[image].style, styles);
            }
            //this.obj.style.backgroundColor = "red";
            //Get row and reset total width
            for(let i = 0; i < cout; i++){
                var row = images.slice(i * col, (i+1) * col);
                let totalWidth = 0;
                for(let r in row){ totalWidth += row[r].getBoundingClientRect().width}
                for(let r in row){ 
                    let hdiff = (row[r].getBoundingClientRect().height/row[r].getBoundingClientRect().width);

                    let perc = (row[r].getBoundingClientRect().width/totalWidth);
                    var styles = {
                        width: perc * 100 + "%",
                        height: "auto",
                        borderRadius:  rounded + 'px',
                    }
                    Object.assign(row[r].style, styles);
                }
            }
            if(diff > 0){
                images[images.length-1].style.width = "100%";
                images[images.length-1].style.height = "auto";
            }
        }
    }
}