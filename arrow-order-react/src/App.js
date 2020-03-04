import React, {Component} from 'react';
import './css_reset.css';
import './App.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Hat         from './components/ComCom/HatAndNav/HatAndNav';
import Login       from './components/Login/Login';
import MainPage    from './components/MainPage/MainPage';
import CommingSoon from './components/ComCom/CommigSoon/CommingSoon';
import BurgerMenu  from './components/BurgerMenu/BurgerMenu';
import WikiRouter  from './components/Wiki/WikiRouter';
import Products    from './components/Products/ProductsRouter';
import Constructor from './components/Constructor/Constructor';
import AvalDates   from './components/AvalibleDates/AvalibleDates';
import PopUp       from './components/ComCom/PopUp/PopUp';
import CakeDetails from './components/Constructor/ConstructorComponents/CakeOrderDetails/CakeOrderDetails';

import InputText   from './components/ComCom/InputText/InputText';


export default class App extends Component{

  render() {

    let toHat = (title,component) => <Hat title = {title}>{component}</Hat>

    let toHatWithPopUp = (title,component) =>
      <>
        <Hat title = {title}>
          {component}
        </Hat>
        <PopUp/>
      </>

    return (
      <Router>
        <div className="App">
          <Route exact path = '/' component = {Login} /> 
          <Route exact path = '/MainPage' component = {MainPage} />
          <Route exact path = '/Menu' component = {BurgerMenu} />
          <Route path = '/Wiki' component = {() => toHat('Вики', <WikiRouter/>)}/>
          <Route path = '/Constructor' component = {() => toHatWithPopUp('Заказ', <Constructor/>)}/>
          <Route exact path = '/FreeDates' component = {() => toHat('Свободные даты', <AvalDates/>)} />
          <Route exact path = '/Contacts' component = {() => <div>
            <InputText/>
            </div>} />
          <Route exact path = '/WorkWithUs' component = {CommingSoon} />
          <Route path = '/Products' component = {() => toHat('Продукция', <Products/>)} />
          <Route exact path = '/CakeDetails/' component = {() => toHat('Детали заказа', <CakeDetails/>)} />
        </div>
      </Router>
    );
  }  
}
