import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  Text,
  ImageSourcePropType,
  useColorScheme,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { Styles } from './style';

interface CustomInputProps {
  name?: any;
  setName?: (text: string) => void;
  Icon?: ImageSourcePropType;
  Error?: boolean;
  label: string;
  setError?: (hasError: boolean) => void;
  onChangeText?: any;
  onFocus?: any;
  onBlur?: any;
  errorText?: any;
  maxLength?: any;
  keyboardType?: any;
  selectTextOnFocus?: any;
  editable?: any;
}

const CustomInputBox = ({
  name,
  label,
  Icon,
  Error,
  onChangeText,
  errorText,
  maxLength,
  keyboardType,
  selectTextOnFocus,
  editable
}: CustomInputProps) => {
  const theme = useColorScheme();
  const styles = Styles(theme);
  return (
    <>
      <TextInput
        style={[styles.phoneInput, Error ? styles.errorContainer : null]}
        label={label}
        keyboardType={keyboardType}
        value={name}
        editable={editable}
        selectTextOnFocus={selectTextOnFocus}
        maxLength={maxLength}
        textColor={theme === 'dark' ? '#FFF' : '#000'}
        onChangeText={onChangeText}
        mode="outlined"
        underlineStyle={{
          display: 'none',
        }}
        theme={{
          colors: {
            primary: 'gray',
            placeholder: 'grey',
            background: 'transparent',
            disabled: 'transparent',
          },
        }}
        left={
          Icon && (
            <TextInput.Icon
              icon={() => (
                <Image
                  source={Icon}
                  style={[styles.iconStyle, { tintColor: Error ? 'red' : 'grey' }]}
                />
              )}
            />
          )
        }
      />
      {Error && <Text style={styles.errorText}>{errorText}</Text>}
    </>
  );
};

export default CustomInputBox;