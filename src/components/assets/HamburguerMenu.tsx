"use client"

import NextLink from 'next/link'
import { Button, Flex, IconButton, Link, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import { IoIosMenu, IoMdClose } from "react-icons/io";

export function MenuHamburguer() {
  const [display, ChangeDisplay] = useState('none')
  return (
    <Flex align='center'>
      <Flex
      >
        <Flex display={['none', 'none', 'flex', 'flex']} gap='1rem' fontWeight='semibold' align='center'>
          <NextLink href='/' passHref>
            <Link color='#233D45'
              href='/'
              variant='ghost'
              aria-label='Home'
              width='100%'
              _hover={{ textDecoration: 'none' }}
            >Home</Link>
          </NextLink >
          <NextLink href='/' passHref>
            <Link color='#233D45'
              variant='ghost'
              aria-label='Docs'
              width='100%'
              _hover={{ textDecoration: 'none' }}
            >Doc</Link>
          </NextLink>
          <NextLink href='/Login' passHref>
            <Button
            px={3}
            bg={useColorModeValue('#1F7368', 'gray.900')}
            textColor={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
              <Link color='#233D45'
                variant='ghost'
                aria-label='Login'
                width='100%'
                textColor='white'
                _hover={{ textDecoration: 'none' }}
              >Login</Link>
            </Button>
          </NextLink>

        </Flex>
        <IconButton
          aria-label='Open Menu'
          size='lg'
          icon={<IoIosMenu />}
          display={['flex', 'flex', 'none', 'none']}
          color='#233D45'
          background='none'
          onClick={() => { ChangeDisplay('flex') }} />
      </Flex>

      <Flex w='full' bg='#1CBB9B' zIndex={20} h='max-content' pos='fixed' top='0' left='0' overflowY='auto' flexDir='column' display={display} p='1rem'>
        <Flex justify='flex-end'>
          <IconButton
            mt={2}
            mr={2}
            aria-label='Close Menu'
            size='lg'
            icon={<IoMdClose />}
            color='#233D45'
            backgroundColor='#1CBB9B'
            onClick={() => { ChangeDisplay('none') }}>
          </IconButton>
        </Flex>
        <Flex
          flexDirection='column'
          align='center'
          gap={3}>
          <NextLink href='/' passHref >
            <Link color='#233D45'
              href='/'
              variant='ghost'
              aria-label='Home'
              size='full'
              _hover={{ textDecoration: 'none', backgroundColor: 'gray.500' }}
            >Home</Link>
          </NextLink >
          <NextLink href='/' passHref>
            <Link color='#233D45'
              variant='ghost'
              aria-label='Docs'
              width='100%'
              _hover={{ textDecoration: 'none' }}
            >Doc</Link>
          </NextLink>
          <NextLink href='/' passHref>
            <Link color='#233D45'
              variant='ghost'
              aria-label='About'
              width='100%'
              _hover={{ textDecoration: 'none' }}
            >About</Link>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  )
}