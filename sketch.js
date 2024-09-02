let shapes = [];

function setup() {
    createCanvas(600, 600);

    for (let i = 0; i < 10; i++) {
        shapes.push(new MovingShape(random(width), random(height), random(20, 50)));
    }
}

function draw() {
    background(30, 30, 50);

    for (let shape of shapes) {
        shape.move();
        shape.display();
    }
}

function mousePressed() {
    shapes.push(new MovingShape(mouseX, mouseY, random(20, 50)));
}

class MovingShape {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.xSpeed = random(-2, 2);
        this.ySpeed = random(-2, 2);
        this.color = color(random(100, 255), random(100, 255), random(100, 255));
    }

    move() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (this.x < 0 || this.x > width) {
            this.xSpeed *= -1;
        }
        if (this.y < 0 || this.y > height) {
            this.ySpeed *= -1;
        }
    }

    display() {
        fill(this.color);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
    }
}
