
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Startup from './src/screens/StartUp';
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import ProfilePage from './src/screens/ProfilePage';
import HistoryPage from './src/screens/HistoryPage';
import TodaysHistoryPage from './src/screens/TodaysHistoryPage';
import ContestPage from './src/screens/ContestPage';
import EarningsPage from './src/screens/EarningsPage';
import TodaysCasesPage from './src/screens/TodaysCasesPage';
import PendingCasesPage from './src/screens/PendingCasesPage';
import AttendedCasesPage from './src/screens/AttendedCasesPage';
import TLAssignedCasesPage from './src/screensScrollDash/TLAssignedCasesPage';
import FollowUpCasesPage from './src/screensScrollDash/FollowUpCasesPage';
import DeclinedCasesPage from './src/screensScrollDash/DeclinedCasesPage';
import PTPCasesPage from './src/screensScrollDash/PTPCasesPage';
import FullyPaidCasesPage from './src/screensScrollDash/FullyPaidCasesPage';
import PartialPaidCasesPage from './src/screensScrollDash/PartialPaidCasesPage';
import NotContactableCasesPage from './src/screensScrollDash/NotContactableCasesPage';
import RevisitsCasesPage from './src/screensScrollDash/RevisitsCasesPage';
import NotVisitedCasesPage from './src/screensScrollDash/NotVisitedCasesPage';
import OthersCasesPage from './src/screensScrollDash/OthersCasesPage';
import CasesDetailsPage from './src/screens/CasesDetailsPage';
import UpdateDispositionPage from './src/screens/UpdateDispositionPage';
import CheckOutPage from './src/screens/CheckOutPage';






const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={Startup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="HistoryPage" component={HistoryPage} />
        <Stack.Screen name="TodaysHistoryPage" component={TodaysHistoryPage} />
        <Stack.Screen name="ContestPage" component={ContestPage} />
        <Stack.Screen name="EarningsPage" component={EarningsPage} />
        <Stack.Screen name="TodaysCasesPage" component={TodaysCasesPage} />
        <Stack.Screen name="PendingCasesPage" component={PendingCasesPage} />
        <Stack.Screen name="AttendedCasesPage" component={AttendedCasesPage} />
        <Stack.Screen name="TLAssignedCasesPage" component={TLAssignedCasesPage} />
        <Stack.Screen name="FollowUpCasesPage" component={FollowUpCasesPage} />
        <Stack.Screen name="DeclinedCasesPage" component={DeclinedCasesPage} />
        <Stack.Screen name="PTPCasesPage" component={PTPCasesPage} />
        <Stack.Screen name="FullyPaidCasesPage" component={FullyPaidCasesPage} />
        <Stack.Screen name="PartialPaidCasesPage" component={PartialPaidCasesPage} />
        <Stack.Screen name="NotContactableCasesPage" component={NotContactableCasesPage} />
        <Stack.Screen name="RevisitsCasesPage" component={RevisitsCasesPage} />
        <Stack.Screen name="NotVisitedCasesPage" component={NotVisitedCasesPage} />
        <Stack.Screen name="OthersCasesPage" component={OthersCasesPage} />
        <Stack.Screen name="CasesDetailsPage" component={CasesDetailsPage} />
        <Stack.Screen name="UpdateDispositionPage" component={UpdateDispositionPage} />
        <Stack.Screen name="CheckOutPage" component={CheckOutPage} />






      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

