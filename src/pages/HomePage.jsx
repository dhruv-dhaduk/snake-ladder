import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            Hello, Continue as. . .
            <div className="flex flex-col items-start">
                <Link to="/admin">Admin</Link>

                <Link to="/player">Player</Link>
            </div>
        </div>
    );
}

export default HomePage;
