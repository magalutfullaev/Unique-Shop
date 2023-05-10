import React from 'react';

import Header from "./layouts/Header/Header";
import Main from "./pages/Main/Main";
import Footer from "./layouts/Footer/Footer";
import UserAgreement from "./pages/UserAgreement";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import {Route, Routes} from "react-router";
import AboutCompany from "./pages/AboutCompany";
import NotFound from "./pages/NotFound";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import {ExampleLoaderComponent} from "./dev/palette";

const App: React.FC = () => {
  return (
    <div className="App">
        <Header />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/user-agreement' element={<UserAgreement />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/about-company' element={<AboutCompany />} />
            <Route path='/products/:gender/:category?' element={<ProductsPage />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
