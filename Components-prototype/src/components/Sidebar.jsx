import {
    Flex,
    List,
    ListIcon,
    ListItem,
    Spacer,
    Stack,
    Text,
    Box,
    Switch,
    HStack,
  } from "@chakra-ui/react";
  import React from "react";
  import { NavLink } from "react-router-dom";
  import { EditIcon, AtSignIcon, CalendarIcon } from "@chakra-ui/icons";
  import ThemeSwitcher from "../layouts/ThemeSwitcher";
  import { useThemeContext } from "../layouts/ThemeContext";
  import { useVisibility } from "../context/GenericVisibilityContext";
  import { TouchSensor } from '@dnd-kit/core';
  import {
    DndContext,
    useSensor,
    useSensors,
    PointerSensor,
    closestCenter,
  } from "@dnd-kit/core";
  import {
    SortableContext,
    verticalListSortingStrategy,
    arrayMove,
    useSortable,
  } from "@dnd-kit/sortable";
  import { CSS } from "@dnd-kit/utilities";
  
  const componentLabels = {
    table: "Table",
    tierLevel: "Tier level",
    progressBar: "Progress bar",
    stampCard: "Stampcard",
    points: "Points",
    texts: "Texts",
    location: "Location",
  };
  
  function SortableToggle({ id, isChecked, onChange, label }) {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id });
  
    const style = {
      transform: CSS.Transform.toString(transform),
      transition,
      cursor: "grab",
      width: "100%",
    };
  
    return (
      <Box ref={setNodeRef} style={style} {...attributes} {...listeners}>
        <HStack spacing={4}>
          <Text color="white">{label}</Text>
          <Switch colorScheme="teal" isChecked={isChecked} onChange={onChange} />
        </HStack>
      </Box>
    );
  }
  
  export default function Sidebar() {
    const { visibility, toggleVisibility, componentOrder, reorderComponents } = useVisibility();
    const { primaryColor } = useThemeContext();
  
    const sensors = useSensors(
        useSensor(PointerSensor, {
          activationConstraint: {
            distance: 5, // voorkomt dat je per ongeluk een drag start bij simpele click/tap
          },
        }),
        useSensor(TouchSensor, {
          activationConstraint: {
            delay: 250,
            tolerance: 5,
          },
        })
      );      
  
    return (
      <Flex
        as="nav"
        p="10px"
        bg={primaryColor}
        color="white"
        direction={{ base: "row", md: "row", lg: "column" }}
        minH={{ base: "auto", md: "auto", lg: "100vh" }}
        w="full"
        wrap="wrap"
        justify="space-between"
        align="center"
      >
        <Stack
          direction={{ base: "row", md: "row", lg: "column" }}
          spacing={4}
          align="center"
          justify="center"
          wrap="wrap"
          w="full"
        >
          <List display="flex" flexDirection={{ base: "row", md: "row", lg: "column" }} gap={4} fontSize="1.2em">
            <ListItem>
              <NavLink to="/">
                <ListIcon as={CalendarIcon} color="white" />
                Dashboard
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/create">
                <ListIcon as={EditIcon} color="white" />
                New Task
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink to="/profile">
                <ListIcon as={AtSignIcon} color="white" />
                Profile
              </NavLink>
            </ListItem>
          </List>
  
          <Spacer />
  
          <Box>
            <Text
              color="white"
              fontSize="1.2em"
              fontWeight={{ base: "normal", lg: "bold" }}
              mb={4}
              display={"flex"}
              justifyContent={"center"}
            >
              Components
            </Text>
  
            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={({ active, over }) => {
                if (active.id !== over?.id) {
                  const oldIndex = componentOrder.indexOf(active.id);
                  const newIndex = componentOrder.indexOf(over.id);
                  const newOrder = arrayMove(componentOrder, oldIndex, newIndex);
                  reorderComponents(newOrder);
                }
              }}
            >
              <SortableContext items={componentOrder} strategy={verticalListSortingStrategy}>
                <Stack spacing={4}>
                  {componentOrder.map((key) => (
                    <SortableToggle
                      key={key}
                      id={key}
                      label={componentLabels[key]}
                      isChecked={visibility[key]}
                      onChange={() => toggleVisibility(key)}
                    />
                  ))}
                </Stack>
              </SortableContext>
            </DndContext>
          </Box>
  
          <Box>
            <Text
              color="white"
              fontSize="1.2em"
              fontWeight={{ base: "normal", lg: "bold" }}
            >
              Theme
            </Text>
            <Flex mt={{ md: "auto" }} mb={{ md: "10px" }}>
              <ThemeSwitcher />
            </Flex>
          </Box>
        </Stack>
      </Flex>
    );
  }
  