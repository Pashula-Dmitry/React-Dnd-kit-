import { Link } from "react-router-dom";

export function NoMatch() {
    return (
        <div>
            <h2>It looks like you're lost...</h2>
            <p>
                <Link to="/example1">Go to the home page</Link>
            </p>
        </div>
    );
}
