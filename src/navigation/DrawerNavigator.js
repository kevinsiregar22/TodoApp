// navigation/DrawerNavigator.js
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Profile, Setting} from '../pages';
import TabNavigator from './TabNavigator'; // Sesuaikan dengan path yang benar

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeTab" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Setting} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
