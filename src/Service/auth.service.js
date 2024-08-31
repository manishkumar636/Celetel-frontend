
import axios from 'axios';
// import { API_BASEURL } from '../../environment';

import { API_BASEURL } from '../environment';


export const signUpClient = async (formData) => {
    try {
        const response = await axios.post(`${API_BASEURL}/api/client/signup`, formData);
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.msg || 'Something went wrong');
    }
};


export const sendVerificationEmail = async (email) => {
    console.log(email, "email")
    try {
        const response = await axios.post(`${API_BASEURL}/api/client/sendmail`, { email });
        // console.log(response, "responseservice");

        if (response.data.success) {
            return { success: true, message: response.data.msg };
        } else {
            return { success: false, message: response.data.msg };
        }
    } catch (error) {
        // console.error('Error sending verification email:', error);
        return { success: false, message: 'Failed to send verification email. Please try again.' };
    }
}


export const verifyOtp = async (enteredOTP) => {
    console.log(enteredOTP, "enterOTP");
    try {
        const otpNumber = Number(enteredOTP); // Convert entered OTP to a number
        console.log('Request Data:', { enteredOTP: otpNumber });

        const response = await axios.post(`${API_BASEURL}/api/client/verifyOtp`, { enteredOTP: otpNumber });
        console.log(response, "resauth");

        if (response.data.success) {
            return { success: true, message: response.data.msg };
        } else {
            return { success: false, message: response.data.msg };
        }
    } catch (error) {
        console.error('Error verifying OTP:', error);
        return { success: false, message: 'Failed to verify OTP. Please try again.' };
    }
};


export const getClientById = async (clientId) => {
    console.log(clientId, "clientidauth")
    try {
        const response = await axios.get(`${API_BASEURL}/api/client/getClientById/${clientId}`);
        console.log(response, "response123456")
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
};

export const accountSetup = async (clientId, formData) => {

    console.log(formData, "forsdfghjkauth")

    console.log(clientId, "clientIdupdate")

    try {
        const response = await axios.put(`${API_BASEURL}/api/client/setupAccount`, { clientId: clientId, ...formData });
        // Replace with your API endpoint
        return response.data;
    } catch (error) {
        throw Error(error.message);
    }
};


export const loginClient = async (email, password) => {
    try {
        const response = await axios.post(`${API_BASEURL}/api/client/login`, {
            email: email,
            password: password,
            // Add hash if required by your API
            // hash: 'some_hash_value_here'
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};



export const googleLogin = async () => {
    try {
        const response = await axios.get('http://localhost:8600/auth/google/callback', {
            withCredentials: true, // Ensure credentials are included for authentication
        });

        // You may handle the response here, but in this case, the redirect should happen from the backend.
        // Redirecting to the Google authentication page should be handled by the backend.
        return response;
    } catch (error) {
        throw new Error('Google login failed.');
    }
};


export const paymentInitiate = async (name, email, phoneNumber, amount) => {
    const clientId = localStorage.getItem("clientId");

    try {
        const response = await axios.post(`${API_BASEURL}/api/client/payment`, {
            name,
            email,
            phoneNumber,
            amount,
            merchentUserId: clientId,
        });
        console.log('API Response:', response.data);
        return response.data; // Make sure to return the response data
    } catch (error) {
        console.error('API Error:', error.message);
        throw error;
    }
};


export const contactUs = async (formData) => {
    try {
        const responseContact = await axios.post(`https://celetelcontactbackend.onrender.com/api/user/contactUs`,
            formData
        );
        console.log(responseContact.data, "reponseContact");
        return responseContact.data;
    }
    catch (error) {
        console.log("Contact error", error.msg)
        throw error;
    }

}

export const sendOtp = async (recipient) => {
    try {
        const response = await axios.post(`${API_BASEURL}/sendotpTesting`, { recipient });
        return response.data;
    }
    catch (error) {
        throw error;
    }
};