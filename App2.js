import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeSvg from './src/assets/svgs/Home.svg';
import ContestSvg from './src/assets/svgs/Contest.svg';
import EarningsSvg from './src/assets/svgs/Earnings.svg';
import HistorySvg from './src/assets/svgs/History.svg';

import Startup from './src/screens/StartUp';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import ProfilePage from './src/screens/ProfilePage';
import HistoryPage from './src/screens/HistoryPage';
import TodaysHistoryPage from './src/screens/TodaysHistoryPage';
import ContestPage from './src/screens/ContestPage';
import EarningsPage from './src/screens/EarningsPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for main screens
const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        if (route.name === 'Dashboard') {
          return <HomeSvg width={size} height={size} fill={color} />;
        } else if (route.name === 'ContestPage') {
          return <ContestSvg width={size} height={size} fill={color} />;
        } else if (route.name === 'EarningsPage') {
          return <EarningsSvg width={size} height={size} fill={color} />;
        } else if (route.name === 'HistoryPage') {
          return <HistorySvg width={size} height={size} fill={color} />;
        }
      },
      tabBarShowLabel: false, // Hides the labels below icons
      tabBarStyle: {
        height: 60,
        backgroundColor: '#ffffff',
        borderTopWidth: 1,
        borderTopColor: 'rgba(0, 0, 0, 0.24)',
        elevation: 4,
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <Tab.Screen name="Dashboard" component={Dashboard} />
    <Tab.Screen name="ContestPage" component={ContestPage} />
    <Tab.Screen name="EarningsPage" component={EarningsPage} />
    <Tab.Screen name="HistoryPage" component={HistoryPage} />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={Startup} />
        <Stack.Screen name="Login" component={Login} />
        {/* Main screens now wrapped in a Tab Navigator */}
        <Stack.Screen name="Main" component={MainTabNavigator} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="TodaysHistoryPage" component={TodaysHistoryPage} />
        <Stack.Screen name="ContestPage" component={ContestPage} />
        <Stack.Screen name="EarningsPage" component={EarningsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
