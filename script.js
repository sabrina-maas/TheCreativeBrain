var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var brainImg = new Image();
brainImg.src = "images/brain.png";

//old brain
var oldBrainImg = new Image();
//oldBrainImg.src = images/
var brainstemImg = new Image();
//brainstemImg.src = 
var thalamusImg = new Image();
//thalamusImg.src = 
var cerebellumImg = new Image();
//cerebellumImg.src =

//cerebral cortex
var cerebralCortexImg = new Image();
cerebralCortexImg.src = "images/cerebralcortex.png";
var frontalLobeImg = new Image();
frontalLobeImg.src = "images/frontallobe.png";
var parietalLobeImg = new Image();
parietalLobeImg.src = "images/parietallobe.png";
var temporalLobeImg = new Image();
temporalLobeImg.src = "images/temporallobe.png";
var occipitalLobeImg = new Image();
occipitalLobeImg.src = "images/occipitallobe.png";
var associationAreasImg = new Image();
associationAreasImg.src = "images/associationareas.png";

//limbic system
var limbicSystemImg = new Image();
//limbicSystemImg.src = 
var amygdalaImg = new Image();
//amygdalaImg.src = 
var hypothalamusImg = new Image();
//hypothalamusImg.src = 
var pituitaryGlandImg = new Image();
//pituitaryGlandImg.src = 
var hippocampusImg = new Image();
//hippocampusImg.src =

class Interface {
    constructor() {
        this.state = 0;
        this.imgX = 0;
        this.imgY = 0;
        this.imgW = 600;
        this.imgH = 400;
    }
   
    draw = function() {
        ctx.fillStyle = "#CBDFBD";
        ctx.fillRect(0, 0, 600, 400);

        this.drawBrain();
        this.updateText();
        this.updateInfo();
        this.updateButtons();
    }

    drawBrain = function() {
        var currImg = brainImg;
        if (this.state == 0) {
           currImg = brainImg;
        } else if (this.state == 1) {
            //currImg = oldBrainImg;
        } else if (this.state == 2) {
            currImg = cerebralCortexImg;
        } else if (this.state == 2.1) {
            currImg = frontalLobeImg;
        } 
        else if (this.state == 3) {
            //currImg = limbicSystemImg;
        }
        ctx.drawImage(currImg, this.imgX, this.imgY, this.imgW, this.imgH);
    }

    updateText = function() {
        var text = document.getElementById("text");
        if (this.state == 0) {
            text.innerHTML = "select an area of the brain from the options above to begin"
        } else if (this.state == 1) {
            text.innerHTML = "select an area of the old brain below to learn more about it"
        } else if (this.state == 2) {
            //currImg = cerebralCortexImg;
            text.innerHTML = "select an area of the cerebral cortex below to learn more about it";
        } else if (this.state == 3.0) {
            //currImg = limbicSystemImg;
            text.innerHTML = "click on a label to learn more about that part of the limbic system";
        } 
    }

    updateInfo = function() {
        var info = document.getElementById("info");
        if(this.state == 1) {
            info.innerHTML = 
                "the old brain..."
        } else if(this.state == 1) {
            info.innerHTML = "";
        } else if(this.state == 1) {
            info.innerHTML = "";
        } else if(this.state == 1) {
            info.innerHTML = "";
        } else if(this.state == 2) {
            info.innerHTML = 
                "the cerebral cortex...";
        } else if(this.state == 2.1) {
            info.innerHTML = 
                "the frontal lobes...";
        } else if(this.state == 2.2) {

        } else if(this.state == 2.3) {

        } else if(this.state == 2.4) {

        } else if(this.state == 2.5) {

        }

    }

    updateButtons = function() {
        var labels = document.getElementById("labels");
        if (this.state == 0.0) {
        } else if (this.state == 1.0) {
            labels.innerHTML = 
            "<button type='button' onclick='interface.update(1.1)'>brainstem</button><br><br><button type='button' onclick='interface.update(1.2)'>thalamus</button><br><br><button type='button' onclick='interface.update(1.3)'>cerebellum</button>";
        } else if (this.state == 2.0) {
            labels.innerHTML = 
            "<button type='button' onclick='interface.update(2.1)'>frontal lobes</button><br><br><button type='button' onclick='interface.update(2.2)'>parietal lobes</button><br><br><button type='button' onclick='interface.update(2.3)'>temporal lobes</button><br><br><button type='button' onclick='interface.update(2.4)'>occipital lobes</button><br><br><button type='button' onclick='interface.update(2.5)'>association areas</button>";
        } else if (this.state == 3.0) {
            //currImg = limbicSystemImg;
        }
    }

    update = function(state) {
        this.state = state;
        alert("ksjdfks");
    }
}

var interface = new Interface();

setInterval(draw, 50);

function draw () {
    interface.draw();
}