import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const register = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const handleRegister = async () => {
    const user = {
      name: name,
      email: email,
      password: password
    }

      axios.post("http://192.168.1.100:3000/register", user).then((response) => {
      
        console.log(response);
        Alert.alert("Registration successful", "You have registered successfully");
        setEmail("");
        setPassword("");
        setName("");
      }).catch((error) => {
        Alert.alert("Registration failed", "An error occurred during registration");
        console.log("error", error);
        
      })
    }; 
  
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
      >
        <View style={{ marginTop: 80 }}>
          <Text style={{ fontSize: 18, fontWeight: "500", color: "#0066B2" }}>
            TODO-LIST-TRACKER
          </Text>
        </View>

        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 20 }}>
              Register to your account
            </Text>
          </View>

          <View style={{ marginTop: 70 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#E0E0E0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <Ionicons
                style={{ marginLeft: 8, marginRight: 7 }}
                name="person"
                size={24}
                color="gray"
              />
              <TextInput
                value={name}
                onChangeText={(text) => setName(text)}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: name ? 17 : 17,
                }}
                placeholder="Enter your name"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#E0E0E0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <MaterialIcons
                style={{ marginLeft: 8, marginRight: 7 }}
                name="email"
                size={24}
                color="gray"
              />
              <TextInput
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: email ? 17 : 17,
                }}
                placeholder="Enter your email"
              />
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#E0E0E0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 30,
              }}
            >
              <Feather
                style={{ marginLeft: 8, marginRight: 7 }}
                name="lock"
                size={24}
                color="gray"
              />
              <TextInput
                value={password}
                secureTextEntry={true}
                onChangeText={(text) => setPassword(text)}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: password ? 17 : 17,
                }}
                placeholder="Enter your password"
              />
            </View>

            <View style={{ marginTop: 60 }} />

            <Pressable
              onPress={handleRegister}
              style={{
                width: 200,
                backgroundColor: "#6699CC",
                padding: 15,
                borderRadius: 6,
                marginTop: 30,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text style={{ textAlign: "center", color: "white", fontSize: 16 }}>
                Register
              </Text>
            </Pressable>

            <Pressable
              onPress={() => router.replace("/login")}
              style={{ marginTop: 15 }}
            >
              <Text style={{ textAlign: "center", fontSize: 15, color: "gray" }}>
                Already have an account? Login
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };

  export default register;

  const styles = StyleSheet.create({});











