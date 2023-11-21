import { Box, Flex, Image, Stack } from "@chakra-ui/react";
import localFont from '@next/font/local'

const bahnschrift = localFont({src: '../../../fonts/BAHNSCHRIFT.ttf', weight: '600'})

export function LogoHorizontal(){
    

    return(   
        <Stack direction='row' align='center'>
            <Image src="/logo-solo.png" w='5rem' h='3rem'/>
            <Flex direction='column' color='#233D45' ml='-1.5rem' fontSize='0.7rem' style={bahnschrift.style} mt='3px'>
                <Box>MAKIMA</Box>
                <Box>ARTIFICIAL INTELLIGENCE</Box>
            </Flex>
        </Stack>
    )
}