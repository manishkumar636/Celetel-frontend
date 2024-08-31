import React from 'react'
import { Fragment } from 'react'
import './NewPricing.css'
import blogging from '../Assets/blogging.svg'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Link, useNavigate } from 'react-router-dom'

export function NewPricing() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const naviagteToAllPricing = useNavigate();


    const handleClickAllPricing = () => {
        naviagteToAllPricing('/newprices')
    }
    return (
        <Fragment>
            <div className="main_new_prices_now_flow">
                <div className="image_new_prices_sec">
                    <img src={blogging} alt="" />
                </div>

                <div className="main_form_pricing_new">
                    <h1>Manage your Digital Identify</h1>
                    <p>Tell us more about your workspace so we can provide you a personalised experience tailored to your needs and preferences</p>
                    <div className="form_pricing_new">
                        <TextField id="standard-basic" label="Full name" variant="standard" />
                        <TextField id="standard-basic" label="Email address" variant="standard" />
                        <TextField id="standard-basic" label="Phone Number" variant="standard" />
                        <FormControl variant="standard" sx={{ width: "100%" }}>
                            <InputLabel id="demo-simple-select-standard-label">Select Product</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChange}
                                label="Select Product"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={0}><Link style={{ color: "black" }}>All</Link></MenuItem>
                                <MenuItem value={10}><Link style={{ color: "black" }}>RCS</Link></MenuItem>
                                <MenuItem value={20}><Link style={{ color: "black" }}>SMS</Link></MenuItem>
                                <MenuItem value={30}><Link style={{ color: "black" }}>Voice</Link></MenuItem>
                                <MenuItem value={40}><Link style={{ color: "black" }}>Whatsapp</Link></MenuItem>
                            </Select>
                        </FormControl>
                        <Button onClick={handleClickAllPricing}
                            sx={{
                                textTransform: "unset",
                                marginTop: "15px",
                                color: "#101010",
                                background: "#FFD26F",
                                textAlign: "center",
                                fontSize: "19px",
                                fontWeight: 550,
                                letterSpacing: "1.52px",
                                "&:hover": {
                                    color: "#101010",
                                    background: "#FFD26F",
                                }
                            }}
                        >Sign up</Button>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
