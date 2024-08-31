import './MainVoice.css'
import React, { Fragment } from 'react'
import image2 from '../Assets/communication _ voice, message, memo, record, microphone, conversation 1.svg'
import { BiMessageDetail } from "react-icons/bi";
import { SlGraph } from "react-icons/sl";
import { LuUsers } from "react-icons/lu";
import { FaPencil } from "react-icons/fa6";
import { PiDropboxLogo } from "react-icons/pi";
import { IoIosSettings } from "react-icons/io";
import image3 from '../Assets/voicemain.svg'
import image4 from '../Assets/Group 1000001797.svg'
import { Footer } from '../Footer/Footer'
import Rcs1 from "../Assets/IconRCS.svg";
import Rcs2 from "../Assets/iconRCS2.svg";
import Rcs3 from "../Assets/IconRCS3.svg";
import { PopupButton } from 'react-calendly';

export function MainVoice() {

    const voicemain = "https://celetelassets.s3.ap-south-1.amazonaws.com/gif/Flow+23%403x-50fps.gif"

    return (
        <Fragment>
            <div className="main_sol_page10">
                <div className="new_svg_imp_voice">
                    <h1>A complete voice solution from a single provider</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="149" height="250" viewBox="0 0 149 250" fill="none">
                        <path d="M161.102 1.30099C182.417 35.0728 193.905 76.4117 158.712 127.497C139.921 154.774 100.177 181.043 73.5403 166.58C55.3989 156.73 40.3229 130.542 66.9465 106.287C96.3464 79.5028 87.6042 140.768 84.8867 147.801C72.1678 180.719 50.02 208.914 19.7692 240.693C8.43741 252.597 18.3017 248.275 28.4118 241.699C37.1839 235.994 47.0473 229.391 54.3601 222.762C56.5905 220.741 39.9239 232.459 37.3685 234.365C26.4103 242.542 13.4829 251.793 7.37309 243.322C6.39161 241.961 -0.643535 228.101 2.77271 225.694C4.55024 224.441 17.9258 228.25 20.1543 228.374C34.6281 229.178 44.8447 226.426 59.9218 217.211" stroke="black" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <p>Implementing IVR solutions is indispensable for enterprises
                    aspiring to augment their customer service capabilities.
                    These sophisticated systems enable streamlined and
                    seamless customer interactions through voice and touch-
                    tone inputs.</p>
                <div className="btn2">
                    <PopupButton
                        url="https://calendly.com/celetel/30min"
                        rootElement={document.getElementById("root")}
                        text="Request a demo"
                        style={{ color: 'white' }}
                    />
                    <button>Explore</button>
                </div>
            </div>
            <div className="main_sms1">
                <div className="sub_sms1">
                    <img src={voicemain} alt="" />
                </div>
            </div>


            <div className="main_sol_page12">
                <h1>A complete voice solution from a single provider</h1>
                <p>With celetel you get unsurpassed quality through a single connection — with limitless reach.</p>
                <div className="main_img_voice">
                    <img src={voicemain} alt="" />
                </div>
                <div className="btn_voice">
                    <PopupButton
                        url="https://calendly.com/celetel/30min"
                        rootElement={document.getElementById("root")}
                        text="Request a demo"
                        style={{ color: 'white' }}
                    />
                    <button>Explore</button>
                </div>
            </div>

            <div className="our_goal">
                <div className="goal_para">
                    <h1>We Are Focus On Your Ultimate Goal</h1>
                    <p>An enim nullam tempor sapien gravida donec enim ipsum
                        porta justo congue magna at pretium</p>

                    <div className="new_1_goal_fea">
                        <div className="goal_new_fea1">
                            <img src={Rcs1} alt="" />
                            <div>
                                <h4>Automatic time tracking</h4>
                                <p style={{ marginTop: "10px" }}>
                                    Time Tracking is never been easier.{" "}
                                </p>
                            </div>
                        </div>
                        <div className="goal_new_fea1">
                            <img src={Rcs2} alt="" />
                            <div>
                                <h4>Customizable dashboard</h4>
                                <p style={{ marginTop: "10px" }}>
                                    Time Tracking is never been easier.
                                </p>
                            </div>
                        </div>
                        <div className="goal_new_fea1">
                            <img src={Rcs3} alt="" />
                            <div>
                                <h4>Statistics retroactively</h4>
                                <p style={{ marginTop: "10px" }}>
                                    Time Tracking is never been easier.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub_goal">
                    <img src={image2} alt="" />
                </div>
            </div>

            <div className="head_transform_img">
                <h1>Transform Your Business with Voice Solutions</h1>
                <p style={{ marginTop: '15px' }}>Experience the power of voice solutions and revolutionize your business. enhance customer <br /> experience, and strengthen your brand image with our cutting-edge voice solutions.</p>
            </div>
            <div className="speciality_voice">
                <div className="cards_voice">
                    <p style={{ backgroundColor: '#E9EDFF', padding: '15px 15px' }}><BiMessageDetail style={{ color: '#5093FB' }} /></p>
                    <h5>Enhanced Customer</h5>
                    <p>Personalized interactions, seamless navigation, and 24/7 accessibility.
                    </p>
                </div>
                <div className="cards_voice">
                    <p style={{ backgroundColor: '#E9EDFF', padding: '15px 15px' }}><SlGraph style={{ color: '#5093FB' }} /></p>
                    <h5>Cost Savings</h5>
                    <p>Automation, streamlined processes, and reduced manual intervention.
                    </p>
                </div>
                <div className="cards_voice">
                    <p style={{ backgroundColor: '#E9EDFF', padding: '15px 15px' }}><LuUsers style={{ color: '#5093FB' }} /></p>
                    <h5>Scalability & Flexibility
                    </h5>
                    <p>Easy adaptation to business growth and peak call volumes.
                    </p>
                </div>
                <div className="cards_voice">
                    <p style={{ backgroundColor: '#E9EDFF', padding: '15px 15px' }}><FaPencil style={{ color: '#5093FB' }} /></p>
                    <h5>Increased Productivity
                    </h5>
                    <p>Efficient call management, reduced handling time, and real-time customer information.</p>
                </div>
                <div className="cards_voice">
                    <p style={{ backgroundColor: '#E9EDFF', padding: '15px 15px' }}><PiDropboxLogo style={{ color: '#5093FB' }} /></p>
                    <h5>Data-Driven Insights</h5>
                    <p>Valuable analytics for decision- making and business growth opportunities</p>
                </div>
                <div className="cards_voice">
                    <p style={{ backgroundColor: '#E9EDFF', padding: '15px 15px' }}><IoIosSettings style={{ color: '#5093FB' }} /></p>
                    <h5>build Brand Image
                    </h5>
                    <p>Consistent branding, professional voice prompts, and improved customer recognition</p>
                </div>
            </div>

            <div className="image_p">
                <img src={image3} alt="" />
            </div>

            <div className="text_area_s">
                <div className="text_1">
                    <h2>How IVR solutions help your business grow?</h2>
                    <p style={{ marginTop: '15px' }}>Implementing IVR solutions is indispensable for enterprises aspiring to augment their customer service capabilities. These sophisticated systems enable streamlined and seamless customer interactions through voice and touch-tone inputs, leading to reduced wait times and automated handling of repetitive tasks.
                    </p>
                </div>
                <div className="text_1">
                    <h2>How OBD solutions help your business grow? </h2>
                    <p style={{ marginTop: '15px' }}>Our proactive communication tool that allows us to reach out to customers efficiently. With OBD, we deliver important messages, gather feedback, and offer personalized support. Stay connected and informed with our automated outbound calls.Experience the power of OBD as we deliver timely updates and valuable information right to your phone.
                    </p>
                </div>
            </div>
            <div className="max_bus">
                <div className="img_bus_max">
                    <img src={image4} alt="" />
                </div>
                <div className="text_para">
                    <h2>Maximize Your Business Reach Customer Interaction with IVR Calling Enhance , Connect, and Convert Your Audience Effortlessly</h2>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
