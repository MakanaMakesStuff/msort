/*
#####################################################################################
#####################################################################################
##                                                                                 ##
## Author: Makana O' Ke Akua Edwards                                               ##
##                                                                                 ##
## Date: 1/26/2019                                                                 ##
##                                                                                 ##
## Time: 10:07 pm EST                                                              ##
##                                                                                 ##
## Description: A plugin for creating the Mosaic layout for image galleries        ##
##                                                                                 ##
#####################################################################################
#####################################################################################
*/
function M(obj){
    this.originalObj = obj;
    if(this instanceof M){
        this.obj = document.querySelector(obj);
    }
    else{
        return new M(obj);        
    }
}
M.prototype.Mosaic = function(cols, padding){ 
    if(padding == "" || padding == null){
        padding = 0;
    }
// GET THE PARENT WIDTH, CHILDREN ELEMENTS, AND CALCULATE FOR ROWS SET FACTIONAL WIDTHS
    var kids = this.obj.querySelectorAll('img');
    var ref = this.obj.querySelectorAll('a');
    this.obj.style.margin = "0 auto";
    
    var rem = kids.length % cols;
    var rows = 0;
    if(rem > 0){
        rows = ((kids.length - rem) / cols) + 1;
    }
    else{
        rows = kids.length / cols;
    }
// GET THE KIDS AND STORE AUTOMATICALLY STORE THEM IN ROWS AND COLUMNS
    var list = [];
    function GetKids(){
        for(var x = 0; x < kids.length + 1; x++){
            if(x % cols == 0 && x > 0){
                myList = [];
                for(var i = cols; i > 0; i--){
                    myList.push(kids[x-i]);
                }
                list.push(myList);
            }
            if(x == kids.length && rem >= 1){
                    myList = [];
                    for(var i = 1; i < rem + 1; i++){
                        myList.push(kids[x-i]);
                    }
                    list.push(myList);
                }
            }
        }
    GetKids();
    
// GET THE RATIOS OF ELEMENTS IN ROWS AND SET DEFAULT HEIGHTS and WIDTHS
    function resizeItem(){
        var INITHEIGHT = 150;
        for(var i = 0; i < rows; i++){
            var num = list[i].length;
            for(var x = 0; x < num; x++){
                list[i][x].style.height = INITHEIGHT + "px";
                list[i][x].style.width = "auto";
            }
        }
    }
    resizeItem();
    rowWidths = [];
    function Ratio(){
        for(var i = 0; i < rows; i++){
            var num = list[i].length;
            var rowWidth = 0;
            for(var x = 0; x < num; x++){
                //alert(list[i][x].getAttribute('src'));
                rowWidth += list[i][x].getBoundingClientRect().width;
            }
            rowWidths.push(rowWidth);
        }
    }
    Ratio();
    
//RESIZE IMAGE WIDTHS TO FIT PARENT AND MAINTAIN UNIFORM

    var parWidth = this.obj.getBoundingClientRect().width;

    var par = this.obj;
    this.obj.style.fontSize = "0";
    function Fit(){
        for(var i = 0; i < rows; i++){
            var num = list[i].length;
            var diff = parWidth - rowWidths[i];
            for(var x = 0; x < num; x++){
                //var ratio = list[i][x].getBoundingClientRect().width + ((parWidth - rowWidths[i])/rowWidths[i]) * list[i][x].getBoundingClientRect().width;

                var perc = list[i][x].getBoundingClientRect().width / rowWidths[i] * 100;

               
                list[i][x].style.width = perc + "%";
                list[i][x].style.float = "auto";
                list[i][x].style.height = "auto";
                list[i][x].style.display = "inline-block";
                list[i][x].style.boxSizing = "border-box";
                list[i][x].style.fontSize = "1px";
                
            }
        }
    }
    Fit();
}
