import { Link } from "react-router-dom"
import Wrapper from "../assets/wrappers/Register"
import { useState } from 'react'

function Register() {
    const [endpoint, setEndpoint] = useState("login")

    return (
        <Wrapper>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-[100%]">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                {endpoint === "login" ? "Sign In" : "Sign Up"}
                            </h1>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                </div>
                                {endpoint === "register" &&
                                    <div>
                                        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                                        <input type="password" name="confirm_password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                    </div>
                                }
                                <button type="submit" className="w-full text-white bg-blue-500 hover:bg-blue-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:hover:bg-blue-700 transition-[0.3s]">{endpoint === "login" ? "Sign In" : "Sign Up"}</button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400 text-[12.5px]">
                                    {endpoint === "login" ? "Don’t have an account yet?" : "Have a member yet ?"} <button onClick={(event: React.MouseEvent<HTMLElement>) => {
                                        setEndpoint(endpoint === "login" ? "register" : "login")
                                    }} className="font-medium text-primary-600 hover:underline dark:text-primary-500 text-sm text-[#3b82f6]">{endpoint === "login" ? "Register" : "Login"}</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
        </Wrapper>
    )
}

export default Register
