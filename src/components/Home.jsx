import { Link } from "react-router-dom";
import Form from "./Form";
import { useState } from "react";

export default function Home() {
    return (
        <div className='home' >
                <ul>
                    <li><Link to={'/topics'}>Topics</Link></li>
                    <li><Link to={'/practice'}>Practice</Link></li>
                    <li><Link to={'/resources'}>Resources</Link></li>
                </ul>
            <h1>Home</h1>
            <Form />
        </div>
    )
}