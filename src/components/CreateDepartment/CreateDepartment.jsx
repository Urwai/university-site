import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSchema } from "../../Validations/Validations";
import { useDepartment } from "../../assets/store";

const CreateDepartment = () => {
    const {departments} = useDepartment();
    const navigate = useNavigate();
    const { addDepartment } = useDepartment();
    const [deptName, setDeptName] = useState("");
    const [deptCode, setDeptCode] = useState("");
    const [hod, setHod] = useState("");
    const [errors, setErrors] = useState({}); // State to store validation errors

    // Validation function
    const validate = async () => {
        try {
            await userSchema.validate(
                {
                    department_name: deptName,
                    department_code: deptCode,
                    head_department: hod,
                },
                { abortEarly: false } // Collect all errors
            );
            setErrors({}); // Clear errors if validation passes
            return true; // Validation successful
        } catch (validationErrors) {
            const newErrors = {};
            validationErrors.inner.forEach((error) => {
                newErrors[error.path] = error.message;
            });
            setErrors(newErrors); // Set validation errors if any
            return false; // Validation failed
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isValid = await validate();

        if (isValid) {
            addDepartment({ deptName, deptCode, hod });
            navigate(-1);
        }
    };

    const handleCancel = () => {
        // navigate("/admin/authorities/department");
        navigate(-1)
    };

    return (
        <div className="bg-cloudy-blue-gradient w-screen min-h-screen flex items-center justify-center relative">
            <div className="bg-gray-50 p-8 w-1/4 h-auto rounded-lg shadow-lg">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Department Name:</label>
                        <input
                            type="text"
                            placeholder="Department Name"
                            value={deptName}
                            onChange={(e) => setDeptName(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.department_name && (
                            <p className="text-red-500 text-xs">{errors.department_name}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Department Code:</label>
                        <input
                            type="text"
                            placeholder="Department Code"
                            value={deptCode}
                            onChange={(e) => setDeptCode(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.department_code && (
                            <p className="text-red-500 text-xs">{errors.department_code}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2">Head of Department:</label>
                        <input
                            type="text"
                            placeholder="Head of Department"
                            value={hod}
                            onChange={(e) => setHod(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        {errors.head_department && (
                            <p className="text-red-500 text-xs">{errors.head_department}</p>
                        )}
                    </div>
                    <div className="flex flex-nowrap">
                        <button
                            type="submit"
                            className="bg-indigo-900 text-gray-50 p-3 rounded-2xl mb-4 ml-2"
                        >
                            Add Department
                        </button>

                        <button
                            type="button" // Ensure button type is 'button'
                            className="bg-indigo-900 text-gray-50 py-3 px-5 rounded-2xl mb-4 ml-8"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateDepartment;
