// ------product-------//
// FILTER
function filterCategory(cat){
let sections=document.querySelectorAll(".category-section");
sections.forEach(sec=>{
sec.style.display=(cat==="all"||sec.classList.contains(cat))?"block":"none";
});
}

// CART
function addToCart(name,price){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
let item=cart.find(i=>i.name===name);
if(item){item.qty++;}else{cart.push({name,price,qty:1});}
localStorage.setItem("cart",JSON.stringify(cart));
updateCartCount();
showToast(name+" added");
}

// CART COUNT
function updateCartCount(){
let cart=JSON.parse(localStorage.getItem("cart"))||[];
let count=cart.reduce((sum,item)=>sum+item.qty,0);
document.getElementById("cartCount").innerText=count;
}

// SEARCH
document.getElementById("searchInput").addEventListener("keyup",function(){
let value=this.value.toLowerCase();
document.querySelectorAll(".product").forEach(p=>{
let name=p.querySelector("h3").innerText.toLowerCase();
p.style.display=name.includes(value)?"block":"none";
});
});

// HEART
function toggleHeart(el){
el.innerText=el.innerText==="♡"?"❤️":"♡";
}

// TOAST
function showToast(msg){
let t=document.getElementById("toast");
t.innerText=msg;
t.style.display="block";
setTimeout(()=>t.style.display="none",2000);
}

updateCartCount();