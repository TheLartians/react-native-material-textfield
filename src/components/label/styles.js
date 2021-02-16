import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    ...Platform.select({default: {
      left: '-100%',
      width: '200%',
      paddingLeft: '50%'
    }, web: {}}),
    position: 'absolute',
    top: 0,
  },

  text: {
    textAlign: 'left',
    includeFontPadding: false,
    textAlignVertical: 'top',
  },
});
