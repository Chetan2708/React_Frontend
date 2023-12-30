import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, TabList, Tabs } from '@chakra-ui/react';
import '../styles/EmployeeDashboard.css';
import dog from '../assets/dog-house.png'
import group from '../assets/Group 46@2x.png'
import user from '../assets/user.png'
import { Box } from '@chakra-ui/react'
const EmployeeDashboard = () => {
    const data = [
        { day: 'Monday', percent: 10 },
        { day: 'Tuesday', percent: 30 },
        { day: 'Wednesday', percent: 50 },
        { day: 'Thursday', percent: 30 },
        { day: 'Friday', percent: 50 },
        { day: 'Saturday', percent: 70 },
    ];

    return (
        <>
            <Box
                as="img"
                src={group}
                alt="Group Image"
                position="absolute"
                top="0"
                right="0"
                margin="16px"
            />
            <div className="dashboard-container">
                {/* Employee Productivity */}
                <div className="productivity-container">
                    <p className="productivity-header">Employee Productivity Dashboard</p>
                </div>

                {/* Progress Card */}
                <div className="progress-card">
                    <div className="blur-overlay"></div>
                    {/* Loop through data */}
                    {data.map((item, index) => (
                        <div className="day-progress" key={index}>
                            <div className="day-label">
                                Productivity on {item.day} <span className='percent'>{item.percent}%</span>
                            </div>
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${item.percent}%`, border: `2px solid #36A546` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chakra UI Tabs */}
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
        </>
    );
};

export default EmployeeDashboard;
