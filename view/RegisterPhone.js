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

import HeadC from '../modules/HeadC'
import LabelInputCellC from '../modules/LabelInputCellC'
import PhotoUpLoadC from '../modules/PhotoUpLoadC'
class RegisterPhone extends React.Component {
    constructor(props) {
        super(props);
    };
    _separatorCom(){
        return(
            <View style={{height:parseInt(6*w),width:'100%'}}></View>
        )
    }
    goMain(){
        this.props.navigation.navigate('Main')
    }
    render() {
        return (
            <View style={{flex:1}}>
                <HeadC back={true} title={'用户注册'} right={false} navigation={this.props.navigation}/>
                <View style={{flex:1}}>
                    <SectionList
                        renderItem={({item}) => <LabelInputCellC left={item.title} value={item.value||null} code={item.code||null}/>}
                        renderSectionHeader={({section}) => null}
                        sections={[
                            {data: [
                                    {title:'联系方式',value:''},
                                    {title:'手机密码',value:''},
                                    {title:'验证码',value:'',code:true}
                                ], title: null}
                        ]}
                        SectionSeparatorComponent={this._separatorCom}
                        ListFooterComponent={()=>(<View style={{flexDirection:'row',marginLeft:parseInt(20*w)}}>
                            <Text style={{fontSize:parseInt(12*w),color:'#8f8f3f'}}>点击注册表示同意</Text>
                            <Text style={{fontSize:parseInt(12*w),color:'#0099fd'}}>《用户注册协议》</Text>
                            <Text style={{fontSize:parseInt(12*w),color:'#8f8f3f'}}>和</Text>
                            <Text style={{fontSize:parseInt(12*w),color:'#0099fd'}}>《隐私政策》</Text>
                        </View>)}
                    />
                </View>
                <View style={{height:parseInt(60*w),alignItems:'center'}}>
                    <TouchableOpacity  onPress={this.goMain.bind(this)}>
                        <View style={{width:parseInt(320*w),height:parseInt(46*w),backgroundColor:'#40ce6a',borderRadius:parseInt(5*w),alignItems:'center',justifyContent:'center'}}><Text style={{color:'#fff',fontSize:parseInt(18*w),fontFamily:'HiraginoSansGB-W3'}}>注册</Text></View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default RegisterPhone;