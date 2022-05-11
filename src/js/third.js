

const b1=document.querySelector('#active  label:nth-child(1)');
const b2=document.querySelector('#active  label:nth-child(2)');
const b3=document.querySelector('#active  label:nth-child(3)');



let offset =390;
console.log(localStorage.getItem('pos'));

if(localStorage.getItem('pos')!=null){
offset=parseInt(localStorage.getItem('pos'));
    
    b2.style.background='#94cae6';
    if(offset==390)
     b2.style.background='#0199e6';
    else if(offset==780)
    b3.style.background='#0199e6';
    else
    b1.style.background='#0199e6';
    
}
else{
    b2.style.background='#0199e6'; 
}







const sliderLine=document.querySelector('.screenshots_imagies');

  sliderLine.style.left=-offset+'px';
document.querySelector('#bullet_1').addEventListener('click',function(){
   offset=0;
    b1.style.background='#0199e6';
    b2.style.background='#94cae6';
    b3.style.background='#94cae6';
     localStorage.setItem('pos',offset.toString());
    
    sliderLine.style.left=-offset+'px';
});

document.querySelector('#bullet_2').addEventListener('click',function(){
   offset=390;
    
    b1.style.background='#94cae6';
    b2.style.background='#0199e6';
    b3.style.background='#94cae6';
    
    localStorage.setItem('pos',offset.toString());
    console.log(localStorage.getItem('pos'));
    sliderLine.style.left=-offset+'px';
});
document.querySelector('#bullet_3').addEventListener('click',function(){
   offset=780;
    
    b1.style.background='#94cae6';
    b2.style.background='#94cae6';
    b3.style.background='#0199e6';
    
     localStorage.setItem('pos',offset.toString());
    sliderLine.style.left=-offset+'px';
});




document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowLeft') {
      if(offset>0){
   offset-=390;
    if(offset==390){
     b2.style.background='#0199e6';
     b1.style.background='#94cae6';
     b3.style.background='#94cae6';
    }
   
    else{
    b1.style.background='#0199e6';
          
          
   
    b2.style.background='#94cae6';
    b3.style.background='#94cae6';}
     localStorage.setItem('pos',offset.toString());
    
    sliderLine.style.left=-offset+'px'; }
  }
    if (event.code == 'ArrowRight') {
      if(offset<780){
   offset+=390;
    if(offset==390){
     b2.style.background='#0199e6';
     b1.style.background='#94cae6';
     b3.style.background='#94cae6';
    }
   
    else{
    b1.style.background='#94cae6';
          
          
   
    b2.style.background='#94cae6';
    b3.style.background='#0199e6';}
     localStorage.setItem('pos',offset.toString());
    
    sliderLine.style.left=-offset+'px'; }
  }
});