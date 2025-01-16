import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../../../../components/CustomButton';
import CustomImage from '../../../../components/CustomArrow';
import { images } from '../../../../assets';
import CustomInputBox from '../../../../components/CustomInput';
import { getStyles } from './style';
import { useThemeColors } from '../../../../utils/theme/theme';

const GeneralDetails = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');

  const theme = useThemeColors();
  const styles = getStyles(theme);

  const OptionButton = ({ label, isSelected, onPress }) => (
    <TouchableOpacity style={styles.optionContainer} onPress={onPress}>
      <CustomImage
        imageStyle={isSelected ? styles.image : [styles.image,{tintColor: theme.tintColor}]}
        source={isSelected ? images.checkBox : images.checkEmpty}
        onPress={onPress}
      />
      <Text style={styles.optionText}>{label}</Text>
    </TouchableOpacity>
  );

  const handleFirstNameChange = (text) => {
    setFirstName(text);
    if (text === '') {
      setFirstNameError(false);
    } else if (validateName(text)) {
      setFirstNameError(false);
    } else {
      setFirstNameError(true);
    }
  };

  const handleLastNameChange = (text) => {
    setLastName(text);
    if (text === '') {
      setLastNameError(false);
    } else if (validateName(text)) {
      setLastNameError(false);
    } else {
      setLastNameError(true);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>shipment1 Type*</Text>
        <View>
          <OptionButton
            label="Pickup Leg"
            isSelected={selectedOption === 'pickup'}
            onPress={() => handleOptionSelect('pickup')}
          />
          <OptionButton
            label="Delivery Leg"
            isSelected={selectedOption === 'delivery'}
            onPress={() => handleOptionSelect('delivery')}
          />
        </View>
        {selectedOption === 'pickup' && (
          <View style={styles.inputsContainer}>
            <CustomInputBox
              name={firstName}
              label={'First Name'}
              maxLength={25}
              keyboardType={'name-phone-pad'}
              onChangeText={handleFirstNameChange}
              setName={setFirstName}
              // Icon={images.user}
              Error={firstNameError}
              setError={setFirstNameError}
              errorText={
                'Please use only alphabetical letters and minimum length is 3 characters.'
              }
            />
            <CustomInputBox
              name={lastName}
              label={'Last Name'}
              maxLength={25}
              keyboardType="name-phone-pad"
              onChangeText={handleLastNameChange}
              setName={setLastName}
              // Icon={Icons.user}
              Error={lastNameError}
              setError={setLastNameError}
              errorText={
                'Please use only alphabetical letters and minimum length is 3 characters.'
              }
            />
          </View>
        )}
      </View>
      <CustomButton
        title='Next'
        onPress={() => navigation.navigate('Shipment1Details')}
        isButtonDisabled={!selectedOption}
      />
    </View>
  )
}

export default GeneralDetails;