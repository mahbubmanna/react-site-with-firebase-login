import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
                console.log(result.user);
            })
    }

    return (
        <div className="m-5 login-form d-flex justify-content-center align-items-center">
            <div>
                <form>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <br />

                <p>Don't have an account? <Link to="/register">Create Account</Link></p>
                <div>-----------or----------</div>
                <br />
                <button onClick={handleGoogleLogin} className="btn btn-white bg-warning  text-dark font-weight-bold rounded-pill">Google Sign In</button>
            </div>

        </div>
    );
};

export default Login;