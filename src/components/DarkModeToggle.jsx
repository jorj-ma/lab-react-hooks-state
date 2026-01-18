import React from 'react'
import styles from '../styles/DarkMode.module.css'

const DarkModeToggle = ({darkMode,setDarkMode}) => {
  // TODO: Implement dark mode toggle logic

  return (
    <button onClick={()=>setDarkMode(!darkMode)} className={styles.toggleButton}>Toggle {darkMode? 'Light':'Dark'} Mode</button>
  )
}

export default DarkModeToggle
