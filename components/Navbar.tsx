import React from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mx-6 py-3 ">
      <div>
        <h1 className="text-4xl font-semibold">Fexel</h1>
      </div>
      <div className="flex items-center gap-20">
        <h3>Home</h3>
        <h3>Shop</h3>
        <h3>About</h3>
      </div>
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
};

export default Navbar;
