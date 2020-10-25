import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { SidebarData } from '../SidebarData';

function Header() {
    const [Sidebar, setSidebar] = useState(true);
    const showSidebar = () => setSidebar(!Sidebar);
    const closeSidebar = () => {
        if (Sidebar)
            setSidebar(false);
    }
    return (
        <>
            <div className="header" onClick={closeSidebar}>
                <div className="header-left">
                    <button className="header-bars" onClick={showSidebar}>
                        <i className="fas fa-bars" />
                    </button>
                    <Link to="/">
                        <span className="header-logo">
                            <i className="fab fa-youtube"></i>
                            <span>YouTube</span>
                        </span>
                    </Link>
                </div>
                <div className="header-right">
                    <button> <i className="fas fa-search" /></button>
                    <button><i className="fas fa-th" /></button>
                    <button><i className="fas fa-video" /></button>
                    <button><i className="fas fa-bell" /></button>
                </div>
            </div>
            <nav className={Sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Header
