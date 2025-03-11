import React, { useState } from "react";
import ImageCarousel from "./components/ImageCarousel";
import FinalWish from "./components/FinalWish";

function App() {
  const [showWish, setShowWish] = useState(false);

  return (
    <div className="app">
      {showWish ? <FinalWish /> : <ImageCarousel onFinish={() => setShowWish(true)} />}
    </div>
  );
}

export default App;
