import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

function Home() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return <div className="container"></div>;
}

export default Home;
