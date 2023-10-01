const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => panel.addEventListener("click", function(){
    // console.log("hello")
    this.classList.toggle("open");
  }));

  panels.forEach(panel=>{
    return panel.addEventListener("transitionend", function(e){
        if(e.propertyName.includes("flex")){ //if the propertyname of the transition that ends is flex, it should toggle the class of open-active
             this.classList.toggle("open-active")

        }
    })
  })

//   a little footnote, the `this` keyword doesn't work with arrow functions