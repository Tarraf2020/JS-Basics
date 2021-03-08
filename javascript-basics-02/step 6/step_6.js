const img1 = document.querySelector("#image1");
const img2 = document.querySelector("#image2");
const img3 = document.querySelector("#image3");
const img4 = document.querySelector("#image4");
const img5 = document.querySelector("#image5");

img1.addEventListener("mouseover", ()=>{changeImg("img1")} );
img2.addEventListener("mouseover", ()=>{changeImg("img2")} );
img3.addEventListener("mouseover", ()=>{changeImg("img3")} );
img4.addEventListener("mouseover", ()=>{changeImg("img4")} );
img5.addEventListener("mouseover", ()=>{changeImg("img5")} );

img1.addEventListener("mouseout", ()=>{returnImg("img1")} );
img2.addEventListener("mouseout", ()=>{returnImg("img2")} );
img3.addEventListener("mouseout", ()=>{returnImg("img3")} );
img4.addEventListener("mouseout", ()=>{returnImg("img4")} );
img5.addEventListener("mouseout", ()=>{returnImg("img5")} );

const  changeImg = (id) => {
    if(id == "img1"){
        img1.src = "images/image1_2.jpg";
    }
    else if(id == "img2"){
        img2.src = "images/image2_2.jpg";
    }
    else if(id == "img3"){
        img3.src = "images/image3_2.jpg";
    }
    else if(id == "img4"){
        img4.src = "images/image4_2.jpg";
    }
    else if(id == "img5")
        img5.src = "images/image5_2.jpg";
};

const  returnImg = (id) => {
    if(id == "img1"){
        img1.src = "images/image1.jpg";
    }
    else if(id == "img2"){
        img2.src = "images/image2.jpg";
    }
    else if(id == "img3"){
        img3.src = "images/image3.jpg";
    }
    else if(id == "img4"){
        img4.src = "images/image4.jpg";
    }
    else if(id == "img5")
        img5.src = "images/image5.jpg";
};

