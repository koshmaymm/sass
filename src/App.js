import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Hello from "./Hello";

import "./styles/App.css";
import "./styles/index.css";
import "./styles/Hello.scss";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navigation">
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="hello">Hello</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/hello" element={<Hello />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// import { Route, Switch } from "react-router-dom";
// import AboutPage from "./AboutPage";
// import HomePage from "./Homepage/HomePage";
// import NotFoundPage from "./NotFoundPage";
// import PropTypes from "prop-types";
// import React from "react";
// import { hot } from "react-hot-loader";
// import {  Collapse,  Navbar,  NavbarToggler,  NavbarBrand,  Nav,  NavItem,  NavLink } from 'reactstrap';
// import i18n from "../i18n";

// const baseRouteUrl = "/:locale(pt|en)?";
// export const baseUrl = i18n.language === 'en' ? '' : '/'+i18n.language;

// class App extends React.Component {
//   state = {    isOpen: false  }

//   render() {    return (
//   <div>
//     <div>
//       <Navbar color="grey" expand="md">
//         <NavbarBrand href="/">Testing</NavbarBrand>
//         <Nav className="ml-auto" navbar>
//           <NavItem>
//             <NavLink href={baseUrl + "/"}>Home</NavLink>
//           </NavItem>
//           <NavItem>
//             <NavLink href={baseUrl + "/about/"}>About</NavLink>
//           </NavItem>
//         </Nav>
//       </Navbar>
//     </div>
//     <Switch>
//       <Route exact path={baseRouteUrl + "/"} component={HomePage} />
//       <Route path={baseRouteUrl + "/about"} component={AboutPage} />
//       <Route component={NotFoundPage} />
//     </Switch>
//   </div>);}}

//   App.propTypes = {  children: PropTypes.element};
//   export default hot(module)(App);

// import i18n from 'i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'
// i18n.on('languageChanged', function (lng) {
//   // if the language we switched to is the default language we need to remove the /en from URL
//   if (lng === i18n.options.fallbackLng[0]) {
//     if (window.location.pathname.includes('/' + i18n.options.fallbackLng[0])) {
//        const newUrl = window.location.pathname.replace('/' + i18n.options.fallbackLng[0], '')
//         window.location.replace(newUrl)    }  }})
//         i18n.use(LanguageDetector).init({
//           resources: {
//             en: { translation: require('./translations/en.js').default },
//             pt: { translation: require('./translations/pt.js').default }
//           },    whitelist: ['en', 'pt'],
//           fallbackLng: ['en'],
//           detection: {
//             order: ['path'],
//             lookupFromPathIndex: 0,
//             checkWhitelist: true
//           },
//           interpolation: {
//             escapeValue: false,
//             formatSeparator: '.'
//           }})

// export default i18n;

//<div>{i18n.t('home.bannerStart')}</div>
