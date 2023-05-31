import { View, Text } from "react-native";
import React from "react";
import { OnboardFlow } from "react-native-onboard";

const onboardPages = [
  {
    title: "Hello!",
    subtitle: "Welcome to the Crypto Price Tracker",
    imageUri: "https://frigade.com/img/example1.png",
  },
  {
    title: "Real time updates",
    subtitle: "Compare prices between currencies",
    imageUri: "https://frigade.com/img/example2.png",
  },
  {
    title: "View trends of the past week",
    subtitle: "Press on a currency to view chart",
    imageUri: "https://frigade.com/img/example2.png",
  },
];

export default function Onboard() {
  return <OnboardFlow pages={onboardPages} type="fullscreen" />;
}
