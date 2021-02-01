import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Games',
    path: '/',
    icon: '../../images/avatar.png',
    cName: 'nav-text'
  },
  {
    title: 'Library',
    path: '/Library',
    icon: '../../images/library.png',
    cName: 'nav-text'
  },
  {
    title: 'New',
    path: '/New',
    icon: '../../images/upcoming.png',
    cName: 'nav-text'
  },
  {
    title: 'Streams',
    path: '/Streams',
    icon: '../../images/steam.png',
    cName: 'nav-text'
  },
  // {
  //   title: 'Messages',
  //   path: '/messages',
  //   icon: <FaIcons.FaEnvelopeOpenText />,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];
