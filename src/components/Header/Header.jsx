import {
  Box, Button, Flex, Input, Select, Grid, GridItem, Text, ButtonGroup, IconButton
} from '@chakra-ui/react';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import { BiTransfer } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Header() {
  const [tripType, setTripType] = useState('Return');
  const [departDate, setDepartDate] = useState(new Date());
  const navigate = useNavigate(); // Initialize useNavigate
  
  const formatDate = (date) => (date ? format(date, 'EEE, MMM d') : '');

  const handleSearch = () => {
    // Add any logic if needed before navigation
    navigate('/search-results'); // Navigate to search-results route
  };

  return (
    <Box
      width="100%"
      p={5}
      rounded="md"
      shadow="md"
      maxW={['100%', '100%', '80%']} // Adjust max-width for different screen sizes
      mx="auto"
      mt="0"
      bg="#ffff"
      alignItems="center"
      justifyContent="center"
      
    >
      <Flex justify="center" mb={4}  >
        <ButtonGroup isAttached variant="outline">
          <Button
            onClick={() => setTripType('Return')}
            colorScheme={tripType === 'Return' ? 'blue' : 'gray'}
            variant={tripType === 'Return' ? 'solid' : 'ghost'}
            shadow="lg"
          >
            Return
          </Button>
          <Button
            onClick={() => setTripType('One way')}
            colorScheme={tripType === 'One way' ? 'blue' : 'gray'}
            variant={tripType === 'One way' ? 'solid' : 'ghost'}
            bg="#F3F8FB"
            shadow="lg"
          >
            One way
          </Button>
        </ButtonGroup>
      </Flex>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(6, 1fr)']} // Responsive grid for mobile, tablet, and desktop
        gap={1}
        alignItems="center"
      >
        <GridItem colSpan={1}>
          <Flex>
            <Box flex="1">
              <Text color="#F1F4F9">From</Text>
              <Input placeholder="Gdansk(GDN)" color="#556A94" width={['100%', '150px']} bg="#F3F8FB"/> {/* Full width on small screens */}
            </Box>
            <Box>
              <IconButton
                aria-label="Switch locations"
                icon={<BiTransfer />}
                mt="23px"
                variant="ghost"
                colorScheme="#0096FF"
                size="sm"
              />
            </Box>
          </Flex>
        </GridItem>
        <GridItem colSpan={1}>
          <Text color="#F1F4F9">To</Text>
          <Input placeholder="Poznan(POZ)" width={['100%', '150px']} bg="#F3F8FB" /> {/* Full width on small screens */}
        </GridItem>
        <GridItem colSpan={1}>
          <Text color="#F1F4F9">Depart</Text>
          <DatePicker
            selected={departDate}
            onChange={(date) => setDepartDate(date)}
            dateFormat="EEE, MMM d"
            customInput={<Input placeholder="Depart" value={formatDate(departDate)} bg="#F3F8FB"/>}
          />
        </GridItem>
        <GridItem colSpan={1} mt="23px">
          <Text></Text>
          <Input type="text" placeholder={tripType} bg="#F3F8FB"/>
        </GridItem>
        <GridItem colSpan={1}>
          <Text color="#F1F4F9">Passengers and class</Text>
          <Select placeholder="1 Passenger, Economy" w={['100%', '200px']} bg="#F3F8FB"> {/* Full width on small screens */}
            <option value="1">1 Passenger, Economy</option>
            <option value="2">2 Passengers, Economy</option>
            <option value="3">3 Passengers, Economy</option>
          </Select>
        </GridItem>
        <GridItem colSpan={1} mt="23px">
          <Button colorScheme="blue" width="full" onClick={handleSearch}>
            Search
          </Button>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Header;
