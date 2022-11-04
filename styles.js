import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flex: 1,
    padding: 10,
  },
  addBox: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    display: 'flex',
    flex: 1,
  },
  addButton: {
    padding: 10,
    backgroundColor: '#387754',
    borderRadius: 10,
  },
  renderItem: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#FF8800',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
  },
  errorText: {
    display: 'flex',
    padding: 10,
    color: '#FF2322',
    textAlign: 'center',
  },
});
