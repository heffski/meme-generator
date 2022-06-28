import React from "react"
import {Box, Flex, Input, Button, Image, Text, Heading} from "@chakra-ui/react"
import memesData from '../memesData.js'


export default function Form () {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)

  function renderMeme() {
    const memesArr = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArr.length)
    const url = memesArr[randomNumber].url 
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }))
  }

  function handleChange(event) {
    const {name, value} = event.target
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
    }))
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
              <Input 
                type='text' 
                placeholder='Top Text'
                name="topText"
                value={meme.topText}
                onChange={handleChange}
              >
              </Input>
              <Input 
                type='text' 
                placeholder='Bottom Text'
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
              >

              </Input>
            </Flex>
            <Box>
                <Button
                  onClick={renderMeme}
                  w='600px'
                  h='45px'
                  color='white'
                  bgGradient='linear(to-r, purple.700, purple.500)'
                >Get a new meme image 🖼</Button>
            </Box>
            <Flex 
                color='white'
                fontFamily='impact, sans serif'
                max-width='100%'
                py={4}
                justifyContent='center'
                alignItems='center'
                textTransform='uppercase'
            >
                <Flex
                  textShadow={"2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 0px 2px 0 #000, 2px 0px 0 #000, 0px -2px 0 #000, -2px 0px 0 #000, 2px 2px 5px #000"}
                  justifyContent="center"
                >
                  <Heading
                    position='absolute'
                    top='270'
                  >
                    {meme.topText}</Heading>
                  <Heading
                    position='absolute'
                    bottom='50'
                  >
                    {meme.bottomText}
                  </Heading>
                  <Image src={meme.randomImage}></Image>
                </Flex>
            </Flex>
        </Flex>
  )
}