import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import PopularDestinations from '../../components/PopularDestinations/PopularDestinations.jsx';
import GreatDeals from '../../components/GreatDeals/GreatDeals.jsx';
import NewsletterSignup from '../../components/NewsletterSignup/NewsletterSignup';
import { Flex,Box } from '@chakra-ui/react';
import Footer from '../../components/Footer/Footer';


const Home = () => {
  return (
    <div>
      <Navbar />
      <PopularDestinations />
      <GreatDeals/>
      <Flex  alignItems="center" justifyContent="center">
        <Box >
      <NewsletterSignup />
      </Box>
    </Flex>
   
    </div>
  );
}

export default Home;
