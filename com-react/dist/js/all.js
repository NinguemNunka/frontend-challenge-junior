import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import './styles/style.scss'

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
)
import React from 'react'
import Navbar from '../components/Navbar'
import Slideshow from '../components/Slideshow'
import Content1 from '../components/Content1'
import Content2 from '../components/Content2'
import Content3 from '../components/Content3'
import Footer from '../components/Footer'

function Home() {
    return (
        <>
            <Navbar />
            <Slideshow />
            <Content1 />
            <Content2 />
            <Content3 />
            <Footer />
        </>
    )
}

export default Home

import React from 'react'
import Card from '../_Card'
import './style.scss'

function Content1() {
    return (
        <div className="content1">
            <div className="content1-div">
                <div className="content1-subdiv">
                    <p>Lorem ipsum lorem dolor</p>
                    <h1>
                        Lorem ipsum<br/>
                        dolor sit amet
                    </h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelererisque felis imperdiet proin fermentum. Praesent semper feugiat nibh sed pulvinar proin gravida.</p>
                </div>

                <div className="content1-subdiv">
                    <Card 
                    imageHeight={309}
                    width={300}
                    title="Título 1" 
                    content="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempo." />
                </div>

                <div className="content1-subdiv">
                    <Card 
                    imageHeight={160}
                    width={300}
                    title="Título 2" 
                    content="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempo." />
                    <Card 
                    imageHeight={308}
                    width={300}
                    title="Título 3" 
                    content="Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempo." />
                </div>
            </div>
        </div>
    )
}

export default Content1

import React from 'react'
import Card from '../_Card'
import './style.scss'

function Content2() {
    return (
        <div className="content2">
            <div className="content2-div">
                <Card
                imageHeight={325}
                width={240}
                hideContent="true" />

                <div className="text-div">
                    <p>Lorem ipsum lorem dolor</p>
                    <h1>Lorem ipsum<br/>dolor sit amet</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidudunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Praesent semper feugiat nibh sed pulvinar proin gravida.</p>
                    <button>Call-to-action</button>
                </div>

                <Card
                imageHeight={240}
                width={355}
                hideContent="true" />
            </div>
        </div>
    )
}

export default Content2

import React from 'react'
import Card from '../_Card'
import './style.scss'

function Content3() {
    return (
        <div className="content3">
            <div className="content3-div">
                <Card
                hideContent="true"
                imageHeight={300}
                width={300} />
                <div>
                    <h1>@vndaecommerce</h1>
                    <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Praesent semper feugiat nibh sed pulvinar proin gravida.</p></div>
                </div>
                <Card
                hideContent="true"
                imageHeight={300}
                width={301} />
            </div>
        </div>
    )
}

export default Content3

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

import React, { useState, useEffect } from 'react'
import { BsPeopleCircle, BsSearch } from 'react-icons/bs'
import { MdShoppingBasket } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../../assets/logo.png'
import './style.scss'

function Navbar() {
    const [isMobile, setIsMobile] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    
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
                        <AiOutlineMenu
                        onClick={() => setMobileMenu(!mobileMenu)} /> 
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
import React, { useState, useEffect, createRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import './style.scss'
import loadingGif from '../../assets/loading.svg'

SwiperCore.use([ Navigation ])

function Slideshow() { 
    const [img1, setImg1] = useState()
    const [img2, setImg2] = useState()
    const [img3, setImg3] = useState()
    const [img4, setImg4] = useState()
    const [img5, setImg5] = useState()
    const [img6, setImg6] = useState()
    const swiper = createRef()

    const fetchImg = (url, setImg) => {
        fetch(url)
            .then(res => {
                return res.blob()
            })
            .then(blob => {
                setImg(URL.createObjectURL(blob))
            })
    }

    useEffect(() => {
        let width = window.innerWidth
        let height = window.innerHeight - 100

        // A altura aumenta +1 para variar a imagem!
        fetchImg(`https://picsum.photos/` + width + `/` + (height + 0) + `/`, setImg1)
        fetchImg(`https://picsum.photos/` + width + `/` + (height + 1) + `/`, setImg2)
        fetchImg(`https://picsum.photos/` + width + `/` + (height + 2) + `/`, setImg3)
        fetchImg(`https://picsum.photos/` + width + `/` + (height + 3) + `/`, setImg4)
        fetchImg(`https://picsum.photos/` + width + `/` + (height + 4) + `/`, setImg5)
        fetchImg(`https://picsum.photos/` + width + `/` + (height + 5) + `/`, setImg6)
    }, [])

    const Loading = () => {
        return (
            <div className="loading">
                <img src={loadingGif} alt="loading" />
            </div>
        )
    }

    return (
        <div className="slideshow">
            <div>             
                <Swiper
                ref={swiper}
                navigation
                loop>
                    <SwiperSlide>{ img1 ? <img src={img1} alt="img1" /> : <Loading /> }</SwiperSlide>
                    <SwiperSlide>{ img2 ? <img src={img2} alt="img2" /> : <Loading /> }</SwiperSlide>
                    <SwiperSlide>{ img3 ? <img src={img3} alt="img3" /> : <Loading /> }</SwiperSlide>
                    <SwiperSlide>{ img4 ? <img src={img4} alt="img4" /> : <Loading /> }</SwiperSlide>
                    <SwiperSlide>{ img5 ? <img src={img5} alt="img5" /> : <Loading /> }</SwiperSlide>
                    <SwiperSlide>{ img6 ? <img src={img6} alt="img6" /> : <Loading /> }</SwiperSlide>
                </Swiper>
            </div>
            <div className="navhelper">
                <div />
                { img1 && img2 && img3 && img4 && img5 && img6 ?
                <> 
                <button style={{ backgroundImage : 'url(' + img1 + ')' }}></button>
                <button style={{ backgroundImage : 'url(' + img2 + ')' }}></button>
                <button style={{ backgroundImage : 'url(' + img3 + ')' }}></button>
                <button style={{ backgroundImage : 'url(' + img4 + ')' }}></button>
                <button style={{ backgroundImage : 'url(' + img5 + ')' }}></button>
                <button style={{ backgroundImage : 'url(' + img6 + ')' }}></button>
                </>
                : 
                <img src={loadingGif} alt="loading" />
                }
                <div />
            </div>
        </div>
    )
}

export default Slideshow

import React from 'react'
import './style.scss'

function _Card(props){
    const { width, imageHeight, title, content, hideContent } = props

    return (
        <div className="card"
        style={{
            width : width
        }}>
            <div 
            className="card-image" 
            style={{ 
                height : imageHeight, backgroundImage: `url(https://picsum.photos/` + width + `/` + imageHeight + `/)` 
            }} />
            
            <div className="card-content" style={{
                display : hideContent ? "none" : "block"
            }}>
                <strong>{ title }</strong>
                <p>{ content }</p>
            </div>
        </div>
    )
}

export default _Card