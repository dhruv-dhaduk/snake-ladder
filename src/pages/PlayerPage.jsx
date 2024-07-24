import Board from '../components/Board.jsx';

import { initialLadders, initialSnakes } from '../constants.js';

import { useStoredState } from '../hooks/useStoredState.js';
function PlayerPage() {
    const [ladders, setLadders] = useStoredState(initialLadders, 'ladders');
    const [snakes, setSnakes] = useStoredState(initialSnakes, 'snakes');

    return (
        <div>
            <Board isAdmin={false} ladders={ladders} snakes={snakes} />
        </div>
    );
}

export default PlayerPage;
