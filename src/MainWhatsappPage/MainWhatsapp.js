import React, { Fragment } from 'react'
import './MainWhatsapp.css'
import { MdGamepad } from "react-icons/md";
import { FaInfo } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { BsCursorFill } from "react-icons/bs";
import { BiBrain } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import whatsappgraph from '../Assets/whatsappgraph.svg'
import { FaRegCheckCircle } from "react-icons/fa";
import logo4552 from '../Assets/Group 1000001785.svg'
import { PiUsersThree } from "react-icons/pi";
import { CiGlobe } from "react-icons/ci";
import { AiOutlineMessage } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import image3 from '../Assets/Frame 1686551832.svg'
import { Footer } from '../Footer/Footer'
import { PopupButton } from 'react-calendly';

export function MainWhatsapp() {

    const whatsApp1st = "https://celetelassets.s3.ap-south-1.amazonaws.com/gif/new+whatsapp.gif"
    const whatsapp2nd = "https://celetelassets.s3.ap-south-1.amazonaws.com/gif/phone+whatsapps.gif"


    return (
        <Fragment>
            <div className="main_sol_page_whatsapp">
                <div className="new_svg_imp">
                    <h1>Harness the world's most popular messaging app</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="149" height="250" viewBox="0 0 149 250" fill="none">
                        <path d="M161.102 1.30099C182.417 35.0728 193.905 76.4117 158.712 127.497C139.921 154.774 100.177 181.043 73.5403 166.58C55.3989 156.73 40.3229 130.542 66.9465 106.287C96.3464 79.5028 87.6042 140.768 84.8867 147.801C72.1678 180.719 50.02 208.914 19.7692 240.693C8.43741 252.597 18.3017 248.275 28.4118 241.699C37.1839 235.994 47.0473 229.391 54.3601 222.762C56.5905 220.741 39.9239 232.459 37.3685 234.365C26.4103 242.542 13.4829 251.793 7.37309 243.322C6.39161 241.961 -0.643535 228.101 2.77271 225.694C4.55024 224.441 17.9258 228.25 20.1543 228.374C34.6281 229.178 44.8447 226.426 59.9218 217.211" stroke="black" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <p>Bring conversations into your entire customer journey by scaling with WhatsApp Business -
                    get ready to start a conversation with your customers around the world!</p>
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

            <div className="main_head_whats">
                <img src={whatsApp1st} alt="" />
            </div>

            <div className="main_sol_page20">
                <h1>Harness the world's most popular messaging app</h1>
                <p>Bring conversations into your entire customer journey by scaling with WhatsApp Business -
                    get ready to start a conversation with your customers around the world!</p>
                <img src={image3} alt="" />
                <div className="btn2_1">
                    <PopupButton
                        url="https://calendly.com/celetel/30min"
                        rootElement={document.getElementById("root")}
                        text="Request a demo"
                        style={{ color: 'white' }}
                    />
                    <button>Explore</button>
                </div>
            </div>

            <div className="content_s">
                <div className="cards_row_tes1">
                    <div className="cards_para1">
                        <p><MdGamepad /></p>
                        <div className="cards_det1">
                            <h5>Cut operational costs</h5>
                            <span>With whatsapp pricing per conversation,not message its the perfect place for every one in the Business to chat with customers</span>
                        </div>
                    </div>
                    <div className="cards_para2">
                        <p><FaInfo /></p>
                        <div className="cards_det1">
                            <h5>Hassle-free integration</h5>
                            <span>Our quick and easy onboarding process will have you up and running in no time. start the process as quick as possible</span>
                        </div>
                    </div>
                    <div className="cards_para3">
                        <p><FaShareAlt /></p>
                        <div className="cards_det1">
                            <h5>Improve analytics</h5>
                            <span>Boosts campaign performance using powerful whatsapp business metrics to hlp you better understand with your customers</span>
                        </div>
                    </div>

                </div>
            </div>

            <div className="cus_conv">
                <div className="text_parag">
                    <h1>Easily create and manage customer conversations on WhatsApp</h1>
                    <p style={{ marginTop: '25px', fontSize: '16px' }}>Modernize your customer interactions with personalized conversations, new behavioral insights, and rich messaging capabilities.</p>

                    <h3 style={{ marginTop: '50px', fontSize: '25px' }}>Tap into WhatsApp's 2 billion global users and start quality conversations</h3>
                    <div className="new_text_drop">
                        <div className="text_pic_done">
                            <div className="drop_pic">
                                <p><FaWandMagicSparkles /></p>
                                <h6>Global reach</h6>
                            </div>
                            <div className="arrow">
                                <p><IoIosArrowDown /></p>
                            </div>
                        </div>
                        <div className="text_pic_done">
                            <div className="drop_pic">
                                <p><BsCursorFill /></p>
                                <h6>Increase campaign conversions</h6>
                            </div>
                            <div className="arrow">
                                <p><IoIosArrowDown /></p>
                            </div>
                        </div>
                        <div className="text_pic_done">
                            <div className="drop_pic">
                                <p><BiBrain /></p>
                                <h6>Build loyalty with timely notifications</h6>
                            </div>
                            <div className="arrow">
                                <p><IoIosArrowDown /></p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="text_img">
                    <img src={whatsapp2nd} alt="" />
                </div>
            </div>

            <div className="main_img">
                <div className="new_img_1">
                    <img src={whatsappgraph} alt="" />
                </div>
                <div className="text_img_2_d">
                    <h2>Analyse your data with our team to get satisfy your customer</h2>
                    <p>The average android whatsApp user spends around 19 hours on the app per month. WhatsApp Marketing as part of a well-rounded, compliant marketing strategy. So, why not give it a try and see how it can work for you?</p>
                    <div className="btn5">
                        <button> <FaRegCheckCircle />Define your Target Audience </button>
                        <button><FaRegCheckCircle />Use Visuals</button>
                    </div>
                </div>
            </div>

            <div className="solutions_bussi">
                <div className="sol_s">
                    <h1>Perfect Solution For Your Business</h1>
                    <p style={{ marginTop: '20px' }}>Providing cutting-edge strategies to help businesses thrive in the digital landscape <br /> and achieve growth objectives.
                    </p>
                </div>

                <div className="solutions_ment">
                    <div className="solutions_ment10">
                        <p><PiUsersThree /></p>
                        <div className="text_ment1">
                            <h4>Higher user engagement</h4>
                            <span>Do you know what's great about WhatsApp? People love spending time on it! That means if you're a business, you have a fantastic chance to connect with your customers and create a stronger bond with them.</span>
                        </div>
                    </div>
                    <div className="solutions_ment11">
                        <p><CiGlobe /></p>
                        <div className="text_ment1">
                            <h4>Global Reach</h4>
                            <span>With over 2 billion users worldwide, WhatsApp is one big party! And for businesses, that means you have the chance to reach people from all corners of the earth. It's like having a global megaphone at your fingertips.
                            </span>
                        </div>
                    </div>
                </div>


                <div className="solutions_ment">
                    <div className="solutions_ment10">
                        <p><AiOutlineMessage /></p>
                        <div className="text_ment1">
                            <h4>More Conversation</h4>
                            <span> That’s right, messages sent through WhatsApp have a 98% open rate and an average response time of just 90 seconds.
                                So, if you’re looking to branch out and explore new markets, WhatsApp is the perfect platform for you.
                            </span>
                        </div>
                    </div>
                    <div className="solutions_ment11">
                        <p><BsGraphUp /></p>
                        <div className="text_ment1">
                            <h4>Increased Customer satisfaction</h4>
                            <span>With over 2 billion users worldwide, WhatsApp is one big party! And for businesses, that means you have the chance to reach people from all corners of the earth. It's like having a global megaphone at your fingertips.
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="main_img1">
                <img src={logo4552} alt="" />
                <h2>Boost Your E-Commerce Success with WhatsApp Marketing Reach, Engage, and Convert Your Customers Seamlessly</h2>
            </div>
            <Footer />
        </Fragment>
    )
}
