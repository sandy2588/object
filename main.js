window.addEventListener("scroll",function(){
var navbar = document.querySelector(".navbar");
var scollvalue = window.scrollY;
if(scollvalue>300){
 navbar.setAttribute("class","navbar navbar-expand-lg navbar-dark bg-danger"); 
}else{
 navbar.setAttribute("class","navbar navbar-expand-lg navbar-dark bg-dark");  
}
})