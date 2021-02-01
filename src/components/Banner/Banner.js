import React from 'react'
import './Banner.css'
const Banner = (text,onclick)=> {
   
    return (
    <div class="banner">
        <div class="banner__content">
            <div class="banner__text">
                <strong>Reminder:</strong> your subscription expires in 22 days. Renew to avoid account suspension.
            </div>
            <button class="banner__close" type="button">
                <span class="material-icons">
                close
                </span>
            </button>
        </div>
    </div>
    )
}

export default Banner
