import { Link } from "react-router-dom";
import Form from "./Form";
import { useState } from "react";

export default function Home() {
    return (
        <div className='home' >
                <ul>
                    <li><Link to={'/topics'}>Rent a room</Link></li>
                    <li><Link to={'/practice'}>Find a room</Link></li>
                    <li><Link to={'/resources'}>Profile</Link></li>
                </ul>
            <h1>Home</h1>
            <Form />
        </div>
    )
}