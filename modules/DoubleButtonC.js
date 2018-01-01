import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import DownSVG from '../svg/DownSVG'
class DoubleButtonC extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        console.log(this.props.deg)
        return (
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',height:parseInt(40*w),backgroundColor:'#fff'}}>
                    <Text style={{fontSize:parseInt(14*w),fontFamily:'HiraginoSansGB-W3',color:'#4c4c4c'}}>{this.props.left}</Text>
                    {this.props.deg?(<View style={{marginLeft:parseInt(19*w)}}><DownSVG s={0.07}/></View>):null}
                </View>
                <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center',height:parseInt(40*w),backgroundColor:'#fff',borderLeftWidth:1,borderLeftColor:'#ddd'}}>
                    <Text style={{fontSize:parseInt(14*w),fontFamily:'HiraginoSansGB-W3',color:'#4c4c4c'}}>{this.props.right}</Text>
                    {this.props.deg?(<View style={{marginLeft:parseInt(19*w)}}><DownSVG s={0.07}/></View>):null}
                </View>
            </View>
        )
    }
}
export default DoubleButtonC;