import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/login", { email, password })
            .then(result => {
                console.log(result)
                // if (result.data === "success") {
                navigate('/home')
                // }
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 m-auto'>
                            <div className='bg-white p-3 rounded w-25'>
                                <h2>Login</h2>
                                <form action="" onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="email">
                                            <strong>Email</strong>
                                        </label>
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email">
                                            <strong>Password</strong>
                                        </label>
                                        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password' name='password' className='form-control rounded-0' />
                                    </div>
                                    <button type='submit' className='btn btn-success w-100 rounded-0'>
                                        Login
                                    </button>
                                </form>
                                <p>Don't have an account</p>
                                <Link to="/forgot-password">Forgot Password</Link>
                                <Link to="/register" className='btn btn-default w-100 bg-light rounded-0 text-decoration-none'>Signup</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}