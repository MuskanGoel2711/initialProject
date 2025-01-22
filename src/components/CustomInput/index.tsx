import React from 'react';
import {
  Image,
  Text,
  ImageSourcePropType,
  useColorScheme,
  KeyboardTypeOptions,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { getStyles } from './style';
import { useThemeColors } from '../../utils/theme/theme';

interface CustomInputProps {
  name?: string;
  setName?: (text: string) => void;
  Icon?: ImageSourcePropType;
  Error?: boolean;
  label: string;
  setError?: (hasError: boolean) => void;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  errorText?: string;
  maxLength?: number;
  keyboardType?: KeyboardTypeOptions;
  selectTextOnFocus?: boolean;
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
  const theme = useThemeColors();
  const styles = getStyles(theme);



  // Determine colors based on theme
  const isDarkMode = theme.mode === 'dark'; // Assuming your theme has a mode property
  const placeholderColor = isDarkMode ? 'white' : 'grey';
  const backgroundColor = isDarkMode ? 'black' : 'transparent';

  return (
    <>
      <TextInput
        style={[styles.phoneInput, { borderColor: Error ? 'red' : 'grey' }]}
        label={label}
        keyboardType={keyboardType}
        value={name}
        editable={editable}
        selectTextOnFocus={selectTextOnFocus}
        maxLength={maxLength}
        textColor={'black'}
        onChangeText={onChangeText}
        mode="outlined"
        underlineStyle={{
          display: 'none',
        }}
        theme={{
          colors: {
            primary: Error ? 'red' : 'gray',
            // placeholder: 'grey',
            // background: 'transparent',
            // disabled: 'transparent',
            placeholder: placeholderColor, // Set placeholder color based on theme
            background: backgroundColor, // Set background color based on theme
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