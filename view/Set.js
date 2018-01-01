import React from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    SectionList,
    TextInput
} from 'react-native';

import HeadC from '../modules/HeadC'
import CellC from '../modules/CellC'
class Set extends React.Component {
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
                <HeadC back={true} title={'设置'} navigation={this.props.navigation}/>
                <View style={{flex:1,marginTop:parseInt(10*w)}}>
                    <SectionList
                        renderItem={({item,index}) => <CellC left={item.title} deg={true}/>}
                        renderSectionHeader={({section}) => null}
                        sections={[
                            {data: [
                                {title:'关于我们'},
                                {title:'清除缓存'},
                                {title:'修改密码'},
                                {title:'版本信息'}
                            ], title: null},
                            {data: [
                            {title:'注销登录'}
                                ], title: null,renderItem:({item,index}) => (<View style={{backgroundColor:"#fff",height:parseInt(40*w),justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:parseInt(12*w),fontFamily:'HiraginoSansGB-W3',color:'#000'}}>{item.title}</Text></View>)}
                            ]}
                        SectionSeparatorComponent={this._separatorCom}
                    />
                </View>
            </View>
        )
    }
}



export default Set;