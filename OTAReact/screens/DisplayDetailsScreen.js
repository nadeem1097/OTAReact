import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Button } from 'react-native';

// The route prop contains the parameters passed from the previous screen
export default function DisplayDetailsScreen({ route, navigation }) {
  // Destructure the params from the route object
  const { name, email, bio } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.detailsContainer}>
        <Text style={styles.header}>Submitted Details</Text>

        <View style={styles.detailItem}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>{name}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.value}>{email}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.label}>Bio:</Text>
          <Text style={styles.value}>{bio || 'No bio provided.'}</Text>
        </View>

        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    justifyContent: 'center',
  },
  detailsContainer: {
    margin: 20,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
    color: '#333',
  },
  detailItem: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    color: '#000',
  },
});
