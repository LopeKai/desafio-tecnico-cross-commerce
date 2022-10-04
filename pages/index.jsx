import { useState} from 'react'

import { Header } from '../src/components/Header'
import { TaskList } from '../src/components/TaskList'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={theme === 'dark' ? styles.containerDark : styles.containerLight }>
      <Header 
        theme={theme}
      />
      
      <TaskList 
        theme={theme}
        toggleTheme={toggleTheme}
      />
    </div>
  )
}
