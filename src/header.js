import React from "react";
import { Link } from "react-router-dom";

const Nav = () =>{
    return (
        <div class="header">
            <ul class="nav">
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/logout">Logout</Link></li>
                <li><Link to="/html">Html</Link></li>
                <li><Link to="/css">Css</Link></li>
                <li><Link to="/js">Javascript</Link></li>
                <li><Link to="/angular">Angular</Link></li>
                <li><Link to="/react">React</Link></li>
                <li><Link to="/react">Node</Link></li>
            </ul>
        </div>
    )
}

export default Nav;