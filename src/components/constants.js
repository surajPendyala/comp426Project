const CANVAS_SIZE = [1000, 370];
const SNAKE_COLOR = '#add8e6';
const FOOD_COLOR = '#00539B';
const SNAKE_START = [
    [8, 7],
    [8, 8]
];
const FOOD_START = [8, 3];
const SCALE = 40;
const SPEED = 100;
const DIRECTIONS = {
    40: [0, 1], // down
    39: [1, 0], // right
    38: [0, -1], // up
    37: [-1, 0] // left
};

export {
    CANVAS_SIZE,
    SNAKE_COLOR,
    FOOD_COLOR,
    SNAKE_START,
    FOOD_START,
    SCALE,
    SPEED,
    DIRECTIONS
};