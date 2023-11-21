'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image
} from '@chakra-ui/react'

import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhoneEnabled } from "react-icons/md";



export function Footer() {
  return (
    <Box
      bg='#1CBB9B'
      color='#233D45'
      as='footer'>
      <Container
        as={Stack}
        maxW='full'
        spacing={4}
        justify='space-between'
        direction={{ base: 'column', md: 'row' }}
        align={'start'}
        gap={10}
        p='1rem'
          w='5xl'
          mx='auto'>

        <Stack direction='row' spacing={16}>
          <Stack direction='column' spacing={1}>
            <Box as='h2'
              fontSize='1.2rem'
              fontWeight='bold'
              ml='-4px'
            >Navigation
            </Box>
            <Box as="a" href={'/'} cursor='pointer'>
              Home
            </Box>
            <Box as="a" href={'#'} cursor='pointer'>
              Docs
            </Box>
            <Box as="a" href={'/Login'} cursor='pointer'>
              Login
            </Box>
          </Stack>
          <Stack direction='column' spacing={1}>
            <Box as='h2'
              fontSize='1.2rem'
              fontWeight='bold'
              ml='-4px'
            >FAQ
            </Box>
            <Box as="a" href={'#'} cursor='pointer'>
              Question 1
            </Box>
            <Box as="a" href={'#'} cursor='pointer'>
              Question 2
            </Box>
            <Box as="a" href={'#'} cursor='pointer'>
              Question 3
            </Box>
          </Stack>
          <Stack direction='column' spacing={1}>
            <Box as='h2'
              fontSize='1.2rem'
              fontWeight='bold'
              ml='-4px'
            >Contact
            </Box>
            <Box as="a" href='mailto:exemplo@gmail.com' cursor='pointer' display='inline-flex' alignItems='center' gap={1}>
              <IoMailOutline />
              exemplo@gmail.com
            </Box>
            <Box as="a" href='tel:+5573999999999' cursor='pointer' display='inline-flex' alignItems='center' gap={1}>
              <MdOutlinePhoneEnabled />
              +5573999999999
            </Box>
          </Stack>
        </Stack>

        <Stack align='center' mx='auto'>
          <Image src='/logo-semFundo.png' w='14rem' h='10rem' alt='Logo com iniciais Do Projeto Makima' />
        </Stack>
      </Container>
    </Box>
  )
}