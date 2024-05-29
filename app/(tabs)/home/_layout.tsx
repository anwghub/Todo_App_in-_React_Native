import React from "react";
import { Stack } from "expo-router";
import { StackScreenProps } from "@react-navigation/stack";
import { ModalPortal } from "react-native-modals";

interface LayoutProps extends StackScreenProps<{}> {}

const Layout: React.FC<LayoutProps> = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
      <ModalPortal />
    </>
  );
};

export default Layout;
