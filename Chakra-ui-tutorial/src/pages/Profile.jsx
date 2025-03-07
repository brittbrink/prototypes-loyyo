import { List, Tab, TabList, TabPanel, TabPanels, Tabs, ListItem, ListIcon } from "@chakra-ui/react";
import { MdChatBubbleOutline, MdCheckCircle, MdEmail, MdError, MdStar } from "react-icons/md";
import { useThemeContext } from '../layouts/ThemeContext'

export default function Profile() {
  const { primaryColor, colorScheme } = useThemeContext()

  return (
    <Tabs mt="40px" p="20px" colorScheme={colorScheme} variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: primaryColor }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: primaryColor }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={MdEmail} color={primaryColor} />
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={MdChatBubbleOutline} color={primaryColor} />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={MdStar} color={primaryColor} />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>

        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={MdError} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={MdError} color="red.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="teal.400" />
              Lorem ipsum dolor sit amet consectetur.
            </ListItem>
          </List>
        </TabPanel>

      </TabPanels>
    </Tabs>
  )
}
