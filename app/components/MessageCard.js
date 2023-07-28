import {View, Text, StyleSheet, Image} from 'react-native'
import colors from '../config/colors'

export const MessageCard = ({imageSource, title, subTitle}) => {
  return (
    <View style={styles.card}>
      <Image source={imageSource} style={styles.image} />
      <View style={styles.cardBody}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 12,
    marginEnd: 8,
    borderRadius: 8,
    backgroundColor: colors.white,
    shadowColor: colors.inkDarkest,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    overflow: 'hidden',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  cardBody: {
    padding: 8,
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: colors.inkDarkest,
  },
  subTitle: {
    fontSize: 12,
    color: colors.inkLighter,
  },
})
