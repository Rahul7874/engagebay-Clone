import { Box,Input,Button,InputGroup,InputRightElement,Image,SimpleGrid } from "@chakra-ui/react"



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
    <Box marginTop="40px">
    <InputGroup  width="630px"  margin="auto">
      <Input 
      variant='outline red'
      h="76px"
      padding="6px 172px 6px 30px" 
      borderRadius="35px"
       width="630px"
       type="text"
       placeholder='Your email address'
       border="2px solid red"
      />
      <InputRightElement width="150px" height="54px" >
        <Button width="150px" height="54px" marginTop="25px" bg="#ff7342" color="white" borderRadius="30px" marginRight="10px">Get Started
        </Button>
      </InputRightElement>
    </InputGroup>
    </Box>
    <Box  width="500px" display="flex" justifyContent="space-evenly" margin="auto" marginTop="30px">
        <Box height="40px" width="170px" display="flex" >
            <Image height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" alt="logo" />
                <h1>Free for 15 users</h1></Box>

                <Box height="40px" width="170px" display="flex" >
            <Image height="20px" src="https://after.sale/wp-content/uploads/2022/04/02.png.webp" alt="logo" />
                <h1>Free for 15 users</h1></Box>
    </Box>
    <Box>
        <Image src="https://cdn5.engagebay.com/new/assets/img/banner-image.svg"/>
    </Box>
    <Box height="168px" width="1320px"  margin="auto" marginTop="20px" paddingTop="50px" border="solid grey" borderTop="none" borderRight="none" borderLeft="none">
    <SimpleGrid columns={7} spacing='40px'>
        <Image src="https://cdn5.engagebay.com/new/assets/img/p-logos/neilpatel.png"/>
        <Image src="https://cdn5.engagebay.com/new/assets/img/p-logos/forbs.png"/>
        <Image src="https://cdn5.engagebay.com/new/assets/img/p-logos/inc.png"/>
        <Image src="https://cdn5.engagebay.com/new/assets/img/p-logos/enterpreneur.png"/>
        <Image src="https://cdn5.engagebay.com/new/assets/img/p-logos/techcrunch.png"/>
        <Image src="https://cdn5.engagebay.com/new/assets/img/p-logos/jeffbullas.png"/>
        <Image src="https://cdn5.engagebay.com/new/assets/img/p-logos/business.png"/>
    </SimpleGrid>
    </Box>
    <Box fontSize="38px" fontWeight="bold" marginTop="50px">
    Single Solution for All Your Activities
    <Box fontSize="20px" color="#b0b6c8" fontWeight="lighter" marginTop="50px">Identify new opportunities, convert visitors, deliver customer happiness, and more!</Box>
    </Box>
    <Box>

    </Box>
    </>
    )
}
export default Homepage