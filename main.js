let img = document.querySelector(".img-compu")
img.addEventListener("click",function(){
    let src = img.getAttribute(`src`);
    if (src === `imagenes/109836218.jpg`){
        img.setAttribute("src","imagenes/otra_foto.jpeg")
    }else {
        img.setAttribute("src","imagenes/109836218.jpg")
    }
})
let img2 = document.querySelector(".img1")
img2.addEventListener("click",function(){
    let src2 = img2.getAttribute(`src`);
    if (src2 == `imagenes/109836218.jpg`){
        img2.setAttribute("src","imagenes/otra_foto.jpeg")
    }else {
        img2.setAttribute("src","imagenes/109836218.jpg")
    }
})