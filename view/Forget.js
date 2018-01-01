import React from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    StatusBar,
    TextInput
} from 'react-native';
import HeadC from '../modules/HeadC'
import InputCellC from '../modules/InputCellC'
class Forget extends React.Component {
    constructor(props) {
        super(props);
    };
    goIndex(){
        this.props.navigation.navigate('Index')
    }
    render() {
        return (
            <View style={{flex:1}}>
                <HeadC back={true} title={'忘记密码'} right={false} navigation={this.props.navigation}/>
                <View style={{flex:1}}>
                    <InputCellC placeholder={'请输入手机号码'}/>
                    <InputCellC placeholder={'输入验证码'} code={true}/>
                    <View style={{height:parseInt(49*w),justifyContent:'center',alignItems:'flex-end'}}>
                        <Text style={{fontSize:parseInt(12*w),color:'#0099fd',fontFamily:'HiraginoSansGB-W3',marginRight:parseInt(20*w)}}>收不到验证码</Text>
                    </View>
                    <InputCellC placeholder={'新密码（8-30位数字、字母组合）'}/>
                </View>
                <TouchableOpacity onPress={this.goIndex.bind(this)}>
                    <View style={{height:parseInt(60*w),alignItems:'center'}}>
                        <View style={{width:parseInt(320*w),height:parseInt(46*w),backgroundColor:'#40ce6a',borderRadius:parseInt(5*w),alignItems:'center',justifyContent:'center'}}><Text style={{color:'#fff',fontSize:parseInt(18*w),fontFamily:'HiraginoSansGB-W3'}}>确认修改</Text></View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default Forget;