import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import fakeData from "./sahteVeri";
import axios from "axios";

function App() {
  const guncelDate = new Date();
  const [data, setData] = useState(fakeData);
  const [date, setDate] = useState(guncelDate.toISOString().slice(0, 10));

  useEffect(() => {
    setData(null);
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=dm3HF1oxAPdd2XLMggefiQcmMf170Gmt8tRtElN0&date=${date}`
      )
      .then((res) => {
        setData(res.data);
      });
  }, [date]);
  return (
    <div className="App">
      <Header date={date} setDate={setDate} />
      {data ? <Main data={data} /> : <p>Yüklenmesi biraz zaman alabilir...</p>}
      <Footer />
    </div>
  );
}

export default App;
