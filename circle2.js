function setup() {
    createCanvas(600, 400);
    background(0)

}



px=30
py=30

vx=0.5
vy=0.5


function draw() {
 
    radius = 30
    background(0)

    px = px + vx
    py = py + vy
if (px > 600 || px < 0){
    vx = -vx
}
if (py > 400 || py < 0){
    vy = -vy
}
    fill (255, 255, 0)
    ellipse(px, py, radius, radius);
}
