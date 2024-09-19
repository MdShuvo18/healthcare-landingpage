import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const links = [
        { title: "Home", path: "/" },
        { title: "Services", path: "/services" },
        { title: "Contact us", path: "/contact" },
        // { title: "Help", path: "/help" },
        // { title: "Blogs", path: "/blogs" },
    ];

    return (
        <div className="navbar md:pt-7">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-full p-2 shadow"
                    >
                        {links.map((link) => (
                            <a key={link.path}>
                                <NavLink
                                    className="hover:text-blue-300 hover:text-lg hover:font-semibold hover:border-b-2 ml-3"
                                    to={link.path}
                                >
                                    {link.title}
                                </NavLink>
                            </a>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center items-center">
                    <img
                        className="w-[55px] h-[50px]"
                        src="/logo.png"
                        alt=""
                    />
                    <Link className="text-xl lg:text-3xl font-bold lg:font-extrabold text-yellow-green">
                        <span className="text-primary-cyan">Health</span>care
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex px-1 text-xl gap-7">
                    {links.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    isActive ? "text-primary-cyan border-b-2 border-primary-cyan" : "text-black"
                                }
                            >
                                {link.title}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end lg:gap-5 ">
                <button className="rounded-2xl border-2 border-primary-cyan  text-primary-cyan md:text-xl p-2 font-bold md:px-10 md:py-3">
                    Sing Up
                </button>
                <button className=" hidden md:inline-block rounded-2xl bg-primary-cyan text-white md:text-xl font-bold md:px-10 p-2 md:py-3">
                    Log In
                </button>
            </div>
        </div>
    );
};

export default Navbar;
