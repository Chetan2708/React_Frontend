import React from 'react'
import ProgressCard from './ProgressCard'
import moptro from '../assets/moptro logo.png'
import { Box, Flex } from '@chakra-ui/react'
const Home = () => {
    return (
      <Flex direction="column" align="center" p="4">
      {/* Logo at the center top */}
      <Box as="img" src={moptro} alt="Logo" w="100px" h="100px" mt="4" />

      {/* Progress Card */}
      <ProgressCard />
    </Flex>
    )
}

export default Home