import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox"
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {

  const { signup, loading } = useSignup();
  const [inputs, setInputs] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    gender: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleCheckboxChange = (gender) => {
    setInputs((prev) => ({
      ...prev,
      gender
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
    setInputs({
      userName: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      gender: "",
    });
  }

  return (
    <div className="flex justify-center flex-col items-center mx-auto min-w-96">
      {/* Tailwind Glassmorphism */}
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-info"> ChatApp</span>
        </h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName" className="label p-2">
              <span className="label-text text-base">Fullname</span>
            </label>
            <input type="text" id="fullName" name="fullName" placeholder="John Doe"
              className="input input-bordered input-info w-full max-w-xs" value={inputs.fullName} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="userName" className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input type="text" id="userName" name="userName" placeholder="JohnDoe"
              className="input input-bordered input-info w-full max-w-xs" value={inputs.userName} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input id="password" name="password" type="password" placeholder="Enter password"
              className="input input-bordered input-info w-full max-w-xs" value={inputs.password} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="confirm-password" className="label p-2">
              <span className="label-text text-base">Confirm Password</span>
            </label>
            <input type="password" className="input input-bordered input-info w-full max-w-xs"
              placeholder="Confirm Password" id="confirm-password" name="confirmPassword" value={inputs.confirmPassword} onChange={handleChange} />
          </div>
          <GenderCheckBox onCheckBoxChange={handleCheckboxChange} selectedGender={inputs.gender} />
          <Link to="/login" className="text-sm hover:underline w-full text-center text-blue-400 mt-3 mb-1 inline-block">
            {"Already"} have an account?
          </Link>
          <div>
            <button type="submit" disabled={loading} className="btn btn-block btn-sm mt-2 btn-info">
              {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp


/*
// Starter code for the SignUp file:

import GenderCheckBox from "./GenderCheckBox"

const SignUp = () => {
  return (
    <div className="flex justify-center flex-col items-center mx-auto min-w-96">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up
          <span className="text-info"> ChatApp</span>
        </h1>
        <form action="">
          <div>
            <label htmlFor="fullName" className="label p-2">
              <span className="label-text text-base">Fullname</span>
            </label>
            <input type="text" id="fullName" name="fullName" placeholder="John Doe"
              className="input input-bordered input-info w-full max-w-xs" />
          </div>
          <div>
            <label htmlFor="userName" className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input type="text" id="userName" name="userName" placeholder="JohnDoe"
              className="input input-bordered input-info w-full max-w-xs" />
          </div>
          <div>
            <label htmlFor="password" className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input id="password" name="password" type="password" placeholder="Enter password"
              className="input input-bordered input-info w-full max-w-xs" />
          </div>
          <div>
            <label htmlFor="confirm-password" className="label p-2">
              <span className="label-text text-base">Confirm Password</span>
            </label>
            <input type="password" className="input input-bordered input-info w-full max-w-xs"
              placeholder="Confirm Password" id="confirm-password" name=" confirmPassword" />
          </div>
          <GenderCheckBox />
          <a href="#" className="text-sm hover:underline w-full text-center text-blue-400 mt-3 mb-1 inline-block">
            {"Already"} have an account?
          </a>
          <div className="btn btn-block btn-sm mt-2 btn-info">Sign Up</div>
        </form>
      </div>
    </div>
  )
}

export default SignUp

*/