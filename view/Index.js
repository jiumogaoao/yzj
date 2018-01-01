import React from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    StatusBar,
    TextInput,AsyncStorage
} from 'react-native';
import LogoSVG from '../svg/LogoSVG';
import HostSVG from '../svg/HostSVG';
import PasswordSVG from '../svg/PasswordSVG';
class Index extends React.Component {
    initData(){
        storageSet('user', {
            applyType:1,
            applyPeopleCode:'002',
            applyPeopleName:'某人',
            applyOrgNo:'002',
            applyOrgName:'总行'
        });
        storageSet('leader', {
            operatorOrgNo:'001',
            apprPeopleCode:'001',
            apprPeopleName:'领导1'
        });
        storageSet('seal', {
            sealTypeId:1,
            sealNo:'001'
        });
        storageSet('readyFile', {
            file:'sdfsdfsd',
            fileType:'jpg'
        });
        storageSet('finishFile', {
            file:'sdfsdfsd',
            fileType:'jpg',
            autoId:'001',
            xPosition:0,
            yPosition:0,
            status:'006',
            memo:''
        });
        storageSet('machine', {
            machineNum:'001'
        })
    }
    constructor(props) {
        super(props);
        this.initData()
    };
    goLogin(){
        this.props.navigation.navigate('Main')
    }
    goRegister(){
        this.props.navigation.navigate('Register')
    }
    goForget(){
        this.props.navigation.navigate('Forget')
    }
    render() {
        return (
            <View style={{backgroundColor:'#0099fd',flex:1,alignItems: 'center'}}>
                <StatusBar backgroundColor='rgba(0,0,0,0.2)'
                           translucent={true}
                           hidden={false}
                           animated={true}/>
                <View style={{marginTop:parseInt(68*w)}}>
                    <LogoSVG s={0.5}/>
                </View>
                <Text style={{fontSize:parseInt(20*w),color:'#fff',marginTop:parseInt(54*w)}}>移动印控机系统</Text>
                <View style={{width:parseInt(246*w),height:parseInt(111*w),borderWidth:1,borderColor:'rgba(255,255,255,0.2)',borderRadius:parseInt(10*w),marginTop:parseInt(41*w)}}>
                    <View style={{height:'50%',flexDirection:'row',alignItems: 'center'}}>
                        <View style={{marginLeft:parseInt(21*w)}}><HostSVG s={0.1}/></View>
                        <TextInput placeholder={'账号|手机号'} placeholderTextColor={'#fff'} underlineColorAndroid='transparent' style={{flex:1}}/>
                    </View>
                    <View style={{height:'50%',flexDirection:'row',alignItems: 'center'}}>
                        <View style={{marginLeft:parseInt(21*w)}}><PasswordSVG s={0.1}/></View>
                        <TextInput placeholder={'请输入登录密码'} placeholderTextColor={'#fff'} underlineColorAndroid='transparent' style={{flex:1}}/>
                    </View>
                </View>
                <TouchableOpacity style={{width:parseInt(246*w),height:parseInt(34*w),borderWidth:1,borderColor:'rgba(255,255,255,0.2)',borderRadius:parseInt(10*w),marginTop:parseInt(22*w)}}  onPress={this.goLogin.bind(this)}>
                    <Text style={{color:'#fff',fontSize:parseInt(13*w),textAlign:'center',lineHeight:parseInt(25*w)}}>登录</Text>
                </TouchableOpacity>
                <View  style={{width:parseInt(246*w),flexDirection:'row',justifyContent:'space-between'}}>
                    <TouchableOpacity onPress={this.goRegister.bind(this)}><Text style={{fontSize:parseInt(12*w),color:'rgba(255,255,255,0.5)',marginTop:parseInt(5*w)}}>点击注册</Text></TouchableOpacity>
                    <TouchableOpacity onPress={this.goForget.bind(this)}><Text style={{fontSize:parseInt(12*w),color:'rgba(255,255,255,0.5)',marginTop:parseInt(5*w)}}>忘记密码</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Index;