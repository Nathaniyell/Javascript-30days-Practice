const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => panel.addEventListener("click", () => {
    // console.log("hello")
    panel.classList.toggle("open");
  }));

  panels.forEach(panel=>{
    return panel.addEventListener("transitionend", (e)=>{
        if(e.propertyName.includes("flex")){ //if the propertyname of the transition that ends is flex, it should toggle the class of open-active
            panel.classList.toggle("open-active")

        }
    })
  })
