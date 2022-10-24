const pannels=document.querySelectorAll(".pannel"); //it select all class with that name


pannels.forEach(pannel=>{
    pannel.addEventListener("click" ,function(){
        removeActiveClasses()
        pannel.classList.add("active")
    })
})

function removeActiveClasses()
{
    pannels.forEach(pannel=>{
        pannel.classList.remove("active");

    })
}