import React, {useState, useRef, useEffect} from "react";
import {useInterval} from "./useInterval";
import GameOver from "./GameOver";
import Score from "./Score";
import ButtonStart from "./ButtonStart";

import {
    CANVAS_SIZE,
    SNAKE_COLOR,
    FOOD_COLOR,
    SNAKE_START,
    FOOD_START,
    SCALE,
    SPEED,
    DIRECTIONS
} from "./constants";


const Snake = () => {
    const canvasRef = useRef();
    const [snake, setSnake] = useState(SNAKE_START);
    const [food, setFood] = useState(FOOD_START);
    const [dir, setDir] = useState([0, -1]);
    const [speed, setSpeed] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    useInterval(() => gameLoop(), speed);

    const startGame = () => {
        setSnake(SNAKE_START);
        setFood(FOOD_START);
        setDir([0, -1]);
        setSpeed(SPEED);
        setGameOver(false);
    };

    const levelUp = (snake) => {
        if (snake >= 4 && snake <= 20)
            setSpeed(95);
        if (snake > 20 && snake <= 25)
            setSpeed(90);
        if (snake > 25 && snake <= 27)
            setSpeed(70);
        if (snake > 27 )
            setSpeed(60);
    }

    const endGame = () => {
        setSpeed(null);
        setGameOver(true);
    };

    const moveSnake = ({keyCode}) => {
        // up
        if (dir[0] === 0 && dir[1] === -1)
            keyCode >= 37 && keyCode <= 39 && setDir(DIRECTIONS[keyCode]);
        // down
        if (dir[0] === 0 && dir[1] === 1)
            keyCode >= 39 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]) || keyCode === 37 && setDir(DIRECTIONS[keyCode]);
        // right
        if (dir[0] === 1 && dir[1] === 0)
            keyCode >= 38 && keyCode <= 40 && setDir(DIRECTIONS[keyCode]);
        // left
        if (dir[0] === -1 && dir[1] === 0)
            keyCode >= 37 && keyCode <= 38 && setDir(DIRECTIONS[keyCode]) || keyCode === 40 && setDir(DIRECTIONS[keyCode]);
    }

    const createFood = () =>
        food.map((_a, i) => Math.floor(Math.random() * (CANVAS_SIZE[i] / SCALE)));

    const checkCollision = (piece, snk = snake) => {
        if (piece[0] * SCALE >= CANVAS_SIZE[0] || piece[0] < 0 || piece[1] * SCALE >= CANVAS_SIZE[1] ||piece[1] < 0) {
            return true;
        }
        for (const segment of snk) {
            if (piece[0] === segment[0] && piece[1] === segment[1])
                return true;
        }
        return false;
    };

    const checkFoodCollision = newSnake => {
        if (newSnake[0][0] === food[0] && newSnake[0][1] === food[1]) {
            let newFood = createFood();
            while (checkCollision(newFood, newSnake)) {
                newFood = createFood();
            }
            setFood(newFood);
            return true;
        }
        return false;
    };

    const gameLoop = () => {
        const snakeCopy = JSON.parse(JSON.stringify(snake));
        const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
        snakeCopy.unshift(newSnakeHead);
        levelUp(snake.length);
        if (checkCollision(newSnakeHead)) endGame();
        if (!checkFoodCollision(snakeCopy)) snakeCopy.pop();
        setSnake(snakeCopy);
    };

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.fillStyle = SNAKE_COLOR;
        snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
        context.fillStyle = FOOD_COLOR;
        context.fillRect(food[0], food[1], 1, 1);
    }, [snake, food, gameOver]);

    return (
        <div>
            <br/>
            <div className="container center-align">
                {gameOver && <GameOver />}
                <br/>
                <Score score={snake.length - 2} />
                <div role="button" tabIndex="0" onKeyDown={e => moveSnake(e)}>
                    <canvas
                        style={{border: "3px solid black"}}
                        ref={canvasRef}
                        width={`${CANVAS_SIZE[0]}px`}
                        height={`${CANVAS_SIZE[1]}px`}
                    />
                    <br/><br/>
                    <ButtonStart start={() => startGame()}/>
                </div>
            </div>
        </div>
    );
};

export default Snake;




// Snake Game Based on: https://www.mariokandut.com/create-classic-snake-game-in-react-with-typescript-part-1/