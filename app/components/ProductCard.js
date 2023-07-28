import {View, StyleSheet, Image} from 'react-native'
import AppText from './AppText'
import colors from '../config/colors'

export const ProductCard = ({imageSource, title, price}) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.cardBody}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText size="small" style={styles.price}>
          {price}
        </AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    borderColor: colors.skyLight,
    borderWidth: 1,
  },

  image: {
    width: '100%',
    height: 200,
    borderTopEndRadius: 15,
    borderTopStartRadius: 15,
  },
  cardBody: {
    padding: 20,
  },
  title: {
    color: colors.inkDarkest,
  },
  price: {
    color: colors.primaryBase,
  },
})
