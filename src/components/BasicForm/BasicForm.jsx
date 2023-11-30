import React, { useState } from "react";

const BasicForm = () => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''    
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormData({
            username: '',
            password: ''
        })
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input 
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange} 
                    placeholder="Enter Username"
                />
            </label>
            <br />
            <label>
                Password:
                <input 
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Password" 
                />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    )
}

export default BasicForm;