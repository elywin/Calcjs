
let tapButton = document.getElementById("clickMe");

multi =()=>{
  let num11 = Number(document.getElementById("num1").value);
  let num22 =   Number(document.getElementById("num2").value);
  return  num11 * num22;
   //alert(result);
  // alert(num11 * num22);

};

tapButton.onclick = ()=>{
 let result=multi();  
 document.getElementById("answer").value="Answer=" +" "+ result;
};