import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export default function ResetPassword() {
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const { id, token } = useParams();

    axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`https://password-reset-odmp.onrender.com/reset-password/${id}/${token}`, { password })
            .then(res => {
                // if (res.data.Status === 200) {
                    // console.log(res);
                    navigate('/login')
                // }
            }).catch(err => console.log(err))
    }

    return (
        <div className="container-fluid vh-100 bg-secondary">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="card mt-5">
                        <div className='bg-white p-3 rounded w-auto bg-info'>
                            <h4 className='d-flex align-content-center justify-content-center'>Reset Password</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email">
                                        <strong>New Password</strong>
                                    </label>
                                    <input
                                        required
                                        type="password"
                                        placeholder="Enter a new Password"
                                        autoComplete="off"
                                        name="password"
                                        className="form-control rounded-0"
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-success w-100 rounded-0">
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
