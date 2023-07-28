import {View, TextInput, StyleSheet} from 'react-native'
import {Feather} from '@expo/vector-icons'

import colors from '../config/colors'

function AppTextInput({icon, ...otherProps}) {
  return (
    <View style={styles.container}>
      {icon && (
        <Feather
          name={icon}
          size={20}
          color={colors.inkBase}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={colors.inkLighter}
        style={styles.input}
        {...otherProps}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: colors.skyLight,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    color: colors.inkBase,
    fontSize: 16,
  },
})

export default AppTextInput
