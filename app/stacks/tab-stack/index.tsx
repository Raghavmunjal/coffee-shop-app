import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home';
import CartScreen from '../../screens/cart';
import WishlistScreen from '../../screens/wishlist';
import OrderHistoryScreen from '../../screens/order-history';
import {
  primaryBlackRGBA,
  primaryLightGreyHex,
  primaryOrangeHex,
} from '../../constants/colors';
import { BlurView } from '@react-native-community/blur';
import CustomIcon from '../../components/icon';
import {
  antDesign,
  fontawesome5,
  materialCommunity,
} from '../../components/icon/variant';
import { StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const BottomStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyles,
        tabBarBackground: () => (
          <BlurView
            overlayColor=""
            blurAmount={15}
            style={styles.blurViewStyle}
          />
        ),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="home-circle"
              variant={materialCommunity}
              color={focused ? primaryOrangeHex : primaryLightGreyHex}
              size={24}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="shopping-bag"
              variant={fontawesome5}
              color={focused ? primaryOrangeHex : primaryLightGreyHex}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="heart"
              variant={antDesign}
              color={focused ? primaryOrangeHex : primaryLightGreyHex}
            />
          ),
        }}
      />
      <Tab.Screen
        name="OrderHistory"
        component={OrderHistoryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <CustomIcon
              name="history"
              variant={fontawesome5}
              color={focused ? primaryOrangeHex : primaryLightGreyHex}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomStack;

const styles = StyleSheet.create({
  tabBarStyles: {
    height: 80,
    position: 'absolute',
    backgroundColor: primaryBlackRGBA,
    elevation: 0,
    borderTopWidth: 0,
    borderTopColor: 'transparent',
  },
  blurViewStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
