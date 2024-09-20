// File: src/app/page.js
'use client';

import { useState } from 'react';

export default function Form() {
    const [stage, setStage] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        address: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleNext = () => {
        setStage(stage + 1);
    };

    const handleBack = () => {
        setStage(stage - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        const result = await response.json();
        alert(result.message);
    };

    return (
        <form onSubmit={handleSubmit}>
            {stage === 0 && (
                <div>
                    <h2>Step 1: Basic Information</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <button type="button" onClick={handleNext}>Next</button>
                </div>
            )}

            {stage === 1 && (
                <div>
                    <h2>Step 2: Set Password</h2>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="button" onClick={handleBack}>Back</button>
                    <button type="button" onClick={handleNext}>Next</button>
                </div>
            )}

            {stage === 2 && (
                <div>
                    <h2>Step 3: Address</h2>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <button type="button" onClick={handleBack}>Back</button>
                    <button type="submit">Submit</button>
                </div>
            )}
        </form>
    );
}