import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { TextInput } from "react-native-paper";

interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  source?: any;
  onPress?: () => void;
}

const CustomDown: React.FC<CustomInputProps> = ({ value, onChange, placeholder, source, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        editable={false}
        selectTextOnFocus={false}
        label={placeholder}
        mode="outlined"
        outlineColor="#ccc"
        activeOutlineColor="#6200ee"
        theme={{
          roundness: 4,
        }}
        right={
          <TextInput.Icon
            icon={() => (
              <TouchableOpacity onPress={onPress}>
                <Image
                  source={source}
                  style={styles.icon}
                />
              </TouchableOpacity>
            )}
          />
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    marginTop: 23,
  },
  icon: {
    width: 30,
    height: 30
  },
});

export default CustomDown;
