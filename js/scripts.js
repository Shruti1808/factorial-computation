$(document).ready(function(){
 $("form.factorial").submit(function(event){
   event.preventDefault();
   var factorial=parseInt($("input").val());
   var multiply = 1;
   if (factorial){
   for (var currentNum =1; currentNum <= factorial; currentNum += 1){
     multiply = multiply*currentNum;
   }
 }else{
   alert("please enter a positive integer!");
 }
   $("#result").text(multiply.toString());
 });
});
