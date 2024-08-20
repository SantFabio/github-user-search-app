import { useState } from 'react';
import moon from '../../assets/icon-moon.svg'
import sun from '../../assets/icon-sun.svg'

export const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark");
    };
  return (
    <>
    <button onClick={toggleDarkMode} className="w-[76px] h-5 flex justify-between items-center font-bold gap-4">
        <span className="text-sm tracking-widest dark:text-pure-white">{darkMode ? 'LIGHT' : 'DARK'}</span>
        <img className="" src={darkMode ? sun : moon} alt={darkMode ? 'moon' : 'sun'} />
    </button>
    </>
  )
}
