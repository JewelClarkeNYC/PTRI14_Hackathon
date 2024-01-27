document.addEventListener('DOMContentLoaded', () => {
    const choice = document.createElement("div");
    // const medVideo = document.createElement("div");
    document.body.appendChild(choice);
    // choice.innerText = "choose one";
    // choice.textContent = "testing"
});  
// Create a function PopUp() that makes a popup window pop up on the user's browser every 45 min if extension is active
    // check if 45 min have passed using setInterval, if yes, then PopUp
    //PopUp() will show activitySelector prompt 
// Create a prompt activitySelector giving user choice of stretch, hydration, extended break, or meditation 
const activitySelector = prompt(`"Hey hard worker! What time is it?" 

Type: stretch, drink, pause, or meditation`,[]);
    // if stretch selected, invokes stretchSelector()
    if(activitySelector === stretch){
        stretchSelector();
    } else if(activitySelector === drink){
    // if hydration selected, 

    } else if(activitySelector === pause){
    // if extended break selected, puts extension timer on pause

    } else if (activitySelector === meditation){
    // if meditation selecting, starts meditation video

    }
// Create a function stretchSelector()
    //when invoked, posts random stretching image from array(?) for 5 min
// Create a function timeToEat() that runs every day at 9am, 12pm, 3pm, 6pm
    //at 9am flashes breakfast.png
    //at 12pm flashes lunch.png
    //at 3pm flashes snacktime.png
    //at 6pm flashes dinner.png   
// Create a function  
// upon invocation, 