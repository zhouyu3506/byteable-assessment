import React, { useContext, useState, useEffect } from "react";
import { CRMContext } from "../context/CRMContext";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function Dashboard() {

  const { events, tasks, contacts, deals } = useContext(CRMContext);

  const [user, setUser] = useState(null);


  // load user from localStorage
  useEffect(() => {

    const token = localStorage.getItem("google_token");

    if (token) {

      const decoded = jwtDecode(token);

      setUser(decoded);

    }

  }, []);

  return (

    <div>

      <h1>Legal CRM Dashboard</h1>

      {user && (
        <div>
          <p>Welcome, {user.name}</p>
          <p>{user.email}</p>
          <img src={user.picture} width="50" />
        </div>
      )}

      {!user && (
  <GoogleLogin
    onSuccess={(credentialResponse) => {
      const decoded = jwtDecode(credentialResponse.credential);

      const userData = {
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
      };

      setUser(userData);

      localStorage.setItem("user", JSON.stringify(userData));
    }}
    onError={() => {
      console.log("Login Failed");
    }}
  />
)}


      <hr />

      <div>Total Cases: {deals.length}</div>

      <div>Total Contacts: {contacts.length}</div>

      <div>Total Tasks: {tasks.length}</div>

      <div>Agent Events: {events.length}</div>

      <h2>Event Log</h2>

      {events.map((event, index) => (

        <div key={index}>
          {event.time} — {event.message}
        </div>

      ))}

    </div>

  );

}
