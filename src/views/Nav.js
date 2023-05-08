import './Nav.scss';
import {
    NavLink
} from "react-router-dom";

let NavItem = [
    { name: "Home", url: "/" },
    { name: "List Anime", url: "/listAnime" },
    { name: "Count Down", url: "/countDown" }
]

const Nav = () => {
    return (
        <div className="topnav">
            {NavItem.map((item, index) => {
                return (
                    <NavLink to={item.url} key={index} exact >{item.name}</NavLink>
                )
            })}
        </div>
    )
}

export default Nav;