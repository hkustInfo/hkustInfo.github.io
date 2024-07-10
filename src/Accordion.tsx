'use client'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    Flex,
    useColorModeValue,
    Text,
    Container,
    Button,
    Badge, Box,
    HStack,
    VStack, Divider, Center, Image, Card, CardHeader, Heading, CardBody, Stack, StackDivider
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

export default function SimpleAccordion() {
    return (
        <Flex
            minH={'100vh'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Container>
                <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}>
                            <HStack>
                                <Button borderRadius="90" background='red.200' p={1} height="10px" minWidth="10px" ></Button>
                                <Text fontSize="md" fontWeight='bold'>2023-24</Text>
                                <Text fontSize="sm" color='#4A5568'>Fall</Text>
                            </HStack>
                            <ChevronDownIcon fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                            <Center>
                                <HStack>
                                    <Center>
                                        <Image src='OX.png' boxSize='10%' />
                                        <Text paddingLeft='5%' paddingRight='5%' color="blue.800" fontSize="md" fontWeight='bold'>
                                            TGA 3.162
                                        </Text>
                                        <Center height='50px' paddingRight='5%' paddingBottom='2%'>
                                            <Divider orientation='vertical' />
                                        </Center>
                                        <Image src='WX1.png' boxSize='10%' />
                                        <Text paddingLeft='5%' paddingRight='5%' color="blue.800" fontSize="md" fontWeight='bold'>
                                            CGA 3.162
                                        </Text>
                                    </Center>
                                </HStack>
                            </Center>
                            <Card>
                                <CardBody>
                                    <Stack divider={<StackDivider />} spacing='4'>
                                        <Box>
                                            <HStack>
                                                <Heading size='xs' textTransform='uppercase'>
                                                    HMAW1905A
                                                </Heading>
                                                <Center height='50px' paddingLeft='25%'>
                                                    <Divider orientation='vertical' />
                                                </Center>
                                                <Text paddingLeft='5%' fontSize='xl' fontWeight='bold' color='blue.800'>
                                                    PP
                                                </Text>
                                            </HStack>
                                            <HStack>
                                                <Image src='v8.png' boxSize='6%' />
                                                <Text color='gray.500' fontSize='xs' align='left'>
                                                Behavioral Foundations of University Education: Habits, Mindsets, and Wellness
                                                </Text></HStack>
                                        </Box>
                                        <Box>
                                            <HStack>
                                                <Heading size='xs' textTransform='uppercase'>
                                                    LANG1402
                                                </Heading>
                                                <Center height='50px' paddingLeft='30%'>
                                                    <Divider orientation='vertical' />
                                                </Center>
                                                <Text paddingLeft='5%' fontSize='xl' fontWeight='bold' color='blue.800'>
                                                    B-
                                                </Text>
                                            </HStack>
                                            <HStack>
                                                <Image src='v8.png' boxSize='6%' />
                                                <Text color='gray.500' fontSize='xs' align='left'>
                                                English Language for University Studies
                                                </Text></HStack>
                                        </Box>
                                        <Box>
                                            <HStack>
                                                <Heading size='xs' textTransform='uppercase'>
                                                    MATH1013
                                                </Heading>
                                                <Center height='50px' paddingLeft='30%'>
                                                    <Divider orientation='vertical' />
                                                </Center>
                                                <Text paddingLeft='5%' fontSize='xl' fontWeight='bold' color='blue.800'>
                                                    B+
                                                </Text>
                                            </HStack>
                                            <HStack>
                                                <Image src='v8.png' boxSize='6%' />
                                                <Text color='gray.500' fontSize='xs' align='left'>
                                                Calculus IB
                                                </Text></HStack>
                                        </Box>
                                        <Box>
                                            <HStack>
                                                <Heading size='xs' textTransform='uppercase'>
                                                    OCES1010
                                                </Heading>
                                                <Center height='50px' paddingLeft='30%'>
                                                    <Divider orientation='vertical' />
                                                </Center>
                                                <Text paddingLeft='5%' fontSize='xl' fontWeight='bold' color='blue.800'>
                                                    B+
                                                </Text>
                                            </HStack>
                                            <HStack>
                                                <Image src='v8.png' boxSize='6%' />
                                                <Text color='gray.500' fontSize='xs' align='left'>
                                                Principles and Applications of Environmental Science
                                                </Text></HStack>
                                        </Box>
                                        <Box>
                                            <HStack>
                                                <Heading size='xs' textTransform='uppercase'>
                                                    PHYS1101
                                                </Heading>
                                                <Center height='50px' paddingLeft='30%'>
                                                    <Divider orientation='vertical' />
                                                </Center>
                                                <Text paddingLeft='5%' fontSize='xl' fontWeight='bold' color='blue.800'>
                                                    B+
                                                </Text>
                                            </HStack>
                                            <HStack>
                                                <Image src='v8.png' boxSize='6%' />
                                                <Text color='gray.500' fontSize='xs' align='left'>
                                                    Introductory Physics
                                                </Text></HStack>
                                        </Box>

                                    </Stack>
                                </CardBody>
                            </Card>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}>
                            <HStack>
                                <Button borderRadius="90" background='blue.200' p={1} height="10px" minWidth="10px" ></Button>
                                <Text fontSize="md" fontWeight='bold'>2023-24</Text>
                                <Text fontSize="sm" color='#4A5568'>Winter</Text>
                            </HStack>                            <ChevronDownIcon fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                        <Center>
                                <HStack>

                                    <Center>
                                        <Image src='OX.png' boxSize='10%' />
                                        <Text paddingLeft='5%' paddingRight='5%' color="blue.800" fontSize="md" fontWeight='bold'>
                                            TGA 0
                                        </Text>
                                        <Center height='50px' paddingRight='5%' paddingBottom='2%'>
                                            <Divider orientation='vertical' />
                                        </Center>
                                        <Image src='WX1.png' boxSize='10%' />
                                        <Text paddingLeft='5%' paddingRight='5%' color="blue.800" fontSize="md" fontWeight='bold'>
                                            CGA 3.162
                                        </Text>
                                    </Center>
                                </HStack>
                            </Center>
                            <Text fontSize='sm' color='gray.500'>
                            You do not enroll any course in this term.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}>
                            <HStack>
                                <Button borderRadius="90" background='purple.200' p={1} height="10px" minWidth="10px" ></Button>
                                <Text fontSize="md" fontWeight='bold'>2023-24</Text>
                                <Text fontSize="sm" color='#4A5568'>Spring</Text>
                            </HStack>                             <ChevronDownIcon fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                        <Center>
                                <HStack>
                                    <Center>
                                        <Image src='OX.png' boxSize='10%' />
                                        <Text paddingLeft='5%' paddingRight='5%' color="blue.800" fontSize="md" fontWeight='bold'>
                                            TGA 2.925
                                        </Text>
                                        <Center height='50px' paddingRight='5%' paddingBottom='2%'>
                                            <Divider orientation='vertical' />
                                        </Center>
                                        <Image src='WX1.png' boxSize='10%' />
                                        <Text paddingLeft='5%' paddingRight='5%' color="blue.800" fontSize="md" fontWeight='bold'>
                                            CGA 3.038
                                        </Text>
                                    </Center>
                                </HStack>
                            </Center>
                            <Card>
                                <CardBody>
                                    <Stack divider={<StackDivider />} spacing='4'>
                                        <Box>
                                            <HStack>
                                                <Heading size='xs' textTransform='uppercase'>
                                                    HMAW1905A
                                                </Heading>
                                                <Center height='50px' paddingLeft='25%'>
                                                    <Divider orientation='vertical' />
                                                </Center>
                                                <Text paddingLeft='5%' fontSize='xl' fontWeight='bold' color='blue.800'>
                                                    P
                                                </Text>
                                            </HStack>
                                            <HStack>
                                                <Image src='v8.png' boxSize='6%' />
                                                <Text color='gray.500' fontSize='xs' align='left'>
                                                Behavioral Foundations of University Education: Habits, Mindsets, and Wellness
                                                </Text></HStack>
                                        </Box>
                                        <Box>
                                            <HStack>
                                                <Heading size='xs' textTransform='uppercase'>
                                                    CHEM1020
                                                </Heading>
                                                <Center height='50px' paddingLeft='30%'>
                                                    <Divider orientation='vertical' />
                                                </Center>
                                                <Text paddingLeft='5%' fontSize='xl' fontWeight='bold' color='blue.800'>
                                                    C+
                                                </Text>
                                            </HStack>
                                            <HStack>
                                                <Image src='v8.png' boxSize='6%' />
                                                <Text color='gray.500' fontSize='xs' align='left'>
                                                General Chemistry I
                                                </Text></HStack>
                                        </Box>
                                        <Box>
                                            <HStack>
                                                <Heading size='xs' textTransform='uppercase'>
                                                    CHEM1050
                                                </Heading>
                                                <Center height='50px' paddingLeft='30%'>
                                                    <Divider orientation='vertical' />
                                                </Center>
                                                <Text paddingLeft='5%' fontSize='xl' fontWeight='bold' color='blue.800'>
                                                    P
                                                </Text>
                                            </HStack>
                                            <HStack>
                                                <Image src='v8.png' boxSize='6%' />
                                                <Text color='gray.500' fontSize='xs' align='left'>
                                                Laboratory for General Chemistry I
                                                </Text></HStack>
                                        </Box>
                                        <Box>
                                            <HStack>
                                                <Heading size='xs' textTransform='uppercase'>
                                                    LANG1403S
                                                </Heading>
                                                <Center height='50px' paddingLeft='28%'>
                                                    <Divider orientation='vertical' />
                                                </Center>
                                                <Text paddingLeft='5%' fontSize='xl' fontWeight='bold' color='blue.800'>
                                                    B+
                                                </Text>
                                            </HStack>
                                            <HStack>
                                                <Image src='v8.png' boxSize='6%' />
                                                <Text color='gray.500' fontSize='xs' align='left'>
                                                Academic English for University Studies
                                                </Text></HStack>
                                        </Box>
                                        <Box>
                                            <HStack>
                                                <Heading size='xs' textTransform='uppercase'>
                                                    LIFS1902
                                                </Heading>
                                                <Center height='50px' paddingLeft='35%'>
                                                    <Divider orientation='vertical' />
                                                </Center>
                                                <Text paddingLeft='5%' fontSize='xl' fontWeight='bold' color='blue.800'>
                                                    B+
                                                </Text>
                                            </HStack>
                                            <HStack>
                                                <Image src='v8.png' boxSize='6%' />
                                                <Text color='gray.500' fontSize='xs' align='left'>
                                                General Biology II
                                                </Text></HStack>
                                        </Box>
                                        <Box>
                                            <HStack>
                                                <Heading size='xs' textTransform='uppercase'>
                                                    MATH1014
                                                </Heading>
                                                <Center height='50px' paddingLeft='32%'>
                                                    <Divider orientation='vertical' />
                                                </Center>
                                                <Text paddingLeft='5%' fontSize='xl' fontWeight='bold' color='blue.800'>
                                                    B-
                                                </Text>
                                            </HStack>
                                            <HStack>
                                                <Image src='v8.png' boxSize='6%' />
                                                <Text color='gray.500' fontSize='xs' align='left'>
                                                Calculus II
                                                </Text></HStack>
                                        </Box>
                                    </Stack>
                                </CardBody>
                            </Card>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionButton
                            display="flex"
                            alignItems="center"
                            justifyContent="space-between"
                            p={4}>
                            <HStack>
                                <Button borderRadius="90" background='yellow.200' p={1} height="10px" minWidth="10px" ></Button>
                                <Text fontSize="md" fontWeight='bold'>2023-24</Text>
                                <Text fontSize="sm" color='#4A5568'>Summer</Text>
                            </HStack>                             <ChevronDownIcon fontSize="24px" />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                        <Center>
                                <HStack>

                                    <Center>
                                        <Image src='OX.png' boxSize='10%' />
                                        <Text paddingLeft='5%' paddingRight='5%' color="blue.800" fontSize="md" fontWeight='bold'>
                                            TGA 0
                                        </Text>
                                        <Center height='50px' paddingRight='5%' paddingBottom='2%'>
                                            <Divider orientation='vertical' />
                                        </Center>
                                        <Image src='WX1.png' boxSize='10%' />
                                        <Text paddingLeft='5%' paddingRight='5%' color="blue.800" fontSize="md" fontWeight='bold'>
                                            CGA 3.038
                                        </Text>
                                    </Center>
                                </HStack>
                            </Center>
                            <Text fontSize='sm' color='gray.500'>
                            You do not enroll any course in this term.
                            </Text>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container>
        </Flex>
    )
}