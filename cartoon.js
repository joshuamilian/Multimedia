var canvas = document.getElementById('canvas');

if(canvas.getContext){
var ctx = canvas.getContext('2d');
  
  //Sun
  ctx.beginPath();
  ctx.arc(980,20,40,Math.PI * 2,false);
  ctx.fillStyle = 'Yellow';
  ctx.fill();
  ctx.stroke();
  
  // Tree Trunk
  ctx.beginPath();
  ctx.fillStyle = 'brown';
  ctx.fillRect(50,200,20,90);
  
  //Tree Bush
  ctx.beginPath();
  ctx.arc(58,190,30,Math.PI * 2,false);
  ctx.fillStyle = 'Green';
  ctx.fill();
  ctx.stroke();
  
  //House Shape
  ctx.beginPath();
  ctx.moveTo(130,150);
  ctx.lineTo(160,200);
  ctx.lineTo(160,290);
  ctx.lineTo(100,290);
  ctx.lineTo(100,200);
  ctx.fillStyle = 'yellow';
  ctx.fill();
  
  //Roof Top
  ctx.beginPath();
  ctx.moveTo(100,200);
  ctx.lineTo(160,200);
  ctx.lineTo(130,150);
  ctx.fillStyle = 'brown';
  ctx.fill();
  
  //Windows
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.fillRect(105,208,15,25);
  ctx.strokeRect(105,208,15,25);
  ctx.fillStyle = 'white';
  ctx.fillRect(140,208,15,25);
  ctx.strokeRect(140,208,15,25);
  
  //Lines of the Windows
  ctx.beginPath();
  ctx.moveTo(105,220);
  ctx.lineTo(120,220);
  ctx.moveTo(112.5,233);
  ctx.lineTo(112.5,208);
  ctx.moveTo(140,220);
  ctx.lineTo(155,220);
  ctx.moveTo(147.5,233);
  ctx.lineTo(147.5,208);
  ctx.stroke();
  
  //Door
  ctx.beginPath();
  ctx.fillStyle = 'red';
  ctx.fillRect(120,260,20,30);
  ctx.fill();
  
  //Doorknob
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.arc(135,282,2,Math.PI * 2,false);
  ctx.stroke();
  ctx.fill();
  
  //Moon
  ctx.beginPath();
  ctx.fillStyle = 'grey';
  ctx.arc(50,50,40,5,Math.PI / 1.5 ,true);
  ctx.fill();
  
  //Grass
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  ctx.strokeRect(0,290,1000,210);
  ctx.fillStyle = 'Green';
  ctx.fillRect(0,290,1000,210);
  ctx.stroke();
  ctx.fill();
  
  ctx.font = '20px Arial';
  ctx.fillStyle = 'black';
  ctx.fillText('Cartoon Homework by Joshua Milian',363,20);

}
