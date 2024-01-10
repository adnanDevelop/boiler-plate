const [scrollPercentage, setScrollPercentage] = useState(0);



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


 <div className="scroll_indicator">
    <div className="scroll_indicator_inner"  style={{ width: `${scrollPercentage}%` }} ></div>
</div> 
