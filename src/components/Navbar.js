import React from 'react'
import { getNews } from '../services/getNews';


 
export default function Navbar(props) {
    return (
        <>
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" onClick={props.selectCategory} value ='General' >
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
                                    <button className="nav-link" value="general" onClick={props.selectCategory}>
                                        General
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" value="sports" onClick={props.selectCategory}>
                                        Sports
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" value="health" onClick={props.selectCategory}>
                                        Health
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link"  value="science" onClick={props.selectCategory}>
                                        Science
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" value="entertainment" onClick={props.selectCategory}>
                                        Entertainment
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link" value="technology" onClick={props.selectCategory}>
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
