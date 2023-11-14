// TabNavigator.js
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Task} from '../pages';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Dashboard" component={Home} />
      <Tab.Screen name="Task" component={Task} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
