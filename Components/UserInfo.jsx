import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from "react-native";

export default function UserInfo() {
  const [selectedGender, setSelectedGender] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#004b36" />

      <View style={styles.header}>
        <Text style={styles.title}>Complete Your Profile</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter Your Name" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Your Email" keyboardType="email-address" />

        <Text style={styles.label}>Birthday</Text>
        <TextInput style={styles.input} placeholder="Enter Your Birthday" />

        <Text style={styles.label}>Emergency Contact (If Any)</Text>
        <TextInput style={styles.input} placeholder="Enter Emergency Phone Number" keyboardType="phone-pad" />

        <Text style={styles.label}>Gender</Text>
        <View style={styles.genderContainer}>
          <TouchableOpacity
            style={[styles.genderButton, selectedGender === "Male" && styles.selectedGender]}
            onPress={() => setSelectedGender("Male")}
            accessibilityLabel="Select Male Gender"
          >
            <Text style={[styles.genderText, selectedGender === "Male" && { color: 'white' }]}>Male</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.genderButton, selectedGender === "Female" && styles.selectedGender]}
            onPress={() => setSelectedGender("Female")}
            accessibilityLabel="Select Female Gender"
          >
            <Text style={[styles.genderText, selectedGender === "Female" && { color: 'white' }]}>Female</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.nextButton} accessibilityLabel="Proceed to Next Step">
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    justifyContent: "flex-start",
  },
  header: {
    backgroundColor: '#004b36',
    padding: 20,
    marginBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: -50,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    alignSelf: 'center',
    marginTop: 40,
  },
  label: {
    fontSize: 18,
    color: '#000',
    marginLeft: 25,
    marginBottom: 10,
  },
  input: {
    width: '90%',
    height: 60,
    borderWidth: 1.5,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 20,
    alignSelf: 'center',
    backgroundColor: "#fff",
  },
  genderContainer: {
    alignContent: "center",
    alignSelf: "center",
    width: "94%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  genderButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#000",
    padding: 10,
    borderRadius: 20,
    alignItems: "center",
    marginHorizontal: 5,
    backgroundColor: "#fff",
    height: 60,
    justifyContent: 'center',
  },
  selectedGender: {
    backgroundColor: "#000",
  },
  genderText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  nextButton: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    height: 60,
    justifyContent: 'center',
    width: '94%',
    alignSelf: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    padding: 20,
  },
});
