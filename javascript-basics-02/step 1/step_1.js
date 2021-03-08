var image = document.querySelector("#image1");
image.addEventListener("mouseover", ()=>{
  change();
} )

const change = ()=> {
  image.src = "images/image1_2.jpg";
}