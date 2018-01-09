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
let rnToastAndroid = NativeModules.RNToastAndroid;
class SealLeader extends React.Component {
    constructor(props) {
        super(props);
    };

    goDevice(){
        this.props.navigation.navigate('DeviceControl');
    }

    goCheckList(){
        this.props.navigation.navigate('CheckList')
    }
    goPhoto (){
        //this.props.navigation.navigate('Photo')
        rnToastAndroid.send('yzj')
    }
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1,backgroundColor:'#86c5ff',justifyContent:'center',alignItems:'center'}}>
                        <View style={{flexDirection:'row',position:'absolute',top:parseInt(57*w),left:0,width:'100%'}}>
                            <Text style={{fontSize:parseInt(12*w),color:'#005099',fontFamily:'HiraginoSansGB-W3'}}>设备编号 </Text>
                            <Text style={{fontSize:parseInt(12*w),color:'#fff',fontFamily:'HiraginoSansGB-W3'}}>00001 </Text>
                            <Text style={{fontSize:parseInt(12*w),color:'#005099',fontFamily:'HiraginoSansGB-W3',marginLeft:parseInt(12*w)}}>设备状态 </Text>
                            <Text style={{fontSize:parseInt(12*w),color:'#258040',fontFamily:'HiraginoSansGB-W3'}}>正常 </Text>
                        </View>
                        <TouchableOpacity onPress={this.goDevice.bind(this)}>
                            <View style={{width:parseInt(78*w),height:parseInt(78*w),borderRadius:parseInt(39*w),backgroundColor:'#fff',borderWidth:parseInt(3*w),borderColor:'rgba(255,255,255,0.5)',alignItems:'center',justifyContent:'center'}}>
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
                            <Text>本地解锁</Text>
                        </View>
                        </TouchableOpacity>
                        <View style={{marginTop:parseInt(7*w)}}>
                            <Text style={{fontSize:parseInt(12*w),color:'#005099',fontFamily:'HiraginoSansGB-W3'}}>印控设备解锁</Text>
                        </View>
                    </View>
                </View>
                <View style={{flex:1,flexDirection:'row'}}>
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
                    <View style={{flex:1,backgroundColor:'#4fbaff',justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity onPress={this.goCheckList.bind(this)}>
                        <View style={{width:parseInt(78*w),height:parseInt(78*w),borderRadius:parseInt(39*w),backgroundColor:'#fff',borderWidth:parseInt(3*w),borderColor:'rgba(255,255,255,0.5)',alignItems:'center',justifyContent:'center'}}>
                            <Text>领导审批</Text>
                        </View>
                        </TouchableOpacity>
                        <View style={{marginTop:parseInt(7*w)}}>
                            <Text style={{fontSize:parseInt(12*w),color:'#005099',fontFamily:'HiraginoSansGB-W3'}}>印控设备审批</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


export default SealLeader;