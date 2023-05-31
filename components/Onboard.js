import { View, Text } from "react-native";
import React from "react";
import { OnboardFlow } from "react-native-onboard";

const onboardPages = [
  {
    title: "Hello!",
    subtitle: "Welcome to the Crypto Price Tracker",
    imageUri:
      "https://raw.githubusercontent.com/Heeuul/CryptoPriceTracker/main/assets/Onboard1.png?token=GHSAT0AAAAAACDKVIMQL5INSHIHTMXTCJNSZDXK4BA",
  },
  {
    title: "Real time updates",
    subtitle: "Compare prices between currencies",
    imageUri:
      "https://raw.githubusercontent.com/Heeuul/CryptoPriceTracker/main/assets/Onboard2.png?token=GHSAT0AAAAAACDKVIMQOI34R57CDJZNLPRGZDXK4XA",
  },
  {
    title: "View trends of the past week",
    subtitle: "Press on a currency to view chart",
    imageUri:
      "https://raw.githubusercontent.com/Heeuul/CryptoPriceTracker/main/assets/Onboard3.png?token=GHSAT0AAAAAACDKVIMR2FDGRU73INALTFECZDXK4ZA",
  },
];

export default function Onboard() {
  return <OnboardFlow pages={onboardPages} type="fullscreen" />;
}
