import React, { useState } from 'react';
import * as FaUserTie from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

import { SidebarData } from './SidebarData';
import './sideBar.css';
import { IconContext } from 'react-icons';

import Avatar from '../../images/avatar.png'
import Twitch from '../../images/twitch.png'
import steam from '../../images/steam.png'
import upcoming from '../../images/upcoming.png'
import library from '../../images/library.png'
import Assassins from '../../images/assassins.png'


const Sidebar = ()=> {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const history = useHistory();

  return (
    <>
       <div className="sidebar-container">
            
            <div className="user">
              <img  src={Avatar}/>
              <h3>Sreyash Gaonkar</h3>
              <p>hello gamers</p>
            </div>

            <div className="sidebar-content">
              <div className="Links">
                  {SidebarData.map((item, index) => {
                  return (
                    <div  key={index} className="Link" onClick={()=> history.push(item.path)}>
                        <img  src={Twitch} />
                        <h2>{item.title}</h2>
                    </div>
                  );
                  })}
            
              </div>
            </div>

            <div className="sidebar-extra">
              <h2>Join pro for free</h2>
            </div>
      </div>
    
    </>
  );
}

export default Sidebar;
