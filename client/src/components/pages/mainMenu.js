import React, { Component } from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";

import "../../utilities.css";

//TODO: REPLACE WITH YOUR OWN CLIENT_ID
const GOOGLE_CLIENT_ID = "729182095902-dka0ua62eal68jks7in19dp0j81trfl9.apps.googleusercontent.com  ";

const MainMenu = ({ userId, handleLogin, handleLogout }) => {
  return (
    <>
    <h1>Welcome to MathIt!</h1>
      {userId ? (
        <GoogleLogout
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Logout"
          onLogoutSuccess={handleLogout}
          onFailure={(err) => console.log(err)}
        />
      ) : (
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Login"
          onSuccess={handleLogin}
          onFailunre={(err) => console.log(err)}
        />
      )}
    <h1> <p style="font-family:Georgia;font-size:32px;color:black"><b>Welcome to EduMath!</b></p> </h1>
    <h3> <p style="font-family:Georgia;color:orange"> You will be able to learn math and practice answering questions to sharpen your skills </p> </h3>
    <div class="tab">
        <button class="tablinks" onclick="openCity(event, 'Main Menu')">Main Menu</button>
        <button class="tablinks" onclick="openCity(event, 'Study')">Study</button>
        <button class="tablinks" onclick="openCity(event, 'Practice')">Practice</button>
        <button class="tablinks" onclick="openCity(event, 'Questions')">Questions</button>
        <button class="tablinks" onclick="openCity(event, 'Contact Us')">Contact Us</button>
    </div>
    </>
  );
};

export default MainMenu;