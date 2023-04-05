var nb=document.querySelectorAll(".drum").length;
for(var i=0;i<nb;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var bih = this.innerHTML;
        clicked(bih);
        buttonAnimie(bih);
    });
}
document.addEventListener("keypress",function(event){
    clicked(event.key);
    buttonAnimie(event.key);
});
function clicked(key)
{
   switch (key) {
        case 'w':
            var crash= new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'a':
            var crash1= new Audio('sounds/kick-bass.mp3');
            crash1.play();
            break;
        case 's':
            var crash2= new Audio('sounds/snare.mp3');
            crash2.play();
            break;
        case 'd':
            var crash3= new Audio('sounds/tom-1.mp3');
            crash3.play();
            break;
        case 'j':
            var crash4= new Audio('sounds/tom-2.mp3');
            crash4.play();
            break;
        case 'k':
            var crash5= new Audio('sounds/tom-3.mp3');
            crash5.play();
            break;
        case 'l':
            var crash6= new Audio('sounds/tom-4.mp3');
            crash6.play();
            break;
   
        default:
            console.log(bih);
            break;
   }
}
   
       function buttonAnimie(currentkey)
       {
         var actbtn=document.querySelector("."+currentkey);
         actbtn.classList.add("press");
         setTimeout(function(){
            actbtn.classList.remove("press");
         }, 100);
       }


