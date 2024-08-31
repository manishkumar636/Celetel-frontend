import React, { Fragment } from 'react'
import './AllPricing.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Footer } from '../Footer/Footer'
import { useNavigate } from 'react-router-dom';

export function AllPricing() {

    const navigateToSignUpPrices = useNavigate();

    const handleNavigatetoPrices = () => {
        navigateToSignUpPrices('/newprices');
    }

    return (
        <Fragment>
            <div className="main_new_all_pricing">
                <div className="heading_all_pricing">
                    <h1>Ready to Choose Plan for Your Business?</h1>
                    <p>Choose the package that best suit you. Our services has friendly packages</p>
                    {/* <div className="sub_all_pricing">
                        <p> Monthly</p>
                        <label htmlFor=""></label>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider"></span>
                        </label>
                        <p> Yearly</p>
                    </div> */}
                </div>

                <div className="new_pricing_list">
                    <div className="new_pricing_cards_all">
                        <div className="name_of_price">
                            <div className="prices_new">
                                <h3>Pricing</h3>
                                <h4>SMS</h4>
                            </div>
                            {/* <div className="sub_all_pricing">
                                <p> Monthly</p>
                                <label htmlFor=""></label>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                                <p> Yearly</p>
                            </div> */}
                        </div>

                        <div className="cards_new_pricing_list">
                            <Card sx={{ borderRadius: "8px", borderTop: "15px solid #B7D6B6" }}>
                                <CardContent>
                                    <h3 gutterBottom variant="h5" component="div">
                                        FREE
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        ₹ 0.165/
                                        <span style={{ textDecoration: "line-through" }}>0.25 /</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>Pay for OTP "delivered" within 15 Sec
                                    </p>

                                    {/* <p style={{ display: "flex", alignItems: "center", marginTop: "45px" }}><CheckIcon />PNG Templates</p> */}

                                    <p style={{ marginTop: "12px" }} className='id'>Price: ₹ 0.165 - 0.25 volume based
                                    </p>
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
                                    </div>

                                    <Button onClick={handleNavigatetoPrices} sx={{ textTransform: "unset", color: "black", border: "1px solid #FFD26F", margin: "auto", marginTop: "30px", width: "90%", }}>Try now</Button>
                                </CardContent>
                            </Card>
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #F8D254" }}>
                                <CardContent sx={{
                                    textAlign: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        PREMIUM
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        ₹ 0.34/<span style={{ textDecoration: "line-through" }}>0.55/</span>
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "left", marginTop: "15px" }}>Useful For Sending One Time Password Over SMS, For Phone Verification</p>

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
                                    </div>

                                    <Button onClick={handleNavigatetoPrices} variant="contained" sx={{
                                        textTransform: "unset",
                                        color: "black",
                                        backgroundColor: "#FFD26F",
                                        margin: "auto",
                                        marginTop: "30px",
                                        width: "90%",
                                        "&:hover": {
                                            color: "#101010",
                                            background: "#FFD26F",
                                        }
                                    }}>Try now</Button>
                                </CardContent>
                            </Card>
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #B7D6B6" }}>
                                <CardContent sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        PRO
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        ₹ 0.16 <span style={{ textDecoration: "line-through" }}>0.25 /</span>
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>Best Suitable For Sending Alerts, Reminders, Updates, Notifications To Registered Customers</p>

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
                                    </div>

                                    <Button onClick={handleNavigatetoPrices} sx={{ textTransform: "unset", color: "black", border: "1px solid #FFD26F", margin: "auto", marginTop: "30px", width: "90%", }}>Try now</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                {/* <div className="new_pricing_list">
                    <div className="new_pricing_cards_all">
                        <div className="name_of_price">
                            <div className="prices_new">
                                <h3>Pricing</h3>
                                <h4>RCS</h4>
                            </div>
                            <div className="sub_all_pricing">
                                <p> Monthly</p>
                                <label htmlFor=""></label>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                                <p> Yearly</p>
                            </div>
                        </div>

                        <div className="cards_new_pricing_list">
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #B7D6B6" }}>
                                <CardContent sx={{
                                    textAlign: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        FREE
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        $0/
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>It is a long established fact that a reader will be distracted.</p>

                                    <p style={{ display: "flex", alignItems: "center", marginTop: "45px" }}><CheckIcon />PNG Templates</p>

                                    <Button sx={{ textTransform: "unset", color: "black", border: "1px solid #FFD26F", margin: "auto", marginTop: "30px", width: "90%", }}>Try now</Button>
                                </CardContent>
                            </Card>
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #F8D254" }}>
                                <CardContent sx={{
                                    textAlign: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        PREMIUM
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        $99/
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>It is a long established fact that a reader will be distracted.</p>

                                    <p style={{ display: "flex", marginTop: "45px" }}><CheckIcon />PNG Templates</p>

                                    <p style={{ display: "flex", marginTop: "15px" }}><CheckIcon />Figma responsive components</p>


                                    <Button variant="contained" sx={{
                                        textTransform: "unset",
                                        color: "black",
                                        backgroundColor: "#FFD26F",
                                        margin: "auto",
                                        marginTop: "30px",
                                        width: "90%",
                                        "&:hover": {
                                            color: "#101010",
                                            background: "#FFD26F",
                                        }
                                    }}>Try now</Button>
                                </CardContent>
                            </Card>
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #B7D6B6" }}>
                                <CardContent sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        PRO
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        $199/
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>It is a long established fact that a reader will be distracted.</p>

                                    <p style={{ display: "flex", alignItems: "center", marginTop: "45px" }}><CheckIcon />PNG Templates</p>

                                    <Button sx={{ textTransform: "unset", color: "black", border: "1px solid #FFD26F", margin: "auto", marginTop: "30px", width: "90%", }}>Try now</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
                <div className="new_pricing_list">
                    <div className="new_pricing_cards_all">
                        <div className="name_of_price">
                            <div className="prices_new">
                                <h3>Pricing</h3>
                                <h4>Voice</h4>
                            </div>
                            <div className="sub_all_pricing">
                                <p> Monthly</p>
                                <label htmlFor=""></label>
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                                <p> Yearly</p>
                            </div>
                        </div>

                        <div className="cards_new_pricing_list">
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #B7D6B6" }}>
                                <CardContent sx={{
                                    textAlign: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        FREE
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        $0/
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>It is a long established fact that a reader will be distracted.</p>

                                    <p style={{ display: "flex", alignItems: "center", marginTop: "45px" }}><CheckIcon />PNG Templates</p>

                                    <Button sx={{ textTransform: "unset", color: "black", border: "1px solid #FFD26F", margin: "auto", marginTop: "30px", width: "90%", }}>Try now</Button>
                                </CardContent>
                            </Card>
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #F8D254" }}>
                                <CardContent sx={{
                                    textAlign: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        PREMIUM
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        $99/
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>It is a long established fact that a reader will be distracted.</p>

                                    <p style={{ display: "flex", marginTop: "45px" }}><CheckIcon />PNG Templates</p>

                                    <p style={{ display: "flex", marginTop: "15px" }}><CheckIcon />Figma responsive components</p>


                                    <Button variant="contained" sx={{
                                        textTransform: "unset",
                                        color: "black",
                                        backgroundColor: "#FFD26F",
                                        margin: "auto",
                                        marginTop: "30px",
                                        width: "90%",
                                        "&:hover": {
                                            color: "#101010",
                                            background: "#FFD26F",
                                        }
                                    }}>Try now</Button>
                                </CardContent>
                            </Card>
                            <Card sx={{ width: "300px", borderRadius: "8px", borderTop: "15px solid #B7D6B6" }}>
                                <CardContent sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>
                                    <h3 gutterBottom variant="h5" component="div">
                                        PRO
                                    </h3>
                                    <p style={{ fontSize: "32px", marginTop: "15px" }} >
                                        $199/
                                        <span>month</span>
                                    </p>

                                    <p style={{ color: "#ABABAB", fontSize: "15px", textAlign: "center", marginTop: "15px" }}>It is a long established fact that a reader will be distracted.</p>

                                    <p style={{ display: "flex", alignItems: "center", marginTop: "45px" }}><CheckIcon />PNG Templates</p>

                                    <Button sx={{ textTransform: "unset", color: "black", border: "1px solid #FFD26F", margin: "auto", marginTop: "30px", width: "90%", }}>Try now</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div> */}
                <Footer />
            </div>
        </Fragment>
    )
}
