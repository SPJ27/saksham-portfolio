import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header className="flex justify-between items-center p-4 px-16 inter">
        {/* left */}
        <div className="flex justify-between items-center gap-4">
          <h1>Saksham</h1>
        </div>
        {/* middle */}
        <div className="flex justify-between items-center gap-4">
          <ul className="flex gap-9">
            <li className=""><Link to='/'>Home</Link> </li>
            <li className=""><Link to='/about'>About</Link> </li>
            <li className=""><Link to='/projects'>Projects</Link> </li>
            <li className=""><Link to='/contact'>Contact</Link> </li>
          </ul>
        </div>
        {/* right */}
        <div className="flex justify-between items-center rounded-full  text-extrabold">
          <button  className="flex justify-between items-center px-4 p-2 gap-2 bg-black text-white rounded-full text-extrabold">
            Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
