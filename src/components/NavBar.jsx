import React from 'react'
import CartWidget from './CartWidget'
import { Menu, MenuButton, MenuList, MenuItem, Flex, Box, Spacer, Image } from '@chakra-ui/react'

import logoImage from '../images/Img02.png'

const NavBar = () => {
  return (
    <div>
        
        <Flex bg='#1d486a' color='#66dcd7' p={2} align='center' justify='space-between'>
            <Box >
                <Image src={logoImage} alt="Gamer-Store Logo" w={100} h={40} objectFit="cover" borderRadius="10px"/>
            </Box>
            <Spacer />

            <Menu>
                <MenuButton>
                    Plataformas
                </MenuButton>
                <MenuList>
                    <MenuItem>Nintendo NES</MenuItem>
                    <MenuItem>Super Nintendo</MenuItem>
                    <MenuItem>Sega Genesis</MenuItem>
                    <MenuItem>Sega Saturn</MenuItem>
                    <MenuItem>Sega Dreamcast</MenuItem>
                    <MenuItem>PS1</MenuItem>
                    <MenuItem>PS2</MenuItem>
                    <MenuItem>PS3</MenuItem>
                    <MenuItem>Xbox</MenuItem>
                    <MenuItem>Xbox 360</MenuItem>
                </MenuList>
            </Menu>


            <Spacer />
            <Box >
                <CartWidget />
            </Box>
        </Flex>



    </div>
  )
}

export default NavBar