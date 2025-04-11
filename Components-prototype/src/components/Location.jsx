import { AspectRatio, Collapse, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react'
import { useVisibility } from '../context/GenericVisibilityContext';

export default function Location() {
    const { visibility } = useVisibility();
    const [location, setLocation] = useState({
        latitude: null,
        longitude: null,
    });

    useEffect(() => {
        try {
            getLocation();
        }
        catch (error) {
            console.error("Error getting location: ", error);
        }
    }, []);

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

    const mapSrc = `https://maps.google.com/maps?q=${location.latitude},${location.longitude}&t=&z=14&ie=UTF8&iwloc=B&output=embed`;

    return (
        <Collapse in={visibility.location} animateOpacity unmountOnExit>
            <Text
                fontSize="lg"
                fontWeight="bold"
                color="gray.500"
                mb="2"
                mt="2"
            >
                Location
            </Text>
            {location ? (
                <div className="map">
                    <div
                        className="mapouter"
                        style={{
                            position: "relative",
                            textAlign: "right",
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <div
                            className="gmap_canvas"
                            style={{
                                overflow: "hidden",
                                background: "none!important",
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <AspectRatio ratio={16 / 9}>
                                <iframe
                                    className="gmap_iframe"
                                    title="Google Map"
                                    src={mapSrc}
                                    style={{ width: "100%", height: "400px" }}>
                                </iframe>
                            </AspectRatio>
                        </div>
                    </div>
                </div>
            ) : (
                "Location Loading..."
            )}
        </Collapse>
    )
}
