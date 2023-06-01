import { OnboardFlow, PrimaryButton } from "react-native-onboard";
import { Button, Image } from "react-native";
import React from "react";

const onboardPages = [
  {
    title: "Hello!",
    subtitle: "Welcome to the\nCrypto Price Tracker",
    imageUri: Image.resolveAssetSource(require("../assets/Onboard/1_Hello.png"))
      .uri,
  },
  {
    title: "Real Time Updates",
    subtitle: "Get latest information\nof the currencies' changes",
    imageUri: Image.resolveAssetSource(
      require("../assets/Onboard/2_RealTimeUpdates.png")
    ).uri,
  },
  {
    title: "Variety Support",
    subtitle: "Compare prices between\nmultiple different currencies",
    imageUri: Image.resolveAssetSource(
      require("../assets/Onboard/3_VarietySupport.png")
    ).uri,
  },
  {
    title: "Past Week's Trend",
    subtitle: "Tap on a currency to view\nchanges for the past 7 days",
    imageUri: Image.resolveAssetSource(
      require("../assets/Onboard/4_PastWeek'sTrend.png")
    ).uri,
  },
];

export default function Onboard() {
  return (
    <OnboardFlow
      pages={onboardPages}
      type="fullscreen"
      showDismissButton
      autoPlay
      PrimaryButtonComponent={() => {}}
      paginationColor="lightskyblue"
      paginationSelectedColor="deepskyblue"
    />
  );
}
