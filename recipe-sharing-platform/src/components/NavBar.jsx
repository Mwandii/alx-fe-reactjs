import { Link } from "react-router";

function NavBar() {
    return (
        <nav className="flex justify-between p-3 bg-gray-900 text-white">
            <div>
            <Link to={"/"}><h1 className="cursor-pointer">Foood!</h1></Link>
            </div>
            <div>
                <Link className="m-3 cursor-pointer" to={"/"}>All Recipes</Link>
                <Link className="m-3 cursor-pointer">Contact Us</Link>
            </div>
        </nav>
    )
}

export default NavBar;