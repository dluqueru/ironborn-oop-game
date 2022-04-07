function createDomElement(className){
    const board = document.getElementById('board');
    const newElm = document.createElement('div');
    newElm.className = className;


    board.appendChild(newElm);

    return newElm;
}

function drawDomElement(instance){
    console.log(instance);
    instance.domElement.style.width = instance.width + 'vw';
    instance.domElement.style.height = instance.height + 'vh';

    instance.domElement.style.left = instance.positionX +'vw';
    instance.domElement.style.bottom = instance.positionY +'vh';
}

const game = new Game(createDomElement, drawDomElement);
game.start();

document.addEventListener('keydown', (e) => {
    if(e.key === 'ArrowRight'){
        game.movePlayer('right');
    } else if(e.key === 'ArrowLeft'){
        game.movePlayer('left');
}
})