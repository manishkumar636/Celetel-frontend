import React, { Fragment } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import './SignUp.css'
import image1 from '../Assets/Group 1000001796.png'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SignUp() {

    const [countries, setCountries] = useState([]);
    const navigateToNextStep = useNavigate();
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                setCountries(response.data);
            } catch (error) {
                console.error('Error fetching country data:', error);
            }
        };
        fetchCountries();
    }, []);


    const handleCountrySelection = (e) => {
        const selectedCountry = e.target.value;
        // console.log('Selected Country:', selectedCountry);
        setSelectedCountry(selectedCountry);
    }

    function handleClickNextStep() {
        if (selectedCountry) {
            navigateToNextStep('/nextstep', { state: { selectedCountry } });
        }
        else {
            toast.error('Please select the country', {
                position: "top-center",
                // autoClose: 5000,
                hideProgressBar: true,
                closeButton: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <Fragment>
            <div className="main_signup">
                <div className="sub_side_signup">
                    <h3>Manage your Digital Identify</h3>
                    <p>Tell us more about your workspace so we can provide you a personalised experience tailored to your needs and preferences</p>
                    <img src={image1} alt="" />
                </div>

                <div className="sub_signup_form">
                    <div className="input_fields">
                        <p>Select country</p>
                        <select name="country" id="country"
                            onChange={handleCountrySelection}
                            required>
                            <option value="" disabled selected hidden>
                                Select a country
                            </option>
                            {countries.map((country) => (
                                <option key={country.cca2} value={country.name.common}>
                                    {country.name.common}
                                </option>
                            ))}
                        </select>

                        <button className='btn15_new_steps' onClick={handleClickNextStep}>Next</button>

                        <p className='para_23'>Already have an account ? <Link to={'/login'}>Login</Link></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
