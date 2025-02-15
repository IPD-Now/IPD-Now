import { StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';
import { useState } from 'react';

export default function MedicationDetails() {
  const [review1, setReview1] = useState('');
  const [review2, setReview2] = useState('');
  const [review3, setReview3] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Complete Your Profile</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.stepContainer}>
          <Text style={styles.text}>Past Medications (If Any)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the name of the medication"
            value={review1}
            onChangeText={setReview1}
          />
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.text}>Ongoing Treatment (If Any)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the name of the treatment."
            value={review2}
            onChangeText={setReview2}
          />
        </View>

        <View style={styles.stepContainer}>
          <Text style={styles.text}>Current Medications (If Any)</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter the name of the medication"
            value={review3}
            onChangeText={setReview3}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Next button pressed')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  topBar: {
    height: 80,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: '#004b36',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
    fontFamily: 'Inter-Light',
    alignContent: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  stepContainer: {
    gap: 18,
    marginBottom: 16,
    width: '100%',
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: '300',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 8,
    padding: 25,
    fontSize: 16,
    backgroundColor: 'white',
    width: '100%',
    height: 120,
    fontFamily: 'Inter-Light',
  },
  buttonContainer: {
    marginTop: 16,
    alignItems: 'center',
    width: '94%',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 35,
    width: '94%',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
  },
});
