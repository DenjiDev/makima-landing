import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import { MenuHamburguer } from "./HamburguerMenu";
import Link from "next/link";

export function Navbar(){
    return(
        <HStack  w='5xl' background="black" h='3rem' color='white' align='center' justifyContent='space-between'  as='nav' mx='auto' p='1rem'>
            <Link href='/'>Logo</Link>
            <Box >
                <MenuHamburguer />
            </Box>       
        </HStack>
    )
}