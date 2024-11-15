import React, { useState } from 'react';
import { View, Text, TextInput, Switch, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function AddBathroom({ navigation }) {
  const [bathroomName, setBathroomName] = useState('');
  const [rating, setRating] = useState('');
  const [openHours, setOpenHours] = useState('');
  const [closeHours, setCloseHours] = useState('');
  const [isDisabilityFriendly, setIsDisabilityFriendly] = useState(false);
  const [hasChangingStation, setHasChangingStation] = useState(false);
  const [address, setAddress] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  //form submission
  const handleSubmit = () => {
    const newBathroom = {
      name: bathroomName,
      rating,
      openHours,
      closeHours,
      disabilityFriendly: isDisabilityFriendly,
      changingStation: hasChangingStation,
      address,
      saved: isSaved,
    };

    // alert with the entered info
    Alert.alert("Bathroom Added", `Here is the info:\n${JSON.stringify(newBathroom, null, 2)}`);
    
    // Clear fields after submission
    setBathroomName('');
    setRating('');
    setOpenHours('');
    setCloseHours('');
    setIsDisabilityFriendly(false);
    setHasChangingStation(false);
    setAddress('');
    setIsSaved(false);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
        <Text style={styles.backButtonText}>Home</Text>
      </TouchableOpacity>

      {/* Page Title */}
      <Text style={styles.title}>Add a Bathroom</Text>

      {/* Bathroom Name */}
      <TextInput
        style={styles.input}
        placeholder="Bathroom Name"
        value={bathroomName}
        onChangeText={setBathroomName}
      />

      {/* Rating */}
      <TextInput
        style={styles.input}
        placeholder="Rating (1-5)"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
      />

      {/* Open Hours */}
      <TextInput
        style={styles.input}
        placeholder="Opening Hours (e.g., 9:00 AM)"
        value={openHours}
        onChangeText={setOpenHours}
      />

      {/* Close Hours */}
      <TextInput
        style={styles.input}
        placeholder="Closing Hours (e.g., 10:00 PM)"
        value={closeHours}
        onChangeText={setCloseHours}
      />

      {/* Disability Accommodations */}
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Disability Accommodations</Text>
        <Switch
          value={isDisabilityFriendly}
          onValueChange={setIsDisabilityFriendly}
        />
      </View>

      {/* Diaper Changing Station */}
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Diaper Changing Station</Text>
        <Switch
          value={hasChangingStation}
          onValueChange={setHasChangingStation}
        />
      </View>

      {/* Address */}
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />

      {/* Save Option */}
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Save to Favorites</Text>
        <Switch
          value={isSaved}
          onValueChange={setIsSaved}
        />
      </View>

      {/* Submit Button */}
      <Button title="Add Bathroom" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonText: {
    fontSize: 16,
    marginLeft: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
  },
});

