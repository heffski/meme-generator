import React from "react"
import ReactDOM from "react-dom"
import { HStack, Spacer, Button, Box, Flex, Heading, Stack, Text } from "@chakra-ui/react"

export default function Nav () {
  return (
    <Flex
        w='100%' 
        h='70px' 
        bgGradient='linear(to-r, purple.700, purple.500)'
        color='white'
        align='center'
        paddingLeft='20px'
        paddingRight='20px'
    >
		
		<Box>
            <Heading size={'2xl'}>meme generator</Heading>
        </Box>
        <Spacer />
        <Box>
            <Text>React Course - Project 3</Text>
        </Box>
    </Flex>
  )
}