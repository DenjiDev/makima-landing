import { Box, Flex, HStack, VStack, Image, Stack } from "@chakra-ui/react";
import { MenuHamburguer } from "./assets/HamburguerMenu";
import Link from "next/link";
import { LogoHorizontal } from "./assets/LogoHorizontal";


export function Navbar() {
  return (
    <Box as="header" backgroundColor='#1CBB9B' minH='1rem' boxShadow='dark-lg'  >
      <HStack h='3rem' bg='#1CBB9B' w='80%' color='#233D45' align='center' justifyContent='space-between' as='nav' mx='auto' p='1rem' flex={1}>
        <Link  href='/'>
          <LogoHorizontal />
        </Link>
        <Box>
          <MenuHamburguer />
        </Box>
      </HStack>
    </Box>
  )
}