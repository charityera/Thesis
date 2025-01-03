import React from "react";
import { Text, View } from "react-native";
import { HomeContainer } from "./styled";
import { HomeProvider } from "./context";

const Home = () => (
  <HomeProvider>
    <HomeContainer>
      <Text>Welcome to Home Screen!</Text>
    </HomeContainer>
  </HomeProvider>
);

export default Home;
