import { Card, CardBody, Heading, SkeletonCircle, Grid, GridItem, Collapse, Text, Image } from '@chakra-ui/react'
import { useVisibility } from '../context/GenericVisibilityContext'
import { useProgress } from '../context/ProgressTiersContext'

const stampConfig = [
    { left: { base: "16px", md: "40px", xl: "30px" }, top: { base: "0px", md: "10px", xl: "20px" }, color: "orange" },
    { left: { base: "18px", md: "39px", xl: "20px" }, top: { base: "5px", md: "16px", xl: "20px" }, color: "green" },
    { left: { base: "25px", md: "45px", xl: "10px" }, top: { base: "2px", md: "7px", xl: "40px" }, color: "orange" },
    { left: { base: "8px", md: "45px", xl: "20px" }, top: { base: "8px", md: "23px", xl: "37px" }, color: "green" },
    { left: { base: "6px", md: "49px", xl: "20px" }, top: { base: "5px", md: "15px", xl: "26px" }, color: "green" },
    { left: { base: "24px", md: "58px", xl: "10px" }, top: { base: "4px", md: "11px", xl: "24px" }, color: "orange" },
    { left: { base: "25px", md: "50px", xl: "20px" }, top: { base: "12px", md: "7px", xl: "30px" }, color: "orange" },
    { left: { base: "27px", md: "42px", xl: "10px" }, top: { base: "5px", md: "14px", xl: "39px" }, color: "orange" },
    { left: { base: "12px", md: "53px", xl: "20px" }, top: { base: "0px", md: "10px", xl: "20px" }, color: "green" },
    { left: { base: "23px", md: "37px", xl: "10px" }, top: { base: "-2px", md: "18px", xl: "20px" }, color: "orange" },
];

export default function StampCard() {
    const maxStamps = stampConfig.length;
    const { visibility } = useVisibility()
    const { points } = useProgress()

    const stamps = Math.floor(points / 500)

    return (
        <Collapse in={visibility.stampCard} animateOpacity unmountOnExit>
            <Card mt="2">
                <CardBody>
                    <Heading size='md'>
                        Stamp Card
                    </Heading>
                    <Text color="gray.700">
                        For every 500 points you earn, you get a stamp! You can earn a maximum of {maxStamps} stamps.
                    </Text>
                    <Grid
                        templateColumns={{ base: "repeat(4, 1fr)", md: "repeat(5, 1fr)", xl: "repeat(10, 1fr)" }}
                        templateRows={{ base: "repeat(3, 1fr)", md: "repeat(2, 1fr)", xl: "1fr" }}
                        h={{ base: "200px", md: "150px", xl: "100px" }}
                        gap={4}
                        mt="4px"
                    >
                        {stampConfig.map((stamp, index) => (
                            <GridItem
                                key={index}
                                colSpan={1}
                                rowSpan={1}
                                position="relative"
                                display="flex"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <SkeletonCircle size="10" isLoaded position="absolute" border="1px" borderColor="grey" />
                                {index < stamps && (
                                    // <SkeletonCircle
                                    //     size="9"
                                    //     isLoaded
                                    //     bg={stamp.color}
                                    //     position="absolute"
                                    //     left={stamp.left}
                                    //     top={stamp.top}
                                    // />
                                    <Image
                                        src='/favicon-32x32.png'
                                        bgColor={stamp.color}
                                        position="absolute"
                                        left={stamp.left}
                                        top={stamp.top}
                                        objectFit="cover"
                                        borderRadius="10px"
                                    />
                                )}
                            </GridItem>
                        ))}
                    </Grid>
                </CardBody>
            </Card>
        </Collapse>
    )
}