import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
class LabelInputCellC extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:"#fff",height:parseInt(40*w),alignItems:'center'}}>
                <View style={{flexDirection:'row',marginLeft:parseInt(20*w)}}>
                    {this.props.icon?(<KeyboardSVG s={0.1}/>):null}
                    <View style={{justifyContent:'center',width:parseInt(100*w)}}>
                        <Text style={{fontSize:parseInt(12*w),fontFamily:'HiraginoSansGB-W3',color:'#000'}}>{this.props.left}</Text>
                        {this.props.dsc?(<Text>{this.props.dsc}</Text>):null}
                    </View>
                </View>
                {this.props.center?(<View style={{flex:1,justifyContent:'center'}}>
                    {this.props.input?(<TextInput underlineColorAndroid='transparent' value={this.props.center||null}  style={{fontSize:parseInt(12*w),fontFamily:'HiraginoSansGB-W3',color:'#6e6e6e'}}/>):(<Text style={{fontSize:parseInt(12*w),fontFamily:'HiraginoSansGB-W3',color:'#6e6e6e'}}>{this.props.center}</Text>)}
                </View>):null}
                <View>
                    {this.props.code?(<View style={{justifyContent:'center',alignItems:'center',backgroundColor:'#0099fd',width:parseInt(80*w),height:parseInt(25*w),marginRight:parseInt(20*w)}}><Text style={{fontSize:parseInt(11*w),color:'#fff'}}>获取验证码</Text></View>):null}
                </View>
            </View>
        )
    }
}
export default LabelInputCellC;