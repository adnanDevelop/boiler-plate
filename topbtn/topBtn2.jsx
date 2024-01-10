import React, { useState , useEffect } from "react";

const topBtn2 = () => {
  const [iconAnimation, setIconAnimation] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  window.addEventListener("scroll", () => {
    window.scrollY > 100 ? setIconAnimation(true) : setIconAnimation(false);
  });

  const topBar = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const windowHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrolled = (scrollTop / (scrollHeight - windowHeight)) * 100;
    setScrollPercentage(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

/*
/* TOP SCROLL BUTTON SECTION 
.top-btn {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  color: var(--white);
  z-index: 1000;
  box-shadow: 0 0.2rem 0.4rem rgba(85, 230, 165, 0.5);
  cursor: pointer;
  opacity: 0;
  z-index: 1000;
  transition: var(--transition);
}

.color {
  color: #ffffff1a;
}

.top-btn:hover,
.top-btn:focus {
  box-shadow: 0 0.2rem 1.5rem rgba(85, 230, 165, 0.5);
  background-color: #41ad7d;
}

.top-icon {
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.top-icon::before {
  content: "";
  position: absolute;
  width: 3.5rem;
  height: 3.5rem;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--bg-color);
}


.animate {
  animation: topBtn 0.5s linear;
  opacity: 1;
}

@keyframes topBtn {
  0% {
    transform: translateY(10rem);
  }
  100% {
    transform: translateY(0rem);
  }
}

.icon-animation {
  animation: iconAnimation 1.5s infinite alternate-reverse;
  display: block;
}

@keyframes iconAnimation {
  0% {
    transform: translateY(-0.5rem);
  }
  100% {
    transform: translateY(0.5rem);
  }
}
*/ 


  return (
    <div className={`top-btn ${iconAnimation ? "animateIcon" : ""}  `}  style={{ background: `conic-gradient(#ffa633 ${scrollPercentage}%, #ededed ${scrollPercentage}%)` }} >
      <div
        className={`top-icon position-relative`}
        onClick={topBar}
      >
        <span className="icon-animation">
          <i className="fa-solid fa-arrow-up"></i>
        </span>
      </div>
    </div>
  );
};

export default topBtn2;