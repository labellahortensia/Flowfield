let nb = 150;
let dMin = 50;
let p = Array(nb);


function setup() {
  createCanvas(500, 500);
  for (let i=0; i<nb; i=i+1){
  p[i] = new Particle(random(0,width),random(0,height)); //creates an object + original position
  }
}

function draw() {
  background(0);
  noStroke();
  fill("#edafb8");
  for (let i=0; i<nb; i=i+1)
    {
      p[i].draw();
    }

    stroke(255);
    for (let i=0; i<nb; i=i+1){
      let pi = p[i];
      for (let j=i+1; j<nb; j=j+1){
          let pj = p[j];
          let d = dist(pi.x,pi.y,pj.x,pj.y);
          if (d<dMin){
            line(pi.x,pi.y,pj.x,pj.y);
          }
        }
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
        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        if (this.x<0 || this.x>width || this.y < 0 || this.y>height){
          this.x = random(0,width);
          this.y = random(0,height);
        } 

        circle(this.x,this.y,5);
      }
    }