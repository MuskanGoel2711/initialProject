import React,{Ref} from "react";
import { Image, ImageSourcePropType, TouchableOpacity, TextInput as RNTextInput, } from "react-native";
import { TextInput } from "react-native-paper";
import { useThemeColors } from "../../utils/theme/theme";
import { getStyles } from "./style";

interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  source?: ImageSourcePropType;
  onPress?: () => void;
  returnKeyType?: 'done' | 'next';
  onSubmitEditing?: () => void;
  forwardRef?: Ref<RNTextInput>;
}

const CustomDown: React.FC<CustomInputProps> = ({ value, onChange, placeholder, source, onPress, returnKeyType,
  onSubmitEditing, forwardRef }) => {
  const theme = useThemeColors();
  const styles = getStyles(theme);
  return (
    <TouchableOpacity onPress={onPress}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChange}
        editable={false}
        selectTextOnFocus={false}
        textColor={theme.textColor}
        label={placeholder}
        mode="outlined"
        outlineColor="#ccc"
        activeOutlineColor="#6200ee"
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        ref={forwardRef}
        theme={{
          roundness: 4,
        }}
        placeholderTextColor={theme.textColor}
        right={
          <TextInput.Icon
            icon={() => (
              <TouchableOpacity onPress={onPress}>
                <Image
                  source={source}
                  style={[styles.icon, { tintColor: 'grey' }]}
                />
              </TouchableOpacity>
            )}
          />
        }
      />
    </TouchableOpacity>
  );
};

export default CustomDown;
