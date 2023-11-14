var inputEle = document.getElementById('input');
var buttonEle=document.getElementById('btn');
var msgEle = document.getElementById('msg');


buttonEle.onclick = function(){
     var inputValue=inputEle.value;
     if(inputValue !=''){
        msgEle.innerHTML=inputValue;

     inputEle.value='';
     }
};


  
   