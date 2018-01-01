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
class Register extends React.Component {
    constructor(props) {
        super(props);
    };
    _separatorCom(){
        return(
            <View style={{height:parseInt(6*w),width:'100%'}}></View>
        )
    }
    goRegister2(){
        this.props.navigation.navigate('RegisterPhone')
    }
    render() {
        return (
            <View style={{flex:1}}>
                <HeadC back={true} title={'用户注册'} right={false} navigation={this.props.navigation}/>
                <View style={{flex:1}}>
                    <SectionList
                        renderItem={({item}) => <LabelInputCellC left={item.title} value={item.value||null}/>}
                        renderSectionHeader={({section}) => null}
                        sections={[
                            {data: [
                                    {title:'帐户名',value:''},
                                    {title:'登录密码',value:''},
                                    {title:'确认登录密码',value:''}
                                ], title: null},
                            {data: [
                                    {title:'姓名',value:''},
                                    {title:'身份证号',value:''}
                                ], title: null},
                        ]}
                        SectionSeparatorComponent={this._separatorCom}
                        ListFooterComponent={()=>(<View>
                            <PhotoUpLoadC
                                title={'上传身份证'}
                                leftname={'人像（正）面'}
                                lefturi={null}
                                rightname={'国徽（反）面'}
                                righturi={null}
                            />
                            <PhotoUpLoadC
                                title={'上传名片'}
                                leftname={'名片（正）面'}
                                lefturi={null}
                                rightname={'名片（反）面'}
                                righturi={null}
                            />
                        </View>)}
                    />
                </View>
                <TouchableOpacity onPress={this.goRegister2.bind(this)}>
                    <View style={{height:parseInt(60*w),alignItems:'center'}}>
                        <View style={{width:parseInt(320*w),height:parseInt(46*w),backgroundColor:'#40ce6a',borderRadius:parseInt(5*w),alignItems:'center',justifyContent:'center'}}><Text style={{color:'#fff',fontSize:parseInt(18*w),fontFamily:'HiraginoSansGB-W3'}}>下一步</Text></View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}



export default Register;