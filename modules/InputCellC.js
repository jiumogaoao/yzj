import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';

class InputCellC extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:"#fff",height:parseInt(40*w),alignItems:'center'}}>
                <TextInput style={{flex:1,fontSize:parseInt(12*w),fontFamily:'HiraginoSansGB-W3',color:'#6e6e6e',marginLeft:parseInt(29*w)}} placeholder={this.props.placeholder||null} value={this.props.value||null} underlineColorAndroid='transparent'/>
                <View>
                {this.props.code?(<View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#0099fd',width:parseInt(80*w),height:parseInt(25*w),marginRight:parseInt(20*w)}}><Text style={{fontSize:parseInt(11*w),color:'#fff'}}>获取验证码</Text></View>):null}
            </View>
            </View>
        )
    }
}
export default InputCellC;