import React from "react";
import InputBox from "../components/input.component";
import { UserIcon, AtSymbolIcon, KeyIcon } from "@heroicons/react/24/outline";
import googleIcon from "../imgs/google.png";
import { Link } from "react-router-dom";
import AnimationWrapper from "../common/page-animation";

const UserAuthForm = ({ type }) => {
  return (
    <AnimationWrapper keyValue={type}>
      <section className="h-cover flex items-center justify-center">
        <form className="w-[80%] max-w-[400px]">
          <h1 className="text-4xl font-gelasio capitalize text-center mb-24">
            {type == "signin" ? "Welcome back" : "Join us today"}
          </h1>
          {type !== "signin" ? (
            <InputBox
              name="fullname"
              type="text"
              placeholder="Full Name"
              inputIcon={<UserIcon className="w-5 h-5 input-icon" />}
            />
          ) : (
            ""
          )}
          <InputBox
            name="email"
            type="email"
            placeholder="Email"
            inputIcon={<AtSymbolIcon className="w-5 h-5 input-icon" />}
          />
          <InputBox
            name="password"
            type="password"
            placeholder="Password"
            inputIcon={<KeyIcon className="w-5 h-5 input-icon" />}
          />
          <button className="center btn-dark mt-14">
            {type === "signin" ? "Sign In" : "Sign Up"}
          </button>
          <div className="relative w-full flex gap-2 items-center my-10 opacity-10 uppercase text-black font-bold">
            <hr className="w-1/2 border-black" />
            <p>or</p>
            <hr className="w-1/2 border-black" />
          </div>
          <button className="btn-dark flex items-center justify-center gap-4 w-[90%] center">
            <img src={googleIcon} alt="googleIcon" className="w-5" />
            continue with google
          </button>
          {type == "signin" ? (
            <p className="text-dark-grey mt-4 text-xl text-center">
              Don't have an acctount ?{" "}
              <Link to="/signup" className="underline text-black text-xl ml-1 ">
                Join us now
              </Link>
            </p>
          ) : (
            <p className="text-dark-grey mt-4 text-xl text-center">
              Already have a member ?{" "}
              <Link to="/signin" className="underline text-black text-xl ml-1 ">
                Sign in here.
              </Link>
            </p>
          )}
        </form>
      </section>
    </AnimationWrapper>
  );
};

export default UserAuthForm;
