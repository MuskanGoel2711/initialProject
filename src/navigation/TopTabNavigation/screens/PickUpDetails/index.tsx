import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';
import React, { useRef, useState } from 'react';
import { Dimensions, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { images } from '../../../../assets';
import CustomButton from '../../../../components/CustomButton';
import DOBPicker from '../../../../components/CustomDOB';
import CustomInput from '../../../../components/CustomInput';
import { useThemeColors } from '../../../../utils/theme/theme';
import { validateEmail, validateName, validatePhoneNumber } from '../../../../utils/validations';
import { getStyles } from './style';

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
  };
  const handleEndChange = (selectedDate: any) => {
    setEndTime(selectedDate);
  };

  return (
    <KeyboardAwareScrollView
      bounces={false}
      extraHeight={height * (isSmallDevice ? 0.38 : 0.41)}
      showsVerticalScrollIndicator={false} style={styles.container}>
      <View>
        <CustomInput
          name={id}
          label={'Customer ID*'}
          maxLength={25}
          keyboardType="name-phone-pad"
          onChangeText={handleIdChange}
          Error={idError}
          errorText={
            'Id should be min 5 digit and max 13 digit.'
          }
          returnKeyType="next"
          onSubmitEditing={() => nameRef.current?.focus()}
        />
        <CustomInput
          forwardRef={nameRef}
          name={name}
          label={'Name*'}
          maxLength={25}
          // keyboardType="name-phone-pad"
          onChangeText={handleNameChange}
          Error={nameError}
          errorText={
            'Please use only alphabetical letters and minimum length is 3 characters.'
          }
          returnKeyType="next"
          onSubmitEditing={() => emailRef.current?.focus()}
        />
        <CustomInput
          forwardRef={emailRef}
          name={email}
          label={'Email ID'}
          maxLength={50}
          keyboardType={'email-address'}
          onChangeText={handleEmailChange}
          Error={emailError}
          errorText={'Please enter valid email'}
          returnKeyType="next"
          onSubmitEditing={() => numberRef.current?.focus()}
        />
        <CustomInput
          forwardRef={numberRef}
          name={number}
          label={'Contact Number'}
          maxLength={25}
          keyboardType="name-phone-pad"
          onChangeText={handleNumberChange}
          Error={numberError}
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