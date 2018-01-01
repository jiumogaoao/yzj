import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import CameraSVG from '../svg/CameraSVG'
class PhotoUpLoadC extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <View style={{backgroundColor:'#fff'}}>
                <View style={{marginTop:parseInt(13*w),marginLeft:parseInt(18*w)}}><Text style={{fontFamily:'HirginoSansGB',fontSize:parseInt(12*w),color:'#000'}}>{this.props.title}</Text></View>
                <View style={{flexDirection:'row',justifyContent:'space-around',height:parseInt(130*w),alignItems:'center'}}>
                    <View style={{width:parseInt(145*w),height:parseInt(87*w),backgroundColor:'#eaeaea',borderWidth:1,borderColor:'#d5d5d5',borderRadius:parseInt(3*w),justifyContent:'center',alignItems:'center'}}>
                        {this.props.lefturi?(<Image source={{uri:this.props.lefturi}}/>):(<View><View style={{marginLeft:parseInt(20*w)}}><CameraSVG s={0.21}/></View>
                            <Text style={{fontFamily:'HirginoSansGB',fontSize:parseInt(12*w),color:'#000'}}>{this.props.leftname}</Text></View>)}
                    </View>
                    <View style={{width:parseInt(145*w),height:parseInt(87*w),backgroundColor:'#eaeaea',borderWidth:1,borderColor:'#d5d5d5',borderRadius:parseInt(3*w),justifyContent:'center',alignItems:'center'}}>
                        {this.props.righturi?(<Image source={{uri:this.props.righturi}}/>):(<View><View style={{marginLeft:parseInt(20*w)}}><CameraSVG s={0.21}/></View>
                            <Text style={{fontFamily:'HirginoSansGB',fontSize:parseInt(12*w),color:'#000'}}>{this.props.rightname}</Text></View>)}
                    </View>
                </View>
            </View>
        )
    }
}
export default PhotoUpLoadC;