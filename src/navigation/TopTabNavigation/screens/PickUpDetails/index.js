import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomInputBox from '../../../../components/CustomInput';
import { validateEmail, validateName } from '../../../../utils/validations';
import DOBPicker from '../../../../components/CustomDOB';
import { images } from '../../../../assets';
import { getStyles } from './style';
import { useThemeColors } from '../../../../utils/theme/theme';
import CustomButton from '../../../../components/CustomButton';

const PickUpDetails = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [number,setNumber] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const theme = useThemeColors();
  const styles = getStyles(theme);

  const handleIdChange = (text) => {
    setId(text);
  }

  const handleNameChange = (text) => {
    setName(text);
    if (text === '') {
      setNameError(false);
    } else if (validateName(text)) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (text === '') {
      setEmailError(false);
    } else if (validateEmail(text)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  const handleNumberChange = (text) => {
    setNumber(text);
  }

  const handleStartChange = (selectedDate) => {
    setStartTime(selectedDate);
    // if (selectedDate) {
    //   setDobError(false);
    // } else {
    //   setDobError(true);
    // }
  };
  const handleEndChange = (selectedDate) => {
    setEndTime(selectedDate);
    // if (selectedDate) {
    //   setDobError(false);
    // } else {
    //   setDobError(true);
    // }
  };

  return (
    <View style={styles.container}>
      <CustomInputBox
        name={id}
        label={'Customer ID*'}
        maxLength={25}
        keyboardType="name-phone-pad"
        onChangeText={handleIdChange}
        setName={setId}
      // Error={nameError}
      // setError={setNameError}
      // errorText={
      //   'Please use only alphabetical letters and minimum length is 3 characters.'
      // }
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
        // Error={nameError}
        // setError={setNameError}
        // errorText={
        //   'Please use only alphabetical letters and minimum length is 3 characters.'
        // }
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
        // onPress={() => navigation.navigate('PickUpDetails')}
        isButtonDisabled={!name}
      />
    </View>
  )
}

export default PickUpDetails;