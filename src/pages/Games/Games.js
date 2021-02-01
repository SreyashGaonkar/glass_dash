import SideBar from '../../components/sidebar/sideBar'
import './Games.css'
import Table from '../../components/table/Table'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Banner from '../../components/Banner/Banner'
import Loading from '../../components/Loading/Loading'
import Accordian from '../../components/Accordian/Accordian'
const Games =()=> {
  return (
    <div className='game-container'>
     <Table/>
     <ProgressBar progress={50}/>
     <Banner/>
     <Loading/>
     <Loading type={'rotating'}/>
     <Accordian/>
    </div>
  );
}

export default Games;