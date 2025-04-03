import React from "react";
import { Box, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useThemeContext } from "../layouts/ThemeContext";

export default function ThemeSwitcher() {
  const { primaryColor, setPrimaryColor } = useThemeContext();

  return (
    <Box>
      <RadioGroup onChange={setPrimaryColor} value={primaryColor}>
        <Stack direction="row">
          <Radio value="blue.400">Blue</Radio>
          <Radio value="purple.400">Purple</Radio>
          <Radio value="green.400">Green</Radio>
          <Radio value="red.400">Red</Radio>
        </Stack>
      </RadioGroup>
    </Box>
  );
}
