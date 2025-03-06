import { List, Tab, TabList, TabPanel, TabPanels, Tabs, ListItem, ListIcon } from "@chakra-ui/react";
import { MdChatBubbleOutline, MdCheckCircle, MdEmail, MdError, MdStar } from "react-icons/md";

export default function Profile() {
  return (
    <Tabs mt="40px" p="20px" colorScheme="purple" variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={MdEmail} color="purple.400" />
              Email: mario@netninja.dev
            </ListItem>
            <ListItem>
              <ListIcon as={MdChatBubbleOutline} color="purple.400" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </ListItem>
            <ListItem>
              <ListIcon as={MdStar} color="purple.400" />
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
