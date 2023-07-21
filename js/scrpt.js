let bar=document.querySelector("#bar");
let cancel=document.querySelector("#cancel");
let header=document.querySelector("#header");

bar.onclick=function(){
    header.classList.toggle("s")
    cancel.classList.toggle("suu ")
    bar.classList.toggle("su")
}
let typingText=new Typed(".type",{
    strings:["kareem","full stack","developer"],
    loop:true,
    typeSpeed:100,  
    backSpeed:50, 
    backDelay:1000, 
})


ScrollReveal({ 
    reset: true ,
    distance:"80px",
    duration:2000,
    delay:200
    });
    ScrollReveal().reveal(' .outside , .s   ',  { origin: 'top' });
    ScrollReveal().reveal(' .outside , .inside, .a , .f ,.con ,.l , form ',  { origin: 'right' });
    ScrollReveal().reveal('  .n ',  { origin: 'bottom' });
    ScrollReveal().reveal(' h2 , .about-img , .mass , .map ',  { origin: 'left' });
    
    