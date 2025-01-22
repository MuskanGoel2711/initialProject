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
  returnKeyType?: 'done' | 'next'; 
  onSubmitEditing?: () => void;
  ref?: any
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
  editable,
  returnKeyType,
  onSubmitEditing,
  ref
}: CustomInputProps) => {
  const theme = useThemeColors();
  const styles = getStyles(theme);

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
        ref={ref}
        returnKeyType={returnKeyType} 
        onSubmitEditing={onSubmitEditing}
        theme={{
          colors: {
            primary: Error ? 'red' : 'gray',
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