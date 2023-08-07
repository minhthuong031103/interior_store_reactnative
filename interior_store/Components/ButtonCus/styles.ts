import {StyleSheet} from 'react-native';
import {Colors} from '../../constants';

export default StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.black,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 14,
  },
  titleText: {
    color: Colors.white,
    fontWeight: 'bold',
    fontSize: 17,
  },
});
