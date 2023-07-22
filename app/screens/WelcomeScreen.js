import {useState, useRef} from 'react'
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import {
  useFonts,
  Inter_500Medium,
  Inter_400Regular,
} from '@expo-google-fonts/inter'
import {Feather} from '@expo/vector-icons'

import colors from '../config/colors'
import AppText from '../components/AppText'
import Heading from '../components/Heading'

// import svg images
import Onboarding1 from '../assets/onboarding1.svg'
import Onboarding2 from '../assets/onboarding2.svg'
import Onboarding3 from '../assets/onboarding3.svg'
import PurpleBlob from '../assets/purpleblob.svg'
import WhiteBlob from '../assets/whiteblob.svg'

const {width} = Dimensions.get('window')

const WelcomeScreen = ({navigation}) => {
  console.log(Onboarding1, Onboarding2, Onboarding3)
  const [currentPage, setCurrentPage] = useState(0)
  const scrollViewRef = useRef(null)

  let [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_400Regular,
  })

  if (!fontsLoaded) {
    return null
  }

  const onboardingData = [
    {
      title: 'Welcome to buycorrect!',
      description:
        'The ultimate marketplace designed exclusively for students like you.',
      image: Onboarding1,
    },
    {
      title: 'Browse and Discover',
      description:
        'Explore our extensive marketplace categories and discover a treasure trove of student essentials.',
      image: Onboarding2,
    },
    {
      title: 'Get Started',
      description:
        'Ready to embark on your journey? Join thousands of students today and unlock a world of opportunities.',
      image: Onboarding3,
    },
  ]

  const handleNext = () => {
    if (currentPage < onboardingData.length - 1) {
      scrollViewRef.current.scrollTo({
        x: width * (currentPage + 1),
        animated: true,
      })
      setCurrentPage(currentPage + 1)
    } else {
      navigation.navigate('Login')
    }
  }

  const handleSkip = () => {
    navigation.navigate('Login')
  }

  const handleScroll = event => {
    const {contentOffset} = event.nativeEvent
    const pageIndex = Math.round(contentOffset.x / width)
    setCurrentPage(pageIndex)
  }

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {onboardingData.map(
          ({title, description, image: OnboardingImage}, index) => (
            <View
              key={index}
              style={[
                styles.slide,
                index % 2 !== 0 ? styles.secondarySlide : styles.primarySlide,
              ]}
            >
              {/* onboarding content */}
              <View style={styles.content}>
                <OnboardingImage
                  style={styles.image}
                  width={300}
                  height={300}
                />
                <Heading
                  size="small"
                  style={[
                    styles.title,
                    {color: index % 2 !== 0 ? colors.inkDarkest : colors.white},
                  ]}
                >
                  {title}
                </Heading>
                <AppText
                  weight="400"
                  style={[
                    styles.description,
                    {color: index % 2 !== 0 ? colors.inkDarkest : colors.white},
                  ]}
                >
                  {description}
                </AppText>
              </View>

              {/* skip button */}
              <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
                <AppText
                  style={{
                    color: index % 2 !== 0 ? colors.inkDarkest : colors.white,
                  }}
                >
                  Skip
                </AppText>
              </TouchableOpacity>

              {/* scroll indicator */}
              <View style={styles.indicatorContainer}>
                {onboardingData.map((_, index) => (
                  <View
                    key={index}
                    style={[
                      styles.indicator,
                      index === currentPage && index % 2 !== 0
                        ? styles.activeIndicatorPrimary
                        : index === currentPage && index % 2 === 0
                        ? styles.activeIndicatorSecondary
                        : null,
                    ]}
                  />
                ))}
              </View>

              <View style={styles.blobContainer}>
                {index % 2 !== 0 ? (
                  <PurpleBlob style={styles.blob} />
                ) : (
                  <WhiteBlob style={styles.blob} />
                )}
              </View>

              <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                <Feather
                  name="arrow-right"
                  size={30}
                  style={{
                    color: index % 2 !== 0 ? colors.white : colors.inkDarkest,
                  }}
                />
              </TouchableOpacity>
            </View>
          ),
        )}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  slide: {
    width,
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  secondarySlide: {
    backgroundColor: colors.white,
  },

  primarySlide: {
    backgroundColor: colors.primaryDarkest,
  },

  content: {
    alignItems: 'center',
    marginTop: 150,
  },

  image: {
    marginBottom: 50,
  },

  title: {
    marginBottom: 20,
  },

  description: {
    textAlign: 'center',
    color: 'white',
    opacity: 0.8,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },

  skipButton: {
    padding: 10,
    position: 'absolute',
    top: 60,
    right: 20,
  },

  nextButton: {
    position: 'absolute',
    bottom: 65,
    right: 30,
    padding: 10,
  },

  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 90,
    left: 30,
  },

  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.skyDark,
    marginHorizontal: 4,
  },

  activeIndicatorPrimary: {
    backgroundColor: colors.primaryDarkest,
  },

  activeIndicatorSecondary: {
    backgroundColor: colors.white,
  },

  blobContainer: {
    width: 134,
    height: 206,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },

  blob: {
    right: -10,
  },
})

export default WelcomeScreen
