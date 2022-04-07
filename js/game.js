class Game {
    constructor(create, draw){
        this.time = 0;
        this.player = null;
        this.obstacles = [];
        this.create = create;
        this.draw = draw;
    }

    start(){
        this.player = new Player();
        this.player.domElement = this.create('player');
        this.draw(this.player);

        this.obstacle = new Obstacle();
        this.obstacle.domElement = this.create('obstacle');
        this.draw(this.obstacle);
        
        setInterval(() => {
            this.obstacles.forEach((obstacle) => {
                obstacle.moveDown();
                this.draw(obstacle);
                this.detectCollision(obstacle);
            });

            if(this.time %40 === 0){
                const newObstacle = new Obstacle();
                newObstacle.domElement = this.create('obstacle');
                this.obstacles.push(newObstacle);
                
                
            }
            this.time++;
        }, 30);
        
        
        
    }

    moveObstacle(){

    }

    detectCollision(obstacle){
        if(this.player.positionX < obstacle.positionX + obstacle.width &&
            this.player.positionX + this.player.width > obstacle.positionX &&
            this.player.positionY < obstacle.positionY + obstacle.height &&
            this.player.height + this.player.positionY > obstacle.positionY){
                alert('game over');
        }
    }

    movePlayer(direction){
        if(direction === 'right'){
            this.player.moveRigth();
        } else if(direction === 'left'){
            this.player.moveLeft();
        }
        this.draw(this.player);
    }
}


class Player {
    constructor(){
        this.positionX = 45;
        this.positionY = 0;
        this.width = 10;
        this.height = 10;
        this.domElement = 0;
    }

    moveLeft(){
        this.positionX--;
    }

    moveRigth(){
        this.positionX++;
    }
}

class Obstacle {
    constructor(){
        this.positionX = Math.random() * (90 - 0);
        this.positionY = 90;
        this.width = 10;
        this.height = 10;
        this.domElement = null;
    }

    moveDown(){
        this.positionY--;
    }
}