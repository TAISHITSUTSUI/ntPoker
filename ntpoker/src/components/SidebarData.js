import React from "react"
import HomeIcon from '@mui/icons-material/Home';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
  {
    title:"ホーム",
    icon:<HomeIcon />,
    link:"/"
  },
  {
    title:"学ぶ",
    icon:<MarkunreadIcon />,
    link:"/content"
  },
  {
    title:"設定",
    icon:<SettingsIcon />,
    link:"/config"
  }

]
