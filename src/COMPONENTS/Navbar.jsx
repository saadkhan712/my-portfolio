import { useState } from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row bg-black text-white top-0 left-0 w-full p-5 items-center md:justify-between">
        <div className="w-full md:w-[40%] pl-4 md:pl-10">
          <NavLink to="/" onClick={handleMenuClick}>
            <h1 className="text-left text-[30px] md:text-[50px] font-semibold text-red-500">
              saadKhan
            </h1>
          </NavLink>
        </div>
        <div className="md:hidden w-full flex justify-end pr-5">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-[25px]">
            ☰
          </button>
        </div>
        <div
          className={`w-full md:w-auto text-center md:text-right pt-5 md:pt-0 transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-10 font-thin text-[20px] md:text-[25px]">
            <NavLink to="/about-saadkhan" onClick={handleMenuClick}>
              <li className="py-2 md:py-0">
                <a href="#">About Me</a>
              </li>
            </NavLink>
            <NavLink to="saadkhan-resume" onClick={handleMenuClick}>
              <li className="py-2 md:py-0">
                <a href="#">My Resume</a>
              </li>
            </NavLink>
            <NavLink to="/contact" onClick={handleMenuClick}>
              <li className="py-2 md:py-0">
                <a href="#">Contact Me</a>
              </li>
            </NavLink>
            <li className="py-2 md:py-0">
              <SocialIcon target="_blank" url="https://www.instagram.com/saadkhan.712/" />
            </li>
            <li className="py-2 md:py-0">
              <SocialIcon target="_blank" url="https://github.com/saadkhan712" />
            </li>
            <li className="py-2 md:py-0">
              <SocialIcon target="_blank" url="https://www.linkedin.com/in/saad-khan-86a491349/" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
