import React from 'react'
import './Loading.css'
const Loading =(type)=> {
    if(type.type === 'rotating'){
        return (<div class="loading loading--full-height"></div> )
    }else {
        return (<div class="loading-2 loading-2--full-height"></div>)
    }
   
}

export default Loading
