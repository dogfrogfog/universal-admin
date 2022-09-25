import { ReactNode } from 'react'
import Link from 'next/link'
import { ImFilesEmpty } from 'react-icons/im'
import { FiUsers } from 'react-icons/fi'
import { AiOutlineTrophy, AiOutlineHome } from 'react-icons/ai'
import { BiNews, BiStats } from 'react-icons/bi'
import { GiTabletopPlayers } from 'react-icons/gi'

import styles from './Sidebar.module.scss'

import { Menu, MenuProps } from 'antd'

function getItem(label: string, key: string, icon?: ReactNode, children?: ReactNode[])  {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items: MenuProps['items'] = [
  getItem(<Link href="/">Главная</Link>, 'home', <AiOutlineHome />),
  getItem('Игроки', 'users', <GiTabletopPlayers />, [
    getItem(<Link href="/users/list">Список игроков</Link>, 'users/list'),
    getItem(<Link href="/users/approve">Подтвердить</Link>, 'users/approve'),
    getItem(<Link href="/users/elo">Эло</Link>, 'users/elo'),
  ]),
  getItem('Турниры', 'tournaments', <AiOutlineTrophy />, [
    getItem(<Link href="/tournaments/list">Список турниров</Link>, 'tournaments/list'),
    getItem(<Link href="/tournaments/create">Создать</Link>, 'tournaments/create'),
  ]),
  getItem('Контент', 'content', <BiNews />, [
    getItem(<Link href="/content/news">Новости</Link>, 'content/news'),
    getItem(<Link href="/content/digest">Дайджест</Link>, 'content/digest'),
    getItem(<Link href="/content/stream">Трансляция</Link>, 'content/stream'),
  ]),
  getItem('Страницы', 'pages', <ImFilesEmpty />, [
    getItem(<Link href="/pages/list">Список страниц</Link>, 'pages/list'),
    getItem(<Link href="/pages/create">Создать</Link>, 'pages/create'),
  ]),
  getItem(<Link href="/stats">Статистика</Link>, 'stats', <BiStats />),
];

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <Menu
        defaultSelectedKeys={['home']}
        mode="inline"
        inlineCollapsed={false}
        items={items}
      />
    </div>
  );
};

export default Sidebar