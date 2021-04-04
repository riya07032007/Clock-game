var hr,mn,sc





function setup() {
  createCanvas(800,400);





}

function draw() {
  background(0);

  translate(300,200)
  
hr=hour()
mn=minute()
sc=second()

angleMode(DEGREES)

hrAngle=map(hr,0,60,0,360)
mnAngle=map(mn,0,60,0,360)
scAngle=map(sc,0,60,0,360)

//hour hand
push()
rotate(hrAngle)
stroke(0,0,255)
strokeWeight(7)
line(0,0,100,0)
pop()

// minute hand
push()
rotate(mnAngle)
stroke(0,255,0)
strokeWeight(7)
line(0,0,100,0)
pop()

// second hand
push()
rotate(scAngle)
stroke(255,0,0)
strokeWeight(7)
line(0,0,100,0)
pop()

noFill()
strokeWeight(10)
stroke(0,0,255)
arc(0,0,260,260,0,hrAngle)
stroke(0,255,0)
arc(0,0,280,280,0,mnAngle)
stroke(255,0,0)
arc(0,0,300,300,0,scAngle)



  drawSprites();
}