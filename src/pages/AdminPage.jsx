import Board from '../components/Board.jsx';

import { initialLadders, initialSnakes } from '../constants.js';

import { useStoredState } from '../hooks/useStoredState.js';

function AdminPage() {
    const [ladders, setLadders] = useStoredState(initialLadders, 'ladders');
    const [snakes, setSnakes] = useStoredState(initialSnakes, 'snakes');

    return (
        <div>
            <div className="border w-fit m-2 p-2">
                <p>Ladders : </p>

                {ladders.map((item) => (
                    <p>
                        {JSON.stringify(item)}
                        <button
                            className="px-4"
                            onClick={() => {
                                setLadders(
                                    ladders.filter(
                                        (itm) =>
                                            JSON.stringify(itm) !==
                                            JSON.stringify(item)
                                    )
                                );
                            }}
                        >
                            Remove
                        </button>
                    </p>
                ))}
            </div>

            <div className="border w-fit m-2 p-2">
                <p>Snakes :</p>
                {snakes.map((item) => (
                    <p>
                        {JSON.stringify(item)}

                        <button
                            className="px-4"
                            onClick={() => {
                                setSnakes(
                                    snakes.filter(
                                        (itm) =>
                                            JSON.stringify(itm) !==
                                            JSON.stringify(item)
                                    )
                                );
                            }}
                        >
                            Remove
                        </button>
                    </p>
                ))}
            </div>

            <Board isAdmin={true} ladders={ladders} snakes={snakes} />
        </div>
    );
}

export default AdminPage;
