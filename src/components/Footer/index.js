import React from 'react'
import {
    AiFillInstagram,
    AiFillFacebook
} from 'react-icons/ai'
import logo from '../../assets/logo.png'
import './style.scss'

function Footer() {
    return (
        <div className="footer">
            <div className="logo-div">
                <img src={logo} alt="logo" />
            </div>

            <div className="footer-div">
                <div className="footer-subdiv">
                    <h2>MENU</h2>
                    <div>
                        <p>Submenu</p>
                        <p>Submenu</p>
                        <br/>
                        <p>Submenu</p>
                        <p>Submenu</p>
                    </div>
                </div>

                <div className="footer-subdiv">
                    <h2>MENU</h2>
                    <div>
                        <input name="email" id="email" type="email" placeholder="Email" />
                        <button type="submit">ENVIAR</button>
                    </div>
                </div>

                <div className="footer-subdiv">
                    <h2>MENU</h2>
                    <div>
                        <p><AiFillInstagram /> Submenu</p>
                        <p><AiFillFacebook /> Submenu</p>
                    </div>
                </div>
            </div>

            <p className="info-p">@Vnda - Tecnologia para ecommerce {window.innerWidth < 680 ? <br/> : "-" } CNPJ 00.0000.000/0001-00</p>
        </div>
    )
}

export default Footer
