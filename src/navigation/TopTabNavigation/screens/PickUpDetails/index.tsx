import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CustomInputBox from '../../../../components/CustomInput';
import { validateEmail, validateName, validatePhoneNumber } from '../../../../utils/validations';
import DOBPicker from '../../../../components/CustomDOB';
import { images } from '../../../../assets';
import { getStyles } from './style';
import { useThemeColors } from '../../../../utils/theme/theme';
import CustomButton from '../../../../components/CustomButton';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

interface PickUpDetailsProps {
  navigation: MaterialTopTabBarProps;
}

const PickUpDetails: React.FC<PickUpDetailsProps> = ({ navigation }) => {
  const [name, setName] = useState<string>('');
  const [nameError, setNameError] = useState<boolean>(false);
  const [id, setId] = useState<string>('');
  const [idError, setIdError] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [numberError, setNumberError] = useState<boolean>(false);
  const [number, setNumber] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');

  const theme = useThemeColors();
  const styles = getStyles(theme);

  const handleIdChange = (text: string) => {
    setId(text);
    if (text === '') {
      setIdError(false);
    } else if (validatePhoneNumber(text)) {
      setIdError(false);
    } else {
      setIdError(true);
    }
  }

  const handleNameChange = (text: string) => {
    setName(text);
    if (text === '') {
      setNameError(false);
    } else if (validateName(text)) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (text === '') {
      setEmailError(false);
    } else if (validateEmail(text)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleNumberChange = (text: string) => {
    setNumber(text);
    if (text === '') {
      setNumberError(false);
    } else if (validatePhoneNumber(text)) {
      setNumberError(false);
    } else {
      setNumberError(true);
    }
  }

  const handleStartChange = (selectedDate: any) => {
    setStartTime(selectedDate);
    // if (selectedDate) {
    //   setDobError(false);
    // } else {
    //   setDobError(true);
    // }
  };
  const handleEndChange = (selectedDate: any) => {
    setEndTime(selectedDate);
    // if (selectedDate) {
    //   setDobError(false);
    // } else {
    //   setDobError(true);
    // }
  };

  return (
    <ScrollView style={styles.container}>
      <CustomInputBox
        name={id}
        label={'Customer ID*'}
        maxLength={25}
        keyboardType="name-phone-pad"
        onChangeText={handleIdChange}
        setName={setId}
        Error={idError}
        setError={setIdError}
        errorText={
          'Id should be min 5 digit and max 13 digit.'
        }
      />
      <CustomInputBox
        name={name}
        label={'Name*'}
        maxLength={25}
        // keyboardType="name-phone-pad"
        onChangeText={handleNameChange}
        setName={setName}
        Error={nameError}
        setError={setNameError}
        errorText={
          'Please use only alphabetical letters and minimum length is 3 characters.'
        }
      />
      <CustomInputBox
        name={email}
        label={'Email ID'}
        maxLength={50}
        keyboardType={'email-address'}
        onChangeText={handleEmailChange}
        setName={setEmail}
        Error={emailError}
        setError={setEmailError}
        errorText={'Please enter valid email'}
      />
      <CustomInputBox
        name={number}
        label={'Contact Number'}
        maxLength={25}
        keyboardType="name-phone-pad"
        onChangeText={handleNumberChange}
        setName={setNumber}
        Error={numberError}
        setError={setNumberError}
        errorText={
          'Mobile no. should be min 5 digit and max 13 digit.'
        }
      />
      <DOBPicker
        label="Start Time*"
        calendarIcon={images.calendar}
        clearIcon={images.close}
        onDateChange={handleStartChange}
        onClear={() => setStartTime('')}
        dateFormat='hh:mm'
      />
      <DOBPicker
        label="End Time*"
        calendarIcon={images.calendar}
        clearIcon={images.close}
        onDateChange={handleEndChange}
        onClear={() => setStartTime('')}
        dateFormat='hh:mm'
      />
      <CustomButton
        title='Done'
        onPress={() => navigation.jumpTo('Random')}
        isButtonDisabled={!(name && id && startTime && endTime)}
      />
    </ScrollView>
  )
}

export default PickUpDetails;