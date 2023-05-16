function initCanvas(){
    var ctx = document.getElementById("my_canvas").getContext("2d");
    var backgroundImage = new Image();
    var naveImage = new Image();
    var enemiespic1 = new Image();
    var enemiespic2 = new Image();
    var enemiespic3 = new Image();
    var newLevel = new Image ();
    var asteroid = new Image();

    backgroundImage.src = "image/background-pic.jpg",
    naveImage.src = "image/spaceship-pic.png";

    enemiespic1.src = "image/enemigo1.png";
    enemiespic2.src = "image/enemigo2.png";
    enemiespic3.src = "image/enemigo3.webp";
    newLevel.src = "image/levelup.png";
    asteroid.src = "image/meteor.png";

    var cW = ctx.canvas.width;
    var cH = ctx.canvas.height;

    var enemyTemplate = function(options){
        return{
            id: options.id || "",
            x: options.x || "",
            y: options.y || "",
            w: options.w || "",
            h: options.h || "",
            image: options.image || enemiespic1
        }
    }

    var enemies =[
        new enemyTemplate({id: "enemy1", x: 100, y: -20, w: 50, h: 30}),
        new enemyTemplate({id: "enemy2", x: 225, y: -20, w: 50, h: 30}),
        new enemyTemplate({id: "enemy3", x: 350, y: -20, w: 80, h: 30}),
        new enemyTemplate({id: "enemy4", x: 100, y: -70, w: 80, h: 30}),
        new enemyTemplate({id: "enemy5", x: 225, y: -70, w: 50, h: 30}),
        new enemyTemplate({id: "enemy6", x: 350, y: -70, w: 50, h: 30}),
        new enemyTemplate({id: "enemy7", x: 475, y: -70, w: 50, h: 30}),
        new enemyTemplate({id: "enemy8", x: 600, y: -70, w: 80, h: 30}),
        new enemyTemplate({id: "enemy9", x: 475, y: -20, w: 50, h: 30}),
        new enemyTemplate({id: "enemy10", x: 600, y: -20, w: 50, h: 30}),

        //Segundo grupo de enemigos
        new enemyTemplate({id: "enemy11", x: 50, y: -220, w: 80, h: 50, image: enemiespic2}), 
        new enemyTemplate({id: "enemy12", x: 185, y: -220, w: 50, h: 30, image: enemiespic2}),
        new enemyTemplate({id: "enemy13", x: 300, y: -220, w: 80, h: 50, image: enemiespic2}),
        new enemyTemplate({id: "enemy14", x: 425, y: -200, w: 50, h: 30, image: enemiespic2}),
        new enemyTemplate({id: "enemy15", x: 500, y: -200, w: 50, h: 30, image: enemiespic2}),
        new enemyTemplate({id: "enemy16", x: 600, y: -200, w: 80, h: 50, image: enemiespic2}),
        new enemyTemplate({id: "enemy17", x: 50, y: -270, w: 50, h: 30, image: enemiespic2}),
        new enemyTemplate({id: "enemy18", x: 185, y: -270, w: 50, h: 30, image: enemiespic2}),
        new enemyTemplate({id: "enemy19", x: 300, y: -270, w: 50, h: 30, image: enemiespic2}),
        new enemyTemplate({id: "enemy20", x: 405, y: -270, w: 80, h: 50, image: enemiespic2}),
        new enemyTemplate({id: "enemy21", x: 500, y: -270, w: 50, h: 30, image: enemiespic2}),
        new enemyTemplate({id: "enemy22", x: 600, y: -270, w: 50, h: 30, image: enemiespic2}),
        
        //LEVEL UP
        new enemyTemplate({id: "levelup", x: 250, y: -420, w: 200, h: 70, image: newLevel}),
        
        //Tercer grupo de enemigos
        new enemyTemplate({id: "enemy23", x: 90, y: -470, w: 80, h: 50, image: enemiespic3}), 
        new enemyTemplate({id: "enemy24", x: 225, y: -470, w: 50, h: 30, image: enemiespic3}), 
        new enemyTemplate({id: "enemy25", x: 350, y: -470, w: 50, h: 30, image: enemiespic3}),
        new enemyTemplate({id: "enemy26", x: 475, y: -470, w: 50, h: 30, image: enemiespic3}),
        new enemyTemplate({id: "enemy27", x: 560, y: -470, w: 80, h: 50, image: enemiespic3}),

        new enemyTemplate({id: "enemy28", x: 160, y: -520, w: 50, h: 30, image: enemiespic3}),
        new enemyTemplate({id: "enemy29", x: 280, y: -520, w: 80, h: 50, image: enemiespic3}),
        new enemyTemplate({id: "enemy30", x: 400, y: -520, w: 80, h: 50, image: enemiespic3}),
        new enemyTemplate({id: "enemy31", x: 520, y: -520, w: 50, h: 30, image: enemiespic3}),
        
        new enemyTemplate({id: "enemy32", x: 225, y: -570, w: 50, h: 30, image: enemiespic3}),
        new enemyTemplate({id: "enemy33", x: 350, y: -570, w: 50, h: 30, image: enemiespic3}),
        new enemyTemplate({id: "enemy34", x: 475, y: -570, w: 50, h: 30, image: enemiespic3}),

        new enemyTemplate({id: "enemy35", x: 270, y: -620, w: 80, h: 50, image: enemiespic3}),
        new enemyTemplate({id: "enemy36", x: 400, y: -620, w: 80, h: 50, image: enemiespic3}),

        new enemyTemplate({id: "enemy37", x: 330, y: -670, w: 80, h: 50, image: enemiespic3}),

        //CUARTO GRUPO DE ENEMIGOS
        new enemyTemplate({id: "meteor1", x: 50, y: -720, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor2", x: 125, y: -720, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor3", x: 200, y: -720, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor4", x: 275, y: -720, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor5", x: 350, y: -720, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor6", x: 425, y: -720, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor7", x: 500, y: -720, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor8", x: 575, y: -720, w: 50, h: 30, image: asteroid}),

        new enemyTemplate({id: "meteor9", x: 70, y: -770, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor10", x: 145, y: -770, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor11", x: 220, y: -770, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor12", x: 295, y: -770, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor13", x: 370, y: -770, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor14", x: 445, y: -770, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor15", x: 520, y: -770, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor16", x: 595, y: -770, w: 50, h: 30, image: asteroid}),

        new enemyTemplate({id: "meteor17", x: 50, y: -820, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor18", x: 125, y: -820, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor19", x: 200, y: -820, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor20", x: 275, y: -820, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor21", x: 350, y: -820, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor22", x: 425, y: -820, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor23", x: 500, y: -820, w: 50, h: 30, image: asteroid}),
        new enemyTemplate({id: "meteor24", x: 575, y: -820, w: 50, h: 30, image: asteroid}),
    ];

    var renderEnemies = function(enemyList){
        for(var i = 0; i < enemyList.length; i++){
            console.log(enemyList[i]);
            ctx.drawImage(enemyList[i].image, enemyList[i].x, enemyList[i].y += .5, enemyList[i].w, enemyList[i].h);
            launcher.hitDetectLowerlevel(enemyList[i]);
        }
    }
    function Launcher(){
        this.y = 500,
        this.x = cW* .5 - 25,
        this.w = 100,
        this.h = 100.
        this.direccion,
        this.bg = "green",
        this.misiles = [];

        this.gameStatus = {
            over: false,
            message: "",
            fillStyle: "red",
            font: "italic bold 36px Arial, sans-serif"
        } 
        this.render = function (){
            if(this.direccion === "left"){
                this.x -= 5;
            }
            else if (this.direccion === "right"){
                this.x +=5;
            }
            else if (this.direccion === "downArrow"){
                this.y +=5;
            }
            else if (this.direccion === "upArrow"){
                this.y -=5;
            }
            ctx.fillStyle = this.bg ;
            ctx.drawImage (backgroundImage, 0, 0);
            ctx.drawImage(naveImage, this.x, this.y, 100, 90);

            for(var i = 0; i < this.misiles.length; i++){
                var m = this.misiles[i];
                ctx.fillRect(m.x, m.y -=5, m.w, m.h);
                this.hitDetect (this.misiles[i], i);
                if (m.y <= 0){
                    this.misiles.splice(i, 1);
                }
            }
            if (enemies.length === 0){
                clearInterval(animateInterval);
                ctx.fillStyle = "yellow";
                ctx.font = this.gameStatus.font;
                ctx.fillText("You Win!", cW * .5 - 80, 50);
            }
        }

        this.hitDetect = function(m, mi){
            console.log("crush");
            for(var i = 0; i < enemies.length; i++){
                var e = enemies [i];

                if(m.x <= e.x + e.w && 
                    m.x + m.w >= e.x &&
                    m.y >= e.y && 
                    m.y <= e.y + e.h){
                        this.misiles.splice(this.misiles[mi],1)
                        enemies.splice(i, 1);
                        document.querySelector(".barra").innerHTML = "Destroyed" +e.id +"";
                    }
                }
            }

            this.hitDetectLowerlevel = function(enemy){
                if (enemy.y > 550){
                    this.gameStatus.over = true;
                    this.gameStatus.message = "Enemy(s) have passed!";
                }
                if(enemy.id === "enemy3"){
                    console.log(this.x);
                }
                if((enemy.y< this.y + 25 && enemy.y > this.y - 25) && 
                (enemy.x < this.x +45 && enemy.x > this.x - 45)){
                    this. gameStatus.over = true
                    this.gameStatus.message = "You Died!" 
                }
                if(this.gameStatus.over === true){
                clearInterval(animateInterval);
                ctx.fillStyle = this.gameStatus.fillStyle;
                ctx.font = this.gameStatus.font;

                ctx.fillText(this.gameStatus.message, cW * .5 - 80, 50);
            }
        }
    }
    var launcher = new Launcher();
    function animate(){
        ctx.clearRect(0, 0, cW, cH);
        launcher.render();
        renderEnemies(enemies);
    }

    var animateInterval =setInterval(animate, 6);

    var left_btn = document.getElementById("left_btn");
    var right_btn = document.getElementById("right_btn");
    var fire_btn = document. getElementById("fire_btn");

    document.addEventListener("keydown", function(event){
        if(event.keyCode === 37){
            launcher.direccion = "left";
            if(launcher.x < cW*.2 -130){
                launcher.x += 0;
                launcher.direccion = "";
            }
        }
    });

    document.addEventListener("keyup", function(event){
        if(event.keyCode === 37){
            launcher.x += 0;
            launcher.direccion = "";
        }
    });

    document.addEventListener("keydown", function(event){
        if(event.keyCode === 39){
            launcher.direccion = "right";
            if(launcher.x > cW -110){
                launcher.x -= 0;
                launcher.direccion = "";
            }
        }
    });

    document.addEventListener("keyup", function(event){
        if(event.keyCode === 39){
            launcher.x -= 0;
            launcher.direccion = "";
        }
    });

    document.addEventListener("keydown", function(event){
        if(event.keyCode === 38){
            launcher.direccion = "upArrow";
            if(launcher.y < cH*.2 - 80){
                launcher.y += 0;
                launcher.direccion = "";
            }
        }
    });

    document.addEventListener("keyup", function(event){
        if(event.keyCode === 38){
            launcher.y -= 0;
            launcher.direccion = "";
        }
    });

    document.addEventListener("keydown", function(event){
        if(event.keyCode === 40){
            launcher.direccion = "downArrow";
            if(launcher.y > cH - 110){
                launcher.y -= 0;
                launcher.direccion = "";
            }
        }
    });

    document.addEventListener("keyup", function(event){
        if(event.keyCode === 40){
            launcher.y += 0;
            launcher.direccion = "";
        }
    });

    document.addEventListener("keyup", function(event){
        if (event.keyCode === 80){
        location.reload();
        }
    });

    left_btn.addEventListener("mousedown", function(event){
        launcher.direccion = "left";
    });
    left_btn.addEventListener("mouseup", function(event){
        launcher.direccion = "";
    });

    right_btn.addEventListener("mousedown", function(event){
        launcher.direccion = "right";
    });
    right_btn.addEventListener("mouseup", function(event){
        launcher.direccion = "";
    });

    fire_btn.addEventListener("mousedown", function(event){
        launcher.misiles.push({
            x: launcher.x + launcher.w *.5,
            y: launcher .y,
            w: 3,
            h: 10
        });
    });

    document.addEventListener("keydown", function(event){
        if(event.keyCode === 32){
            launcher.misiles.push ({
                x: launcher.x + launcher.w * .5,
                y: launcher .y,
                w: 3,
                h: 10
            });
        }
    });
}

window.addEventListener("load", function(event){
    initCanvas();
});