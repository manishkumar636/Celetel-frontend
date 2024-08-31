import React from 'react'
import { Fragment, useState, useEffect } from 'react'
import './AccountSetUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { accountSetup, getClientById } from '../Service/auth.service';
import { RxEyeClosed } from "react-icons/rx";
import { TfiEye } from "react-icons/tfi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export function CircularIndeterminate() {
    return (
        <Box sx={{
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '100%'
        }}>
            <CircularProgress sx={{ color: "#FDBA46" }} size={70} />
        </Box>
    );
}

export function AccountSetUp() {
    const navigateToLogin = useNavigate();

    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });

    const clientId = localStorage.getItem('clientId');

    console.log(clientId, "clientId")

    useEffect(() => {
        const getClientData = async () => {
            console.log(clientId, "clientId");
            try {
                const response = await getClientById(clientId);
                const { result } = response;

                if (result) {
                    setEmail(result.email);
                }
            } catch (error) {
                console.error('Error fetching client data:', error.message);
            }
        };

        getClientData();

    }, [clientId]);



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };


    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword((prevShowPassword) => !prevShowPassword);
    };


    const handleUpdate = async (e) => {
        e.preventDefault();

        // Retrieve clientId from local storage
        const clientId = localStorage.getItem('clientId');

        try {

            if (!formData.password || !formData.confirmPassword) {
                console.error('Password or confirmPassword is empty');
                toast.error('Password or confirm password is empty', {
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
                return;
            }


            if (formData.password !== formData.confirmPassword) {
                // Password and ConfirmPassword do not match
                console.error('Passwords do not match');
                toast.error('Passwords do not match', {
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
                return;
            }
            else {
                setLoading(true);
                toast.success('Account setup successful', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeButton: false,
                    progress: undefined,
                    theme: "colored",
                });
            }

            const response = await accountSetup(clientId, {
                password: formData.password,
                confirmPassword: formData.confirmPassword
            });

            console.log('Password updated successfully:', response);
            navigateToLogin('/login');
        }
        catch (error) {
            console.error('Error updating password:', error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form submitted:', formData);
    };
    return (
        <Fragment>
            {
                loading ? <CircularIndeterminate /> : (
                    <div className="main_acc_set_up">
                        <div className="app_container">
                            <form onSubmit={handleSubmit} className="form_container">
                                <h1>Account set up</h1>
                                <label htmlFor="email">Email</label>
                                <input
                                    className='input_1_email'
                                    disabled
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={handleInputChange}
                                    required placeholder='Enter here'/>

                                <label htmlFor="password">Password</label>

                                <div className="new_pass">
                                    <input
                                        className='input_password'
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required placeholder='Enter here'

                                    />
                                    <button
                                        type="button"
                                        className="password_toggle_btn"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <TfiEye /> : <RxEyeClosed />}
                                    </button>

                                </div>

                                <label htmlFor="confirmPassword">Confirm Password</label>

                                <div className="input_con_pass">
                                    <input
                                        className='con_pass_input'
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleInputChange}
                                        required
                                        placeholder='Enter here'
                                    />

                                    <button
                                        type="button"
                                        className="con_password_toggle_btn"
                                        onClick={toggleConfirmPasswordVisibility}>
                                        {showConfirmPassword ? <TfiEye /> : <RxEyeClosed />}
                                    </button>

                                </div>
                                <div className="submit_form">
                                    <button type="submit" onClick={handleUpdate}>Create</button>
                                    <p>Already have an account? <Link to={'/login'}>Log in</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
        </Fragment>
    )
}