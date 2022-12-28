import { Heading, Box, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack bg="white" borderRadius="5px" m={2} align="flex-start">
      <Image borderRadius="5px" src={imageSrc} />
      <Box p={2}>
        <Heading as="h5" size="sm" color="black" my={2}>
          {title}
        </Heading>
      </Box>
      <Box p={2}>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
      </Box>
      <Box p={2}>
        <a href="/">
          <Text fontSize="xs" color="black" fontWeight="extrabold" my={2}>
            See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </Text>
        </a>
      </Box>
    </VStack>
  );
};

export default Card;
