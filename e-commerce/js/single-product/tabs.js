function tabsFunc(){
    const btnTab=document.querySelectorAll(".tab-button");
    const contentDOM=document.querySelectorAll(".content");
    const tabsListDOM=document.querySelector(".tab-list");

    tabsListDOM.addEventListener("click",function(e){
        e.preventDefault();
        const id = e.target.dataset.id;
        if(id){
            btnTab.forEach(item=> item.classList.remove("active"));
            e.target.classList.add("active");
            contentDOM.forEach(conten=>conten.classList.remove("active"));
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    });
}
export default tabsFunc();