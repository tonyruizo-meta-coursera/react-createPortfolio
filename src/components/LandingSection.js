import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialized in React";
const profileImg = "https://i.pravatar.cc/150?img=7";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <div>
      <VStack>
        <div>
          <Avatar src={profileImg} height={100} width={100} />
        </div>
        <div>{greeting}</div>
        <div></div>
      </VStack>
      <VStack>
        <Heading>
          <div>{bio1}</div>
          <div>{bio2}</div>
        </Heading>
      </VStack>
    </div>
  </FullScreenSection>
);

export default LandingSection;
