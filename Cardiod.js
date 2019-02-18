ArrayList<PVector> points = new ArrayList<PVector>();
float a =0;
void setup() {
  size(400,400);
}


void draw() {
  background(0);
  translate(width/2 - 100,height/2);
  noFill();
  stroke(255);
  beginShape();
  for (PVector v : points) {
    vertex(v.x, v.y);
  }
  endShape();
  
  float r = (1 + cos(a));
  float x = 100*r*cos(a);
  float y = 100*r*sin(a);
  points.add(new PVector(x,y));
  line(0,0,x,y);
  a += 0.01;
}
