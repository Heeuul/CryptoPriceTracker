import { View, Text } from "react-native";
import React from "react";
import { OnboardFlow } from "react-native-onboard";

const onboardPages = [
  {
    title: "Hello!",
    subtitle: "Welcome to the\nCrypto Price Tracker",
    imageUri:
      "https://raw.githubusercontent.com/Heeuul/CryptoPriceTracker/main/assets/Onboard1.png?token=GHSAT0AAAAAACDKVIMQL5INSHIHTMXTCJNSZDXK4BA",
  },
  {
    title: "Real Time Updates",
    subtitle: "Get the latest info of the prices",
    imageUri:
      "https://www.shutterstock.com/image-vector/real-time-icon-solid-260nw-1722565684.jpg",
  },
  {
    title: "Multiple Currencies",
    subtitle: "Compare prices\nbetween currencies",
    imageUri:
      "https://raw.githubusercontent.com/Heeuul/CryptoPriceTracker/main/assets/Onboard2.png?token=GHSAT0AAAAAACDKVIMQOI34R57CDJZNLPRGZDXK4XA",
  },
  {
    title: "Past Week's Trend",
    subtitle: "Tap on a currency to\nview changes for\nthe past 7 days",
    imageUri:
      "https://raw.githubusercontent.com/Heeuul/CryptoPriceTracker/main/assets/Onboard3.png?token=GHSAT0AAAAAACDKVIMRJQXUPPAWBD4UCZO4ZDXLCSQ",
  },
];

export default function Onboard() {
  return <OnboardFlow pages={onboardPages} type="fullscreen" />;
}
