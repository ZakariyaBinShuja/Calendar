"use client"
import { useState } from "react";


const FavNumber = () => {
  let savedNumber = localStorage.getItem("favNumber");

  const [TaskDate, setFavNumber] = useState(savedNumber ?? "");

  const onFormSubmit = (e:any) => {
    e.preventDefault();
    localStorage.setItem("TaskDate", TaskDate);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="string"
        id="username"
        value={TaskDate}
        onChange={(e) => setFavNumber(e.target.value)}
      />
      <input type="submit" value="Save" className="text-white" ></input>
      <div className="text-white">Task Date: {TaskDate}</div>
      
    </form>
  );
};

export default FavNumber;