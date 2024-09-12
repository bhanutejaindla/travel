import React from 'react';
import { Box, Image, SimpleGrid, Text, Heading, Flex } from '@chakra-ui/react';
import deals from './GreatDeals.json';
const GreatDeals = () => {
  return (
    <Box padding="4" maxW="100%" margin="auto" bg="#F3F8FB">
    <Heading as="h2" size="xl" textAlign="center" mb="8" color="#283E74">
      Great deals on plane tickets
    </Heading>
    <SimpleGrid columns={[1, 2, 3]} spacing={6}>
      {deals.map((deal, index) => (
        <Box key={index} bg="white" p={3} boxShadow="sm" borderRadius="md" textAlign="center">
          <Flex>
            <Box flex="1">
            <Image src={deal.flagUrl} alt={deal.country} boxSize="50px" m={2} />
            </Box>
            <Box flex="1">
            <Text fontSize="lg">{deal.country}</Text>
            </Box>
            <Box flex="2">
            <Text fontSize="xl" color="#0096FF" fontWeight="bold" >
             {deal.price}
           </Text>
            </Box>
          </Flex>
          
        </Box>
      ))}
    </SimpleGrid>
  </Box>
  );
}

export default GreatDeals;
