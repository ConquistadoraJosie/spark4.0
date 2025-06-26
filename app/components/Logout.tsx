"use client";
import { signOut } from "@/actions/auth";
import React, { useState } from "react";

/**
 * Logout component that handles user sign-out.
 * It displays a button that, when clicked, triggers the sign-out process.
 * While signing out, it shows a loading state to indicate the action is in progress.
 */

const Logout = () => {
  // [loading, setLoading] is an array destructuring assignment that initializes a state variable
  // 'false' is a boolean value indicating whether a logout operation is in progress
  const [loading, setLoading] = useState(false); // useState is a react hook that manages the loading state
  // return a react component that handles user logout
  // setLoading is a function that updates the loading state

  /* handleLogout is function for the logout logic */
  const handleLogout = async (event: React.FormEvent) => {
    /* asyn is a function that performs operations (like network requests) that might take some time 
    without blocking the main thread of the execution
    
       'event' is an object parameter -- the click of the logout button
       
       'React.FormEvent' tells the 'event' is specially a form event from React. This helps with type checking 
       and code completion development*/

    event.preventDefault(); // standard practice to prevent the default form submission behavior and DOM methods
    {/* Suppose the handleLogout function was attached to the  onSubmit event within a form, then the 
        'event.preventDefault()' function stops the browser's default behavior. In forms, the typical default behavior
        is to reload the page, which is something we DO NOT want in SPA's build with React*/ }

    setLoading(true);  // when the handleLogout function is called, it sets the loading state to true

    await signOut();  // 'await' function pauses the execution of the handleLogout function until the signOut function 
    // completes its operation, which is typically a network request to log out the user.
    {/* 'signOut' is the core of the logout operation that acts as a placeholder while the authentication system/service
     interacts with the backend API to invalidate a user's session and clear user tokens*/}

    setLoading(false); // indicates that the sign-out process is complete, and the loading state is set back to false
    // 'setLoading' happens after the signOut function whether it succeeds or fails, 
    // ensuring that the UI reflects the end of the sign-out process.
  };

  return (
    <div className="bg-gray-600 text-white text-sm px-4 py-2 rounded-md cursor-pointer">
      <form onSubmit={handleLogout}>
        <button type="submit" disabled={loading}>
          {loading ? "Signing out..." : "Sign out"}
        </button>
      </form>
    </div>
  );
};

export default Logout;
