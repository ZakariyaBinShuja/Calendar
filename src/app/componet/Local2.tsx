"use client"
import { useState } from "react";


const FavNumber1 = () => {
  let savedNumber = localStorage.getItem("favNumber");

  const [Note, setFavNumber] = useState(savedNumber ?? "");

  const onFormSubmit = (e:any) => {
    e.preventDefault();
    localStorage.setItem("Note", Note);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="string"
        id="username"
        value={Note}
        onChange={(e) => setFavNumber(e.target.value)}
      />
      <input type="submit" value="Save" className="text-white" ></input>
      <div className="text-white">Your Note: {Note}</div>
      
    </form>
  );
};

export default FavNumber1;