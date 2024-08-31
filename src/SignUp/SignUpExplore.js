import React, { Fragment } from 'react'
import './SignUpExplore.css';
import img1 from '../Assets/image 54.png'
import img2 from '../Assets/image 55.png'
import img3 from '../Assets/image 56.png'
import img4 from '../Assets/image 57.png'
import { FaCheck } from "react-icons/fa";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import image254 from '../Assets/image 61.png'
import image255 from '../Assets/image 59.png'
import { Link } from 'react-router-dom';


export function SignUpExplore() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSetUpClick = () => {
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    };


    return (
        <Fragment>
            <div className="main_explore_signup">
                <h1>Explore services</h1>

                <div className="sub_explore_media">
                    <div className="new1_media">
                        <div className="text_al_media">
                            <img src={img1} alt="" className='img1' />
                            <div className="t1">
                                <h5>Whatsapp</h5>
                                <p>Rates starting from Rs.2,999 </p>
                            </div>
                        </div>
                        <button>Explore</button>
                    </div>
                    <div className="new1_media">
                        <div className="text_al_media">
                            <img src={img3} alt="" className='img2' />
                            <div className="t1">
                                <h5>RCS</h5>
                                <p>Rates starting from Rs.3,889</p>
                            </div>
                        </div>
                        <button>Explore</button>
                    </div>
                </div>

                <div className="sub_explore_media">
                    <div className="new1_media">
                        <div className="text_al_media">
                            <img src={img4} alt="" className='img3' />
                            <div className="t1">
                                <h5>Voice</h5>
                                <p>Rates starting from Rs.1,499 </p>
                            </div>
                        </div>
                        <button>Explore</button>
                    </div>
                    <div className="new1_media">
                        <div className="text_al_media">
                            <img src={img2} alt="" className='img4' />
                            <div className="t1">
                                <h5>SMS</h5>
                                <p>Rates starting from Rs.999 </p>
                            </div>
                        </div>
                        <button>Explore</button>
                    </div>
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
                <div className="new_pricing_pro">
                    <div className="new_price1">
                        <h3>Free</h3>
                        <h5>$0</h5>
                        <p>Description of the tier list will go here, copy should be concise and impactful.</p>
                        <div className="line" style={{
                            border: '1px solid #D9D9D9',
                            marginTop: '15px'
                        }}></div>
                        <div className="new_price_points">
                            <div className="new_points1">
                                <span><FaCheck /></span>
                                <p>Amazing feature one</p>
                            </div>
                            <div className="new_points1">
                                <span><FaCheck /></span>
                                <p>Wonderful feature two</p>
                            </div>
                            <div className="new_points1">
                                <span><FaCheck /></span>
                                <p>Priceless feature three</p>
                            </div>
                            <div className="new_points1">
                                <span><FaCheck /></span>
                                <p>Splended feature four</p>
                            </div>
                            <div className="btn_price">
                                <button>Try for free</button>
                            </div>
                        </div>
                    </div>
                    <div className="new_price1">
                        <h3>Pro</h3>
                        <h5>$12/ month</h5>
                        <p>Description of the tier list will go here, copy should be concise and impactful.</p>
                        <div className="line" style={{
                            border: '1px solid #D9D9D9',
                            marginTop: '15px'
                        }}></div>
                        <div className="new_price_points">
                            <p>Everything in the Free plan, plus</p>
                            <div className="new_points1">
                                <span><FaCheck /></span>
                                <p>Amazing feature one</p>
                            </div>
                            <div className="new_points1">
                                <span><FaCheck /></span>
                                <p>Wonderful feature two</p>
                            </div>
                            <div className="new_points1">
                                <span><FaCheck /></span>
                                <p>Priceless feature three</p>
                            </div>
                            <div className="new_points1">
                                <span><FaCheck /></span>
                                <p>Splended feature four</p>
                            </div>
                            <div className="new_points1">
                                <span><FaCheck /></span>
                                <p>Delightful feature five</p>
                            </div>

                            <div className="btn_price12">
                                <button onClick={handleOpen}>Subscribe Now</button>
                            </div>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                slots={{ backdrop: Backdrop }}
                                slotProps={{
                                    backdrop: {
                                        timeout: 500,
                                    },
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        width: 400,
                                        bgcolor: "background.paper",
                                        // border: "2px solid #000",
                                        boxShadow: 24,
                                        p: 4,
                                    }}>
                                        <div className="main_modal">
                                            <p>Signup successful</p>
                                            <img src={image254} alt="" />
                                            {/* <p>Ready for account setup</p> */}
                                            <div className="new_images">
                                                <img src={image255} alt="" />
                                                <p>Your purchase is completed set up your celetel account id and password in the next step</p>
                                            </div>
                                            <div className="btn1_setup">
                                                <Link to={'/accountsetup'}><button onClick={handleSetUpClick}>SET UP</button></Link>
                                            </div>
                                        </div>
                                    </Box>
                                </Fade>
                            </Modal>
                        </div>
                    </div>
                    <div className="new_price1">
                        <h3>Enterprise</h3>
                        <h5>Custom yearly billing only</h5>
                        <p>Description of the tier list will go here, copy should be concise and impactful.</p>
                        <div className="line" style={{
                            border: '1px solid #D9D9D9',
                            marginTop: '15px'
                        }}></div>
                        <div className="new_price_points">
                            <p>Everything in the Free plan, plus</p>
                            <div className="new_points1">
                                <span><FaCheck /></span>
                                <p>Amazing feature one</p>
                            </div>
                            <div className="new_points1">
                                <span><FaCheck /></span>
                                <p>Wonderful feature two</p>
                            </div>
                            <div className="new_points1">
                                <span><FaCheck /></span>
                                <p>Priceless feature three</p>
                            </div>
                            <div className="new_points1">
                                <span><FaCheck /></span>
                                <p>Splended feature four</p>
                            </div>
                            <div className="new_points1">
                                <span><FaCheck /></span>
                                <p>Delightful feature five</p>
                            </div>
                            <div className="btn_price13">
                                <button>Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
