import React from 'react';
import { Box, Image, SimpleGrid, Text, Heading,Flex } from '@chakra-ui/react';
import destinations from './PopularDestinations.json';

const PopularDestinations = () => {
  return (
    <Box p={[4, 6, 8]}  bg="#F3F8FB" mt="100px">
      {/* Heading */}
      <Heading size="lg" mb={6} textAlign="center" color="#283E74">
        Popular right now
      </Heading>

      {/* Grid Layout for Cards */}
      <SimpleGrid columns={[1, 2, 3,4]} spacing={[4, 6, 8]}>
        {destinations.map((destination, index) => (
          <Box key={index} borderRadius="md" overflow="hidden" bg="white" boxShadow="0 4px 6px rgba(255, 255, 255, 0.5)"  >
            {/* Destination Image */}
            <Image src={destination.image} alt={destination.city} w="100%" h="150px" objectFit="cover" />

            {/* Destination Info */}
            <Box p={3}>
              <Flex>
               <Box flex="1">
               <Text fontSize="xl" fontWeight="bold" color="#283E74">
                {destination.city}
              </Text>
              <Text color="gray.500">{destination.country}</Text>
               </Box>
               <Box flex="1"  >
               <Text color="#0096FF" fontWeight="bold"  fontSize="xl" ml="80px">
                {destination.price}
                </Text>
              <Text  fontSize="sm" color="gray.500" ml="50px">Starting at</Text>
               </Box>
              </Flex>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default PopularDestinations;
