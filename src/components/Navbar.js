import React from 'react'
import { getNews } from '../services/getNews';

const selectCategory = (event) =>{
    getNews(event.target.value);
}
 
export default function Navbar() {
    return (
        <>
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" >
                            AI Based News
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <button className="nav-link"  value="general" onClick={selectCategory}>
                                        Home
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" value="general" onClick={selectCategory}>
                                        General
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" value="sports" onClick={selectCategory}>
                                        Sports
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" value="health" onClick={selectCategory}>
                                        Health
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link"  value="sciene" onClick={selectCategory}>
                                        Science
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" value="entertainment" onClick={selectCategory}>
                                        Entertainment
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" value="technology" onClick={selectCategory}>
                                        Technology
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
