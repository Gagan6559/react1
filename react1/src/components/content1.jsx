import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making HTTP requests
import contentimg2 from '../assets/contentimg2.png';

function Content1() {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        carMake: '',
        carModel: '',
        fuelType: '',
        city: ''
    });
    const [formErrors, setFormErrors] = useState({}); // State to hold form validation errors

    const handleGetQuoteClick = () => {
        setShowForm(true);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;

        // Name validation
        if (!formData.name.trim()) {
            formIsValid = false;
            errors.name = 'Name is required';
        }

        // Email validation
        if (!formData.email.trim()) {
            formIsValid = false;
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formIsValid = false;
            errors.email = 'Invalid email address';
        }

        // Contact Number validation
        if (!formData.contactNumber.trim()) {
            formIsValid = false;
            errors.contactNumber = 'Contact number is required';
        }

        // Car Make validation
        if (!formData.carMake.trim()) {
            formIsValid = false;
            errors.carMake = 'Car make is required';
        }

        // Car Model validation
        if (!formData.carModel.trim()) {
            formIsValid = false;
            errors.carModel = 'Car model is required';
        }

        // Fuel Type validation
        if (!formData.fuelType.trim()) {
            formIsValid = false;
            errors.fuelType = 'Fuel type is required';
        }

        // City validation
        if (!formData.city.trim()) {
            formIsValid = false;
            errors.city = 'City is required';
        }

        setFormErrors(errors);
        return formIsValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate the form
        if (!validateForm()) {
            return;
        }

        try {
            // Send formData to the server
            const response = await axios.post('/api/submitForm', formData);
            console.log('Form data sent to the server:', response.data);

            // Reset the form after successful submission
            setFormData({
                name: '',
                email: '',
                contactNumber: '',
                carMake: '',
                carModel: '',
                fuelType: '',
                city: ''
            });

            // Close the form after submission
            setShowForm(false);
        } catch (error) {
            console.error('Error sending form data:', error);
        }
    };

    return (
        <div className="flex flex-wrap md:flex-no-wrap mt-12">
            <div className="w-full sm:w-3/5 sm:pr-4">
                <img src={contentimg2} alt="Image" className="h-full w-full object-cover ml-4 md:w-full sm:ml-4" />
            </div>
            <div className='flex-grow text-gray-900 p-12 mt-8'>
                <div className='text-brandPrimary font-semibold text-6xl md:text-6xl sm:text-4xl'>
                    1.5 Million +
                    <div className='text-gray-900 text-6xl md:text-4xl sm:text-3xl'>
                        Satisfied Customers
                    </div>
                </div>
                <div className='text-brandPrimary font-medium text-7xl sm:text-4xl mt-8'>
                    Lets Get Started!
                </div>
                {!showForm ? (
                    <button 
                        className="mt-8 px-6 py-3 bg-orange-500 text-2xl mt-4 text-white rounded-full hover:bg-brandPrimary"
                        onClick={handleGetQuoteClick}
                    >
                        Get a free Quote
                    </button>
                ) : (
                    <div className="mt-4">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-700 text-xl font-bold mb-2">Name:</label>
                                <input 
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${formErrors.name && 'border-red-500'}`}
                                />
                                {formErrors.name && <p className="text-red-500 text-xs italic">{formErrors.name}</p>}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700 text-xl font-bold mb-2">Email:</label>
                                <input 
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="contactNumber" className="block text-gray-700 text-xl font-bold mb-2">Contact Number:</label>
                                <input 
                                    type="text"
                                    id="contactNumber"
                                    name="contactNumber"
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="carMake" className="block text-gray-700 text-xl font-bold mb-2">Car Make:</label>
                                <select
                                    id="carMake"
                                    name="carMake"
                                    value={formData.carMake}
                                    onChange={handleChange}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="">Select Car Make</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Ford">Ford</option>
                                    <option value="Hyundai">Hyundai</option>
                                    <option value="Maruti Suzuki">Maruti Suzuki</option>
                                    <option value="Tata">Tata</option>
                                    <option value="Skoda">Skoda</option>
                                    <option value="Renault">Renault</option>
                                    <option value="Datsun">Datsun</option>
                                    <option value="Chevrolet">Chevrolet</option>
                                    <option value="Kia">Kia</option>
                                    <option value="Mahindra">Mahindra</option>
                                    <option value="Nissan">Nissan</option>
                                    <option value="Volkswagen">Volkswagen</option>
                                    <option value="Volvo">Volvo</option>
                                    <option value="Audi">Audi</option>
                                    <option value="BMW">BMW</option>
                                    {/* Add more options as needed */}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="carModel" className="block text-gray-700 text-xl font-bold mb-2">Car Model:</label>
                                <input 
                                    type="text"
                                    id="carModel"
                                    name="carModel"
                                    value={formData.carModel}
                                    onChange={handleChange}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="fuelType" className="block text-gray-700 text-xl font-bold mb-2">Fuel Type:</label>
                                <select 
                                    id="fuelType"
                                    name="fuelType"
                                    value={formData.fuelType}
                                    onChange={handleChange}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                >
                                    <option value="">Select Car Fuel</option>
                                    <option value="Petrol">Petrol</option>
                                    <option value="Diesel">Diesel</option>
                                    <option value="CNG">CNG</option>
                                </select>    
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block text-gray-700 text-xl font-bold mb-2">City:</label>
                                <input 
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                />
                            </div>
                            <button type="submit" className="px-6 py-3 bg-orange-500 text-2xl text-white rounded-full hover:bg-brandPrimary">Submit</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Content1;
