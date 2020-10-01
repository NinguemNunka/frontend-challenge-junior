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