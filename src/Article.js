import React from 'react'
import './App.css';

const Article = ({title, image , content}) => {
    return (
        <div class="blog-card">
            <div>
                <h1>{title}</h1>
                <img src= {image}  />
                <p>
                {content}
            </p>
            </div>
            
        </div>
    )
}

export default Article