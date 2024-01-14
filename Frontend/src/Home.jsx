// import React from 'react';
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div className="container-fluid vh-100 bg-secondary">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-12">
                    <div className="card mt-5 h-100 w-100">
                        <div className='bg-white p-3 rounded w-auto bg-info'>
                            <h1 className='d-flex align-content-center justify-content-center'>
                                <Link to="/login">Login here</Link>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
