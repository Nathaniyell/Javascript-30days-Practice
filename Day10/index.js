const checkboxes = document.querySelectorAll("input[type='checkbox']")
let lastChecked;
checkboxes.forEach(checkbox=>{
    checkbox.addEventListener('click',(e)=>{
        //check if the input element clicked had the shiftkey down
        if(e.shiftKey && this.checked){

        }
console.log(e)
    })
})