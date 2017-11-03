var ball = {
    x: 10,
    y: 10,
    w: 50,
    h: 50,
    xspeed: 2,
    yspeed: 4,
    move: function() {
        if (ball.x >= width || ball.x <= 0) {
            ball.xspeed = ball.xspeed * -1;
        }

        if (ball.y >= height || ball.y <= 0) {
            ball.yspeed = ball.yspeed * -1;
        }
        ball.x = ball.x + ball.xspeed;
        ball.y = ball.y + ball.yspeed;
    },
    drawball: function() {
        fill(0, 0, 255);
        ellipse(ball.x, ball.y, ball.w, ball.h);
    }
};

var ball2 = {
    x: 100,
    y: 80,
    w: 10,
    h: 10,
    xspeed: 9,
    yspeed: 8,
    move: function() {
        if (ball2.x >= width || ball2.x <= 0) {
            ball2.xspeed = ball2.xspeed * -1;
        }

        if (ball2.y >= height || ball2.y <= 0) {
            ball2.yspeed = ball2.yspeed * -1;
        }
        ball2.x = ball2.x + ball2.xspeed;
        ball2.y = ball2.y + ball2.yspeed;
    },

    drawball: function() {
        fill(255, 0,0);
        ellipse(ball2.x, ball2.y, ball2.w, ball2.h);
    }

};




function setup() {
    createCanvas(windowWidth, windowHeight);
}


function draw() {
    background(255);
    
    ball.move();
    ball.drawball();
    
    ball2.move();
    ball2.drawball();
}

function mousePressed(){
    ball2.xspeed = ball2.xspeed * 2;
}

















