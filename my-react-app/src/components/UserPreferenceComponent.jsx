// eslint-disable-next-line no-unused-vars
import React from "react";
import { preferences } from "../data.jsx"; // Import the preferences array

const UserPreferenceComponent = () => {
  return (
    <div className="user-preferences">
      {/* <h2>User Preferences</h2> */}
      <ul>
        {preferences.map((preference, index) => (
          <li key={index}>{preference}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPreferenceComponent;
