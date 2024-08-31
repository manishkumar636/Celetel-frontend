import React, { Fragment, useState } from 'react'
import './HeroSec.css'
import homepage from '../Assets/Group 1000001747.svg'
import homepage1 from '../Assets/Frame.png'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { sendOtp } from '../Service/auth.service'
import { toast } from 'react-toastify'
import { PulseLoader } from 'react-spinners'

export function HeroSec() {

    const [mobileNumber, setMobileNumber] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGetStarted = async () => {
        try {
            if (!mobileNumber) {
                toast.error("Mobile number cannot be empty", {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeButton: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
                return;
            }
            setLoading(true);

            const response = await sendOtp(mobileNumber);
            console.log('API Response:', response);
            if (response.success === true) {
                toast.success(response.message, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeButton: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
                setMobileNumber('');
            }
            else {
                console.log(response.message)
                toast.error(response.message, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeButton: false,
                    closeOnClick: false,
                    pauseOnHover: false,
                    draggable: false,
                    progress: undefined,
                    theme: "colored",
                });
            }

        }
        catch (error) {
            console.error('Error:', error.message);
        }
        finally {
            setLoading(false);
        }
    };


    return (
        <Fragment>
            <div className="main_herosec">
                <div className="sub_hero">
                    <h1>Reach billions in a single click. Connect millions in a moment</h1>
                    <div className="border"></div>
                    <p>The world's most innovative companies build communication solutions using Celetel applications and APIs. Get started today and talk to your customers over any channel.</p>
                    <div className="hero_butn">
                        <div className="phone_inputs_country_wise">
                            <PhoneInput
                                country={'in'}
                                name="phone"
                                id="phone"
                                // containerStyle={{
                                //     padding: "12px"
                                // }}
                                type="number"
                                placeholder="Enter mobile number"
                                value={mobileNumber}
                                required
                                onChange={(value) => setMobileNumber(value)}
                                className="custom-phone-input"
                                inputProps={{
                                    placeholder: 'Enter mobile number',
                                    autoFocus: true,
                                    padding: "12px"
                                }}
                                enableSearch
                                style={{ width: '100%' }}
                            />

                        </div>
                        <button onClick={handleGetStarted} disabled={loading}>
                            {loading ? <PulseLoader style={{ padding: "3px 55px" }} color="#fff" size={6} /> : 'Test delivery speed'}
                        </button>
                    </div>
                </div>
                <div className="sub_image">
                    <img src={homepage} alt="" />
                </div>
                <div className="image_frames">
                    <img src={homepage1} alt="" />
                </div>
            </div>

            <div className="main_hero1">
                <div className="sub_hero1">
                    <h1>Reach billions in a single click. Connect millions in a moment</h1>
                    <div className="border1"></div>
                    <img src={homepage} alt="" />
                    <p>The world's most innovative companies build communication solutions using Celetel applications and APIs. Get started today and talk to your customers over any channel.</p>
                    <div className="hero_butn_mobile">
                        <div className="phone_inputs_country" style={{ width: '300px', margin: 'auto' }}>
                            <PhoneInput
                                country={'in'}
                                name="phone"
                                id="phone"
                                type="number"
                                placeholder="Enter mobile number"
                                value={mobileNumber}
                                onChange={(value) => setMobileNumber(value)}
                                className="custom-phone-input"
                                inputProps={{
                                    placeholder: 'Search for a country',
                                    autoFocus: true,
                                    padding: "12px"
                                }}
                                enableSearch
                            />

                        </div>
                        <button onClick={handleGetStarted}>Test delivery speed</button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
