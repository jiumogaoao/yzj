import React from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    StatusBar,
    TextInput,
    NativeModules
} from 'react-native';

class Seal extends React.Component {
    constructor(props) {
        super(props);
    };
    goDevice(){
        NativeModules.RNToastAndroid.openDiscovery()
    }
    goPhoto (){
        this.props.navigation.navigate('Photo')
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1,backgroundColor:'#86c5ff',justifyContent:'center',alignItems:'center'}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{fontSize:parseInt(12*w),color:'#005099',fontFamily:'HiraginoSansGB-W3'}}>设备编号 </Text>
                        <Text style={{fontSize:parseInt(12*w),color:'#fff',fontFamily:'HiraginoSansGB-W3'}}>00001 </Text>
                        <Text style={{fontSize:parseInt(12*w),color:'#005099',fontFamily:'HiraginoSansGB-W3',marginLeft:parseInt(12*w)}}>设备状态 </Text>
                        <Text style={{fontSize:parseInt(12*w),color:'#258040',fontFamily:'HiraginoSansGB-W3'}}>正常 </Text>
                    </View>
                    <TouchableOpacity onPress={this.goDevice.bind(this)}>
                    <View style={{width:parseInt(78*w),height:parseInt(78*w),borderRadius:parseInt(39*w),backgroundColor:'#fff',borderWidth:parseInt(3*w),borderColor:'rgba(255,255,255,0.5)',alignItems:'center',justifyContent:'center',marginTop:parseInt(19*w)}}>
                        <Text>设备绑定</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{marginTop:parseInt(7*w)}}>
                        <Text style={{fontSize:parseInt(12*w),color:'#005099',fontFamily:'HiraginoSansGB-W3'}}>印控设备绑定</Text>
                    </View>
                </View>
                <View style={{flex:1,backgroundColor:'#6cd1f6',justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity onPress={this.goPhoto.bind(this)}>
                    <View style={{width:parseInt(78*w),height:parseInt(78*w),borderRadius:parseInt(39*w),backgroundColor:'#fff',borderWidth:parseInt(3*w),borderColor:'rgba(255,255,255,0.5)',alignItems:'center',justifyContent:'center'}}>
                        <Text>远程解锁</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{marginTop:parseInt(7*w)}}>
                        <Text style={{fontSize:parseInt(12*w),color:'#005099',fontFamily:'HiraginoSansGB-W3'}}>印控设备解锁</Text>
                    </View>
                </View>
                <View style={{flex:1,backgroundColor:'#6ac3fd',justifyContent:'center',alignItems:'center'}}>
                    <TouchableOpacity>
                    <View style={{width:parseInt(78*w),height:parseInt(78*w),borderRadius:parseInt(39*w),backgroundColor:'#fff',borderWidth:parseInt(3*w),borderColor:'rgba(255,255,255,0.5)',alignItems:'center',justifyContent:'center'}}>
                        <Text>电子印章</Text>
                    </View>
                    </TouchableOpacity>
                    <View style={{marginTop:parseInt(7*w)}}>
                        <Text style={{fontSize:parseInt(12*w),color:'#005099',fontFamily:'HiraginoSansGB-W3'}}>印控设备解锁</Text>
                    </View>
                </View>
            </View>
        )
    }
}



export default Seal;