import { View, Text, StyleSheet, ScrollView, Dimensions, TextInput } from 'react-native'
import React, { useRef, useState } from 'react'
import CustomInputBox from '../../../../components/CustomInput';
import { validateEmail, validateName, validatePhoneNumber } from '../../../../utils/validations';
import DOBPicker from '../../../../components/CustomDOB';
import { images } from '../../../../assets';
import { getStyles } from './style';
import { useThemeColors } from '../../../../utils/theme/theme';
import CustomButton from '../../../../components/CustomButton';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

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
  const { height } = Dimensions.get('screen');
  const isSmallDevice = height <= 667;

  const nameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const numberRef = useRef<TextInput>(null);


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
    <KeyboardAwareScrollView
      bounces={false}
      extraHeight={height * (isSmallDevice ? 0.38 : 0.41)}
      showsVerticalScrollIndicator={false} style={styles.container}>
      <View>
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
          returnKeyType="next"
          onSubmitEditing={() => nameRef.current?.focus()}
        />
        <CustomInputBox
          forwardRef={nameRef}
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
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current?.focus()}
        />
        <CustomInputBox
          forwardRef={emailRef}
          name={email}
          label={'Email ID'}
          maxLength={50}
          keyboardType={'email-address'}
          onChangeText={handleEmailChange}
          setName={setEmail}
          Error={emailError}
          setError={setEmailError}
          errorText={'Please enter valid email'}
          returnKeyType="next"
          onSubmitEditing={() => numberRef.current?.focus()}
        />
        <CustomInputBox
          forwardRef={numberRef}
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
          returnKeyType="done"
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
      </View>
    </KeyboardAwareScrollView>
  )
}

export default PickUpDetails;