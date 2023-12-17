import React from 'react';
import {View, Text, StatusBar, ScrollView, Image, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionic from 'react-native-vector-icons/Ionicons';
import Stories from '../screenComponents/Stories';
import Post from '../screenComponents/Post';

const Home = ({navigation}) => {
  const gotoActivity = ()=> {
    navigation.navigate('Activity');
  }
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 15,
          alignItems: 'center',
        }}>
        <Image
          source = {require("../../assets/instagram.png")}
          style={{
            width:120,
            height:45
          }}
        />
        <TouchableOpacity style={{marginLeft:'auto',paddingHorizontal:10}} onPress={gotoActivity}>
          <Ionic name="heart-outline" style={{fontSize: 28}}/>
        </TouchableOpacity>
      
        <Ionic name="chatbubble-ellipses-outline" style={{fontSize: 26,}}/>
      </View>

      <ScrollView>
        <Stories />
        <Post />
        <View
          style={{justifyContent: 'center', alignItems: 'center', padding: 20}}>
          <Ionic
            name="reload-outline"
            style={{fontSize: 60, opacity: 0.2}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;