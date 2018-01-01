import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';
import KeyboardSVG from '../svg/KeyboardSVG'
import RightSVG from '../svg/RightSVG'
class CellC extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <View style={{flexDirection:'row',justifyContent:'space-between',backgroundColor:"#fff",height:parseInt(40*w)}}>
                <View style={{flexDirection:'row',marginLeft:parseInt(20*w),alignItems:'center'}}>
                    {this.props.icon?(<View style={{marginTop:parseInt(1*w),marginRight:parseInt(10*w)}}><KeyboardSVG s={0.08} /></View>):null}
                    <View style={{justifyContent:'center',width:parseInt(100*w)}}>
                        <Text style={{fontSize:parseInt(12*w),fontFamily:'HiraginoSansGB-W3',color:'#000'}}>{this.props.left}</Text>
                        {this.props.dsc?(<Text>{this.props.dsc}</Text>):null}
                    </View>
                </View>
                {this.props.center?(<View style={{flex:1,justifyContent:'center'}}>
                    {this.props.input?(<TextInput underlineColorAndroid='transparent' value={this.props.center||null}  style={{fontSize:parseInt(12*w),fontFamily:'HiraginoSansGB-W3',color:'#6e6e6e'}}/>):(<Text style={{fontSize:parseInt(12*w),fontFamily:'HiraginoSansGB-W3',color:'#6e6e6e'}}>{this.props.center}</Text>)}
                </View>):null}
                <View style={{marginRight:parseInt(20*w),justifyContent:'center'}}>
                    {this.props.deg?(<RightSVG s={0.07}/>):null}
                </View>
            </View>
        )
    }
}
export default CellC;