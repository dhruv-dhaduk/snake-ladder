import { useEffect, useRef, useState } from 'react';

function Board({ isAdmin, ladders, snakes }) {
    const [boardItems, setBoardItems] = useState(
        Array(100)
            .fill(0)
            .map((_, i) => 100 - i)
    );

    const [position, setPosition] = useState(1);
    const [lastDiceValue, setLastDiceValue] = useState(0);

    const boardRef = useRef(null);
    useEffect(() => {
        window.x = boardRef;
    });

    const play = () => {
        const movePositions = Math.floor(Math.random() * 6) + 1;
        setLastDiceValue(movePositions);

        if (position + movePositions > 100) {
            return;
        }

        setPosition(position + movePositions);
    };

    useEffect(() => {
        if (position === 100) {
            setTimeout(() => {
                alert('You Won The Game !!!!!!!!!');
            }, 200);
            return;
        }

        for (const ladItem of ladders) {
            if (ladItem[0] === position) {
                setTimeout(() => {
                    setPosition(ladItem[1]);
                    alert('Congratulations, You Got a Ladder');
                }, 200);
                return;
            }
        }

        for (const snkItem of snakes) {
            if (snkItem[0] === position) {
                setTimeout(() => {
                    setPosition(snkItem[1]);
                    alert('Alas, You Got bitten by a Snake');
                }, 200);
            }
        }
    }, [position]);

    return (
        <div>
            <p>Green Number in Box indicates the Ladder to another position.</p>
            <p>Red Number in Box indicated the Snake to another position.</p>
            <p>Blue circle in the middle indicates your current position.</p>

            <div className="grid grid-cols-10 w-fit relative" ref={boardRef}>
                {boardItems.map((item) => (
                    <BoardItem
                        key={item}
                        item={item}
                        ladders={ladders}
                        snakes={snakes}
                        isHere={item === position}
                    />
                ))}
            </div>

            <div>
                <button
                    onClick={play}
                    className="px-6 py-4 m-1 border border-white rounded-lg active:bg-white active:text-black"
                >
                    Roll The Dice
                </button>
            </div>

            {lastDiceValue > 0 && (
                <p className="font-bold text-lg">
                    You Got {lastDiceValue} on Dice.
                </p>
            )}
        </div>
    );
}

function BoardItem({ item, ladders, snakes, isHere }) {
    const [ladderTo, setLadderTo] = useState(null);
    const [snakeTo, setSnakeTo] = useState(null);

    useEffect(() => {
        ladders.forEach((ladItem) => {
            if (ladItem[0] === item) {
                setLadderTo(ladItem[1]);
            }
        });
    }, [ladders]);

    useEffect(() => {
        snakes.forEach((snkItem) => {
            if (snkItem[0] === item) {
                setSnakeTo(snkItem[1]);
            }
        });
    }, [ladders]);
    return (
        <div className="p-5 border border-white relative w-14 h-14">
            <p className="text-xs absolute top-2 left-2">{item}</p>

            {isHere && (
                <div className="absolute inset-0 m-auto w-4 h-4 bg-blue-600 rounded-full"></div>
            )}

            {ladderTo !== null && (
                <p className="text-sm text-green-400 font-bold absolute bottom-1 right-1">
                    {ladderTo}
                </p>
            )}

            {snakeTo !== null && (
                <p className="text-sm text-red-400 font-bold absolute bottom-1 left-1">
                    {snakeTo}
                </p>
            )}
        </div>
    );
}

export default Board;
