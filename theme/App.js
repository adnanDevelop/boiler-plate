import { useEffect, useState } from "react";

// .light-theme {
//   --white : #000;
//   --black : #fff;
// }

// .dark-theme {
//   --white : #fff;
//   --black : #000;
// }

function App() {
  const [theme, setTheme] = useState("light-theme");

  const toggletheme = () => {
    (theme === 'light-theme') ? setTheme('dark-theme') : setTheme('light-theme'); 
  };

  useEffect(() => {
    document.body.className = theme;
  } , [theme]);

  return (
    <div className="app">
      <button className="btn btn-primary" onClick={toggletheme}>Dark Mode</button>
    </div>
  );
}

export default App;
