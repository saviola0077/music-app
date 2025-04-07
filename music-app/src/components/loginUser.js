import React, { useState } from "react";
import axios from "axios";
import './UserForm.css'; // Import the stylesheet
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
    const navigate = useNavigate();

    // State to store form inputs
    const [formData, setFormData] = useState({
        user_password: "",
        email: "",
    });

    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError("Invalid email address.");
            return false;
        }
        return true;
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Validate form data
        if (!validateForm()) {
            console.log("Validation fails");
            return;
        }

        console.log("Form Data:", formData);  // Log form data to check its contents
        console.log("Email:", formData.email); // Log email to verify its value

        try {
            // Fixed the protocol by adding http://
            const requestObj = {
                method: "post",
                url: 'http://localhost:4000/api/getUserEmail',
                data: {
                  email: formData.email
                }
              };
            const response = await axios(requestObj);

            setMessage(`Email: ${response.data.email}, Password: ${response.data.user_password}`); // Show success message

            //Checking if the password is correct
            if(response.data.user_password = formData.user_password){
                 // Navigate to another page after form submission
                 navigate('/Home');
            }
            setError(null); // Clear any previous errors
        } catch (err) {
            const errorMessage = err.response?.data?.message || err.message || 'Unknown error occurred';
            setError(`Error creating user: ${errorMessage}`);
            setMessage(null); // Clear any previous success messages
            console.log(err.response); 
        }
    };

    return (
        <div className="form-container">
            <h2>Create User</h2>
            <form onSubmit={handleSubmit} className="user-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="user_password">Password:</label>
                    <input
                        type="password"
                        id="user_password"
                        name="user_password"
                        value={formData.user_password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        required
                    />
                </div>
                
                <button type="submit" className="submit-button">Submit</button>
            </form>

            {/* Show success or error messages */}
            {message && <p className="success-message">{message}</p>}
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default UserForm;
