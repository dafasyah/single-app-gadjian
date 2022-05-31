import BurgerBar from "./BurgerBar";

const Navbar = () => {
    return (
        <nav className="navbar">

            <div className="navbar-links flex m-3">
                <div className="burger-bar hidden basis-1/6 sm:block">
                    <BurgerBar/>
                </div>
                <div className="nav-image basis-1/4">
                    <a href="/">
                        <img src={require("./Images/gadjian-logo.png")} alt="" />
                    </a>
                </div>
                <div className="nav-profile text-right flex flex-auto justify-end items-center">
                    <h1 className="mr-4 flex sm:hidden">Hallo, <a href="/" id="profile-name" className="text-custom-green">Gadjian User</a></h1>
                    <img src={require("./Images/myPhoto.jpg")} alt="" className="rounded-full  w-10 h-10" />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;