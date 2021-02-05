color NAVYBLUE = color(26, 24, 67);
color PINK = color(207, 98, 140);
color REDPINK = color(98, 52, 108);
color LIGHTBLUE = color(92, 104, 212);
color PALEYELLOW = color(231, 210, 124);
color PINKRED = color(198, 66, 99);
color PALENAVYBLUE = color(78, 65, 100);
color PURPLE = color(129, 54, 139);
color PURPLEGRAY = color(121, 90, 138);
color CHARCOAL = color(70, 70, 70);
color WHITE = color(255, 255, 255);

ArrayList colorPalette = new ArrayList();
//colorPalette.add(NAVYBLUE);
colorPalette.add(PINK);
colorPalette.add(REDPINK);
colorPalette.add(LIGHTBLUE);
colorPalette.add(WHITE);
//colorPalette.add(PALEYELLOW);
colorPalette.add(PINKRED);
//colorPalette.add(PALENAVYBLUE);
colorPalette.add(PURPLE);
//colorPalette.add(PURPLEGRAY);
//colorPalette.add(CHARCOAL);

ArrayList comets = new ArrayList();
ArrayList stars = new ArrayList();

void setup()
{
    size(screenWidth, screenHeight);
    background(NAVYBLUE);
    fill(REDPINK);
    noStroke();
}

void draw() {
    size(screenWidth, screenHeight);
    background(NAVYBLUE);

    float toAdd = random();
    if (toAdd > 0.95) {
        comets.add(new Comet());
    }

    float toAdd = random();
    if (toAdd > 0.90) {
        stars.add(new Star());
    }

    ArrayList toRemove = new ArrayList();
    for (Star s : stars) {
        s.update();
        if (s.isDead()) {
            toRemove.add(s);
        }
        s.display();
    }
    for (Star s : toRemove) {
        stars.remove(s);
    }

    ArrayList toRemove = new ArrayList();
    for (Comet c : comets) {
        c.update();
        if (c.oob()) {
            toRemove.add(c);
        }
        c.display();
    }
    for (Comet c : toRemove) {
        comets.remove(c);
    }

}


class Comet {

    PImage cometPNG;
    PVector pos;
    PVector vel = new PVector(-2, 2);
    int length;
    float maxRadius;

    Comet() {
        cometPNG = loadImage("/assets/Comet.png");
        maxRadius = 20
        length = 100;
        float x = random(0, width*2);
        float y = -length;
        pos = new PVector(x, y);
    }

    boolean oob() {
        if (pos.x < -length*2) {
            return true;
        }
        if (pos.y > height + length*2) {
            return true;
        }
        return false;
    }

    void update() {
        pos.add(vel);
    }

    void display() {
        
        image(cometPNG, pos.x, pos.y);
    }

}


class Star {

    PVector pos;
    color c;
    int timer;
    int maxTimer = 100;
    int maxRadius = 30;
    int radius;

    Star() {
        radius = random(10, maxRadius);
        float x = random(0, width);
        float y = random(0, height);
        pos = new PVector(x, y);

        int index = Math.round(random(0, colorPalette.size()-1));
        c = colorPalette.get(index);
        timer = 0;
    }

    void display() {
        float alpha = map(abs(maxTimer/2 - timer), 0, maxTimer/2, 100, 0);
        fill(c, alpha);
        if (c != WHITE)
            ellipse(pos.x, pos.y, radius, radius);

        float angle = TWO_PI / 4.0;
        float halfAngle = angle/2.0;
        beginShape();
        for (float a = 0; a < TWO_PI; a += angle) {
            float sx = pos.x + cos(a) * radius * 0.5;
            float sy = pos.y + sin(a) * radius * 0.5;
            vertex(sx, sy);
            sx = pos.x + cos(a + halfAngle) * radius * 0.2;
            sy = pos.y + sin(a + halfAngle) * radius * 0.2;
            vertex(sx, sy);
        }
        endShape(CLOSE);
    }

    void update() {
        timer++;
    }

    boolean isDead() {
        if (timer > maxTimer)
            return true;
        return false;
    }

}