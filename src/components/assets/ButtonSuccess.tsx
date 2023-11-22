import { Link, Button } from "@chakra-ui/react";
import NextLink from 'next/link'

export function ButtonSuccess(props: { text: String , path: String}) {


  return (
    <>
      <NextLink href={`${props.path}`}>
        <Button
          px={3}
          bg={'#1F7368'}
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
          >{props.text}</Link>
        </Button>
      </NextLink>
    </>
  )
}