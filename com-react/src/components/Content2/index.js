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
