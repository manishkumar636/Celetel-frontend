import React, { Fragment } from 'react'
import './MainSms.css'
import image5 from '../Assets/Time Circle.svg'
import image6 from '../Assets/Chat Bubble.svg'
import image7 from '../Assets/Chart.svg'
import sms from '../Assets/sms-notification 1.svg'
import work from '../Assets/a message on a smartphone.svg'
import icon1 from '../Assets/Icon1sms.svg'
import icon2 from '../Assets/Icon2sms.svg'
import icon3 from '../Assets/Icon3sms.svg'
import icon5 from '../Assets/Icon5sms.svg'
import icon6 from '../Assets/Icon4sms.svg'
import icon4 from '../Assets/Icon6sms.svg'
import { Footer } from '../Footer/Footer'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import { PopupButton } from 'react-calendly'


export function MainSms() {

    const smssolutions = "https://celetelassets.s3.ap-south-1.amazonaws.com/gif/Flow+16%403x-25fps.gif"
    return (
        <Fragment>
            <div className="main_sol_page">
                <div className="new_h1_and_svg">
                    <h1>SMS Solutions : Where Connectivity Begins</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="149" height="250" viewBox="0 0 149 250" fill="none">
                        <path d="M161.102 1.30099C182.417 35.0728 193.905 76.4117 158.712 127.497C139.921 154.774 100.177 181.043 73.5403 166.58C55.3989 156.73 40.3229 130.542 66.9465 106.287C96.3464 79.5028 87.6042 140.768 84.8867 147.801C72.1678 180.719 50.02 208.914 19.7692 240.693C8.43741 252.597 18.3017 248.275 28.4118 241.699C37.1839 235.994 47.0473 229.391 54.3601 222.762C56.5905 220.741 39.9239 232.459 37.3685 234.365C26.4103 242.542 13.4829 251.793 7.37309 243.322C6.39161 241.961 -0.643535 228.101 2.77271 225.694C4.55024 224.441 17.9258 228.25 20.1543 228.374C34.6281 229.178 44.8447 226.426 59.9218 217.211" stroke="black" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </div>
                <p>Welcome to Celetel's SMS Solutions, where we transform simple
                    text messages into powerful communication tools that connect
                    businesses with their audience like never before. With our suite of
                    SMS services, we provide the foundation for engaging, effective,
                    and efficient messaging strategies.</p>
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

            <div className="main_sms">
                <div className="sub_sms_img">
                    <img src={smssolutions} alt="" />
                </div>
                <div className="sub_sms_message">
                    <div className="cards_interaction">
                        <img src={image5} alt="" />
                        <p>Peerless Audience Interaction</p>
                    </div>
                    <div className="cards_interaction">
                        <img src={image6} alt="" />
                        <p>Superior SMS Delivery Excellence</p>
                    </div>
                    <div className="cards_interaction">
                        <img src={image7} alt="" />
                        <p>Endless Worldwide Growth Potential</p>
                    </div>
                </div>
            </div>

            <div className="main_sol_page1">
                <h1>SMS Solutions : Where Connectivity Begins</h1>
                <p>Welcome to Celetel's SMS Solutions, where we transform simple
                    text messages into powerful communication tools that connect
                    businesses with their audience like never before.</p>
                <img src={smssolutions} alt="" />
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

            <div className="why_to_all">
                <h2>Why Celetel SMS : Empower Your Reach</h2>
                <p>Celetel SMS is not just about sending messages; it's about unlocking the full potential of your communication strategy. With Celetel as your SMS partner, you empower your reach in ways that go beyond boundaries.</p>

                <p>Celetel SMS is not just about sending messages; it's about unlocking the full potential of your communication strategy.</p>
            </div>

            <div className="speciality_sms">
                <div className="cards_sms">
                    <img src={icon1} alt="" />
                    <h5>Reliability</h5>
                    <p>Count on Celetel for reliable message delivery, every time.</p>
                </div>
                <div className="cards_sms">
                    <img src={icon2} alt="" />
                    <h5>Global Network</h5>
                    <p>Reach audiences worldwide with our expansive network.</p>
                </div>
                <div className="cards_sms">
                    <img src={icon3} alt="" />
                    <h5>Innovation</h5>
                    <p>Stay ahead with cutting-edge SMS solutions.</p>
                </div>
                <div className="cards_sms">
                    <img src={icon4} alt="" />
                    <h5>Tailored Solutions</h5>
                    <p> We tailor our services to meet
                        your unique needs.</p>
                </div>
                <div className="cards_sms">
                    <img src={icon5} alt="" />
                    <h5>Security</h5>
                    <p>Trust in our secure messaging
                        environment.</p>
                </div>
                <div className="cards_sms">
                    <img src={icon6} alt="" />
                    <h5>Quality Assurance</h5>
                    <p>Expect nothing less than quality and excellence.</p>
                </div>
            </div>

            <div className="security_sms_sms">
                <div className="para_seq">
                    <h1>Elevate Security with Verification</h1>
                    <p style={{ marginTop: '20px', color: '#8A8A8A', fontWeight: '500' }}>Celetel's Verification service ensures seamless and secure
                        authentication. We deliver one-time passwords (OTPs) globally,
                        backed by our extensive network, and offer flexible Multi-Factor
                        Authentication options tailored to your needs. Partner with us to
                        fortify your security effortlessly.</p>
                </div>
                <img src={work} alt="" />
            </div>

            <div className="sms_inte">
                <img src={sms} alt="" />
                <div className="inte_sms_inner">
                    <h1>Seamless SMS Integration in a Snap</h1>
                    <p style={{
                        marginTop: '20px'
                    }}>Join us and effortlessly integrate SMS with our user-friendly API.
                        No credit card needed - sign up, get a test number, and start
                        free testing today. Comprehensive documentation available for
                        Java, PHP, Node, .NET Core, and REST API. Boost your business
                        confidently with us.</p>

                    <button><a href="https://calendly.com/celetel/30min">Request a demo</a></button>
                </div>
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
    )
}
