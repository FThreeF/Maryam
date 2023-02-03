import React from 'react';
import './App.css';
import Header from './components/header/Header.jsx';
import HelpInformation from './components/helpInformation/HelpInformation';
import MainBlock from './components/mainBlock/MainBlock';
import BeautifulInformationPanel from './components/UI/beautifulInformationPanel/BeautifulInformationPanel';
import InformationPanel from './components/UI/informationPanel/InformationPanel';
import yourHelpBackground from './source/yourHelpBackground.png';
import quoteBackground from './source/quoteBackground.png';
import YourHelp from './components/yourHelp/YourHelp';
import Footer from './components/footer/Footer';
import Explanations from './components/explanations/Explanations';
import Statistics from './components/statistics/Statistics';
import Quote from './components/quote/Quote';


const App = () => {
  return (
    <div className="app">
      <Header />
      <MainBlock />

      <InformationPanel>
        <HelpInformation />
      </InformationPanel>
      
      О Фонде

      <InformationPanel>
        <Explanations />
      </InformationPanel>
      
      Программы

      <InformationPanel>
        <Statistics />
      </InformationPanel>

      Командафыв

      <BeautifulInformationPanel background={yourHelpBackground}>
        <YourHelp />
      </BeautifulInformationPanel>

      Документывы

      <BeautifulInformationPanel background={quoteBackground}>
        <Quote />
      </BeautifulInformationPanel>

      новости

      <Footer/>
    </div>
  )
}

export default App;