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

    update = function(state) {
        this.state = state;
        this.draw();
    }

    draw = function() {
        ctx.fillStyle = "#9BA2BF";
        ctx.fillRect(0, 0, 600, 400);

        this.updateInfo();
        this.updateInterface();
    }

    updateInfo = function() {
        var img = brainImg;
        var info = document.getElementById("info");

        switch(this.state) {
            case 0: 
                img = brainImg;
                info.innerHTML = "This is the brain."
                break;
            case 1:
                //img = oldBrainImg;
                info.innerHTML = "The old brain contains the evolutionarily oldest parts of the brain."
                break;
            case 1.1:
                //img = brainstemImg;
                info.innerHTML = "The <strong>brainstem</strong> is the oldest part of the brain and is responsible for automatic survival functions. It begins where the spinal cord swells as it enters the skull and contains the <em>pons, medulla, and reticular formation</em>.<br><br>The <em>pons</em> helps coordinate movement and control sleep, the <em>medulla</em> controls the heartbeat and breathing, and the <em>reticular formation</em> helps control arousal.";
                break;
            case 1.2:
                //img = thalamusImg;
                info.innerHTML = "The <strong>thalamus</strong> is the sensory control center of the brain, located at the top of the brainstem. It is a hub of sensory information that directs messages to the sensory recieving areas in the cerebral cortex and transmits replies to the cerebellum and medulla.";
                break;
            case 1.3:
                //img = cerebellumImg;
                info.innerHTML = "The <strong>cerebellum</strong> is the \"little brain\" at the rear of the brainstem that processes sensory information, coordinates movement output and balance, and enables nonverbal learning and memory.";
                break;
            case 2:
                img = cerebralCortexImg;
                info.innerHTML = "The <strong>cerebral cortex</strong> is the intricate fabric of interconnected neural cells that covers the cerebral hemispheres. It is the ultimate control and information-processing center of the body.";
                break;
            case 2.1:
                img = frontalLobeImg;
                info.innerHTML = "The <strong>frontal lobes</strong> are involved in speaking, muscle movements, and making plans and judgements. They are located just behind the forehead.";
                break;
            case 2.2:
                img = parietalLobeImg;
                info.innerHTML = "The <strong>parietal lobes</strong> recieve sensory input for touch and body position. They are located at the top of the head and toward the rear.";
                break;
            case 2.3:
                img = temporalLobeImg;
                info.innerHTML = "The <strong>temporal lobes</strong> include the auditory processing areas, each receiving information primarily from the opposite ear. They are located roughly above the ears.";
                break;
            case 2.4:
                img = occipitalLobeImg;
                info.innerHTML = "The <strong>occipital lobes</strong> include areas that recieve and process information from the visual fields. They are located at the back of the head."
                break;
            case 2.5:
                img = associationAreasImg;
                info.innerHTML = "<strong>Association areas</strong> are areas of the cerebral cortex that are involved in higher mental functions rather than primary motor or sensory functions. These higher mental functions include learning, remembering, thinking, and speaking.<br><br><em>Broca's area</em> in the frontal lobe of the dominant hemisphere is involved in speaking. <em>Wernicke's area</em> in the temporal lobe of the left cerebral hemisphere (in the majority of people) and is involved in understanding language.";
                break;
            case 3:
                //img = limbicSystemImg;
                info.innerHTML = "The <strong>limbic system</strong> is associated with emotions and drives. It is located below the cerebral hemispheres.";
                break;
            case 3.1:
                //img = amygdalaImg;
                info.innerHTML = "The <strong>amygdala</strong> are two lima-bean-sized neural clusters that are linked to aggression and fear.";
                break;
            case 3.2:
                //img = hypothalamusImg;
                info.innerHTML = "the <strong>hypothalamus</strong> is a neural structure that directs several maintenance activities including eating, drinking, and body temperature. It also helps govern the endocrine system by releasing hormones that trigger the </em>pituitary gland</em> and is linked to emotion and reward.";
                break;
            case 3.3:
                //img = pituitaryGlandImg;
                info.innerHTML = "The <strong>pituitary gland</strong> is the most influential gland of the endocrine system. Under the influence of the <em>hypothalamus</em> it regulates growth and controls other endocrine glands by directing them to secrete their hormones.";
                break;
            case 3.4:
                //img = hippocampusImg;
                info.innerHTML = "The <strong>hippocampus</strong> is a neural center that helps process conscious memories of facts and events for storage."
        }
        
        ctx.drawImage(img, this.imgX, this.imgY, this.imgW, this.imgH);
    }

    updateInterface = function() {
        var text = document.getElementById("text");
        var labels = document.getElementById("labels");

        switch(this.state) {
            case 0:
                text.innerHTML = "Select an area of the brain from the options above to begin learning about different areas of the brain.<br><br>Scroll down to learn about neuroimaging.";
                break;
            case 1: case 1.1: case 1.2: case 1.3:
                text.innerHTML = "Select a part of the <strong>old brain</strong> listed below to learn more about it.";
                labels.innerHTML = "<button type='button' onclick='interface.update(1.1)'>Brainstem</button><br><br><button type='button' onclick='interface.update(1.2)'>Thalamus</button><br><br><button type='button' onclick='interface.update(1.3)'>Cerebellum</button>";
                break;
            case 2: case 2.1: case 2.2: case 2.3: case 2.4: case 2.5:
                text.innerHTML = "Select a region of the <strong>cerebral cortex</strong> listed below to learn more about it.";
                labels.innerHTML = "<button type='button' onclick='interface.update(2.1)'>Frontal Lobes</button><br><br><button type='button' onclick='interface.update(2.2)'>Parietal Lobes</button><br><br><button type='button' onclick='interface.update(2.3)'>Temporal Lobes</button><br><br><button type='button' onclick='interface.update(2.4)'>Occipital Lobes</button><br><br><button type='button' onclick='interface.update(2.5)'>Association Areas</button>";
                break;
            case 3: case 3.1: case 3.2: case 3.3: case 3.4:
                text.innerHTML = "Select a part of the <strong>limbic system</strong> listed below to learn more about it.";
                labels.innerHTML = "<button type='button' onclick='interface.update(3.1)'>Amygdala</button><br><br><button type='button' onclick='interface.update(3.2)'>Hypothalamus</button><br><br><button type='button' onclick='interface.update(3.3)'>Pituitary Gland</button><br><br><button type='button' onclick=interface.update(3.4)'>Hippocampus</button>";
        }
    }
}

var interface = new Interface();
interface.draw();