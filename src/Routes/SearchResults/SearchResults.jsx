import React from 'react';
import { Box, Flex, Grid, GridItem, Text, Button, Stack, Icon, Heading,Divider,ButtonGroup,Select} from '@chakra-ui/react';
import { FaPlaneDeparture, FaPlaneArrival } from 'react-icons/fa';
import { BsFilterLeft } from "react-icons/bs";
import Footer from '../../components/Footer/Footer';
import flights from './SearchResults.json';

const FlightCard = ({ outbound, inbound, price }) => {
  return (
    <Box
      bg="white"
      shadow="md"
      p={[2,4]}
      borderRadius="md"
      border="1px solid"
      borderColor="gray.200"
      width="100%"
      mb={4}
    >
      <Grid templateColumns={['1fr', 'repeat(6, 1fr)']} gap={4} alignItems="center">
        {/* Outbound Section */}
        <GridItem colSpan={[6, 2]}>
          <Text fontWeight="bold" color="gray.500">{outbound.date} • Outbound</Text>
          <Flex align="center" mt={2}>
            <Text fontSize={['md', 'lg']} fontWeight="bold">{outbound.departureTime}</Text>
            <Box ml={2}>
              <Text>{outbound.departureAirport}</Text>
              <Text fontSize="sm" color="blue.500">Direct</Text>
            </Box>
          </Flex>
          <Flex align="center" mt={2}>
            <Text fontSize={['md', 'lg']} fontWeight="bold">{outbound.arrivalTime}</Text>
            <Box ml={2}>
              <Text>{outbound.arrivalAirport}</Text>
              <Text fontSize="sm" color="gray.500">{outbound.duration}</Text>
            </Box>
          </Flex>
        </GridItem>
        
        {/* Inbound Section */}
        <GridItem colSpan={[6, 2]}>
          <Text fontWeight="bold" color="gray.500">{inbound.date} • Inbound</Text>
          <Flex align="center" mt={2}>
            <Text fontSize={['md', 'lg']} fontWeight="bold">{inbound.departureTime}</Text>
            <Box ml={2}>
              <Text>{inbound.departureAirport}</Text>
              <Text fontSize="sm" color="blue.500">Direct</Text>
            </Box>
          </Flex>
          
          <Flex align="center" mt={2}>
            <Text fontSize={['md', 'lg']} fontWeight="bold">{inbound.arrivalTime}</Text>
            <Box ml={2}>
              <Text>{inbound.arrivalAirport}</Text>
              <Text fontSize="sm" color="gray.500">{inbound.duration}</Text>
            </Box>
            
          </Flex>
        </GridItem>

        {/* Price and Booking Section */}
       <GridItem>
       <Box display="flex" justifyContent="center" alignItems="center">
      <Divider
        orientation="vertical"
        borderStyle="dotted"
        borderColor="gray.400"
        borderWidth="1px"
        height="100px" // Adjust the height as needed
        display={['none', 'block']}
      />
      <GridItem colSpan={3}  >

<Text fontSize="sm" mt="0" mb={2} pl="0px">Included: 1 Bag</Text>
<Heading fontSize="xl" color="blue.500" mb={4} pl="100px">
  ${price}
</Heading>
<Button colorScheme="blue" size="lg"  width={['100%', '80%']} ml="5px" >
  Book Now
</Button>
</GridItem>
    </Box>
       </GridItem>
      </Grid>
    </Box>
  );
};

const SearchResults = () => {
  return (
    <Box p={[2, 5]} maxW="100%" mx="auto" bg="gray.50" >
       <Flex justify="space-between" alignItems="center"  p={4} bg="white" flexDirection={['column', 'row']} >
        {/* Cheapest and Fastest Buttons */}
        <Flex>
        <ButtonGroup size="sm" mb={[4, 0]}>
          <Button color="#283E74" variant="outline">Cheapest</Button>
          <Button color="gray" variant="outline">Fastest</Button>
        </ButtonGroup>
        </Flex>
        {/* Stops Dropdown */}
        <Flex alignItems="center">
        <Icon as={BsFilterLeft} boxSize={6} mr={2} color="#283E74" />
        <Select placeholder="Stops" maxW="150px" color="#283E74">
          <option value="direct">Direct</option>
          <option value="1_stop">1 Stop</option>
          <option value="2_stop">2+ Stops</option>
        </Select>
        </Flex>
        
      </Flex>

      <Divider mb={4} />
      <Stack spacing={4}>
        {flights.map((flight, index) => (
          <FlightCard
            key={index}
            outbound={flight.outbound}
            inbound={flight.inbound}
            price={flight.price}
          />
        ))}
      </Stack>
      <Box mt="50px">
      <Footer />
      </Box>
      <Box height="300px" bg="#D1E4F2">
      </Box>
    </Box>
  );
}

export default SearchResults;
