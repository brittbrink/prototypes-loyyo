import { createContext, useContext, useState } from "react";

const ProgressContext = createContext(null);

export const ProgressProvider = ({ children }) => {
    const [points, setPoints] = useState(0);

    const tiers = [
        { name: "Bronze", min: 0, max: 1000 },
        { name: "Silver", min: 1001, max: 2000 },
        { name: "Gold", min: 2001, max: 3000 },
        { name: "Emerald", min: 3001, max: 4000 },
        { name: "Diamond", min: 4001, max: 5000 },
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
