import React from 'react';
import {Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {styles} from './styles.js';

const CDropdown = ({label, ...props}) => {
  return (
    <View testID="dropdown-parent" style={styles.dropdownContainer}>
      <Text>{label}</Text>
      <SelectDropdown buttonStyle={styles.dropdown} {...props} />
    </View>
  );
};

export default CDropdown;
