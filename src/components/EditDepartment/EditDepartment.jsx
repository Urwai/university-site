import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { useDepartment } from "../../assets/store";

const EditDepartment = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { updateDepartment } = useDepartment();
    
    // Get department data from location state
    const { data: departmentToEdit, index } = location.state;
    
    // State to handle the edited department
    const [editedDepartment, setEditedDepartment] = useState(departmentToEdit);

    // Update the input fields as the user types
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setEditedDepartment({
            ...editedDepartment,
            [name]: value,
        });
    };

    // Save the changes
    const handleSave = () => {
        updateDepartment(index, editedDepartment); // Update department in the store
        navigate(-1); // Go back to the previous page
    };

    return (
        <div className="bg-cloudy-blue-gradient w-screen min-h-screen flex items-center justify-center relative">
            <div className="bg-gray-50 p-8 w-1/4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Department</h2>
                <form>
                    <div className="mb-6 w-full">
                        <label className="block text-gray-700 mb-2">Department Name:</label>
                        <input
                            type="text"
                            name="deptName"
                            value={editedDepartment.deptName}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            placeholder="Enter Department name"
                        />
                        <label className="block text-gray-700 mt-4 mb-2">Department Code:</label>
                        <input
                            type="text"
                            name="deptCode"
                            value={editedDepartment.deptCode}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            placeholder="Enter Department Code"
                        />
                        <label className="block text-gray-700 mt-4 mb-2">Head of Department:</label>
                        <input
                            type="text"
                            name="hod"
                            value={editedDepartment.hod}
                            onChange={handleInputChange}
                            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            placeholder="Enter Head of Department"
                        />
                        <button
                            type="button"
                            onClick={handleSave}
                            className="bg-indigo-900 text-gray-50 px-6 py-3 rounded-2xl mt-4 ml-28"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditDepartment;

