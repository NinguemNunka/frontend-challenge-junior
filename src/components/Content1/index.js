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
