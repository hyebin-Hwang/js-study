
const tabmenu = (function(){
    const nav = document.getElementById("nav-js");
    const navList = nav.querySelectorAll("li")
    const main = document.getElementById("main-js");
    const mainList = main.querySelectorAll("li");
    
    const handleClick = ()=>{ 
        const filter = event.target.dataset.filter;
        mainList.forEach((e)=>{
            if(filter === "All"){
                e.style.display = "block";
            }
            else{
                if(e.classList.contains(filter)){
                    e.style.display = "block";
                }else{
                    e.style.display = "none";          
                }
            }
        })
    }    
    
    navList.forEach((e)=>{
        e.addEventListener("click",handleClick)
    })
}())