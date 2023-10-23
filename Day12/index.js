const pressed = [];
const secretcode = "nath";

window.addEventListener("keyup", (e) => {
  // console.log(e.key);
  pressed.push(e.key);
  
  pressed.splice( -secretcode.length - 1, pressed.length - secretcode.length); //delete the other contents of the array starting from the last 
if(pressed.join("").includes(secretcode)){ //convert array to string and check if it matches
    console.log("Found matching wordsd");
    cornify_add()
}
});
