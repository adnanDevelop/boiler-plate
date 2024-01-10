import { useEffect, useState } from "react";
import Home from "./component/pages/Home";
import Loader from "./component/pages/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingAnimation = async () => {
      try {
        await new Promise((resolve, reject) =>
          setTimeout(() => {
            resolve(setLoading(false));
          }, 2000)

        );
      } catch (error) {
        console.log(error);
      }
    };

    loadingAnimation();
  }, []);

  return <>{loading ? <Loader /> : <Home />}</>;
}

export default App;

/*  loader
 <div className="loader">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
*/ 
