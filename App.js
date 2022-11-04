import React, {useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles.js';

const App = () => {
  const [value, setValue] = useState('');

  const [placeList, setPlaceList] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const onRenderItemCloseButtonPress = index => {
    placeList.splice(index, 1);
    setPlaceList([...placeList]);
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.renderItem}>
        <Text>{item.name}</Text>
        <TouchableOpacity
          onPress={() => onRenderItemCloseButtonPress(index)}
          style={styles.closeButton}>
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const onAddItemButtonPress = () => {
    if (value) {
      setPlaceList([...placeList, {name: value}]);
      setErrorMessage('');
    } else {
      setErrorMessage('please type some text...');
    }
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.addBox}>
        <TextInput
          style={styles.textInput}
          onChangeText={val => setValue(val)}
          value={value}
          placeholder="Type Something..."
        />
        <TouchableOpacity
          onPress={onAddItemButtonPress}
          style={styles.addButton}>
          <Text>Add Item</Text>
        </TouchableOpacity>
      </View>
      {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}
      <FlatList data={placeList} renderItem={renderItem} />
    </View>
  );
};

export default App;
