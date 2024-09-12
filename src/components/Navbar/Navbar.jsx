import React from 'react';
import { Box, Button, Flex, Text, Image,Grid,GridItem } from '@chakra-ui/react';
import Header from '../Header/Header';



const Navbar = () => {
  return (
    <Box
      bgImage="url('https://images.unsplash.com/photo-1532973497172-04b34d604825?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWlybGluZSUyMHRpY2tldHxlbnwwfHwwfHx8MA%3D%3D')"
      bgSize="cover" 
      bgPosition="center"
      height="300px"
      >
      {/* Centered Logo Section */}
      <Grid
      templateColumns="repeat(3, 1fr)"  // Divide the grid into three columns
      alignItems="center"
      maxW="1200px"
       mx="auto"
       top="0px"
>
  {/* Center Section (Logo) */}
  <GridItem colStart={2} textAlign="center">
    <Text fontSize="2xl" fontWeight="bold">
      <Text as="span" color="blue.700">
        sky
      </Text>
      <Text as="span" color="blue.300">
        che
      </Text>
    </Text>
  </GridItem>

  {/* Right Section (USD Text, Image, Buttons) */}
  <GridItem colStart={3} display="flex" justifyContent="flex-end" alignItems="center">
    <Flex align="center" mr={4}>
      <Image src="data:image/png;base64,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" alt="USD" boxSize="20px" mr={2} />
      <Text color="white">USD</Text>
    </Flex>

    <Button variant="outline" colorScheme="whiteAlpha" mr={4}>
      Sign Up
    </Button>
    <Button bg="white" color="black" _hover={{ bg: "gray.200" }}>
      Log In
    </Button>
  </GridItem>
</Grid>
<Box mt="180px">
<Header />
</Box >

    </Box>
  );
}

export default Navbar;
