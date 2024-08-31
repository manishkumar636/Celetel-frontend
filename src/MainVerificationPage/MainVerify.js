import { Fragment } from "react";
import "./MainVerify.css";
import React from "react";
import mobileverifyimage from "../Assets/mobileverifymain.svg";
import iconverify from "../Assets/Iconverify.svg";
import verifycircle from "../Assets/verifycircle.svg";
import { IoIosArrowRoundForward } from "react-icons/io";
import image43 from "../Assets/Group 1000001721.svg";
import work2 from "../Assets/Traditional Indian Diwali Folded Card in Cream Blue and Green Elegant Style (1) 1.svg";
import gif from "../Assets/Phone Indian.gif";
import mobile2ndVerify from "../Assets/mobileverify2nd.svg";
import { Footer } from "../Footer/Footer";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AddIcon from "@mui/icons-material/Add";
import ac1 from "../Assets/earth.svg";
import ac2 from "../Assets/ChatCircleDots-r.svg";
import ac3 from "../Assets/Chart.svg";
import { PopupButton } from "react-calendly";

//add coments

export function Mainverify() {
    const verifyMain =
        "https://celetelassets.s3.ap-south-1.amazonaws.com/gif/Flow+21%403x-50fps.gif";
    return (
        <Fragment>
            <div className="main_sol_page_verify">
                <div className="new_svg_impo">
                    <h1>Enhance security while maintaining continuous engagement.</h1>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="149"
                        height="250"
                        viewBox="0 0 149 250"
                        fill="none"
                    >
                        <path
                            d="M161.102 1.30099C182.417 35.0728 193.905 76.4117 158.712 127.497C139.921 154.774 100.177 181.043 73.5403 166.58C55.3989 156.73 40.3229 130.542 66.9465 106.287C96.3464 79.5028 87.6042 140.768 84.8867 147.801C72.1678 180.719 50.02 208.914 19.7692 240.693C8.43741 252.597 18.3017 248.275 28.4118 241.699C37.1839 235.994 47.0473 229.391 54.3601 222.762C56.5905 220.741 39.9239 232.459 37.3685 234.365C26.4103 242.542 13.4829 251.793 7.37309 243.322C6.39161 241.961 -0.643535 228.101 2.77271 225.694C4.55024 224.441 17.9258 228.25 20.1543 228.374C34.6281 229.178 44.8447 226.426 59.9218 217.211"
                            stroke="black"
                            stroke-width="2"
                            stroke-linecap="round"
                        />
                    </svg>
                </div>
                <p>
                    Boost application security with scalable multi-factor authentication
                    solutions designed for optimal conversion rates, all accessible via a
                    unified API!.
                </p>
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

            <div className="main_sms2">
                <div className="sub_sms3">
                    <img src={verifyMain} alt="" />
                </div>
            </div>

            <div className="main_sol_page9">
                <h1>Enhance security while maintaining continuous engagement.</h1>
                <p>
                    Boost application security with scalable multi-factor authentication
                    solutions designed for optimal conversion rates, all accessible via a
                    unified API!.
                </p>
                <img src={mobileverifyimage} alt="" />
                <div className="btn_verify">
                    <PopupButton
                        url="https://calendly.com/celetel/30min"
                        rootElement={document.getElementById("root")}
                        text="Request a demo"
                        style={{ color: 'white' }}
                    />
                    <button>Explore</button>
                </div>
            </div>

            <div className="build_trus_t">
                <div className="build_in_text">
                    <h1>Building Trust Through Authentication</h1>
                    <p>
                        Elevate security with one-time passwords (OTPs) that provide an
                        additional layer of authentication. Whether you're verifying user
                        identities, authorising transactions, or safeguarding data,
                        Celetel's OTPs are your trusty companions.
                    </p>
                    <button>
                        Learn more <IoIosArrowRoundForward />
                    </button>
                </div>
                <img src={image43} alt="" />
            </div>

            <div className="security_sms12">
                <img src={gif} alt="" />
                <div className="new_para_seq_12">
                    <div className="main_sec_verify">
                        <div className="para_seq12">
                            <h1>Why Choose Celetel for Verification?</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                                penatibus et magnis dis parturient montes, nascetur ridiculus.
                            </p>
                        </div>
                        <div className="sub_container">
                            <div className="sub_ver1">
                                <p>
                                    <img src={iconverify} alt="" />
                                </p>
                                <h1>Global Reach</h1>
                                <span>
                                    Our services are accessible worldwide, enabling you to verify
                                    users and transactions on a global scale.
                                </span>
                            </div>
                            <div className="sub_ver1">
                                <p>
                                    <img src={iconverify} alt="" />
                                </p>
                                <h1>Customization</h1>
                                <span>
                                    We understand that every business is unique. Celetel's
                                    verification solutions are customisable to align with your
                                    specific requirements.
                                </span>
                            </div>
                            <div className="sub_ver2">
                                <p>
                                    <img src={iconverify} alt="" />
                                </p>
                                <h1>Support</h1>
                                <span>
                                    Celetel offers dedicated support to ensure your verification
                                    processes run smoothly. We're here to assist you at every
                                    step.
                                </span>
                            </div>
                            <div className="sub_ver2">
                                <p>
                                    <img src={iconverify} alt="" />
                                </p>
                                <h1>Scalability</h1>
                                <span>
                                    {" "}
                                    Whether you're a startup or an enterprise, Celetel's
                                    verification services can scale with your growing business
                                    needs.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="security_sms13">
                <img src={work2} alt="" />
                <div className="para_seq13">
                    <img src={verifycircle} alt="" />
                    <h1>
                        Looking for more? Our Conversation API extends engagement to the
                        next level!
                    </h1>
                    <p style={{ marginTop: "20px", color: "#8A8A8A", fontWeight: "500" }}>
                        Connect with customers on the most widely used messaging channels
                        using a unified interface! SMS, WhatsApp, Facebook Messenger, Viber,
                        and more – our Conversation API covers it all.
                    </p>
                    <button><a href="https://calendly.com/celetel/30min">Request a demo</a></button>
                </div>
            </div>

            <div className="main_achieve">
                <div className="new_para_ver">
                    <h1>
                        Achieve The Highest Delivery Success Rate Through Phone Call
                        Verification{" "}
                    </h1>
                    <p>
                        An enim nullam tempor sapien gravida donec enim ipsum porta justo
                        congue magna at pretium
                    </p>
                    <div className="main_new_comm">
                        <div className="new_comm1">
                            <img src={ac1} alt="" />
                            <div>
                                <h3>Global Reach On Any Device</h3>
                                <span>
                                    Accessible on all devices, call verification delivers OTPS
                                </span>
                            </div>
                        </div>
                        <div className="new_comm2">
                            <img src={ac2} alt="" />
                            <div>
                                <h3>Powerful Communication</h3>
                                <span>
                                    Boost security with an extra layer for user identification
                                </span>
                            </div>
                        </div>
                        <div className="new_comm3">
                            <img src={ac3} alt="" />
                            <div>
                                <h3>Effortless Compliance</h3>
                                <span>Verify any number inclusively</span>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={mobile2ndVerify} alt="" />
            </div>

            <div className="faq_s">
                <h1>Frequently Asked Questions</h1>
                <p>Everything you need to know about the product and billing </p>
            </div>

            <div className="according_sms">
                <Accordion sx={{ marginBottom: "15px" }} elevation={0}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Is there a free trial available?
                    </AccordionSummary>
                    <AccordionDetails>
                        Yes, you can try us for free for 30 days. If you want, we’ll provide
                        you with a free, personalized 30-minute onboarding call to get you
                        up and running as soon as possible.
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginBottom: "15px" }} elevation={0}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                    >
                        Can I change my plan later?
                    </AccordionSummary>
                    <AccordionDetails>
                        Yes, you can easily upgrade or downgrade your plan at any time to
                        better suit your needs
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginBottom: "15px" }} elevation={0}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel3-content"
                        id="panel3-header"
                    >
                        What is your cancellation policy?
                    </AccordionSummary>
                    <AccordionDetails>
                        Our cancellation policy allows for free cancellations up to 24 hours
                        before your scheduled appointment, ensuring flexibility and
                        convenience for our valued customers.
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginBottom: "15px" }} elevation={0}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel4-content"
                        id="panel4-header"
                    >
                        How does billing work?
                    </AccordionSummary>
                    <AccordionDetails>
                        Billing is based on your chosen plan and usage, with transparent
                        monthly invoices reflecting your service consumption.
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginBottom: "15px" }} elevation={0}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel5-content"
                        id="panel5-header"
                    >
                        How do I change my email account?
                    </AccordionSummary>
                    <AccordionDetails>
                        To change your account email, simply navigate to the settings
                        section of your profile, locate the 'Email' option, and follow the
                        prompts to update it accordingly
                    </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginBottom: "15px" }} elevation={0}>
                    <AccordionSummary
                        expandIcon={<AddIcon />}
                        aria-controls="panel6-content"
                        id="panel6-header"
                    >
                        Can other info be added to an invoice?
                    </AccordionSummary>
                    <AccordionDetails>
                        Yes, additional information such as payment terms, Tax details, and
                        special instructions can be included on an invoice to meet your
                        specific needs.
                    </AccordionDetails>
                </Accordion>
            </div>
            <Footer />
        </Fragment>
    );
}
