import React, { useState } from 'react';
import { Box, Flex ,useBreakpointValue } from '@chakra-ui/react';
import moptro from '../assets/moptro logo.png';
import BlurredCard from './BlurredCard';
import { Tab, TabList, Tabs } from '@chakra-ui/react';
import '../styles/EmployeeDashboard.css';
import dog from '../assets/dog-house.png'
import group from '../assets/Group 46@2x.png'
import user from '../assets/user.png'
import { Link } from 'react-router-dom';

const User = () => {
  const [userData] = useState([
    {
      empid: 101,
      name: 'John Doe',
      DOB: '1990-05-15',
      role: 'Manager',
    },
    {
      empid: 102,
      name: 'Jane Smith',
      DOB: '1985-12-28',
      role: 'Developer',
    },
    {
      "empid": 103,
      "name": "Michael Johnson",
      "DOB": "1993-08-10",
      "role": "Designer"
    },
    {
      "empid": 104,
      "name": "Emily Brown",
      "DOB": "1988-04-05",
      "role": "Analyst"
    },
    {
      "empid": 105,
      "name": "Robert Davis",
      "DOB": "1995-09-20",
      "role": "Engineer"
    },
    {
      "empid": 106,
      "name": "Megan Wilson",
      "DOB": "1992-11-18",
      "role": "Manager"
    },
    {
      "empid": 107,
      "name": "Christopher Lee",
      "DOB": "1987-07-25",
      "role": "Developer"
    },
    {
      "empid": 108,
      "name": "Sophia Turner",
      "DOB": "1998-02-14",
      "role": "Designer"
    },
    {
      "empid": 109,
      "name": "Daniel Martinez",
      "DOB": "1984-06-30",
      "role": "Analyst"
    },
    {
      "empid": 110,
      "name": "Olivia White",
      "DOB": "1991-03-12",
      "role": "Engineer"
    },
    {
      "empid": 111,
      "name": "Olivia White",
      "DOB": "1991-03-12",
      "role": "Engineer"
    },
    {
      "empid": 112,
      "name": "Olivia White",
      "DOB": "1991-03-12",
      "role": "Engineer"
    },
    // Add more user data as needed
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredUsers =
    searchTerm.trim() !== ''
      ? userData.filter(
        (user) =>
          `${user.empid} ${user.name} ${user.DOB} ${user.role}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      )
      : userData;

  const isMobile = useBreakpointValue({ base: true, md: false }); // Determine if it's a mobile view

  return (
    
    <Flex direction="column" align="center" p="4">
             <Box
                as="img"
                src={group}
                alt="Group Image"
                position="absolute"
                top="0"
                right="0"
                margin="16px"
            />
      <Box as="img" src={moptro} alt="Logo" w="100px" h="100px" mt="4" />

      <div className="productivity-container">
        <p className="productivity-header">
          <input
            type="text"
            placeholder="Search for users"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </p>
      </div>

     <div className={`grid-container ${isMobile ? 'mobile' : 'desktop'}`}>
        {filteredUsers.map((user, index) => (
          <BlurredCard key={user.empid} floatDirection={isMobile && index % 2 === 0 ? 'left' : 'right'}>
            <div className='emp-data'>
              <p>{`EmpID: ${user.empid}`}</p>
              <p>{`Name: ${user.name}`}</p>
              <p>{`DOB: ${user.DOB}`}</p>
              <p>{`Role: ${user.role}`}</p>
            </div>
          </BlurredCard>
        ))}
      </div>
      <Tabs variant='soft-rounded' colorScheme='none' className='bottom-tabs'>
                <TabList justifyContent="space-between">
                    <Tab className='bottom' flex="1" _selected={{ bgColor: '#383838', color: 'white' }} >
                        <Link to="/home" style={{ margin: 'auto' }}>
                            <Box as="img" src={dog} alt="Logo" w="28px" h="28px" mt="4" />
                        </Link>
                    </Tab>
                    <Tab flex="1" _selected={{ bgColor: '#383838', color: 'white' }} >
                        <Link to="/user" style={{ margin: 'auto' }}>
                            <Box as="img" src={user} alt="Logo" w="28px" h="28px" mt="4" />
                        </Link>
                    </Tab>
                </TabList>
            </Tabs>
    </Flex >
  );
};

export default User;
