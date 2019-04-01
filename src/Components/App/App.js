import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ThemeContext } from '../../ThemeContext';

import NavbarWithRouter from '../Navbar/Navbar';
import SideMenu from '../SideMenu/SideMenu';
import Footer from '../Footer/Footer';
import HomePage from '../LargeScopeComponents/HomePage/HomePage';
import About from '../LargeScopeComponents/About/About';
import Contact from '../LargeScopeComponents/Contact/Contact';
import PortfolioProject from '../LargeScopeComponents/PortfolioProject/PortfolioProject';
import ProjectDisplayWithRouter from '../LargeScopeComponents/ProjectDisplay/ProjectDisplay';
import NotFoundPageComponent from '../NotFoundPageComponent/NotFoundPageComponent'; 

import styles from './App.module.css';

class App extends React.Component {

  // - Dispatch initial API call to the Neo4J database here
  componentWillMount() {

    const clientDateTime = new Date();
    const hour = clientDateTime.getHours();
    ( hour > 7 && hour < 21 ) ? this.props.switchTheme('light') : this.props.switchTheme('dark');
  };

  render(){

    return (
      <ThemeContext.Provider value={ this.props.settings.theme }> 
        <div className={ styles.app }>
          <NavbarWithRouter 
            searchThroughArtists={ this.props.searchThroughArtists }
            sideMenuOpen={ this.props.settings.sideMenuOpen }
            onSideMenuButtonClick={ this.props.toggleSideMenu }
          /> 
          <Switch>
            <Route path='/' exact component={ HomePage }/>
            <Route path='/about' component={ About }/> 
            <Route path='/portfolioproject' component={ PortfolioProject }/>
            <Route path ='/futureprojects' component={ ProjectDisplayWithRouter }/>
            <Route path='/contact' component={ Contact }/>

            {/* Catch all route for 404 errors */}
            <Route render={ ({ location }) =>  <NotFoundPageComponent/> }/>
          </Switch>
          <Footer/>
          <SideMenu 
            currTheme={ this.props.settings.theme }
            open={ this.props.settings.sideMenuOpen }
            onThemeSwitch={ this.props.switchTheme }
            onSideMenuButtonClick={ this.props.toggleSideMenu }
          />
        </div>    
      </ThemeContext.Provider>    
    ); // - return
  }; // - render()
}

export default App;
