import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

export default function Signup() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://password-reset-odmp.onrender.com/register", { name, email, password })
            .then(result => {
                console.log(result)
                navigate('/login')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container-fluid vh-100 bg-secondary">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="card mt-5">
                        <div className='bg-white p-3 rounded w-auto bg-info'>
                            <h2 className='d-flex align-content-center justify-content-center'>Register</h2>
                            <form action="" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email">
                                        <strong>Name</strong>
                                    </label>
                                    <input required onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter name' autoComplete='off' name='email' className='form-control rounded-0' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email">
                                        <strong>Email</strong>
                                    </label>
                                    <input required onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Enter Email' autoComplete='off' name='email' className='form-control rounded-0' />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email">
                                        <strong>Password</strong>
                                    </label>
                                    <input required onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter password' name='password' className='form-control rounded-0' />
                                </div>
                                <button type='submit' className='btn btn-success w-100 rounded-0'>
                                    Register
                                </button>
                            </form>
                            <p>Already have an account</p>
                            <Link to="/login" className='btn btn-default w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
