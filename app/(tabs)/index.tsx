import { StyleSheet, TextInput, TouchableOpacity, Text, View } from 'react-native';
import { useState } from 'react';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  const [review1, setReview1] = useState('');
  const [review2, setReview2] = useState('');
  const [review3, setReview3] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarText}>Complete Your Profile</Text>
      </View>
      
      <View style={styles.content}>
        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.text} type="subtitle">Past Medications (If Any)</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Enter the name of the medication"
            value={review1}
            onChangeText={setReview1}
          />
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.text} type="subtitle">Ongoing Treatment (If Any)</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Enter the name of the treatment."
            value={review2}
            onChangeText={setReview2}
          />
        </ThemedView>

        <ThemedView style={styles.stepContainer}>
          <ThemedText style={styles.text} type="subtitle">Current Medications (If Any)</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Enter the name of the medication"
            value={review3}
            onChangeText={setReview3}
          />
        </ThemedView>

        <ThemedView style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => console.log('Next button pressed')}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </ThemedView>
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
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    backgroundColor: '#004b35',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '300',
    fontFamily: 'Inter-Light',
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
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 35,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '300',
    fontFamily: 'Inter-Bold',
  },
});
