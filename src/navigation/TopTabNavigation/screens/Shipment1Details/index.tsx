import { View, Text, StyleSheet, Modal, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react'
import CustomInputBox from '../../../../components/CustomInput';
import { images } from '../../../../assets';
import DOBPicker from '../../../../components/CustomDOB/index';
import CustomDown from '../../../../components/CustomDown';
import CustomButton from '../../../../components/CustomButton';
import { getStyles } from './style';
import { useThemeColors } from '../../../../utils/theme/theme';
import { validateName, validatePhoneNumber } from '../../../../utils/validations';
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs';

interface Shipment1DetailsProps {
  navigation: MaterialTopTabBarProps;
}

const Shipment1Details: React.FC<Shipment1DetailsProps> = ({ navigation }) => {
  const [id, setId] = useState('');
  const [idError, setIdError] = useState<boolean>(false);
  const [value, setValue] = useState('');
  const [cost, setCost] = useState('');
  const [serviceTime, setServiceTime] = useState('');
  const [dob, setDob] = useState('');
  const [dobError, setDobError] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [options] = useState<string[]>(['High', 'Medium', 'Low']);
  const [startTime, setStartTime] = useState('');

  const theme = useThemeColors();
  const styles = getStyles(theme);

  const handleId = (text: string) => {
    setId(text);
    if (text === '') {
      setIdError(false);
    } else if (validatePhoneNumber(text)) {
      setIdError(false);
    } else {
      setIdError(true);
    }
  };

  const handleDateChange = (selectedDate: any) => {
    setDob(selectedDate);
    if (selectedDate) {
      setDobError(false);
    } else {
      setDobError(true);
    }
  };

  const handleOptionSelect = (option: string) => {
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

  const renderItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => handleOptionSelect(item)}
    >
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  )

  return (
    <ScrollView style={styles.container}>
      <CustomInputBox
        name={id}
        label={'Shipment1 Number*'}
        maxLength={25}
        keyboardType="name-phone-pad"
        onChangeText={handleId}
        setName={setId}
        Error={idError}
        setError={setIdError}
        errorText={
          'Number should be min 5 digit and max 13 digit.'
        }
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
        onPress={() => navigation.jumpTo('PickUpDetails')}
        isButtonDisabled={!(dob && id)}
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
    </ScrollView>
  )
}

export default Shipment1Details;