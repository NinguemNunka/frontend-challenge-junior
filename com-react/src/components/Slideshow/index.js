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
