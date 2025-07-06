import { categories, exercises } from '@/constants/Data';
import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#263D94]">
      <StatusBar style="light" hidden={true} />

      {/* Header */}
      <View className="flex-row justify-between items-center p-10 mt-3">
        <Image source={require('@/assets/images/notification.png')} className="w-6 h-6" />
        <Image source={require('@/assets/images/user-circle.png')} className="w-6 h-6" />
      </View>

      {/* Article */}
      <Text className="text-center text-white text-5xl font-bold mb-5">Articles</Text>

      {/* Main Content */}
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Featured Article */}
        <Animated.View entering={FadeInDown.delay(100).duration(700)} className="mx-6 mb-4 bg-[#4E8FF6] rounded-xl p-4 overflow-hidden">
          <View className="flex-row justify-between p-10">
            <View className="flex-1">
              <Text className="text-white text-xl font-semibold">Article Title</Text>
              <Text className="text-white opacity-80 mt-1">Description goes here</Text>
            </View>
            <View className="w-16 h-16 items-center justify-center">
              <Image source={require('@/assets/images/big-image.png')} className="w-26 h-26" />
            </View>
          </View>
        </Animated.View>

        {/* Search Bar */}
        <Animated.View entering={FadeInDown.delay(200).duration(700)} className="mx-7 mb-4">
          <View className="flex-row items-center justify-between space-x-2 mt-5">
            <View className="flex-row items-center flex-1 border border-[#4E8FF6] rounded-[0.75rem] px-3">
              <Image source={require('@/assets/images/search-icon.png')} className="w-6 h-6" />
              <TextInput
                placeholder="Search"
                placeholderTextColor="white"
                className="text-white ml-1 flex-1"
              />
            </View>
            <TouchableOpacity className="bg-[#4E8FF6] p-3 rounded-md ml-3">
              <Image source={require('@/assets/images/filter-horizontal.png')} className="w-5 h-5" />
            </TouchableOpacity>
          </View>
        </Animated.View>

        {/* Categories */}
        <Animated.ScrollView
          entering={FadeInDown.delay(300).duration(700)}
          horizontal
          showsHorizontalScrollIndicator={false}
          className="px-4 mb-4 mt-5"
        >
          {categories.slice(0, 5).map((category, index) => (
            <TouchableOpacity
              key={index}
              className="mr-3 px-2 py-2 ml-2 rounded-md bg-[#4E8FF6]"
            >
              <View className="flex-row items-center">
                {category === 'Category' && (
                  <Image
                    source={
                      index === 2
                        ? require('@/assets/images/yoga-ball.png')
                        : require('@/assets/images/yoga-02.png')
                    }
                    className="w-5 h-5"
                  />
                )}
                <Text className="text-white mr-2 ml-3">{category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </Animated.ScrollView>

        {/* Exercises Grid */}
        <View className="px-10 mt-5 flex-row flex-wrap justify-between">
          {exercises.slice(0, 6).map((exercise, index) => (
            <Animated.View
              key={exercise.id}
              entering={FadeInUp.delay(400 + index * 100).duration(700)}
              className="w-[45%] mb-4"
            >
              {/* Image Card */}
              <View className="bg-[#D9E6F2] rounded-xl overflow-hidden p-3">
                <View className="h-32 items-center justify-center">
                  <View className="w-16 h-16 rounded-full items-center justify-center">
                    <Image source={require('@/assets/images/black-image.png')} className="w-26 h-26" />
                  </View>
                </View>
              </View>

              {/* Title and Description (outside the card) */}
              <View className="mt-2">
                <Text className="text-white font-semibold">{exercise.title}</Text>
                <Text className="text-white/70 text-xs">{exercise.description}</Text>
              </View>
            </Animated.View>
          ))}
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View className="bg-[#4E8FF6] flex-row justify-around items-center py-7">
        <TouchableOpacity className="items-center">
          <Image source={require('@/assets/images/calendar.png')} className="w-6 h-6" />
          <Text className="text-white text-xs mt-1">Plan</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <Image source={require('@/assets/images/dumbbell.png')} className="w-6 h-6" />
          <Text className="text-white text-xs mt-1">Exercises</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <Image source={require('@/assets/images/bookmark.png')} className="w-6 h-6" />
          <Text className="text-white text-xs">Learn</Text>
        </TouchableOpacity>

        <TouchableOpacity className="items-center">
          <Image source={require('@/assets/images/alfa.png')} className="w-6 h-6" />
          <Text className="text-white text-xs mt-1">Learn</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
