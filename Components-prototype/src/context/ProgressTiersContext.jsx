import { color } from "@chakra-ui/react";
import { createContext, useContext, useState } from "react";

const ProgressContext = createContext(null);

export const ProgressProvider = ({ children }) => {
    const [points, setPoints] = useState(0);

    const tiers = [
        { name: "Bronze", min: 0, max: 1000, color: "yellow.600"},
        { name: "Silver", min: 1001, max: 2000, color: "gray.400"},
        { name: "Gold", min: 2001, max: 3000, color: "yellow.400"},
        { name: "Emerald", min: 3001, max: 4000, color: "green.400"},
        { name: "Diamond", min: 4001, max: 5000, color: "blue.300"},
    ];

    const activeTierIndex = tiers.findIndex(
        (tier) => points >= tier.min && points <= tier.max
    );

    const maxIndex = tiers.length - 1;
    const progressPercent = (activeTierIndex / maxIndex) * 100;

    const currentTier = tiers[activeTierIndex];
    const nextTier = tiers[activeTierIndex + 1];

    const nextTierPointsLeft = nextTier ? nextTier.min - points : 0;

    return (
        <ProgressContext.Provider value={{
            points,
            setPoints,
            tiers,
            activeTierIndex,
            currentTier,
            nextTier,
            progressPercent,
            nextTierPointsLeft
        }}>
            {children}
        </ProgressContext.Provider>
    );
};

export const useProgress = () => useContext(ProgressContext);
