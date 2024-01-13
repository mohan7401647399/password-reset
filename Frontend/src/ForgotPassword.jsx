import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function ForgotPassword() {
    const [email, setEmail] = useState()
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('https://password-reset-odmp.onrender.com/forgot-password', { email })
            .then(res => {
                if (res.data.Status === "Success") {
                    navigate('/login')
                }
            }).catch(err => console.log(err.message))
    }

    return (

        <div className='container-fluid'>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
                        <div className="bg-white p-3 rounded w-25">
                            <h4>Forgot Password</h4>
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
