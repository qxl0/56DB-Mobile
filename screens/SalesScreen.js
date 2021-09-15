import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function SalesScreen({ navigation }) {
  const [mode, setMode] = useState('date');
  const [startDate, setStartDate] = useState(new Date("12/1/2018"));
  const [endDate, setEndDate] = useState(new Date("12/31/2018"));

  const onStartDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || startDate;
    // setShow(Platform.OS === 'ios');
    setStartDate(currentDate);
  };
  const onEndDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || endDate;
    // setShow(Platform.OS === 'ios');
    setEndDate(currentDate);
  };
  return (
    <SafeAreaView style={styles.container}>
       <DateTimePicker style={styles.startdate}
          testID="startdateTimePicker"
          value={startDate}
          mode={mode}
          display="default"
          onChange={onStartDateChange}
        />
      <DateTimePicker style={styles.enddate}
          testID="enddateTimePicker"
          value={endDate}
          mode={mode}
          display="default"
          onChange={onEndDateChange}
        />
        <Button title="Get Sales Total"
            onPress={() => {
              navigation.navigate('SalesDetails', { startDate, endDate });
            }}
            style={styles.button}
      />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  button: {
    margin: 12,
  },
  startdate: {
    margin: 12,
    flex: 0,    
    width: '30%',
  },
  enddate: {
    margin: 12,
    flex: 0,
    width: '30%',
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
})