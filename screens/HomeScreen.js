import {
  Text,
  SafeAreaView,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import GlobalStyles from "../components/GlobalStyles";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="pt-5 bg-white">
      <View className="flex-row pb-3 items-center mx-4 space-x-2 px-1">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00CCBB" />
          </Text>
        </View>
        <UserIcon size={35} color="#00CCBB" />
      </View>

      {/*search*/}
      <View className="flex-row items-center space-x-2 pb-2 mx-4 px-1">
        <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" size={20} />
          <TextInput placeholder="Restaurants" keyboardType="default" />
        </View>
        <AdjustmentsVerticalIcon color="#00CCBB" />
      </View>

      {/*Body*/}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {/*Catergories*/}
        <Categories />
        {/*Featured Rows*/}
        <FeaturedRow
          id="1"
          title="Featured"
          desc="Paid placements from our partners"
          // ftCategory="featured"
        />

        {/*Tasty Discounts*/}
        <FeaturedRow
          id="2"
          title="Tasty Discounts"
          desc="Everyonr's been enjoying juicy discounts"
          // ftCategory="featured"
        />

        {/*Offers*/}
        <FeaturedRow
          id="3"
          title="Offers near you!"
          desc="Why not support you local restaurant tonight!"
          // ftCategory="featured"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
