import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import fakeData from "./sahteVeri";
import axios from "axios";
import Pick from "./components/pick";
import sahteVeri from "./sahte-veri-3";

function App() {
  const guncelDate = new Date();
  const [data, setData] = useState(fakeData);
  const [date, setDate] = useState(guncelDate.toISOString().slice(0, 10));
  const [isRandom, setIsRandom] = useState(false);

  useEffect(() => {
    setData(null);
    const dataUrl = isRandom
      ? `https://api.nasa.gov/planetary/apod?api_key=dm3HF1oxAPdd2XLMggefiQcmMf170Gmt8tRtElN0&count=3`
      : `https://api.nasa.gov/planetary/apod?api_key=dm3HF1oxAPdd2XLMggefiQcmMf170Gmt8tRtElN0&date=${date}`;
    axios
      .get(dataUrl)
      .then((res) => setData(res.data))
      .catch((res) => setData(isRandom ? sahteVeri : fakeData));
  }, [date, isRandom]);
  return (
    <div className="App">
      <Header setIsRandom={setIsRandom} date={date} setDate={setDate} />
      {isRandom ? <Pick items={data} /> : <Main data={data} />}
      <Footer />
    </div>
  );
}

export default App;
