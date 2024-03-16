
import profile from '../images/profile.png'
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <a className="btn btn-ghost text-3xl">Easy Cook</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-bg">
              <a>Home</a>
            </li>
            <li className="text-bg">
              <a>Recipes</a>
            </li>
            <li className="text-bg">
              <a>About</a>
            </li>
            <li className="text-bg">
              <a>Search</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label className="input rounded-full input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="text" className="grow" placeholder="Search" />
          </label>

          <img className='ml-4' src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
