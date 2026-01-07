import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { register } from "../../https";
import { enqueueSnackbar } from "notistack";

const Register = ({setIsRegister}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRoleSelection = (selectedRole) => {
    setFormData({ ...formData, role: selectedRole });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerMutation.mutate(formData);
  };

  const registerMutation = useMutation({
    mutationFn: (reqData) => register(reqData),
    onSuccess: (res) => {
      const { data } = res;
      enqueueSnackbar(data.message, { variant: "success" });
      setFormData({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
      });

      setTimeout(()=> {
        setIsRegister(false)
      })
    },
    onError: (error) => {
      const { response } = error;
      enqueueSnackbar(response.data.message, { variant: "error" });
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="block text-[#ababab] mb-2 text-sm font-medium">
          Employee Name
        </label>
        <div className="flex items-center rounded-lg p-4 px-4 bg-[#1f1f1f]">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter employee name"
            className="bg-transparent flex-1 text-white focus:outline-none"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
          Employee Email
        </label>
        <div className="flex items-center rounded-lg p-4 px-4 bg-[#1f1f1f]">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter employee email"
            className="bg-transparent flex-1 text-white focus:outline-none"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
          Employee Phone
        </label>
        <div className="flex items-center rounded-lg p-4 px-4 bg-[#1f1f1f]">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter employee phone"
            className="bg-transparent flex-1 text-white focus:outline-none"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
          Password
        </label>
        <div className="flex items-center rounded-lg p-4 px-4 bg-[#1f1f1f]">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="bg-transparent flex-1 text-white focus:outline-none"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
          Choose your role
        </label>
        <div className="flex items-center gap-3 mt-4">
          {["Walter", "Cashier", "Admin"].map((role) => {
            return (
              <button
                key={role}
                type="button"
                onClick={() => handleRoleSelection(role)}
                className={`bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] ${
                  formData.role === role ? "bg-indigo-600 text-white" : ""
                }`}
              >
                {role}
              </button>
            );
          })}
        </div>
      </div>
      <button
        type="submit"
        className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg w-full mt-4 hover:bg-yellow-300 "
      >
        Sign up
      </button>
    </form>
  );
};

export default Register;
