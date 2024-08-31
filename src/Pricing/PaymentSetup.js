import React, { useState } from 'react';
import { Fragment } from 'react';
import { paymentInitiate } from '../Service/auth.service';
import './Pricing.css';

export function PaymentSetup() {
    const [formPaymentData, setFormPaymentData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        amount: 0,
    });

    const [formValid, setFormValid] = useState(true);

    const smsPacks = [
        { value: '0', label: 'Select an option' },
        { value: '1', label: 'Testing purpose' },
        { value: '100', label: 'Testing purpose of 100' },
        { value: '100000000', label: 'Testing purpose of 100' },
        { value: '40120', label: '1,00,000 Voice OTP Credits ( ₹0.34 + Tax)' },
        { value: '4012', label: '10,000 Voice OTP Credits ( ₹0.34 + Tax )' },
        { value: '499', label: '1,000 Voice OTP Credits *** Trial Pack ***' },
        { value: '20060', label: '50,000 Voice OTP Credits ( ₹0.34 + Tax)' },
    ];

    const handleSelectChange = (event) => {
        const amount = parseInt(event.target.value);
        setFormPaymentData({ ...formPaymentData, amount });
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormPaymentData({ ...formPaymentData, [name]: value });
    }

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const { name, email, phoneNumber, amount } = formPaymentData;

        if (!name || !email || !phoneNumber || !amount) {
            setFormValid(false);
        } else {
            setFormValid(true);
            try {
                const response = await paymentInitiate(name, email, phoneNumber, amount);

                console.log('Full API Response:', response); // Log the entire response

                if (response && response.success === true) {
                    console.log(response, "fghjdgstadfg");

                    const redirectUrl = response?.responseData?.data?.instrumentResponse?.redirectInfo?.url;

                    if (redirectUrl) {
                        window.location.href = redirectUrl;
                    } else {
                        console.error('Redirect URL is undefined.');
                    }
                } else {
                    // Payment initiation failed
                    console.error('Payment initiation failed:', response ? response.message : 'Response is undefined.');
                }
            } catch (error) {
                console.error('Payment initiation failed:', error.message);
            }
        }
    }




    return (
        <Fragment>
            <div className="main_payment_setup">
                <div className="sub_payment_form">
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" value={formPaymentData.name} onChange={handleInputChange} placeholder='Enter name' />
                        <label htmlFor="email">Email</label>
                        <input type="email" id='email' name="email" value={formPaymentData.email} onChange={handleInputChange} placeholder='Enter email' />
                        <label htmlFor="phoneNumber">Phone Number</label>
                        <input type="number" id='phoneNumber' name='phoneNumber' value={formPaymentData.phoneNumber} onChange={handleInputChange} placeholder='Enter number' />

                        <label htmlFor="packSelect">SMS Packs</label>
                        <select name="packSelect" id="packSelect" onChange={handleSelectChange}>
                            {smsPacks.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>

                        <div className="amount_pay_setup">
                            <p>Amount</p>
                            <span>{`₹${formPaymentData.amount}`}</span>
                        </div>
                        {!formValid && <p style={{ color: 'red' }}>Please fill in all the required fields.</p>}

                        <button type="submit">Proceed for payment</button>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}
