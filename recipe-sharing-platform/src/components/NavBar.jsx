import { Link } from "react-router";

function NavBar() {
    return (
        <nav className="flex justify-between items-center p-6 bg-gray-900 text-white font-montserrat">
            <div>
            <Link to={"/"}><h1 className="cursor-pointer text-4xl font-bold">Tupikee!</h1></Link>
            </div>
            <div className="font-semibold relative text-white">
                <Link className="m-3 cursor-pointer p-3 border-b-2 border-b-transparent transition-colors duration-300 ease-linear hover:border-b-white" to={"/"}>All Recipes</Link>
                <Link className="m-3 cursor-pointer p-3 border-b-2 border-b-transparent transition-colors duration-300 ease-linear hover:border-b-white">Contact Us</Link>
            </div>
        </nav>
    )
}

export default NavBar;