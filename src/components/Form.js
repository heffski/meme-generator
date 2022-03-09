import React from "react"
import {Box, Flex, Input, Button} from "@chakra-ui/react"
import memesData from '../memesData.js'

export default function Form () {
    function handleMouseOver () {
        
    }
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
        // [Math.floor(Math.random() * memesData.data.memes.length)]    ]
        // const meme = memesData[randomMeme];

        // return <div>meme url={meme}</div>;
    } 
    
  return ( 
        <Flex
        flexDirection='column'
        alignItems='center'
        paddingTop='30px'
        >
            <Flex
            paddingBottom='20px'
            gap='20px'
            w='600px'
            alignItems='center'
            >
                <Input type='text' placeholder='Top Text'></Input>
                <Input type='text' placeholder='Bottom Text'></Input>
            </Flex>
            <Box>
                <Button
                onClick={getMemeImage}
                w='600px'
                h='45px'
                color='white'
                bgGradient='linear(to-r, purple.700, purple.500)'
                >Get a new meme image 🖼</Button>
            </Box>
            <Box
                onMouseEnter={handleMouseOver}
                w='800px'
                h='40px'
                bgColor='lightblue'

            >

            </Box>
        </Flex>
  )
}