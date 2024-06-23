"use client"
import { useState } from "react";


const FavNumber2 = () => {
  let savedNumber = localStorage.getItem("favNumber");

  const [Name, setFavNumber] = useState(savedNumber ?? "");

  const onFormSubmit = (e:any) => {
    e.preventDefault();
    localStorage.setItem("Name", Name);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="string"
        id="username"
        value={Name}
        onChange={(e) => setFavNumber(e.target.value)}
      />
      <input type="submit" value="Save" className="text-white" ></input>
      <div className="text-white">Name: {Name}</div>
      
    </form>
  );
};

export default FavNumber2;