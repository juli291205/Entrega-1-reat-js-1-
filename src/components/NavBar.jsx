import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex,Box,Spacer,

} from '@chakra-ui/react'
import { CartWidged } from './CartWidged'

export const NavBar = () => {
    return (
        <div>

            <Flex>
                <Box p='4'>
                    <h3>Motorcycle-shop</h3>
                </Box>
                
                <Box p='4'>
                    <Menu>
                        <MenuButton >
                            Menu
                        </MenuButton>
                        <MenuList>
                            <MenuItem>primera A</MenuItem>
                            <MenuItem>Sgunda  B</MenuItem>
                            <MenuItem>Tercera C</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                
                <Box p='4'>
                    <CartWidged />
                </Box>
            </Flex>
        </div>
    )
}
