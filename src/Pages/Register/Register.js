import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div class="m-5 register-form d-flex justify-content-center align-items-center">
            <div>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Re-enter Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
                <br />

                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>-----------or----------</div>
                <br />
                <button className="btn btn-white bg-warning  text-dark font-weight-bold rounded-pill">Google Sign In</button>
            </div>

        </div>
    );
};

export default Register;