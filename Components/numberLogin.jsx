import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const IPDNowScreen = () => {
  return (
    <View style={styles.container}>
      {/* Illustration */}
      <Image
        source={require("../assets/phone-image.png")}
        style={styles.image}
      />

      {/* Title */}
      <Text style={styles.title}>IPD Now</Text>

      {/* Phone Number Label */}
      <Text style={styles.label}>Phone Number</Text>

      {/* Phone Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter Your Phone Number"
        keyboardType="phone-pad"
        placeholderTextColor="#999"
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.button}>
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <Path d="M5 12h14M12 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center', // Adjusted to center the content vertically
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 40,
  },
  image: {
    width: 350, // Adjusted width to fit different screen sizes better
    height: 350, // Adjusted height similarly
    marginBottom: 20, // Reduced the margin between image and title
  },
  title: {
    fontSize: 60, // Adjusted size to make the title less overwhelming
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: 40, // Adjusted spacing between title and input field
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 18,
    color: '#000',
    marginBottom: 10, // Adjusted the bottom margin
    marginLeft: 25,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 40, // Adjusted spacing between input and button
  },
  button: {
    width: '90%',
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
});

export default IPDNowScreen;
