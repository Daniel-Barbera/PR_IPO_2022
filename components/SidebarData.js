import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as CgIcons from 'react-icons/cg';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Juegos',
    path: '/games/',
    icon: <FaIcons.FaGamepad/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Simón dice',
        path: '/games/simon',
        icon: <GiIcons.GiAbstract030 />
      },
      {
        title: 'Une las cartas',
        path: '/games/memory',
        icon: <CgIcons.CgCardSpades />
      },
      {
        title: 'Matemáticas',
        path: '/games/math',
        icon: <CgIcons.CgMathPlus />
      }
    ]
  },
  {
    title: 'About',
    path: '/about',
    icon: <FaIcons.FaInfoCircle />,
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <IoIcons.IoMdContact />,
  }
];