import React, { Fragment, useState } from 'react'
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { IoMenuOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import imagelogo from '../Assets/main_logo.svg'
import imagelogo1 from '../Assets/mailnav.svg'
import imagelogo2 from '../Assets/voicenav.svg'
import imagelogo3 from '../Assets/rcsnav.svg'
import imagelogo4 from '../Assets/verifynav.svg'
import imagelogo5 from '../Assets/whatsappnav.svg'
import navsms from '../Assets/mainsms.svg'
import navrcs from '../Assets/mainrcs.svg'
import navwhatsapp from '../Assets/mainwhatsapp.svg'
import navvoice from '../Assets/mainvoice.svg'
import navverify from '../Assets/mainverify.svg'
import svgimage from '../Assets/Frame 1686551916.svg'
import { PopupButton } from "react-calendly";


export function Navbar() {


    const navigateHome = useNavigate();
    const [isSidebar, setSidebar] = useState(false);

    function handleClick() {
        navigateHome('/')
        setSidebar(false);
    }

    // const navigateLogin = useNavigate();

    // function handleClickLogin() {
    //     navigateLogin('/login');
    //     setSidebar(false);
    // }


    function handleToggleSidebar() {
        setSidebar(!isSidebar);
    }

    const [isProductDropdownOpen, setProductDropdownOpen] = useState(false);

    function toggleProductDropdown() {
        setProductDropdownOpen(!isProductDropdownOpen);
    }

    function closeDrawer() {
        setSidebar(false);
    }

    // ...............................

    const [openPricing, setOpenPricing] = useState(false);
    const [hoveredProduct, setHoveredProduct] = useState(null);


    const handleButtonClick = () => {
        setOpenPricing(!openPricing);
    };

    const handleProductHover = (product) => {
        setHoveredProduct(product);
    };

    function handleClickLinkInsideAnimatePresence() {
        // Close the product box when a link inside AnimatePresence is clicked
        setOpenPricing(false);
        // Add any other logic you need for this link
    }
    const [openPricingIcon, setOpenPricingIcon] = useState(false);

    const togglePricing = () => {
        setOpenPricingIcon(!openPricingIcon);
    };
    const defaultContent = (
        <>
            <img className='default' src={svgimage} alt="" />
        </>
    );


    return (
        <Fragment>
            <div className="main_nav">
                <div className="sub_nav">
                    <img onClick={handleClick} src={imagelogo} alt="" />
                    <ul>
                        <Link to={'/'}><li>Home</li></Link>
                        <div className="pricing_main">
                            <div className="pricing_trigger"
                                onClick={handleButtonClick}>
                                <li className="text_price" onClick={togglePricing}>
                                    Products
                                    <FaChevronDown
                                        style={{
                                            transition: 'transform 0.3s ease-in-out',
                                            transform: openPricingIcon ? 'rotate(180deg)' : 'rotate(0)',
                                        }}
                                    />
                                    <span style={{ transform: openPricing ? "scaleX(1)" : "scaleX(0)" }} />
                                </li>
                            </div>
                        </div>
                        <Link to={'/prices'}><li>Pricing</li></Link>
                    </ul>
                </div>

                <div className="btn1">
                    {/* <button onClick={handleClickLogin}>Log in</button>
                    <Link to={'/nextstep'}><button>Sign up</button></Link> */}
                    {/* <button> <Link to="">Request a demo</Link></button> */}
                    <PopupButton
                        url="https://calendly.com/celetel/30min"
                        rootElement={document.getElementById("root")}
                        text="Request a demo"
                        style={{ color: 'white' }}
                    />
                </div>

                <div className="responsive_m">
                    <Link to={'/contact'}><button>Contact</button></Link>
                    <p onClick={handleToggleSidebar}><IoMenuOutline /></p>
                </div>

                <Drawer anchor="right" open={isSidebar} onClose={handleToggleSidebar}
                    PaperProps={{ style: { width: '60%', maxWidth: 800 } }}>
                    <List>
                        <ListItem>
                            <Link to={'/'} onClick={closeDrawer}>
                                <p style={{ color: 'black', fontWeight: '500' }}>Home</p></Link>
                        </ListItem>
                        <ListItem>
                            <p style={{ color: 'black', fontWeight: '500' }} onClick={toggleProductDropdown}>
                                Product <FaChevronDown />
                                {isProductDropdownOpen && (
                                    <ul className="dropdown">
                                        <Link to={'/smssolutions'} onClick={closeDrawer}><li>SMS</li></Link>
                                        <Link to={'/connectwhatsapp'} onClick={closeDrawer}><li>WhatsApp</li></Link>
                                        <Link to={'/connectrcs'} onClick={closeDrawer}><li>RCS</li></Link>
                                        <Link to={'/voicesolutions'} onClick={closeDrawer}><li>Voice</li></Link>
                                        <Link to={'/verifications'} onClick={closeDrawer}><li>Verification</li></Link>
                                    </ul>
                                )}
                            </p>
                        </ListItem>

                        <ListItem>
                            <Link to={'/prices'} onClick={closeDrawer}>
                                <p style={{ color: 'black', fontWeight: '500' }}>Pricing</p>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link to={'/contact'} onClick={closeDrawer}>
                                <p style={{ color: 'black', fontWeight: '500' }}>Contact</p>
                            </Link>
                        </ListItem>
                        {/* <ListItem>
                            <Link to={'/login'} onClick={closeDrawer}>
                                <p style={{ color: 'black', fontWeight: '500' }}>Login</p></Link>
                        </ListItem>
                        <ListItem>
                            <Link to={'/nextstep'} onClick={closeDrawer}>
                                <p style={{ color: 'black', fontWeight: '500' }}>Sign up</p></Link>
                        </ListItem> */}
                        <div className="btn_mobile_nav">
                            <button>
                                <PopupButton
                                    url="https://calendly.com/celetel/30min"
                                    rootElement={document.getElementById("root")}
                                    text="Request a demo"
                                    style={{ color: 'white' }}
                                />
                            </button>
                        </div>
                    </List>
                </Drawer>
            </div>

            <AnimatePresence>
                {openPricing && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 15 }}
                        style={{ translateX: "-50%" }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute_centered"
                    >
                        <div className="custom_container">
                            <div className="inside_container">
                                <h1>OUR PRODUCTS</h1>
                                <div className="products_container">
                                    <div className="main_new_comm_products">
                                        <div className="new_comm1_products"
                                            onMouseEnter={() => handleProductHover('SMS')}>
                                            <img src={imagelogo1} alt="" />
                                            <div>
                                                <Link to={'/smssolutions'} style={{ textDecoration: "none" }} onClick={handleClickLinkInsideAnimatePresence}><li>SMS</li></Link>
                                                <span>Instantly connect worldwide with prompt delivery and global coverage</span>
                                            </div>
                                        </div>
                                        <div className="new_comm2_products"
                                            onMouseEnter={() => handleProductHover('RCS')}>
                                            <img src={imagelogo3} alt="" />
                                            <div>
                                                <Link to={'/connectrcs'} style={{ textDecoration: "none" }} onClick={handleClickLinkInsideAnimatePresence}><li>RCS</li></Link>
                                                <span>Elevate messaging with interactive features and rich media engagement.</span>
                                            </div>
                                        </div>
                                        <div className="new_comm3_products"
                                            onMouseEnter={() => handleProductHover('WhatsApp')}>
                                            <img src={imagelogo5} alt="" />
                                            <div>
                                                <Link to={'/connectwhatsapp'} style={{ textDecoration: "none" }} onClick={handleClickLinkInsideAnimatePresence}><li>WhatsApp</li></Link>
                                                <span>Engage customers directly and securely on their preferred platform.</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main_new_comm_products">
                                        <div className="new_comm1_products"
                                            onMouseEnter={() => handleProductHover('Voice')}
                                        >
                                            <img src={imagelogo2} alt="" />
                                            <div>
                                                <Link to={'/voicesolutions'} style={{ textDecoration: "none" }} onClick={handleClickLinkInsideAnimatePresence}><li>Voice</li></Link>
                                                <span>Deliver crystal-clear quality and scalable infrastructure for seamless communication</span>
                                            </div>
                                        </div>
                                        <div className="new_comm2_products"
                                            onMouseEnter={() => handleProductHover('Verifications')}
                                        >
                                            <img src={imagelogo4} alt="" />
                                            <div>
                                                <Link to={'/verifications'} style={{ textDecoration: "none" }} onClick={handleClickLinkInsideAnimatePresence}><li>Verifications</li></Link>
                                                <span>Ensure compliance and security with secure identity verification and two-factor authentication.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="celetel_content">
                                <h1>CELETEL</h1>
                                {hoveredProduct ? (
                                    <ul>
                                        <li>
                                            {hoveredProduct === 'SMS' && (
                                                <Fragment>
                                                    <div className="hover_products">
                                                        <img src={navsms} alt="" />
                                                        <div className="products_desc">
                                                            <ul>
                                                                <li>
                                                                    <span>Instant Communication:</span> Providing innovative telecommunication solutions.
                                                                </li>
                                                                <li>
                                                                    <span>Global Reach:</span> Connect worldwide for seamless communication across borders.
                                                                </li>
                                                                <li>
                                                                    <span>Customised Solutions:</span> Tailor campaigns with personalised content for maximum.
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </Fragment>
                                            )}
                                        </li>

                                        <li>
                                            {hoveredProduct === 'RCS' && (
                                                <Fragment>
                                                    <div className="hover_products">
                                                        <img src={navrcs} alt="" />
                                                        <div className="products_desc">
                                                            <ul>
                                                                <li>
                                                                    <span>Enhanced Messaging: </span>Elevate communication with interactive features.
                                                                </li>
                                                                <li>
                                                                    <span>Brand Engagement:</span> Foster loyalty with rich media and interactive buttons.
                                                                </li>
                                                                <li>
                                                                    <span>Analytics:</span> Gain insights into campaign performance.
                                                                </li>
                                                            </ul>                                                    </div>

                                                    </div>
                                                </Fragment>
                                            )}
                                        </li>
                                        <li>
                                            {hoveredProduct === 'WhatsApp' && (
                                                <Fragment>
                                                    <div className="hover_products">
                                                        <img src={navwhatsapp} alt="" />
                                                        <div className="products_desc">
                                                            <ul>
                                                                <li>
                                                                    <span>Customer Engagement:</span>Interact directly on WhatsApp for convenience.
                                                                </li>
                                                                <li>
                                                                    <span>Security:</span> Ensure privacy with end-to-end encryption.
                                                                </li>
                                                                <li>
                                                                    <span>Automation:</span>Streamline workflows with WhatsApp integration.
                                                                </li>
                                                            </ul>                                                         </div>

                                                    </div>
                                                </Fragment>
                                            )}
                                        </li>
                                        <li>
                                            {hoveredProduct === 'Voice' && (
                                                <Fragment>
                                                    <div className="hover_products">
                                                        <img src={navvoice} alt="" />
                                                        <div className="products_desc">
                                                            <ul>
                                                                <li>
                                                                    <span>Clear Communication</span>Ensure superior voice quality for domestic and international calls.
                                                                </li>
                                                                <li>
                                                                    <span>Scalability:</span> Easily scale your infrastructure to meet demand with flexible deployment.
                                                                </li>
                                                                <li>
                                                                    <span>Advanced Features:</span>Access IVR, call recording, and analytics to optimise voice.
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </Fragment>
                                            )}
                                        </li>
                                        <li>
                                            {hoveredProduct === 'Verifications' && (
                                                <Fragment>
                                                    <div className="hover_products">
                                                        <img src={navverify} alt="" />
                                                        <div className="products_desc">
                                                            <ul>
                                                                <li>
                                                                    <span>Identity Verification:</span>Securely verify user identities, reducing fraud.
                                                                </li>
                                                                <li>
                                                                    <span>Two-Factor Authentication:</span> Enhance account security with an extra layer of protection.
                                                                </li>
                                                                <li>
                                                                    <span>Flexible Integration:</span> Seamlessly integrate verification services into your platforms for a smoother user experience.
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </Fragment>
                                            )}
                                        </li>
                                    </ul>
                                ) : (
                                    defaultContent
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Fragment>
    )
}
