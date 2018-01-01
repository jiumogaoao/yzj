import React from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    SectionList,
    TextInput
} from 'react-native';

import CellC from '../modules/CellC'
import HeadC from '../modules/HeadC'
class Paired extends React.Component {
    constructor(props) {
        super(props);
    };
    _separatorCom(){
        return(
            <View style={{height:parseInt(6*w),width:'100%'}}></View>
        )
    }
    render() {
        return (
            <View style={{flex:1}}>
                <HeadC back={true} title={'已配对的蓝牙设备'} navigation={this.props.navigation}/>
                <View style={{flex:1,marginTop:parseInt(6*w)}}>
                    <CellC left={'设备名'} center={'Text1'}/>
                </View>
                <View style={{height:parseInt(40*w),backgroundColor:'#fff',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:parseInt(13*w),fontFamily:'HiraginoSansGB-W3'}}>取消配对</Text>
                </View>
            </View>
        )
    }
}



export default Paired;