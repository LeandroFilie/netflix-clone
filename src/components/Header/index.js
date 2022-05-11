import { useEffect, useState } from 'react';
import './index.scss';

export default function Header(){
  const [ isScrolling, setIsScrolling ] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <header className={isScrolling ? 'scrolling' : ''}>
      <div className="logo">
        <img src='/logo.png' alt="Netflix" />
      </div>
      <div className="user">
        <img src='/user.png' alt="Usuário" />
      </div>
    </header>
  )
}