import React, { Fragment, useState } from 'react';
import './Login.css';
import image1 from '../Assets/search 1.png';
import image2 from '../Assets/image 69.png';
import image3 from '../Assets/image 70.png';
import { Link, useNavigate } from 'react-router-dom';
import { loginClient } from '../Service/auth.service';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [errorMessage, setErrorMessage] = useState('');
    const navigateToHome = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const result = await loginClient(email, password);
            if (result.success) {
                // Handle successful login
                toast.success('Login successful', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeButton: false,
                    progress: undefined,
                    theme: "colored",
                })
                navigateToHome('/');
                // Redirect or perform necessary actions after successful login
            } else {
                // Handle unsuccessful login
                toast.error(result.msg, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    // closeOnClick: false,
                    closeButton: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
            }
        } catch (error) {
            // console.error('Error during login:', error);
            toast.error('An unexpected error occurred. Please try again.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                // closeOnClick: false,
                closeButton: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });

        }
    };


    // login with google

    const loginWithGoogle = () => {
       const res = window.open("http://localhost:8600/auth/google/callback", "_self")

       console.log("res",res)
    }
    const loginWithOutlook = () => {
        const res = window.open("http://localhost:8600/auth/signin", "_self")
 
        console.log("res",res)
     }
     const loginWithLinkedIn = () => {
        const res = window.open("http://localhost:8600/auth/linkedin/callback", "_self")
 
        console.log("res",res)
     }
 
    return (
        <Fragment>
            <div className="main_acc_set_up12">
                <div className="app_container12">
                    <form className="form_container12" onSubmit={handleLogin}>
                        <h1>Log in</h1>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Enter here"
                        />

                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter here"
                        />

                        <div className="social_media_logs">
                            <p>Or</p>
                            <div className="image_link_social">
                                <button onClick={loginWithGoogle}><img src={image1} alt="" /></button>
                                <button onClick={loginWithLinkedIn}><img src={image2} alt="" /></button>
                                <button onClick={loginWithOutlook}><img src={image3} alt="" /></button>
                            </div>
                        </div>

                        <div className="submit_form12">
                            <button type="submit">Login</button>
                            <p> Don’t have an account?
                                <Link to={'/signup'}>Sign up</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}


export default Login;
