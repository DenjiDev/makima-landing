"use client"

import NextLink from 'next/link'
import { Button, Flex, IconButton, Link, textDecoration } from '@chakra-ui/react';
import { useState } from 'react';
import { IoIosMenu, IoMdClose } from "react-icons/io";

export function MenuHamburguer() {
  const [display, ChangeDisplay] = useState('none')
  return (
    <Flex align='center'>
      <Flex 
      >
        <Flex display={['none', 'none', 'flex', 'flex']} gap='1rem'  fontWeight='semibold' >
          <NextLink href='/' passHref>
            <Link color='white'
              href='/'
              variant='ghost'
              aria-Label='Home'
              width='100%'
              _hover={{textDecoration: 'none'}}
              >Home</Link>
          </NextLink >
          <NextLink href='/' passHref>
            <Link color='white'
              variant='ghost'
              aria-Label='Docs'
              width='100%'
              _hover={{textDecoration: 'none'}}
              >Doc</Link>
          </NextLink>
          <NextLink href='/Login' passHref>
            <Link color='white'
              variant='ghost'
              aria-Label='About'
              width='100%'
              _hover={{textDecoration: 'none'}}
              >Login</Link>
          </NextLink>

        </Flex>
        <IconButton
          aria-label='Open Menu'
          size='lg'
          icon={<IoIosMenu />}
          display={['flex', 'flex', 'none', 'none']}
          color='white'
          background='none'
          onClick={() => {ChangeDisplay('flex')}} />
      </Flex>

      <Flex w='full' bg='black' zIndex={20} h='max-content' pos='fixed' top='0' left='0' overflowY='auto' flexDir='column' display={display} p='1rem'>
        <Flex justify='flex-end'>
          <IconButton
          mt={2}
          mr={2}
          aria-label='Close Menu'
          size='lg'
          icon={<IoMdClose />}
          color='white'
          backgroundColor='black'
          onClick={() => {ChangeDisplay('none')}}>
          </IconButton>
        </Flex>
        <Flex
          flexDirection='column'
          align='center'
          gap={3}>
          <NextLink href='/' passHref >
            <Link color='white'
              href='/'
              variant='ghost'
              aria-Label='Home'
              _hover={{textDecoration: 'none', backgroundColor: 'gray.500'}}
              >Home</Link>
          </NextLink >
          <NextLink href='/' passHref>
            <Link color='white'
              variant='ghost'
              aria-Label='Docs'
              width='100%'
              _hover={{textDecoration: 'none'}}
              >Doc</Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link color='white'
              variant='ghost'
              aria-Label='About'
              width='100%'
              _hover={{textDecoration: 'none'}}
              >About</Link>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  )
}