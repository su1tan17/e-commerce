import headerFunc from "./header.js";
import productsFunc from "./products.js"
import yeniFunc from"./yeni.js"
import searchFunc from "./search.js";
//? -----------------------

//! add product to localStorage 
(async function () {
  const photos = await fetch("../js/data.json");
  const data = await photos.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];
  productsFunc(data);
  yeniFunc(data);
  searchFunc(data);
})();
const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";


//! modal dialog start
const modalDialogDOM=document.querySelector(".modal-dialog");
const modalContentDOM=document.querySelector(".modal-dialog .modal-content");
const btnClose=document.querySelector(".modal-dialog .modal-close");
const iptal=document.getElementById("tekrarlama");
let flag =localStorage.getItem("flag") ? JSON.parse(localStorage.getItem("flag")) :1;

btnClose ? btnClose.addEventListener("click",function(){
  console.log(modalDialogDOM);
  modalDialogDOM.classList.remove("show");
}):"";

document?document.addEventListener("click",(e)=>{
if(!e.composedPath().includes(modalContentDOM)){
    modalDialogDOM.classList.remove("show");
  }
}):"";

iptal?iptal.addEventListener("click",()=>{
  flag=0;
  localStorage.setItem("flag",flag);
  modalDialogDOM.classList.remove("show");
}):"";

if(flag){
  setTimeout(()=>{
    modalDialogDOM.classList.add("show");
  },3000);
}
//! modal dialog start