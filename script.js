import VanillaTilt from "./vanilla-tilt.js";

const card = document.querySelector(".card");
console.log(card)

VanillaTilt.init(card,{
    max:25,
    speed:400,
    glare:true,
    "max-glare":1,
})