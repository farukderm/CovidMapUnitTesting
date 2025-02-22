import React from "react";

import { Link } from "react-router-dom";
import { FaVirus } from "react-icons/fa";
import Container from "../container";

const Header = () => {
  return (
    <div className="border bg-blue-800 text-white">
      <Container designs={"flex justify-between items-center"}>
        <div className="flex p-1">
          <FaVirus className="text-3xl text-red-500" />
          <Link to="" className="">
            <span className="font-semibold m-3"> Covid-19</span>
          </Link>
        </div>
        <nav className="flex gap-4">
          <a href="#">Anasayfa</a>
          <a href="#">Sonuçlarımız</a>
          <a href="#" className="max-md:hidden">
            Hakkımızda
          </a>
          <a href="#" className="max-md:hidden">
            İletişim
          </a>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
