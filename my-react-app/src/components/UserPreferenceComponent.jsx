import React from "react";
import { preferences } from "../data"; // Import the preferences array

const UserPreferenceComponent = () => {
  return (
    <div className="user-preferences">
      {/* <h2>User Preferences</h2> */}
      <ul className="horizontal-list">
        {preferences.map((preference, index) => (
          <li key={index}>{preference}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserPreferenceComponent;
