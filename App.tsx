import React, { useEffect } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionic from 'react-native-vector-icons/Ionicons';
import Logo from './components/screens/Logo';
import LogIn from './components/screens/LogIn';
import Home from './components/screens/Home';
import Search from './components/screens/Search';
import Reels from './components/screens/Reels';
import Posts from './components/screens/Posts';
import Profile from './components/screens/Profile';
import Status from './components/screenComponents/Status';
import FriendProfile from './components/screenComponents/FriendProfile';
import EditProfile from './components/screenComponents/EditProfile';
import Activity from './components/screenComponents/Activity';


const App = () => {
  
 
  const Stack = createNativeStackNavigator();

  const Tab = createBottomTabNavigator();

  const bottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },

          tabBarIcon: ({focused, size, colour}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home-sharp' : 'home-outline';
              size = focused ? size + 8 : size + 2;
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
              size = focused ? size + 8 : size + 2;
            }else if (route.name === 'Posts') {
              iconName = focused ? "add-circle" : "add-circle-outline";
              size = focused ? size + 8 : size + 2;
            }else if (route.name === 'Reels') {
              iconName = focused
                ? 'caret-forward-circle'
                : 'caret-forward-circle-outline';
              size = focused ? size + 8 : size + 2;
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-outline';
              size = focused ? size + 8 : size + 2;
            }

            return <Ionic name={iconName} size={size} color={colour} />;
          },
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Posts" component={Posts} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Logo" component={Logo}/>
        <Stack.Screen name="LogIn" component={LogIn}/>
        <Stack.Screen name="Bottom" component={bottomTabScreen} />
        <Stack.Screen name="Activity" component={Activity} />
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="FriendProfile" component={FriendProfile} />
        <Stack.Screen name="EditProfile" component={EditProfile} />

      </Stack.Navigator> 
    </NavigationContainer>
    //<LogIn></LogIn>
    //<Logo></Logo>
  );
}

export default App;
