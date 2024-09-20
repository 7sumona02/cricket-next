"use client"

import { useState } from "react"
import styles from './style.module.css';
import Rounded from "../../common/RoundedButton";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Page() {
  const [currentStage, setCurrentStage] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  const handleNextStage = () => {
    setCurrentStage(currentStage + 1)
  }
  const handlePrevStage = () => {
    setCurrentStage(currentStage - 1)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Registration successful:", data)
      })
      .catch((error) => {
        console.error("Error registering:", error)
      })
  }
  return (
    <div className="px-20 py-15 max-w-screen space-y-6 grid grid-cols-2">
      <div className={styles.intro}>
        <h1>Register</h1>
        <p className="text-muted-foreground text-2xl max-w-xs">Let&apos;s unlock together the next level of possibilities! Reach out.</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 translate-y-40">
        <div className="flex items-center justify-center space-x-2">
          <div className={`h-2 w-12 rounded-full ${currentStage === 1 ? "bg-primary" : "bg-muted"}`} />
          <div className={`h-2 w-12 rounded-full ${currentStage === 2 ? "bg-primary" : "bg-muted"}`} />
          <div className={`h-2 w-12 rounded-full ${currentStage === 3 ? "bg-primary" : "bg-muted"}`} />
        </div>
        {currentStage === 1 && (
          <div className="space-y-12 relative">
            <div className="space-y-2 relative">
              <label htmlFor="name" className="text-2xl">Name</label>
              <input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder=""
                required
                className="bg-transparent ml-4 border-none focus:outline-none focus-visible:outline-none text-neutral-300"
              />
              <div className="border-b-[0.1px] w-[20vw] border-neutral-300 bottom-0"></div>
            </div>
            <div className="space-y-2 relative">
              <label htmlFor="email" className="text-2xl">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder=""
                required
                className="bg-transparent ml-4 border-none focus:outline-none focus-visible:outline-none text-neutral-300"
              />
              <div className="border-b-[0.1px] w-[20vw] border-neutral-300 bottom-0"></div>
            </div>
            <div className="w-[12vw] absolute translate-y-20">
              <Rounded onClick={handleNextStage}>
                <p>Next</p>
              </Rounded>
            </div>
          </div>
        )}
        {currentStage === 2 && (
          <div className="space-y-2">
            <div className="space-y-2 relative">
              <label htmlFor="password" className="text-2xl">Password</label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                placeholder=""
                required
                className="bg-transparent ml-4 border-none focus:outline-none focus-visible:outline-none text-neutral-300"
              />
              <span 
                  onClick={() => setShowPassword(!showPassword)} 
                  className="absolute right-[24.2vw] cursor-pointer"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              <div className="border-b-[0.1px] w-[20vw] border-neutral-300 bottom-0"></div>
            </div>
            <div className="flex justify-between gap-2 translate-y-20">
              <Rounded onClick={handlePrevStage}>
                <p>Back</p>
              </Rounded>
             <Rounded onClick={handleNextStage}>
                <p>Next</p>
              </Rounded>
            </div>
          </div>
        )}
        {currentStage === 3 && (
          <div className="space-y-4">
            <div className={`${styles.intro} space-y-2`}>
              <p className="text-muted-foreground text-xl max-w-xs">Please review your registration details before submitting.</p>
            </div>
            <div className="space-y-12 pt-20">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label className="text-2xl">Name</label>
                  <p>{formData.name}</p>
                  <div className="border-b-[0.1px] w-[20vw] border-neutral-300 bottom-0"></div>
                </div>
                <div className="relative">
                  <label className="text-2xl">Email</label>
                  <p>********</p>
                  <div className="border-b-[0.1px] w-[20vw] border-neutral-300 bottom-0"></div>
                </div>
              </div>
              <div className="space-y-2 relative">
                <label className="text-2xl">Password</label>
                <p>{formData.password}</p>
                <div className="border-b-[0.1px] w-[20vw] border-neutral-300 bottom-0"></div>
              </div>
            </div>
            <div className="flex justify-between gap-2 pt-20">
              <Rounded onClick={handlePrevStage}>
                <p>Back</p>
              </Rounded>
              <div className='-translate-x-2'><Rounded type="submit"><p><a href='/'>Complete</a></p></Rounded></div>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}