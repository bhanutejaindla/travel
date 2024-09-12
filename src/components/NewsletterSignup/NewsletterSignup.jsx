import React from 'react';
import { Box, Input, Button, Text, Flex,Heading } from '@chakra-ui/react';

const NewsletterSignup = () => {
  return (
    <Box p={4} maxW={['100%', 'md']} overflow="hidden" mx="auto"> {/* Adjust max-width and margin for responsiveness */}
      <Heading mb={4} fontSize={['sm', 'xl']} fontWeight="bold" color="#283E74"> {/* Adjust font size based on screen size */}
        Want to receive exclusive discounts and updates straight to your inbox?
      </Heading>
      <Flex 
        direction={['column', 'row']}  // Stack on mobile, row on larger screens
        align="center"
        justify="center"
        gap={[2, 0]} // Add space between the input and button
      >
        <Input 
          placeholder="Your Email" 
          mb={[2, 0]} // Add margin-bottom only on small screens
          bg="#F3F9FA" 
          flex="1" // Ensure the input takes available space
          w={['100%', 'auto']} // Full width on mobile, auto on larger screens
        />
        <Button 
          bg="#34BEEF" 
          color="white" 
          w={['100%', '100px']}  // Full width on mobile, fixed width on larger screens
          ml={[0, '5px']} // Remove left margin on mobile, add on larger screens
        >
          Sign me up
        </Button>
      </Flex>
    </Box>
  );
}

export default NewsletterSignup;
