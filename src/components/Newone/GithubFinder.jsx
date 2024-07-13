// src/components/GitHubSkyline.jsx
import React, { useState } from "react";
import img from "./../../assets/a.png";
import whiteLogo from "./../../assets/bgDark.svg";
import axios from "axios";
import github from "./../../assets/github.png"
import { FaGithubAlt } from "react-icons/fa";
import dayjs from "dayjs";
import { FiGithub } from "react-icons/fi";


const GithubFinder = () => {
  const [input, setInput] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(null);

  const fetchUserProfile = async (input) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.github.com/users/${input}`);
      console.log(response);
      setUserProfile(response.data);
      setLoading(null);
    } catch (err) {
      setLoading(true);
      console.log(err);
      setLoading("User not found");
      setUserData(null);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    if (input) {
      fetchUserProfile(input);
    }
  };

  return (
    <div
      className="flex flex-col  justify-center min-h-screen bg-cover bg-center bg-no-repeat relative "
      style={{ backgroundImage: `url('src/assets/a.png')` }}
    >
      <header className=" bg-transparent p-4 sm:p-8 z-10 fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={whiteLogo}
              alt="GitHub Logo"
              className="w-10 h-10 mr-2 text-white"
            />
            <h1 className="text-2xl font-bold text-white">GitFinder</h1>
          </div>
        </div>
      </header>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1339] to-pink-500 opacity-65"></div>

        {loading===true ? (<>
          <div className=" flex items-center justify-center ">
            <img src={github} alt="" className=" animate-moveUpDown transition-all  mix-blend-multiply z-10 "/>

          </div>
        </>):(<>
        {userProfile === null ? (
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl font-bold mb-4">Find Your GitHub Profile </h1>
            <p className="mb-6">
              "Explore your GitHub profile and discover your contributions with
              our GitFinder app!!!"
            </p>
            <div className="flex justify-center items-center">
              <input
                type="text"
                placeholder="github_username"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="px-4 py-2 rounded-l-md border-pink-500 outline-none text-black"
              />
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-pink-600 rounded-r-md text-white font-bold"
              >
                Search
              </button>
            </div>
          </div>
        ) : (
          <div className="z-10 text-white p-2 rounded-xl shadow-xl flex sm:gap-4 gap-2 flex-col sm:flex-row -mt-2 sm:mt-0 max-w-screen-md mx-auto border">
            <div>
              <img src={userProfile?.avatar_url} alt="" className=" sm:w-80 sm:h-80 w-40 h-40  rounded " />
            </div>
            <div>
              <div className=" sm:my-4 my-1">
                <h1 className=" sm:text-2xl text-xl font-semibold sm:mb-2 mb-1">User Name:- <span className=" text-pink-600 sm:text-2xl text-xl font-bold capitalize">{userProfile?.login}</span></h1>
                <h1 className=" sm:text-2xl text-xl font-semibold ">Name:- <span className=" text-pink-600 sm:text-2xl text-xl font-bold capitalize">{userProfile?.name}</span></h1>
              </div>
              <div>
                <p className="  sm:text-2xl text-xl font-semibold sm:mb-2 mb-1"> <FaGithubAlt className=" inline-block" /> <span className=" text-pink-600 sm:text-2xl text-xl font-bold capitalize">{userProfile?.public_repos}</span></p>
                <p className=" sm:text-2xl text-xl font-semibold sm:mb-2"><FiGithub className=" inline-block" /> <span className=" text-pink-600 sm:text-2xl text-xl font-bold capitalize">{userProfile?.public_gists}</span></p>
              </div>
              <div className=" sm:my-4 my-1">
                <p className=" sm:text-2xl text-xl font-semibold sm:mb-2 mb-1">Followers :- <span className=" text-pink-600 sm:text-2xl text-xl font-bold capitalize" > {userProfile?.followers}</span></p>
                <p className=" sm:text-2xl text-xl font-semibold ">Following :-<span className=" text-pink-600 sm:text-2xl text-xl font-bold capitalize" >{userProfile?.following}</span></p>
              </div>
              <div>
              <p className=" sm:text-2xl text-xl font-semibold ">Created At :- <span className=" text-pink-600 sm:text-2xl text-xl font-bold capitalize" > {dayjs(userProfile?.created_at).format('YYYY-MM-DD')}</span></p>
              </div>
            </div>
          </div>
        )}
        </>)}
      
    </div>
  );
};

export default GithubFinder;
