import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function ForgotPassword() {
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post('https://password-reset-odmp.onrender.com/forgot-password', { email })
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/login')
                }
            }).catch(err => console.log(err))
    }

    return (

        <div className="container-fluid vh-100 bg-secondary">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="card mt-5">
                        <div className='bg-white p-3 rounded w-auto bg-info'>
                            <h4 className='d-flex align-content-center justify-content-center'>Forgot Password</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email">
                                        <strong>Email</strong>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Enter Email"
                                        autoComplete="off"
                                        name="email"
                                        className="form-control rounded-0"
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-success w-100 rounded-0">
                                    Send
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
