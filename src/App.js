import React from 'react';
import { Footer } from './Components/Footer/Footer.jsx';
import { Header } from './Components/Header/Header.jsx';
import { LayOut } from './Components/Layout/Layout.jsx';
import { Main } from './Components/Main/Main.jsx';


function App() {
  return <>
    <LayOut />
    <Header />
    <Main />
    <Footer />
  </>;
}

export default App;
