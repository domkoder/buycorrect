import {useState} from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import {Feather} from '@expo/vector-icons'
import * as Device from 'expo-device'

import {MessageCard} from '../components/MessageCard'
import colors from '../config/colors'
import Screen from '../components/Screen'

export default function MessageListScreen() {
  const [searchText, setSearchText] = useState('')

  const messages = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Jason Allen',
      image: require('../assets/engineer.png'),
      subTitle: 'Senior Engineer, Snap',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Jeremy Caldwell',
      image: require('../assets/engineer.png'),
      subTitle: 'Co-Founder at Ueki',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'John Okoye',
      image: require('../assets/engineer.png'),
      subTitle: 'VP Engineering, Twitter',
    },
  ]

  const handleCancel = () => {
    setSearchText('')
  }

  return (
    //   <SafeAreaView>
    <Screen>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Feather
            style={{position: 'absolute', left: 30, zIndex: 1}}
            name="search"
            size={16}
          />
          <TextInput
            value={searchText}
            onChangeText={setSearchText}
            style={styles.search}
            placeholder=""
          />

          {searchText ? (
            <TouchableOpacity
              onPress={handleCancel}
              style={{position: 'absolute', right: 30, zIndex: 1}}
            >
              <Feather name="x" size={16} />
            </TouchableOpacity>
          ) : (
            <></>
          )}
        </View>

        <View style={{paddingHorizontal: 23, alignItems: 'center'}}>
          <FlatList
            data={messages}
            horizontal={false}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => console.log('Pressed')}>
                <MessageCard
                  title={item.title}
                  subTitle={item.subTitle}
                  imageSource={item.image}
                />
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.flatListContainer}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            scroll
          />
        </View>
      </View>
    </Screen>

    //   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  flatListContainer: {
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingBottom: 230,
    width: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 9,
    paddingHorizontal: 23,
  },
  search: {
    borderRadius: 8,
    backgroundColor: '#E7E7FF',
    fontSize: 16,
    height: 36,
    width: '100%',
    paddingHorizontal: 30,
  },
})
