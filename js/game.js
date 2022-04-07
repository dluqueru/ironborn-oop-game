class Game {
    constructor(create, draw){
        this.player = null
        this.create = create;
        this.draw = draw;
    }

    start(){
        this.player = new Player();
        this.player.domElement = this.create('player');
        this.draw(this.player);
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
        this.positionX = 40;
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