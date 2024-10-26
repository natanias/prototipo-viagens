import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

export const Button = ({ title, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button} activeOpacity={0.6}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1b9eb8',
    borderRadius: 10,
    paddingHorizontal: 55,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});
