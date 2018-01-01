import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    TextInput
} from 'react-native';

class PanelCellC extends Component {
    constructor(props) {
        super(props);
    };
    render() {
        return (
            <View style={{alignItems:'center',backgroundColor:'#fff'}}>
                <View style={{width:parseInt(332*w)}}>
                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',marginTop:parseInt(15*w)}}>
                        <Text style={{fontSize:parseInt(10*w),color:'#005aff',fontFamily:'HiraginoSansGB-W3'}}>{this.props.title}</Text>
                        <Text style={{fontSize:parseInt(10*w),fontFamily:'HiraginoSansGB-W3',color:this.props.color}}>{this.props.dsc}</Text>
                    </View>
                    <View style={{marginTop:parseInt(20*w)}}>
                        {
                            this.props.item.map((item,index)=>{
                                return (<View key={index} style={{marginBottom:parseInt(11*w),flexDirection:'row'}}>
                                    <Text style={{fontSize:parseInt(10*w),color:'#0f0f0f',fontFamily:'HiraginoSansGB-W3'}}>{item.label}</Text>
                                    <Text style={{fontSize:parseInt(10*w),color:'#606060',fontFamily:'HiraginoSansGB-W3'}}>:</Text>
                                    <Text style={{fontSize:parseInt(10*w),color:'#606060',fontFamily:'HiraginoSansGB-W3'}}> {item.value}</Text>
                                </View>)
                            })
                        }
                    </View>
                </View>
            </View>
        )
    }
}
export default PanelCellC;