import React, { useEffect } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
const OtpScreen = ({ onAnimationEnd }) => {
  const fadeAnim = new Animated.Value(0);
  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500, 
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <View style={styles.container}>
      <Animated.Image 
        source={require('../assets/otp.png')}  
        style={[styles.image, { opacity: fadeAnim }]}
        resizeMode="contain"  
      />
      <Animated.Text style={[styles.title, { opacity: fadeAnim }]}>IPD Now</Animated.Text>
      <Animated.View style={[styles.formContainer, { opacity: fadeAnim }]}>
        <Text style={styles.label}>OTP</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter OTP"
          placeholderTextColor="gray"
          keyboardType="numeric"
        />
      </Animated.View>
      <Animated.View style={[styles.buttonContainer, { opacity: fadeAnim }]}>
        <TouchableOpacity style={styles.button} onPress={onAnimationEnd}>
          <Text style={styles.buttonText}>Proceed</Text>
        </TouchableOpacity>
      </Animated.View>
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

  formContainer: {
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: '90%',
    marginBottom: 0, // Increased space between input and button
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 18,
    color: '#000',
    marginBottom: 10, // Adjusted the bottom margin
    marginLeft: 25,
  },
  input: {
    width: '95%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 40,
  },
  buttonContainer: {
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
    width: '90%',
    marginBottom: -20, // Pushes button to the bottom
  },
  button: {
    width: '90%',          
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default OtpScreen;