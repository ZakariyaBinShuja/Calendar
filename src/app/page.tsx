import Image from "next/image";
import { CalendarForm } from "./componet/Calendar";
import FavNumber from "./componet/Local";
import FavNumber1 from "./componet/Local2";
import FavNumber2 from "./componet/Local3";

export default function Home() {
  return (
    <div>
    <div className="bg-slate-800">
      <div className="flex justify-center items-center pt-80 pb-80">
        <CalendarForm />

      </div>
  
    </div>
    <div className="flex justify-center items-center pt-44 bg-black pb-10">
<FavNumber2/>
</div>
    
<div className="flex justify-center items-center  bg-black pb-10">
<FavNumber/>
</div>

<div className="flex justify-center items-center  bg-black pb-10">
<FavNumber1/>
</div>
<div className="flex justify-center items-center text-lg pt-3">    <p>All rights reserved by Zakariya Bin Shuja &copy; 2024</p></div>
    </div>
  );
}
