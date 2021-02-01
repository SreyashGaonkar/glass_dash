import './ProgressBar.css'

const ProgressBar =({progress})=>{
  
    return(
        <div class="progress">
        <div class="progress__fill" style={{width:`${progress}%`}}></div>
        <span class="progress__text">{progress}%</span>
      </div>
    )
}

export default ProgressBar;