import React from 'react';
import { Box, Flex, Heading, Link, List, ListItem, VStack,HStack,Text,Image,Icon,Divider } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram,FaLinkedin } from 'react-icons/fa';


const Footer = () => {
  return (
    
      <Box bg="blue.900" color="white" py={10}>
        <Box bg="blue.900" p={5} borderRadius="md" textAlign="center">
        </Box>
       <Flex justify="space-around" wrap="wrap">
        <VStack spacing={4} ml="3px">
        <HStack spacing={0}>
          <VStack spacing={0} align="start">
            <Text fontSize="4xl" fontWeight="bold">
              skychex
            </Text>
            <Text fontSize="sm" opacity={0.7}>
              EASY TO FLY
            </Text>
          </VStack>
        </HStack>

        {/* Description Section */}
        <Text fontSize="sm" maxW="400px" fontWeight="1px">
          Whether you're planning a vacation, a business trip, or any other travel adventure, SkyChex offers a
          friendly and comprehensive solution to meet your flight booking needs.
        </Text>

        {/* Social Media Icons */}
        <HStack spacing={4}>
          <Icon as={FaFacebook} boxSize={6} cursor="pointer" />
          <Icon as={FaTwitter} boxSize={6} cursor="pointer" />
          <Icon as={FaLinkedin} boxSize={6} cursor="pointer" />
          <Icon as={FaInstagram} boxSize={6} cursor="pointer" />
        </HStack>
      </VStack>
        <VStack align="start" spacing={4}>
          <Heading size="md">Book with us</Heading>
          <List spacing={2} fontWeight="300">
            <ListItem >Airlines we ticket</ListItem>
            <ListItem>Buy now,pay later</ListItem>
            <ListItem>Pay the way you want</ListItem>
            <ListItem>You're protected</ListItem>
            <ListItem>Our customer service</ListItem>
            <ListItem>Travel agents</ListItem>
          </List>
        </VStack>
        <VStack align="start" spacing={4}>
          <Heading size="md">My booking</Heading>
          <List spacing={2} fontWeight="300">
            <ListItem>Manage my booking </ListItem>
            <ListItem>Help centre</ListItem>
            <ListItem>FAQs</ListItem>
            <ListItem>Contact us</ListItem>
            <ListItem>Travel advice</ListItem>
          </List>
        </VStack>
        <VStack align="start" spacing={4}>
          <Heading size="md">Company</Heading>
          <List spacing={2} fontWeight="300">
            <ListItem>About us</ListItem>
            <ListItem>Reviews</ListItem>
            <ListItem>Blog</ListItem>
            <ListItem>Media centre</ListItem>
            <ListItem>Careers</ListItem>
          </List>
        </VStack>
      </Flex>
      <Box as="footer" bg="blue.900" color="white" py={8}>
      <VStack spacing={8}>
        {/* Main footer content would go here */}
        <Flex justify="center" fontSize="sm">
          <Link href="/privacy" mr={4} _hover={{ textDecoration: 'underline' }}>
            Privacy
          </Link>
          <Divider orientation="vertical" h="20px" mx={4} borderColor="white" opacity={0.6} />
          <Link href="/terms" mr={4} _hover={{ textDecoration: 'underline' }}>
            Terms
          </Link>
          <Divider orientation="vertical" h="20px" mx={4} borderColor="white" opacity={0.6} />
          <Link href="/sitemap" _hover={{ textDecoration: 'underline' }}>
            Sitemap
          </Link>
        </Flex>
      </VStack>
    </Box>
     
    </Box>
  );
}

export default Footer;
//

