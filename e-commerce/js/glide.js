const productsContainer = document.getElementById("product-list");
const yeniContainer = document.getElementById("yeni-list");


export function product1(){
    const config = {
        perView: 4,
        gap: 20,
        /*autoplay: 3000,*/
        bound:true,
        breakpoints: {
            992:{
                perview: 3,
            },
            768:{
                perview: 2,
            },
            576:{
                perview: 1,
            },
        },
    };
    (productsContainer) && new Glide(".product-carousel", config).mount();
}
export function product2(){
    const config2 = {
        perView: 4,
        gap: 20,
        /*autoplay: 3000,*/
        bound:true,
        breakpoints: {
            992:{
                perview: 3,
            },
            768:{
                perview: 2,
            },
            576:{
                perview: 1,
            },
        },
    };
    (yeniContainer) && new Glide(".product-carousel2", config2).mount();
}

export function singleProduct(){
    const config3 = {
        perView:3,
        bound:true,
        breakpoints: {
            992:{
                perview: 3,
            },
        },
    };
    new Glide(".product-thumb",config3).mount();
    
}