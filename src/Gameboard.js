import Ship from "./Ship.js";

const Gameboard = () => {
    const board = Array(100).fill(null);
    const ships = [];

    const placeShip = (ship, position) => {
        if (board[position] !== null) {
            return false;
        }

        board[position] = ship;
        ships.push(ship);

        return true;
    };

    const receiveAttack = (position) => {
        const target = board[position];

        if (target === null) {
            board[position] = "miss";
            return "miss";
        }

        if (target === "miss" || target === "hit") {
            return "already attacked";
        }

        target.hit();
        board[position] = "hit";

        return "hit";
    };

    const allShipsSunk = () => {
        return ships.every(ship => ship.isSunk());
    };

    const getBoard = () => board;

    return {
        placeShip,
        receiveAttack,
        allShipsSunk,
        getBoard
    };
};

export default Gameboard;