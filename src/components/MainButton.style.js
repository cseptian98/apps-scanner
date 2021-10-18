import {StyleSheet} from 'react-native';

const MAIN_WIDTH = 250;
const MAIN_HEIGHT = 50;
const SECOND_WIDTH = 100;
const SECOND_HEIGHT = 100;

export default StyleSheet.create({
  mainTitle: {
    color: '#F5F5F5',
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  mainButton: {
    borderRadius: 10,
    backgroundColor: '#0277BD',
    height: MAIN_HEIGHT,
    marginTop: 20,
    width: MAIN_WIDTH,
  },
  secondTitle: {
    color: '#0277BD',
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  secondButton: {
    borderColor: '#0277BD',
    borderRadius: 12,
    borderWidth: 2,
    backgroundColor: '#F5F5F5',
    height: SECOND_HEIGHT,
    marginTop: 16,
    width: SECOND_WIDTH,
  },
});
