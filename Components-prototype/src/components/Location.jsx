import { Button, Text } from '@chakra-ui/react';
import React, { useState } from 'react'

export default function Location() {
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
    });

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setLocation({ latitude, longitude });
            });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    const handleButtonClick = () => {
        getLocation();
    }

  return (
    <>
    <Button onClick={handleButtonClick} colorScheme="blue" size="md">
        Get Location
    </Button>
    {location && (
        <Text fontSize="lg" mt="4">
            Latitude: {location.latitude}, Longitude: {location.longitude}
        </Text>
    )}
    
    </>
  )
}
