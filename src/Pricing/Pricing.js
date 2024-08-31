import React, { Fragment } from 'react'
import image1 from '../Assets/New5.gif'
import './Pricing.css';
import { Link } from 'react-router-dom';

export function Pricing() {

    const handleBuyButtonClick = () => {
        const dataToEncrypt = Math.random();
        const encryptedData = btoa(dataToEncrypt);
        const encryptedRoute = `/paymentsetupdetails?data=${encryptedData}`;
        window.location.href = encryptedRoute;
    };

    return (
        <Fragment>
            <div className="main_sol_page_price">
                <h1>Our Pricing Lists : Where Connectivity Begins</h1>
                <p>Welcome to Celetel's Pricing Lists, where we transform simple
                    text messages into powerful communication tools that connect
                    businesses with their audience like never before. With our suite of
                    SMS services, we provide the foundation for engaging, effective,
                    and efficient messaging strategies.</p>
                <div className="btn2_price">
                    <button>Request a demo</button>
                    <button>Explore</button>
                </div>
            </div>

            <div className="main_sms">
                <div className="sub_sms">
                    <img src={image1} alt="" />
                </div>
            </div>

            <div className="main_sol_page1">
                <h1>SMS Solutions : Where Connectivity Begins</h1>
                <p>Welcome to Celetel's SMS Solutions, where we transform simple
                    text messages into powerful communication tools that connect
                    businesses with their audience like never before.</p>
                <img src={image1} alt="" />
                <div className="btn2">
                    <button>Request a demo</button>
                    <button>Explore</button>
                </div>
            </div>


            <div className="main_pricing_a">
                <h1>Our Pricing</h1>
                <div className="sub_pricing_head">
                    <p>Billed Monthly</p>
                    <label htmlFor=""></label>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider"></span>
                    </label>
                    <p>Billed Yearly (save 15%)</p>
                </div>

                <div className="main_prices_according">
                    <button>SMS</button>
                    <button>Voice</button>
                    <button>WhatsApp</button>
                    <button>RCS</button>
                </div>


                <div className="sms_main_prices">
                    <div className="new_prices_sms">
                        <h5>SMS OTP SERVICE</h5>
                        <p>Useful For Sending One Time Password Over SMS, For Phone Verification</p>
                        <h3>₹ 0.165 <span>0.25 /</span></h3>
                        <h6>Pay for OTP "delivered" within 15 Sec
                        </h6>
                        <p className='id'>Price: ₹ 0.165 - 0.25 volume based
                        </p>
                        <button onClick={handleBuyButtonClick}>BUY OTP PACK</button>
                        <div className="features_sms">
                            <h4>FEATURES</h4>
                            <p>Global Coverage</p>
                            <p>2-6 Seconds Avg Delivery</p>
                            <p>Life Time Validity</p>
                            <p>Simple HTTP API</p>
                            <p>Pay Per Delivered OTP</p>
                            <p>FREE Fallback SMS</p>
                            <p>Delivered to DND Numbers
                            </p>
                            <p>Check International OTP Pricing</p>
                            <Link to={'/paymentsetupdetails'}><button>BUY OTP PACK</button></Link>
                        </div>
                    </div>
                    <div className="new_prices_sms">
                        <h5>VOICE OTP SERVICE</h5>
                        <p>Useful For Sending One Time Password Over SMS, For Phone Verification</p>
                        <h3>₹ 0.34 <span>0.55/</span></h3>
                        <h6>Pay delivered OTP</h6>
                        <p className='id'>Price: ₹ 0.34 PAN India</p>
                        <Link to={'/paymentsetupdetails'}><button>BUY OTP PACK</button></Link>
                        <div className="features_sms">
                            <h4>FEATURES</h4>
                            <p>PAN India Coverage</p>
                            <p>Delivered To Landline Too</p>
                            <p>Greater Reach Than SMS</p>
                            <p>2-6 Seconds Avg Delivery</p>
                            <p>Life Time Validity</p>
                            <p>Simple HTTP API</p>
                            <p>Pay Per Delivered OTP</p>
                            <p>FREE Fallback SMS</p>
                            <p>Delivered to DND Numbers</p>
                            <Link to={'/paymentsetupdetails'}><button>BUY OTP PACK</button></Link>
                        </div>
                    </div>
                    <div className="new_prices_sms">
                        <h5>TRANSACTIONAL SMS</h5>
                        <p>Best Suitable For Sending Alerts, Reminders, Updates, Notifications To Registered Customers</p>
                        <h3>₹ 0.16 <span> 0.25 /</span></h3>
                        <h6>per SMS & onwards</h6>
                        <p className='id'>Price: ₹ 0.16 - 0.25 volume based</p>
                        <Link to={'/paymentsetupdetails'}><button>BUY SMS PACK</button></Link>
                        <div className="features_sms">
                            <h4>FEATURES</h4>
                            <p>PAN India Coverage</p>
                            <p>2-15 Seconds Delivery</p>
                            <p>Life Time Validity</p>
                            <p>Simple HTTP API</p>
                            <p>Dynamic Template SMS</p>
                            <p>Unlimited Sender Id</p>
                            <p>Real Time Delivery Report</p>
                            <p>Delivered To DND Numbers</p>
                            <Link to={'/paymentsetupdetails'}><button>BUY SMS PACK</button></Link>
                        </div>
                    </div>
                    <div className="new_prices_sms">
                        <h5>PROMOTIONAL SMS</h5>
                        <p>One Of The Best Marketing Solutions Available For Promoting Brand, Advertisement, Lead Generation</p>
                        <h3>₹ 0.13 <span>0.25 /</span></h3>
                        <h6>per SMS & onwards</h6>
                        <p className='id'> Price: ₹ 0.13 - 0.25 volume base</p>
                        <Link to={'/paymentsetupdetails'}> <button>BUY SMS PACK</button></Link>
                        <div className="features_sms">
                            <h4>FEATURES</h4>
                            <p>Global Coverage</p>
                            <p>Fastest Delivery</p>
                            <p>Life Time Validity</p>
                            <p>Simple HTTP API</p>
                            <p>Open Template SMS</p>
                            <p>Real Time Delivery Report</p>
                            <Link to={'/paymentsetupdetails'}> <button>BUY SMS PACK</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
