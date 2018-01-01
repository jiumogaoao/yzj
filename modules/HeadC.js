import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    StatusBar
} from 'react-native';
import BackSVG from '../svg/BackSVG'
class HeadC extends Component {
    back() {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <View style={{flexDirection: 'row',height:parseInt(68*w),'backgroundColor':'#0099fd',justifyContent: 'space-between'}}>
                <StatusBar backgroundColor='rgba(0,0,0,0.2)'
                           translucent={true}
                           hidden={false}
                           animated={true}/>
                <View style={{width:'20%'}}>
                {this.props.back?(<TouchableOpacity style={{marginTop:parseInt(35*w),marginLeft:parseInt(13*w)}} onPress={this.back.bind(this)}>
                    <BackSVG s={0.1}/>
                </TouchableOpacity>):null}
                </View>
                <Text style={{color:'#fefefe',fontSize:parseInt(16*w),fontFamily:'HiraginoSansGB-W3',marginTop:parseInt(35*w)}}>{this.props.title}</Text>
                <View style={{width:'20%'}}>
                {this.props.right?(<TouchableOpacity onPress={this.props.rightfn}>
                    <Text style={{color:'#fefefe',fontSize:parseInt(13*w),fontFamily:'HiraginoSansGB-W3',marginTop:parseInt(36*w),marginRight:parseInt(20*w),textAlign:'right'}}>{this.props.right}</Text>
                </TouchableOpacity>):null}
                </View>
            </View>
        )
    }
}
export default HeadC;