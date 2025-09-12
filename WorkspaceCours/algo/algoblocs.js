/*
//A1
//init
setPos(300,300);
changeColor(color.red);
setLineWidth(10);
faceDown();
//réalisation de A1
forward(100);
faceRight();
forward(50);

//A2
//init
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);
faceLeft();
//réalisation de A2
forward(50);
faceDown();
forward(50);
faceRight();
forward(100);
faceUp();
forward(100);

//A3
//init
setPos(300,300);
changeColor("#ff8000");
setLineWidth(10);
faceLeft();
//réalisation de A3
forward(50);
faceRight();
forward(100);
faceLeft();
forward(50);
faceUp();
forward(50);
faceDown();
forward(100);

//A4
//init
setPos(200,350);
changeColor(color.green);
setLineWidth(10);
faceRight();
//réalisation de A4
forward(100);
arcLeft(50,180);
forward(50);
arcRight(50,180);
forward(100);

//A5
//init
setPos(250,150);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();
//réalisation de A5
arcRight(100,180);
arcRight(50,180);
arcLeft(50,180);
arcLeft(100,180);

//A6
//init
setPos(300,300);
changeColor(color.aqua);
setLineWidth(10);
faceUp();
//réalisation de A6
forward(50);
up();
forward(50);
down();
forward(100);

//A7
//init
setPos(350,300);
changeColor(color.green);
setLineWidth(10);
faceDown();
//réalisation de A7
forward(100);
arcLeft(50,180);
forward(50);
up();
forward(50);
down();
forward(100);
arcLeft(50,180);
forward(50);

//A8
//init
setPos(300,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceUp();
//réalisation de A8
forward(50);
faceRight();
forward(100);
faceDown();
forward(200);
faceLeft();
forward(50);
up();
forward(50);
faceUp();
forward(50);
down();
forward(50);

//A9
//init
setPos(150,450);
changeColor(color.aqua);
setLineWidth(10);
faceRight();
//réalisation de A9
arcLeft(50,180);
arcRight(50,180);
forward(200);
arcRight(50,180);
arcLeft(50,180);
faceLeft();
forward(200);

//A10
//init
setPos(300,400);
changeColor(color.red);
setLineWidth(10);
faceRight();
//réalisation de A10
arcLeft(50,180);
changeColor(color.green);
arcLeft(100,180);
changeColor(color.yellow);
arcLeft(200,180);

//A11
//init
setPos(150,250);
changeColor(color.blue);
setLineWidth(10);
faceUp();
//réalisation de A11
arcRight(50,180);
faceRight();
up();
forward(50);
down();
faceUp();
arcRight(50,180);
up();
forward(50);
faceLeft();
forward(25);
faceDown();
changeColor(color.fuchsia);
down();
arcRight(100,180);

//A12
//init
setPos(25,250);
changeColor(color.green);
setLineWidth(10);
faceUp();
//réalisation de A12
arcRight(50,180);
forward(100);
arcLeft(50,180);
faceRight();
up();
forward(50);
faceDown();
down();
changeColor("#ff8000");
arcLeft(50,180);
forward(100);
arcRight(50,180);

//B1
//init
setPos(200,200);
changeColor(color.green);
setLineWidth(10);
faceRight();
//réalisation de B2
for(let i=0 ; i<4 ;i++) {
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}

//B2
//init
setPos(70,300);
changeColor(color.red);
setLineWidth(10);
faceUp();
//réalisation de B2
for(let i=0 ; i<4 ;i++){
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}

//B3
//init
setPos(250,250);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();
//réalisation de B3
for(let i=0 ; i<4 ; i++){
    forward(100);
    right(90);
}

//B4
//init
setPos(300,300);
changeColor(color.aqua);
setLineWidth(10);
faceRight();
//réalisation de B4
for(let i=0 ; i<3 ; i++){
    forward(100);
    left(180-60)
}

//B5
//init
setPos(300,300);
changeColor("#ff8000");
setLineWidth(10);
faceUp();
//réalisation de B5
forward(100);
changeColor(color.red);
for(let i=0 ; i<3 ; i++){
    forward(50);
    right(180-60);
}

//B6
//init
setPos(150,300);
changeColor(color.red);
setLineWidth(10);
faceRight();
//réalisation de B6
for(let i=0 ; i<2 ; i++){
    forward(50);
    faceUp();
    forward(50);
    faceRight();
}
changeColor(color.green);
for(let i =0 ; i<3 ; i++){
forward(50);
faceDown();
forward(50);
faceRight();
}

//B7
//init
setPos(300,300);
changeColor("#ff8000");
setLineWidth(10);
faceRight();
//réalisation de B7
for(let i=0 ; i<3 ; i++){
    forward(100);
    left(180-60);
}
for(let i=0; i<4 ; i++){
    forward(100);
    right(180-90);
}

//B8
//init
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
//réalisation de B8
for(let i=0 ; i<8 ; i++){
    forward(200);
    right(180-45);
}

//B9
//init
setPos(300,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();
//réalisationde B9
forward(50);
up();
forward(50);
down();
for(let i=0; i<3 ; i++){
    forward(100);
    right(180-60);
}

//B10
//initi
setPos(100,300);
changeColor(color.aqua);
setLineWidth(10);
faceRight();
//réalisation de B10
for(let i=0 ; i<8 ; i++){
    forward(100);
    right(180-45);
}
up();
forward(200);
changeColor(color.yellow);
down();
for(let i=0 ; i<8 ; i++){
    forward(200);
    left(180-45);
}
up();
right(180-90);
forward(100);
changeColor(color.fuchsia);
down();
for(let i=0 ; i<8 ; i++){
    forward(100);
    right(180-45);
}

//B11
//init
setPos(300,300);
changeColor(color.red);
setLineWidth(10);
faceRight();
//réalisation de B11
for(let i=0 ; i<4 ; i++){
    forward(50);
    left(180-90);
    forward(50);
    right(180-90);
    forward(50);
    right(180-90);
}

//B12
//init
setPos(300,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();
//réalisation de B12
for(let i=0 ; i<3 ; i++){
right(180-90);
forward(50);
}
up();
forward(50);
changeColor(color.green);
down();
for(let i=0 ; i<3 ; i++){
    forward(50);
    right(180-90);
}

//B13
//init
setPos(300,300);
changeColor(color.green);
setLineWidth(10);
faceRight();
//réalisation de B13
for(let i=0 ; i<8 ; i++){
    forward(50);
    left(180-45);
    forward(25);
    right(180-90);
    forward(25);
    right(180-90);
}

//B14
//init
setPos(150,150);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
//réalisation de B14
for(let i=0 ; i<5 ; i++){
    forward(50);
    right(180-60);
    forward(100);
    left(180-60);
    forward(50);
}

//B15
//init
setPos(300,300);
changeColor(color.red);
setLineWidth(10);
faceRight();
//réalisation de B15
for(let i=0 ; i<4 ;i++){
    forward(100);
    arcLeft(50,90);
}

//B16
//init
setPos(300,300);
changeColor(color.green);
setLineWidth(10);
faceRight();
//réalisation de B16
arcLeft(200,90);
faceLeft();
for(let i=0 ; i<4 ; i++){
    arcLeft(25,90);
    arcRight(25,90);
}

//B17
//init
setPos(300,300);
changeColor(color.blue);
setLineWidth(10);
faceRight();
//réalisation de B17
for(let i=0 ; i<8 ; i++){
    arcLeft(50,180);
    left(180-60);
}

//B18
//init
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
//réalisation de B18
for(let i=0 ; i<8 ; i++){
    forward(200);
    left(180-90);
    forward(50);
    left(180-135);
}

//B19
//init
setPos(300,500);
changeColor(color.aqua);
setLineWidth(10);
faceRight();
//réalisation de B19
for(let i=0 ; i<4 ; i++){
    arcLeft(50,180);
    faceRight();
}
up();
faceUp();
forward(50);
faceLeft();
down();
for(let i=0 ; i<4 ; i++){
    arcLeft(50,180);
    faceLeft();
}

//B20
//init
setPos(200,250);
changeColor(color.aqua);
setLineWidth(10);
faceDown();
//réalisation de B20
for(let i=0 ; i<2 ; i++){
    forward(100);
    arcLeft(50,90);
}
forward(50);
for(let i=0 ; i<2 ; i++){
    forward(100);
    arcLeft(50,90);
}
forward(50);
faceRight();
forward(200);
up();
faceLeft();
forward(100);
faceDown();
forward(25);
down();
faceRight();
arcRight(50,380);

//B21
//init
setPos(350,200);
shiftColor(0.5);
setLineWidth(10);
faceRight();
//réalisation de B21
for(let i=0 ; i<6 ; i++){
    forward(100);
    left(180-60);
    forward(50);
    left(180-60);
    forward(100);
    right(180-120);
    forward(50);
    right(180-60);
    forward(50);
    up();
    right(180-60);
    forward(100);
    shiftColor(0.1);
    down();
}

//B22
//init
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
left(180-150);
//réalisation de B22
for(let i=0; i<6; i++){
    forward(100);
    left(180-120);
}
left(180-330);
forward(100);
changeColor(color.red);
left(180-60);
forward(100);
changeColor(color.green);
left(180-150);
for(let i=0 ; i<7 ; i++){
    forward(100);
    left(180-90);
}
left(180-330);
for(let i=0 ; i<6 ; i++){
    forward(100);
    left(180-90);
}

//B23
//init
setPos(200,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();
left(45)
//réalisation de B23
for(let i=0 ; i<3 ; i++){
    forward(50);
    right(180-90);
    forward(50);
    left(180-90);
}
right(180-45);
forward(50);
right(180-135);
for(let i=0 ; i<3 ; i++){
    forward(50);
    right(180-90);
    forward(50);
    left(180-90);
}
right(180-45);
forward(50);

//B24
//init
setPos(300,300);
changeColor(color.red);
setLineWidth(10);
faceRight();
//réalisation
for(let i=0; i<8 ; i++){
    forward(100);
    left(180-45);
}
forward(50);
changeColor(color.green);
for(let i=0 ; i<3 ; i++){
    right(180-45);
    forward(100);
    left(180-45);
    forward(50);
}
forward(50);
right(180-90);
for(let i=0 ; i<3 ; i++){
    forward(25);
    left(180-90);
}
right(180);
forward(50);
for(let i=0 ; i<3 ; i++){
    forward(50);
    left(180-45);
    forward(100);
    right(180-45);
}

//C1
//init
setPos(100,300);
changeColor(color.aqua);
setLineWidth(10);
faceRight();
//réalisation de C1
for(let i=0 ; i<4 ; i++){
    for(let j=0 ; j<3 ; j++){
        forward(100);
        right(180-60);
    }
    forward(100);
}

//C2
//init
setPos(300,500);
changeColor(color.fuchsia);
setLineWidth(10);
faceUp();
//réalisation de C2
for(let i=0 ; i<5 ; i++){
    for(let j=0 ; j<4 ; j++){
        forward(50);
        right(180-90)
    }
    up();
    forward(100);
    down();
}

//C3
//init
setPos(50,300);
shiftColor(0.4);
setLineWidth(10);
faceRight();
//réalisation de C3
for(let i=0 ; i<3 ; i++){
    for(let j=0 ; j<8 ; j++){
        forward(100);
        left(180-45);
    }
    up();
    forward(200);
    shiftColor(0.1);
    down();
}

//C4
//init
setPos(50,300);
changeColor(color.red);
setLineWidth(10);
faceRight();
//réalisation de C4
for(let i=0 ; i<5 ; i++){
    for(let j=0 ; j<3 ; j++){
        forward(50);
        left(180-60);
    }
    changeColor("#FF8000");
    for(let k=0 ; k<4 ; k++){
        forward(50);
        right(180-90);
    }
    up();
    forward(100);
    changeColor(color.red);
    down();
}

//C5
//init
setPos(300,300);
shiftColor(0.2);
setLineWidth(10);
faceRight();
//réalisation de C5
for(let i=0 ; i<4 ; i++){
    for(let j=0 ; j<8 ; j++){
        forward(200);
        left(180-45);
    }
    shiftColor(0.2);
    right(180-90);
}

//C6
//init
setPos(300,300);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
//réalisation de C6
for(let i=0 ; i<3 ; i++){
    for(let j=0 ; j<5 ; j++){
        forward(100);
        left(180-60);
    }
    right(180-60);
}

//C7
//init
setPos(300,350);
changeColor("#ff8000");
setLineWidth(10);
faceRight();
//réalisation de C7
for(let i=0 ; i<8 ; i++){
    for(let j=0 ; j<3 ; j++){
        forward(50);
        left(180-300);
    }
    forward(50);
    left(180-135);
}

//C8
//init
setPos(300,550);
changeColor(color.green);
setLineWidth(10);
faceUp();
//réalisation de C8
forward(200);
for(let i=0 ; i<4 ; i++){
    changeColor(color.red);
    right(180-135);
    for(let j=0 ; j<3 ; j++){
        forward(100);
        right(180-60);
    }
    changeColor(color.yellow);
    forward(100);
    right(180-315);
}

//C9
//init
setPos(400,400);
changeColor(color.green);
setLineWidth(10);
faceRight();
//réalisation de C9
for(let i=0 ; i<3 ; i++){
    for(let j=0 ; j<5 ; j++){
        forward(50);
        right(180-60);
        for(let k=0 ; k<4 ; k++){
            right(180-90);
            forward(50);
        }
    }
    forward(250);
}

//C10
//init
setPos(300,150);
changeColor(color.red);
setLineWidth(10);
faceDown();
//réalisation de C10
for(let i=0 ; i<4 ; i++){
    for(let j=0 ; j<4 ;j++){
        forward(50);
        for(let k=0 ; k<4 ; k++){
            left(180-90);
            forward(25);
        }
        right(180-90);
    }
    forward(100);
}

//C11
//init
setPos(250,250);
shiftColor(0.7);
setLineWidth(10);
faceRight();
//réalisation de C11
for(let i=0 ; i<6 ; i++){
    for(let j=0 ; j<6 ; j++){
        for(let k=0 ; k<3 ; k++){
            forward(50);
            left(180-60);
        }
        forward(50);
        left(180-120);
    }
    up();
    shiftColor(0.1);
    forward(100);
    right(180-120);
    down();
}

//C12
//init
setPos(300,250);
changeColor(color.yellow);
setLineWidth(10);
faceRight();
//réalisation de c12
for(let i=0 ; i<4 ; i++){
    for(let j=0 ; j<2 ; j++){
        arcLeft(50,90);
        forward(50);
        left(180-90);
    }
    arcRight(50,45);
}
changeColor(color.blue);
arcRight(50,180);
left(180-60);
arcLeft(100,300);

//D1
//init
setPos(250,200);
changeColor(color.red);
setLineWidth(10);
faceRight();
//réalisation de D1
for(let i=0 ; i<8 ; i++){
    forward(100);
    right(180-135);
}

//D2
//init
setPos(200,300);
changeColor(color.green);
setLineWidth(10);
faceRight();
//réalisation de D2
forward(50);
faceDown();
forward(100);
faceRight();
forward(150);
faceUp();
forward(50);
faceLeft();
forward(100);

//D3
//init
setPos(300,300);
changeColor(color.fuchsia);
setLineWidth(10);
faceRight();
//réalisation de D3
forward(100);
right(180-45);
forward(150);
left(180-45);
forward(100);

//D4
//init
setPos(150,550);
changeColor(color.blue);
setLineWidth(10);
faceRight();
//réalisation de D4
for(let i=0 ; i<6 ; i++){
    faceUp();
    forward(50);
    faceLeft();
    forward(50);
    faceUp();
    forward(50);
    faceRight();
    forward(100);
}

//D5
//init
setPos(300,300);
changeColor("#ff8000");
setLineWidth(10);
faceDown();
//réalisation de D5
forward(150);
left(180-90);
forward(50);
left(180-90);
forward(150);
changeColor(color.yellow);
for(let i=0 ;i<4 ; i++){
    forward(50);
    left(180-90);
}

//D6
//init
setPos(150,150);
changeColor(color.aqua);
setLineWidth(10);
faceRight();
longueur = 100;
//réalisation de D6
forward(longueur);
faceDown();
forward(2*longueur);
faceRight();
forward(3*longueur);

//D7
//init
setPos(300,400);
changeColor(color.fuchsia);
setLineWidth(10);
faceUp();
longueur=100;
//réalisation de D7
forward(longueur);
faceRight();
forward(longueur);
faceUp();
longueur=longueur+100;
forward(longueur);
faceLeft();
forward(longueur);
faceDown();
longueur=100;
forward(longueur);
*/
//D8
//init
setPos(300,300);
changeColor("#ff8000");
setLineWidth(10);
faceRight();
longueur=100;
//réalisation de D8
forward(longueur);
faceDown();
forward(longueur);
for(let i=0 ; i<2 ; i++){
    faceLeft();
    longueur=50;
    forward(longueur);
    faceUp();
    forward(longueur);
}