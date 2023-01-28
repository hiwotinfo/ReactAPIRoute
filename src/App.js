
import React from 'react'
import Header from '../src/CommonResource/Header/Header';
import Top from './CommonResource/Main/Top/Top';
import FirstHilight from './CommonResource/Main/FirstHilight/FirstHilight';
import SecondHilight from './CommonResource/Main/SecondHilight/SecondHilight';
import ThirdHilight from './CommonResource/Main/ThirdHilight/ThirdHilight';
import FourthHilighter from './CommonResource/Main/FourthHilighter/FourthHilighter';
import FivthHilighter from './CommonResource/Main/FivthHilighter/FivthHilighter';
import SixHilighter from './CommonResource/Main//SixHilighter/SixHilighter';
import Footer from '../src/CommonResource/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import YoutubVedio from './CommonResource/YoutubVedio/YoutubVedio';
import AppleNewsOrg from './CommonResource/AppleNewsOrg.js/AppleNewsOrg';



function App() {
  return (
    <React.Fragment>
  <Header/>
  <Top/>
  <FirstHilight />
  <SecondHilight />
  <ThirdHilight />
  <FourthHilighter /> 
  <FivthHilighter />
  <SixHilighter />
  <YoutubVedio />
  <AppleNewsOrg />
  <Footer/>
    </React.Fragment>
  );
}

export default App;
