import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

export default function ResetPassword() {
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const { id, token } = useParams();

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/reset-password/${id}/${token}`, { password })
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
                            <h4>Reset Password</h4>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="email">
                                        <strong>New Password</strong>
                                    </label>
                                    <input
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
