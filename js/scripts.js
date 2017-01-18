var recursive = function(number)
{
  if (number === 0){
    return 1;
  }else{
    if(number >1){
    var result = number*recursive(number-1);
  }else{
    return result;
  }
}
}

$(document).ready(function(){
 $("form.factorial").submit(function(event){
   event.preventDefault();
   var factorial= parseInt($("input").val());
  //  var multiply = 1;
   var multiply = recursive(factorial);
 //   if (factorial){
 //   for (var currentNum =1; currentNum <= factorial; currentNum += 1){
 //     multiply = multiply*currentNum;
 //   }
 // }else{
 //   alert("please enter a positive integer!");
 // }
   $("#result").text(multiply.toString());
 });
});
