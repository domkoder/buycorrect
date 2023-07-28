import {StyleSheet, TouchableOpacity} from 'react-native'

import colors from '../config/colors'
import AppText from './AppText'

function AppButton({title, onPress, style, variant = 'primary'}) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[variant], style]}
      onPress={onPress}
    >
      <AppText style={styles[`text_${variant}`]}>{title}</AppText>
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

  primary: {
    backgroundColor: colors.primaryBase,
  },

  text_primary: {
    color: colors.white,
  },

  secondary: {
    backgroundColor: colors.primaryLightest,
  },

  text_secondary: {
    color: colors.primaryBase,
  },
})

export default AppButton
