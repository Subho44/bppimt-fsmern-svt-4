import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="bg-slate-900/95 text-white shadow-xl sticky top-0 z-50 backdrop-blur-md border-b border-cyan-500/20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 md:h-20 md:py-0">

            {/* Logo */}
            <div className="flex justify-center md:justify-start mb-4 md:mb-0">
              <h1
                className="
                  text-2xl sm:text-3xl
                  font-extrabold
                  text-cyan-400
                  tracking-wider
                  cursor-pointer
                  transition-all
                  duration-500
                  hover:text-cyan-300
                  hover:scale-105
                  drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]
                "
              >
                HR POLICY
              </h1>
            </div>

            {/* Menu */}
            <div
              className="
                flex
                flex-wrap
                justify-center
                items-center
                gap-2
                sm:gap-4
                md:gap-6
                lg:gap-8
              "
            >
              <Link
                to="/"
                className="
                  relative
                  px-4 py-2
                  text-sm sm:text-base
                  font-medium
                  rounded-lg
                  transition-all
                  duration-300
                  hover:text-cyan-400
                  hover:bg-slate-800
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-cyan-500/20
                "
              >
                Home
              </Link>

              <Link
                to="/about"
                className="
                  relative
                  px-4 py-2
                  text-sm sm:text-base
                  font-medium
                  rounded-lg
                  transition-all
                  duration-300
                  hover:text-cyan-400
                  hover:bg-slate-800
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-cyan-500/20
                "
              >
                About
              </Link>

              <Link
                to="/emp"
                className="
                  relative
                  px-4 py-2
                  text-sm sm:text-base
                  font-medium
                  rounded-lg
                  transition-all
                  duration-300
                  hover:text-cyan-400
                  hover:bg-slate-800
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-cyan-500/20
                "
              >
                Employee Card
              </Link>

              <Link
                to="/s"
                className="
                  relative
                  px-4 py-2
                  text-sm sm:text-base
                  font-medium
                  rounded-lg
                  transition-all
                  duration-300
                  hover:text-cyan-400
                  hover:bg-slate-800
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-cyan-500/20
                "
              >
                Statcard
              </Link>
              <Link
                to="/add"
                className="
                  relative
                  px-4 py-2
                  text-sm sm:text-base
                  font-medium
                  rounded-lg
                  transition-all
                  duration-300
                  hover:text-cyan-400
                  hover:bg-slate-800
                  hover:-translate-y-1
                  hover:shadow-lg
                  hover:shadow-cyan-500/20
                "
              >
                Add Employee
              </Link>
            </div>

          </div>
        </div>

      </nav>
    </>
  );
};

export default Header;