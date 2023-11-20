import { Box, Button, Flex, FormControl, FormLabel, HStack, Heading, IconButton, Input, Stack } from "@chakra-ui/react";
import Link from "next/link";
import { IoArrowBack } from "react-icons/io5";

export default function PageLogin(){
    return (
        <HStack w='full' h='100vh'>
            <Flex w='full' h='full' background='gray' align='center' justify='center' direction='column' gap={2} display={{base: 'none', md: 'flex'}}>
                <p>Imagem</p>
                <Button gap={2}>
                    Back to Home page
                    <IoArrowBack />
                </Button>
            </Flex>
            <Flex w='full' h='full' alignItems='center' justifyContent='center'>
                <Stack w='full' maxW='md' spacing={4} p={6}>
                    <Heading fontSize='2xl' color='black'>Sign in to your account</Heading>
                    <FormControl id="user">
                        <FormLabel>Username</FormLabel>
                        <Input placeholder="Username"/>
                    </FormControl>
                    <FormControl id="password">
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder="**********"/>
                    </FormControl>
                    <Stack
                    spacing={4}
                    direction='row'
                    align='start'
                    justify='space-between'
                    >
                        <Link href='#'>Forgot Password?</Link>
                    </Stack> 

                    <Button>
                        Sign in
                    </Button>       
                </Stack>
            </Flex>
        </HStack>
    )
}