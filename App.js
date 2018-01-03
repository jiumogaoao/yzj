/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry,
    Dimensions ,AsyncStorage,NativeModules} from 'react-native';
import { StackNavigator } from "react-navigation";
import Index from './view/Index';
import Register from './view/Register';
import RegisterPhone from './view/RegisterPhone';
import Forget from './view/Forget';
import Main from './view/Main';
import Set from './view/Set';
import DeviceControl from './view/DeviceControl';
import Paired from './view/Paired';
import Check from './view/Check';
import CheckList from './view/CheckList';
import Checked from './view/Checked';
import Photo from './view/Photo';
global.w = Dimensions.get('window').width/360;
global.h = Dimensions.get('window').height/360;
global.storageGet = async function(key){
    let returnData=await AsyncStorage.getItem(key)
    returnData=JSON.parse(returnData)
    return returnData
}
global.storageSet = async function(key,obj){
    obj=JSON.stringify(obj)
    await AsyncStorage.setItem(key,obj)
    return storageGet(key)
}
var navoption={
    header:null
}
NativeModules.RNToastAndroid.update(function(data){
    console.log(data)
})
const yzj = StackNavigator({
    Index: { screen: Index,navigationOptions:navoption},
    Register: { screen: Register,navigationOptions:navoption},
    Forget: { screen: Forget,navigationOptions:navoption},
    Main: { screen: Main,navigationOptions:navoption},
    RegisterPhone: { screen: RegisterPhone,navigationOptions:navoption},
    Set: { screen: Set,navigationOptions:navoption},
    DeviceControl: { screen: DeviceControl,navigationOptions:navoption},
    Paired: { screen: Paired,navigationOptions:navoption},
    Check: { screen: Check,navigationOptions:navoption},
    CheckList: { screen: CheckList,navigationOptions:navoption},
    Checked: { screen: Checked,navigationOptions:navoption},
    Photo: { screen: Photo,navigationOptions:navoption}
});

AppRegistry.registerComponent('yzj', () => yzj);
