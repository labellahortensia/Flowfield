let nb = 150;
let dMin = 50;
let noiseScale = 0.005;
let p = Array(nb);


function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  background(0);
  for (let i=0; i<nb; i=i+1){
  p[i] = new Particle(random(0,width),random(0,height)); //creates an object + original position
  }
}

function draw() {
  //noStroke();
  //fill("#edafb8");
  stroke(255, map(frameCount,1,400,255,0));//fade out effect
  for (let i=0; i<nb; i=i+1)
    {
      p[i].draw();
    }
  
}

class Particle //serves a model to create objects
    {
      constructor (x,y) //blueprint to create objects
      {
        this.x = x;
        this.y = y;
        this.vx = random (-2,2); //velocity in x direction
        this.vy = random (-2,2); //velocity in y direction
        
      }
      
      draw()
      {
        let n = noise(noiseScale*this.x,noiseScale*this.y); 
        this.vx = cos(n*360);//velocity in x direction
        this.vy = sin(n*360);//velocity in y direction

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if (this.x<0 || this.x>width || this.y < 0 || this.y>height){
          this.x = random(0,width);
          this.y = random(0,height);
        } 

        //circle(this.x,this.y,5);
        PointerEvent(this.x,this.y);
      }
    }