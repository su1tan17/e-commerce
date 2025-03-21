import{ singleProduct } from "./glide.js"
import { thumbsActiveFunc } from "./single-product/thumbsActive.js";
import  zoomFunc  from "./single-product/zoom.js";
import colors from "./single-product/colors.js";
import size from "./single-product/values.js"
import tabsFunc from"./single-product/tabs.js";
import commentFunc from"./single-product/comment.js";

const productId=localStorage.getItem("productId")
?JSON.parse(localStorage.getItem("productId"))
:localStorage.setItem("productId",JSON.stringify(1));

const products=localStorage.getItem("products")
?JSON.parse(localStorage.getItem("products"))
:localStorage.setItem("products",JSON.stringify([]));

const findProduct =products.find((item)=>item.id===Number(productId));

/*title*/
const productTitle= document.querySelector(".product-title");

productTitle ? (productTitle.innerHTML=findProduct.name):"";


/*price*/
const newPriceDOM= document.querySelector(".new-price");
const oldPriceDOM= document.querySelector(".old-price");

newPriceDOM ?(newPriceDOM.innerHTML=`${findProduct.price.newPrice.toFixed(2)} TL`):"";
oldPriceDOM ?(oldPriceDOM.innerHTML=`${findProduct.price.oldPrice.toFixed(2)} TL`):"";

//images

const singlIimageDOM=document.querySelector("#single-image") 
singlIimageDOM?(singlIimageDOM.src=findProduct.img.singleImage):"";


const galleryThumbs=document.querySelector(".gallery-thumbs")
let result=""
findProduct.img.thumbs.forEach(item => {
    result+=`
    <li class="glide__slide">
      <img src=${item} alt="" class="img-fluid">
    </li>
    `;
});
galleryThumbs ? (galleryThumbs.innerHTML=result):"";
singleProduct();
thumbsActiveFunc();

const productThumbs=document.querySelectorAll(".product-thumb .glide__slide img");
productThumbs[0].classList.add("active");

//sepete ekle
let cart =localStorage.getItem("cart")? JSON.parse(localStorage.getItem("cart")):[];
const findCart=cart.find(item=> item.id===findProduct.id);
const btnAddToCart =document.getElementById("add-to-cart");
const quantityDOM=document.getElementById("quantity");
let cartItems = document.querySelector(".header-cart-count");

if(findCart){
  btnAddToCart.setAttribute("disabled","disabled");
}
else{
  btnAddToCart.addEventListener("click",function(){
    cart.push({...findProduct,quantity:Number(quantityDOM.value)});
    localStorage.setItem("cart",JSON.stringify(cart));
    btnAddToCart.setAttribute("disabled","disabled");
    cartItems.innerHTML=cart.length;
  });
}