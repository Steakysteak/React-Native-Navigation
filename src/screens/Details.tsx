import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

import { RootStackParamList } from '../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

const Details = ({navigation}: DetailsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details</Text>
      <Button 
      title='Go to Home'
      onPress={() => navigation.push('Home')}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
