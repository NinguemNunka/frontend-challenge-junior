import React, { useState, useEffect } from 'react'
import { BsPeopleCircle, BsSearch } from 'react-icons/bs'
import { MdShoppingBasket } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../../assets/logo.png'
import './style.scss'

function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    
    useEffect(() => {
        window.innerWidth < 1024 ? setIsMobile(true) : setIsMobile(false)
    }, [])

    return (
        <div className="navbar">
            <div className="navbar-div">
                <div className="img-div">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navbar-buttons">
                    <button>MENU</button>
                    <button>MENU</button>
                    <button>MENU</button>
                    <button>MENU</button>
                    <button>MENU</button>
                </div>
                <div>
                    <BsSearch />
                    <BsPeopleCircle />
                    <MdShoppingBasket />
                    { isMobile && 
                        <AiOutlineMenu /> 
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar