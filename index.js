

// function getcall() {
    

//     let button=document.getElementsByClassName("btn");
//     button.addEventListener("click",{
        

//     })
// }

// getcall()





async function images1(){
    
    let image=await fetch("https://api.thecatapi.com/v1/images/search").then((val) => val.json()).then((res) => res);
    console.log(image);
    console.log("hi");
    document.getElementById("image").src=image[0].url;
    //imagedisplay(image)
};

// async function imagedisplay(img){
//     console.log("hello naen",img[0].url);
//     document.getElementById("image").src=img[0].url;
// }

