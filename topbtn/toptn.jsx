.top-icon {
  width: 4rem;
  height: 4rem;
  position: fixed;
  right: 5rem;
  bottom: 5rem;
  z-index: 1;
  cursor: pointer;
  display: grid;
  place-items: center;
  visibility: hidden;
  opacity: 0.8;
  font-size: 2rem;
  border-radius: 0.4rem;
  color: var(--white);
  background-color: var(--yellow);
  border: 0.2rem solid transparent;
  box-shadow:  0 0.8rem 1.5rem rgb(236 145 35 /25%);
  transition: var(--transition);
}

.top-icon:hover , .top-icon:focus {
  opacity: 1;
  color: var(--yellow);
  border-color: var(--yellow);
  background-color: transparent;
}

.animateIcon {
 visibility: visible;
  animation : iconAnimation 0.5s linear;
}

@keyframes iconAnimation {
  0%{transform: translateY(10rem);}
  100%{
      transform: translateY(0rem);
  }
}

.icon-animation {
  animation: icon 1s linear infinite alternate-reverse;
}

@keyframes icon {
  0%{transform: translateY(-0.5rem);}
  100%{transform: translateY(0rem);}
}

import React , {useState} from 'react'
// import {FaAngleUp} from 'react-icons/fa'
const TopIcon = () => {
    const [iconAnimation , setIconAnimation] = useState(false);
    window.addEventListener('scroll' , () => {
        (window.scrollY > 100) ? setIconAnimation(true) : setIconAnimation(false);
    })

    const topBar = () => {
      window.scrollTo({
        top : 0,
        behavior : 'smooth',
      })
    }

  return (
    <div className={`top-icon ${iconAnimation ? 'animateIcon' : ''}`} onClick={topBar}  >
        <span className='icon-animation'>
        {/* <FaAngleUp/> */}
        <i className="fa-solid fa-arrow-up"></i>
        </span>
    </div>
  )
}

export default TopIcon;
