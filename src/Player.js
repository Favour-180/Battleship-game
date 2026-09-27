import Gameboard from "./Gameboard.js";

const Player = (name) => {
    const gameboard = Gameboard();

    const attack = (enemyBoard, position) => {
        return enemyBoard.receiveAttack(position);
    };

    return {
        name,
        gameboard,
        attack
    };
};

export default Player;