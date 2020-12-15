var car, wall;
var car2, car3;
var speed, weight;
var speed2, weight2;
var speed3, weight3;

function setup() {
  createCanvas(1600,400);

  speed =random(55, 90)
  weight = random(400, 1500)

  speed2 =random(55, 90)
  weight2 = random(400, 1500)

  speed3 =random(55, 90)
  weight3 = random(400, 1500)

  car = createSprite(50, 80, 60, 30);
  car2 = createSprite(50,200, 60, 30);
  car3 = createSprite(50, 320, 60, 30);

  wall = createSprite(1500, 200, 60, 400);
  wall.ShapeColor = 80, 80, 80;

  car.velocityX = speed;
  car2.velocityX = speed2;
  car3.velocityX = speed3;
}
function draw() {
  background(0);  


  if(wall.x-car.x<(wall.width+car.width)/2){
car.velocityX=0;
   var Deformation = 0.5*weight*speed*speed/22500

if(Deformation<100){
  car.shapeColor= color(0,225,0);
}
else
if(100<Deformation && Deformation<180){
  car.shapeColor= color(230, 230, 0);
}
else
if(Deformation>180){
  car.shapeColor = color(255, 0, 0);
}
  }



  if(wall.x-car2.x<(wall.width+car2.width)/2){
    car2.velocityX=0;
       var Deformation = 0.5*weight2*speed2*speed2/22500
    
    if(Deformation<100){
      car2.shapeColor= color(0,225,0);
    }
    else
    if(100<Deformation && Deformation<180){
      car2.shapeColor= color(230, 230, 0);
    }
    else
    if(Deformation>180){
      car2.shapeColor = color(255, 0, 0);
    }
      }




      if(wall.x-car3.x<(wall.width+car3.width)/2){
        car3.velocityX=0;
           var Deformation = 0.5*weight3*speed3*speed3/22500
        
        if(Deformation<100){
          car3.shapeColor= color(0,225,0);
        }
        else
        if(100<Deformation && Deformation<180){
          car3.shapeColor= color(230, 230, 0);
        }
        else
        if(Deformation>180){
          car3.shapeColor = color(255, 0, 0);
        }
          }
  drawSprites();
}