import React, { useState } from 'react';
import { useRoutes, BrowserRouter  } from 'react-router-dom'
import { StockCartProvider } from '../Context';
import ChangePin from "./ChangePin";
import ReviewStocks from './ReviewStocks';
import BuyStocks from "./BuyStocks";
import SellStocks from "./SellStocks/Index";
import DepositFunds from "./DepositFunds";
import GenerateStatement from './GenerateStatement';
import Navbar from "../components/Navbar";
import AccionDetail from '../components/AccionDetail';
import Principal from './Principal/Index';
import SellAccionDetail from '../components/SellAccionDetail';

const AppRoutes = ({ fullName }) => {
  let routes = useRoutes([
    { path:'/', element: <Principal fullName={fullName}/>},
    { path:'/change-pin', element: <ChangePin fullName={fullName}/>},
    { path:'/review-stocks', element: <ReviewStocks/>},
    { path:'/buy-stocks', element: <BuyStocks/>},
    { path:'/sell-stocks', element: <SellStocks/>},
    { path:'/deposit-funds', element: <DepositFunds/>},
    { path:'/generate-statement', element: <GenerateStatement/>},
  ])
  return routes
}

function Home({ fullName, onLogout, onSelectAction }) {
  return (
    <StockCartProvider fullName={fullName}>
      <BrowserRouter>
      <Navbar/>
      <AppRoutes fullName={fullName}/>
      </BrowserRouter>
      <AccionDetail />
      <SellAccionDetail />
    </StockCartProvider>
  );
}

export default Home;
