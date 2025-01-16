import { View, Text, StyleSheet, Modal, FlatList, TouchableOpacity } from 'react-native';
import React, { useState } from 'react'
import CustomInputBox from '../../../../components/CustomInput';
import { images } from '../../../../assets';
import DOBPicker from '../../../../components/CustomDOB/index';
import CustomDown from '../../../../components/CustomDown';
import CustomButton from '../../../../components/CustomButton';
import { getStyles } from './style';
import { useThemeColors } from '../../../../utils/theme/theme';

const Shipment1Details = ({ navigation }) => {
  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [value, setValue] = useState('');
  const [cost, setCost] = useState('');
  const [serviceTime, setServiceTime] = useState('');
  const [dob, setDob] = useState(undefined);
  const [dobError, setDobError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [options] = useState(['High', 'Medium', 'Low']);

  const theme = useThemeColors();
  const styles = getStyles(theme);

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

  const handleDateChange = (selectedDate) => {
    setDob(selectedDate);
    if (selectedDate) {
      setDobError(false);
    } else {
      setDobError(true);
    }
  };

  const handleOptionSelect = (option) => {
    setInputValue(option);
    setIsModalVisible(false);
    switch (option) {
      case 'High':
        setValue('100');
        setCost('20');
        setServiceTime('30');
        break;
      case 'Medium':
        setValue('50');
        setCost('10');
        setServiceTime('60');
        break;
      case 'Low':
        setValue('20');
        setCost('5');
        setServiceTime('120');
        break;
      default:
        setValue('');
        setCost('');
        setServiceTime('');
        break;
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => handleOptionSelect(item)}
    >
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <CustomInputBox
        name={lastName}
        label={'Shipment1 Number*'}
        maxLength={25}
        keyboardType="name-phone-pad"
        onChangeText={handleLastNameChange}
        setName={setLastName}
      // Error={lastNameError}
      // setError={setLastNameError}
      // errorText={
      //   'Please use only alphabetical letters and minimum length is 3 characters.'
      // }
      />
      <DOBPicker
        label="shipment1 Date*"
        calendarIcon={images.calendar}
        onDateChange={handleDateChange}
        clearIcon={images.close}
        onClear={() => setStartTime('')}
      />
      <CustomDown
        value={inputValue}
        onChange={setInputValue}
        placeholder="Priority"
        source={images.downArrow}
        onPress={() => setIsModalVisible(true)}
      />
      <CustomInputBox
        name={value}
        label={'Value ($)'}
        editable={false}
        selectTextOnFocus={false}
        onChangeText={setValue}
      />
      <CustomInputBox
        name={cost}
        label={'Shipping Cost ($)'}
        editable={false}
        selectTextOnFocus={false}
        onChangeText={setCost}
      />
      <CustomInputBox
        name={serviceTime}
        label={'Service Time (in minutes)'}
        editable={false}
        selectTextOnFocus={false}
        onChangeText={setServiceTime}
      />
      <CustomButton
        title='Next'
        onPress={() => navigation.navigate('PickUpDetails')}
        isButtonDisabled={!dob}
      />
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
      >
        <TouchableOpacity style={styles.modalContainer} onPress={() => setIsModalVisible(false)}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Priority</Text>
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsModalVisible(false)}
            >
              <Text style={styles.closeButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  )
}

export default Shipment1Details;