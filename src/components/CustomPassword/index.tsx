import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageSourcePropType,
  useColorScheme,
  KeyboardTypeOptions,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from './style';
import { images } from '../../assets/index';

interface CustomPasswordInputProps {
  name: string;
  label: string;
  Icon: ImageSourcePropType;
  isPasswordVisible: boolean;
  togglePasswordVisibility: () => void;
  Error?: boolean;
  errorText?: string;
  maxLength?: number;
  keyboardType: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
}

const CustomPasswordInputBox = ({
  name,
  label,
  Icon,
  isPasswordVisible,
  togglePasswordVisibility,
  Error,
  errorText,
  maxLength,
  keyboardType,
  onChangeText,
}: CustomPasswordInputProps) => {
  return (
    <View>
      <TextInput
        style={[styles.phoneInput, Error ? styles.errorContainer : null]}
        label={label}
        keyboardType={keyboardType}
        value={name}
        maxLength={maxLength}
        secureTextEntry={!isPasswordVisible}
        textColor={'black'}
        onChangeText={onChangeText}
        mode="outlined"
        underlineStyle={{
          display: 'none',
        }}
        theme={{
          colors: {
            primary: Error ? 'red' : 'gray',
            placeholder: 'grey',
            background: 'transparent',
            disabled: 'transparent',
          },
        }}
        right={
          <TextInput.Icon
            icon={() => (
              <TouchableOpacity
                onPress={togglePasswordVisibility}>
                <Image
                  source={isPasswordVisible ? images.eye_off : images.eye}
                  style={[styles.eyeImg, { tintColor: 'grey' }]}
                />
              </TouchableOpacity>
            )}
          />
        }
        left={
          Icon && (
            <TextInput.Icon
              icon={() => (
                <TouchableOpacity activeOpacity={1} style={styles.iconButton}>
                  <Image
                    source={Icon}
                    style={[styles.iconStyle, { tintColor: Error ? 'red' : 'grey' }]}
                  />
                </TouchableOpacity>
              )}
            />
          )
        }
      />
      {Error && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default CustomPasswordInputBox;