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
            });

            if(this.time %40 === 0){
                const newObstacle = new Obstacle();
                newObstacle.domElement = this.create('obstacle');
                this.obstacles.push(newObstacle);
                
                
            }
            this.time++;
        }, 50)
        
        
        
    }

    moveObstacle(){

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
        this.domElement = 0;
    }

    moveLeft(){
        this.positionX--;
        console.log(`moving left... ${this.positionX}`)
    }

    moveRigth(){
        this.positionX++;
        console.log(`moving right... ${this.positionX}`)
    }
}

class Obstacle {
    constructor(){
        this.positionX = 45;
        this.positionY = 90;
        this.domElement = null;
    }

    moveDown(){
        this.positionY--;
    }
}