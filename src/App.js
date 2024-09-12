import React from 'react';
import { Box, Flex, Heading, Button, Input, Select, Grid, Text } from '@chakra-ui/react';
import './App.css';
import  Header from './components/Header/Header.jsx';
import  PopularDestinations from './components/PopularDestinations/PopularDestinations.jsx';
import  GreatDeals from './components/GreatDeals/GreatDeals.jsx';
import NewsletterSignup from './components/NewsletterSignup/NewsletterSignup.jsx';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import SearchResults from './Routes/SearchResults/SearchResults.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './Routes/Home/Home.jsx';

const App = () => {
  return (
    <Box>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search-results' element={<SearchResults />} />
        </Routes>
    </Box>
  );
}

export default App;
