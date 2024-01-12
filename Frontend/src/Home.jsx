// import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className=''>
                <h1>
                    <Link to="/login">Login here</Link>

                </h1>
            </div>
        </div>
    )
}