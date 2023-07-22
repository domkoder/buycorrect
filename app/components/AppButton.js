import {StyleSheet, TouchableOpacity} from 'react-native'

import colors from '../config/colors'
import AppText from './AppText'

function AppButton({title, onPress, variant = 'primary'}) {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors[variant]}]}
      onPress={onPress}
    >
      <AppText>{title}</AppText>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    width: '100%',
    marginVertical: 10,
  },
})

export default AppButton
