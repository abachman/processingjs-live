void setup() {
  size(300, 300);
  frameRate(20);
  noStroke();
  background(0);
}

void draw() {
  fill(255, random(100));
  ellipse(random(width), random(height), 10, 10);
}
