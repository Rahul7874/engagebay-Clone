import { Box,Input,Button,InputGroup,InputRightElement } from "@chakra-ui/react"



function Homepage(){
    return (
        <>
    <Box fontSize="80px" fontWeight="500" marginTop="40px" lineHeight="80px">
     <h1>Market better. Sell faster.<br/>
Support smarter</h1>
    </Box>
    <Box fontSize="28px" marginTop="30px" color="#bbbbbc">
        <h1>One platform for all your Marketing, Sales, and Support teams</h1>
    </Box>
    <Box>
    <InputGroup size='md'>
      <Input width="630px"
        pr='4.5rem'
        type="text"
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm'>Get Started
        </Button>
      </InputRightElement>
    </InputGroup>

    </Box>
    </>
    )
}
export default Homepage