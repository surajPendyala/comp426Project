import React from "react";

const Score = (game) => {
    return (
        <div style={{ color: "green", fontWeight: "normal", fontSize: "35px" }}> Score: {game.score}</div>
    );
}
export default Score;