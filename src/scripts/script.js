import {ElementPlace} from './elementPlace.js';

const place = document.querySelector('.place');

const elements = [new ElementPlace(document.querySelector('.place__cube')),new ElementPlace(document.querySelector('.place__cube2'))];



const properties = {
    center: {
        x:0,
        y:0
    },
    scene: {
        width: undefined,
        height: undefined,
    },
    scale: 1
}

setSizeScene(place);
elements.forEach(element => {
    setPosition(element);
});
drawScene();

let mouseDown = false;

window.addEventListener('resize',() => {
    setSizeScene(place);

    drawScene();
});

place.addEventListener('mousedown',() => {
    mouseDown = true;
});
place.addEventListener('mouseup',() => {
    mouseDown = false;
});
place.addEventListener('mousemove',(mouse) => {
    if (mouseDown) {
        properties.center.x += mouse.movementX;
        properties.center.y += mouse.movementY;
        elements.forEach(element => {
            setPosition(element);
        })
        drawScene();
    }
});
place.addEventListener('wheel', event => {
    if (event.deltaY < 0) {
        if (properties.scale + 0.1 < 5) {
            properties.scale += 0.1;
        }
    } else {
        if (properties.scale - 0.1 > 0.11) {
            properties.scale -= 0.1;
        }
    }
    elements.forEach(element => {
        setPosition(element);
    })
    drawScene();
});

function drawScene() {
    elements.forEach((element) => {
        if (element.isVisible) {
            element.html.style.display = 'block';
            element.html.style.left = `${element.justNowX}px`;
            element.html.style.top = `${element.justNowY}px`;
            element.html.style.transform = `scale(${properties.scale})`;
        } else {
            element.html.style.display = 'none';
        }
        
    });
}

function setSizeScene(place) {
    properties.scene.width = place.clientWidth;
    properties.scene.height = place.clientHeight;
}

function setPosition(element) {
    element.justNowX = element.pointX*properties.scale + properties.center.x;
    element.justNowY = element.pointY*properties.scale + properties.center.y;
    needVisible(element);
}

function needVisible(element) {
    const border = 100*properties.scale;
    if (element.justNowX > -border
                        &&
        element.justNowX < properties.scene.width+border
                        &&
        element.justNowY > -border
                        &&
        element.justNowY < properties.scene.height+border) {
            element.isVisible = true;
        } else {
            element.isVisible = false;
        }
}