ArrayList<PVector> points = new ArrayList<PVector>();
float a =0;
void setup() {
  size(400,400);
}


void draw() {
  background(0);
  translate(width/2 ,height/2);
  stroke(175, 100, 220);
  line(0,0,250,0);
  noFill();
  stroke(255);
  beginShape();
  for (PVector v : points) {
    vertex(v.x, v.y);
  }
  endShape();
  
  float r = (exp(a));
  float x = r*cos(a);
  float y = r*sin(a);
  points.add(new PVector(x,y));
  line(0,0,x,y);
  a += 0.01;
}
