import Image from "next/image";
import { CalendarForm } from "./componet/Calendar";


export default function Home() {
  return (
    <div>
      <div className="bg-slate-800">
        <div className="flex justify-center items-center pt-80 pb-80">
          <CalendarForm />

        </div>

      </div>

      <div className="flex justify-center items-center text-lg pt-3">    <p>All rights reserved by Zakariya Bin Shuja &copy; 2024</p></div>
    </div>
  );
}
