import React from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    StatusBar,
    TextInput,
    Image,
    SectionList
} from 'react-native';

import CellC from '../modules/CellC'
class Mine extends React.Component {
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
                <SectionList
                    ListHeaderComponent={() => (<View style={{height:parseInt(224*w),alignItems:'center'}}>
                        <View style={{height:parseInt(112*w),backgroundColor:'#fff',width:'100%',marginTop:parseInt(112*w)}}></View>
                        <View style={{position:'absolute',top:parseInt(0*w),left:parseInt(0*w),width:'100%',height:'100%',alignItems:'center'}}>
                            <Image source={require('../img/head.png')} style={{width:parseInt(122*w),height:parseInt(122*w),borderRadius:parseInt(61*w),borderWidth:parseInt(2*w),marginTop:parseInt(50*w)}}/>
                            <Text style={{color:'#000',fontFamily:'HiraginoSansGB-W3',fontSize:parseInt(18*w)}}>张三</Text>
                        </View>
                    </View>)}
                    sections={[
                        {data: [
                            {title:'个人职务',value:'一般职员'},
                            {title:'身份证号',value:'44030119801014455'},
                            {title:'所属企业名称',value:'深圳市创意设计有限公司'}
                        ], title: null,renderItem:({item,index}) =><CellC left={item.title} center={item.value} input={true}/>},
                        {data: [
                        {title:'手机号码',value:'13712344321'},
                        {title:'QQ',value:'一般职员'},
                        {title:'个人职务',value:'一般职员'},
                        {title:'个人职务',value:'一般职员'}
                            ], title: null,renderItem:({item,index}) =><CellC left={item.title} center={item.value} deg={true}/>}
                    ]}
                    SectionSeparatorComponent={this._separatorCom}
                />
            </View>
        )
    }
}



export default Mine;