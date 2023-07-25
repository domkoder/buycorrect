import {View, StyleSheet} from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'

const PillFilter = ({tag, isActive}) => {
  return (
    <View style={[styles.pill, isActive ? styles.active : null]}>
      <AppText size="small">{tag}</AppText>
    </View>
  )
}

export default PillFilter

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 32,
    fontSize: 12,
    backgroundColor: colors.skyLighter,
  },

  active: {
    backgroundColor: colors.primaryLightest,
  },
})
