function NavBar() {
    return (
        <nav className="flex justify-between p-3 bg-gray-900 text-white">
            <div>
            <h1>Foood!</h1>
            </div>
            <div>
                <a className="m-3">All Recipes</a>
                <a className="m-3">Contact Us</a>
            </div>
        </nav>
    )
}

export default NavBar;