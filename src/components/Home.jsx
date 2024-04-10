import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link to={'/topics'}>Topics</Link><br/>
            <Link to={'/practice'}>Practice</Link>
        </div>
    )
}