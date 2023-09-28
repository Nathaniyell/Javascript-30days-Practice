const inputs = document.querySelectorAll(".controls input");
//querySelectorAll essentially returns something that looks like an array, called a NodeList. The difference between a nodeList an an array is that the nodeList has limited number of methods while an array has all the methods attributed to an array

function handleUpdate() {
  console.log(this.value);
}
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate)); //whenever the mousemoves the range bars, there should be an update

/*
data-set is an object that contains all the data attributes on the selected element*/
