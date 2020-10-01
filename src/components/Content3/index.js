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
