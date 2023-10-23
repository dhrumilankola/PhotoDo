import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import Logo from './Components/Logo/Logo';
import ImgLayer from './Components/ImgLayer/ImgLayer';

const App = () => {
  const [category, setCategory] = useState("all");
  const [searchVal, setSearchVal] = useState("");
  const [layerActive, setLayerActive] = useState(false);
  const [activeImg, setActiveImg] = useState([]);

  return (
    <>
      <ImgLayer layerActive={layerActive} setLayerActive={setLayerActive} activeImg={activeImg} />
      <Logo />
      <Navbar searchVal={searchVal} setSearchVal={setSearchVal} category={category} setCategory={setCategory} />
      <Content setSearchVal={setSearchVal} setActiveImg={setActiveImg} setLayerActive={setLayerActive} category={category} setCategory={setCategory} />
      <Footer />
    </>
  );
}

export default App;

// CI= npm run build

