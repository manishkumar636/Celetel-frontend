import { Fragment, useState } from "react";
import "./Contact.css";
import React from "react";
import { BiMessageDetail } from "react-icons/bi";
import { Footer } from "../Footer/Footer";
import { contactUs } from "../Service/auth.service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { PulseLoader } from "react-spinners";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);

    const handleContactUs = async (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.phone ||
            !formData.projectType ||
            !formData.message
        ) {
            toast.error("Please fill all required fields");
            return;
        }
        setLoading(true);
        try {
            const response = await contactUs(formData);
            if (response.success === true) {
                toast.success(response.msg, {
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
                setLoading(false)
                console.log(response.data);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    projectType: "",
                    message: ""
                });
            } else {
                toast.error("Please try again");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const handleContactChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <Fragment>
            <div className="main_con">
                <div className="form_content">
                    <div className="side_form_content">
                        <div className="contact_head">
                            <h1>Contact Us</h1>
                            <p>
                                Ready to accelerate your business's transformation.We're at your
                                service!
                            </p>
                            <div className="icons_cont">
                                <p>
                                    <a href="https://www.instagram.com/celetel_technologies/">
                                        <FaInstagram />
                                    </a>
                                </p>
                                <p>
                                    <a href="https://www.linkedin.com/company/celetelasia/"><FaLinkedin /></a>
                                </p>
                                <p>
                                    <a href="#312"><FaFacebook /></a>
                                </p>
                            </div>
                        </div>
                        <div className="next_step_1">
                            <h1>What will be next step?</h1>
                            <p>
                                You are one step closer to grow your business with our best
                                team.
                            </p>
                        </div>

                        <div className="next_step_steps">
                            <div className="next_step_steps10">
                                <p>01</p>
                            </div>
                            <div className="text_ment20">
                                <h4>We'll prepare a proposal</h4>
                                <span>
                                    Lorem ipsum dolor sit amet consectetur. Curabitur nec in
                                    tristique dignissim. Consectetur morbi tristique etiam
                                    molestie lobortis sagittis massa.
                                </span>
                            </div>
                            <div className="next_step_steps10">
                                <p>02</p>
                            </div>
                            <div className="text_ment20">
                                <h4>Together we discuss it</h4>
                                <span>
                                    Lorem ipsum dolor sit amet consectetur. Curabitur nec in
                                    tristique dignissim. Consectetur morbi tristique etiam
                                    molestie lobortis sagittis mas.
                                </span>
                            </div>
                            <div className="next_step_steps10">
                                <p>03</p>
                            </div>
                            <div className="text_ment20">
                                <h4>Lets start growing</h4>
                                <span>
                                    Lorem ipsum dolor sit amet consectetur. Curabitur nec in
                                    tristique dignissim. Consectetur morbi tristique etiam
                                    molestie lobortis sagittis massa.
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="sub_cont_form">
                        <div className="para_new_c">
                            <p>
                                <BiMessageDetail />
                            </p>
                            <span>
                                Write us a few words about your project and well prepare
                                proposal for you
                            </span>
                        </div>

                        <div className="form_pricing_new">
                            <TextField id="standard-basic" label="Full name" variant="standard"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleContactChange}
                            />
                            <TextField id="standard-basic" label="Email address" variant="standard"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleContactChange}
                            />
                            <TextField id="standard-basic" label="Phone Number" variant="standard"
                                type="number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleContactChange}
                            />
                            <FormControl variant="standard" sx={{ width: "100%" }}>
                                <InputLabel id="demo-simple-select-standard-label">Select Project Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-standard-label"
                                    id="demo-simple-select-standard"
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleContactChange}
                                    label="Select Project Type"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>

                                    <MenuItem value="RCS">RCS</MenuItem>
                                    <MenuItem value="SMS">SMS</MenuItem>
                                    <MenuItem value="Voice">Voice</MenuItem>
                                    <MenuItem value="WhatsApp">WhatsApp</MenuItem>
                                    <MenuItem value="Verifications">Verifications</MenuItem>
                                </Select>
                            </FormControl>

                            <textarea
                                style={{ padding: "15px" }}
                                placeholder="Enter the message"

                                name="message"
                                id=""
                                cols="30"
                                rows="10"
                                value={formData.message}
                                onChange={handleContactChange}
                            />
                            <Button onClick={handleContactUs} sx={{
                                textTransform: "unset",
                                marginTop: "15px",
                                color: "#101010",
                                background: "#FFD26F",
                                textAlign: "center",
                                fontSize: "19px",
                                fontWeight: 550,
                                letterSpacing: "1.52px",
                                marginBottom: "45px",
                                "&:hover": {
                                    color: "#101010",
                                    background: "#FFD26F",
                                }
                            }}
                                disabled={loading}>
                                {loading ? <PulseLoader style={{ padding: "4px" }} color="#000" size={6} /> : 'Submit'}

                            </Button>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </Fragment>
    );
}
