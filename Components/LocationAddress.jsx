import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, StatusBar } from 'react-native';

export default function LocationAddress({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#004b36" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Complete Your Profile</Text>
      </View>
    
      <Text style={styles.label}>Location</Text>

      <View style={styles.roundedBox}>
        <View style={styles.inputBox}>
      <TextInput style={styles.input} placeholder="Longitude"/>
      <TextInput style={styles.input} placeholder="Latitude"/>
        </View>
        <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed!')}>
        <Text style={styles.buttonText}>Fetch Location</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.label}>Address</Text>
      <TextInput style={styles.addline} placeholder="House Number"/>
      <TextInput style={styles.addline} placeholder="Address Line 1"/>
      <TextInput style={styles.addline} placeholder="Address Line 2"/>
      <TextInput style={styles.addline} placeholder="Pin Code"/>

      <TouchableOpacity 
        style={styles.nextButton} 
        onPress={() => navigation.navigate('NextScreen')}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#f9f9f9',
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
  roundedBox: {
    width: '91%',
    height: 'auto',
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderWidth: 2, // Fixed border width
    borderColor: 'black',
    alignSelf: 'center',
    marginBottom: 30, // Reasonable spacing
  },
  nextButton: {
    width: '90%',
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20, 
    margin: 20,
  },
  nextButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
    input: {
        width: '45%',
        height: 60,
        marginHorizontal: 10,
        borderWidth: 1.5,
        borderColor: 'black',
        borderRadius: 30,
        paddingHorizontal: 15,
        paddingVertical: 12,
        fontSize: 16,
        marginBottom: 20,
        marginTop: 20,
    },
    inputBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    button: {
        backgroundColor: '#001996', // Button color
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 30, // Rounded corners
        width: '95%', // Button width
        height: 60, // Button height
        justifyContent: 'center', 
        marginBottom: 20, // Reasonable spacing
      },
      buttonText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
      },
      addline:{
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
      }
});
