import React from 'react';
import { StyleSheet, Text, View, TextInput ,Button } from 'react-native';

export default function rules() {
  return (
      <View style={styles.container}>
          <Text> Rules Screen</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 40
        
    }
});