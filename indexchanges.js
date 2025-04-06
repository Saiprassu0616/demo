let btn1=document.querySelector("#btn1")
let currMode="light"
const handler1=()=>{
    if(currMode=="light")
    {
        currMode="Dark"
        document.querySelector("body").classList.add("dark")
        
    }
    else{
        currMode="light"
        document.querySelector("body").classList.add("light")
        
    }
    console.log(currMode)
}
btn1.addEventListener("click",handler1)

let btn=document.querySelector("#btn2")

btn.onmouseover = (evt) => {
    console.log("the button was clicked");
    console.log(evt)
};