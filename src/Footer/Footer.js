import './Footer.css'
import React, { Fragment } from 'react'
import logo1 from '../Assets/main_logo.svg';
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";

export function Footer() {
    return (
        <Fragment>
            <div className="main_footer">
                <div className="sub_footer">
                    <div className="logo_clas_f">
                        <img src={logo1} alt="" />
                        <p>Berger Tower, Sector 16B, Noida, Uttar Pradesh 201301</p>
                        <br />
                        <span>+91- 9708110811</span>
                        <p>hey@celetel.com</p>
                    </div>

                    <div className='sub_foot'>
                        <div className='sub_2_foot'>
                            <a href="#12">Product</a>
                            <a href="/smssolutions">Messaging</a>
                            <a href="/voicesolutions">Voice</a>
                            <a href="https://docs.celetel.com/">API Docs</a>
                        </div>
                        <div className='sub_20_foot'>
                            <a href="#12">Product</a>
                            <a href="/smssolutions">Message</a>
                            <a href="/connectrcs">RCS</a>
                            <a href="/connectwhatsapp">Whatsapp</a>
                            <a href="/smssolutions">SMS</a>
                        </div>
                        <div className='sub_2_foot'>
                            <a href="#12">Company</a>
                            <a href="#12">About us</a>
                            {/* <a href="#12">Product</a> */}
                            <a href="/prices">Pricing</a>
                            <a href="/contact">Contact us</a>
                        </div>
                        <div className='sub_20_foot'>
                            <a href="#12">Company</a>
                            <a href="#12">Product</a>
                            <a href="/prices">Pricing</a>
                            <a href="/contact">Contact us</a>
                        </div>
                        <div className='sub_2_foot'>
                            <a href="#12">Social</a>
                            <a href="https://www.instagram.com/celetel_technologies/">Instagram</a>
                            <a href="https://www.linkedin.com/company/celetelasia/" target='blank'>LinkedIn</a>
                            <a href="https://www.facebook.com/profile.php?id=61555329824822&mibextid=2JQ9oc">Facebook</a>
                        </div>
                    </div>
                    <div className="new_foot">
                        <div className='sub_3_foot'>
                            <a href="#12">Legal</a>
                            <a href="https://www.termsandconditionsgenerator.com/live.php?token=vH9ZUTYbGZ12HUCBkAlz14mJNIHxztKE">Terms</a>
                            <a href="https://www.freeprivacypolicy.com/live/2c741ce9-ec32-4e34-a9fc-23ea7b3568c6">Privacy </a>
                            <a href="https://www.freeprivacypolicy.com/live/4430f184-9ac4-4eb1-8462-fef97791c522">Cookies</a>
                            {/* <a href="#12">Licenses</a> */}
                        </div>

                        <div className='sub_20_foot'>
                            <a href="#12">Legal</a>
                            <a href="https://www.termsandconditionsgenerator.com/live.php?token=vH9ZUTYbGZ12HUCBkAlz14mJNIHxztKE">Terms & Conditions</a>
                            <a href="https://www.freeprivacypolicy.com/live/2c741ce9-ec32-4e34-a9fc-23ea7b3568c6">Privacy </a>
                            <a href="https://www.freeprivacypolicy.com/live/4430f184-9ac4-4eb1-8462-fef97791c522">Cookies</a>
                        </div>
                        <div className='sub_2_foot1'>
                            <span>GET IN TOUCH</span>
                            <p><FaTwitter /></p>
                            <p><FaLinkedin href="https://www.linkedin.com/company/celetelasia/" target='blank' /></p>
                            <p><FaFacebook href='https://www.facebook.com/profile.php?id=61555329824822&mibextid=2JQ9oc' /></p>
                        </div>
                    </div>


                </div>
                <div className="last_foot">
                    &copy;2023 Celetel, All right reserved.
                    <div className="icons_ref">
                        <p><FaTwitter /></p>
                        <p><FaLinkedin href='https://www.linkedin.com/company/celetelasia/' /></p>
                        <p><FaFacebook /></p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
