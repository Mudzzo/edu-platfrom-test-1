import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="p-2 bg-white flex justify-around ">
      <Link to="/payment" className="text-blue-500 text-lg font-semibold hover:underline">
        Payment
      </Link>
      <Link to="/check" className="text-blue-500 font-semibold text-lg hover:underline">
        Check
      </Link>
    </div>
  );
}
