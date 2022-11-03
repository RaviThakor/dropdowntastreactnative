import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import CDropdown from './src/components/cdropdown';

const defaultOptions = ['Apple', 'Burger', 'Juice', 'Frankie', 'Soup'];

const App = () => {
  const [mondayValue, setMondayValue] = useState('');
  const [tuesdayValue, setTuesdayValue] = useState('');
  const [wednesdayValue, setWednesdayValue] = useState('');

  const [options, setOptions] = useState(defaultOptions);

  useEffect(() => {
    if (mondayValue || tuesdayValue || wednesdayValue) {
      const filteredArray = defaultOptions.filter(
        item =>
          !(
            item === mondayValue ||
            item === tuesdayValue ||
            item === wednesdayValue
          ),
      );
      console.log(filteredArray);
      setOptions([...filteredArray]);
    }
  }, [mondayValue, tuesdayValue, wednesdayValue]);

  return (
    <View style={styles.mainContainer}>
      <CDropdown
        label="Monday"
        className="DropdownStyle"
        data={options}
        value={mondayValue}
        placeholder="Select an option"
        onSelect={selectedItem => {
          setMondayValue(selectedItem);
        }}
      />
      <CDropdown
        label="Tuesday"
        className="DropdownStyle"
        data={options}
        value={tuesdayValue}
        onSelect={selectedItem => {
          setTuesdayValue(selectedItem);
        }}
        placeholder="Select an option"
      />
      <CDropdown
        label="Wednesday"
        className="DropdownStyle"
        data={options}
        value={wednesdayValue}
        onSelect={selectedItem => {
          setWednesdayValue(selectedItem);
        }}
        placeholder="Select an option"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
