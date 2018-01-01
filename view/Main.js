import React from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    StatusBar,
    TextInput,
    NativeModules,
    AsyncStorage
} from 'react-native';

import HeadC from '../modules/HeadC'
import TabC from '../modules/TabC'
import MineSVG from '../svg/MineSVG'
import NodeSVG from '../svg/NodeSVG'
import SealSVG from '../svg/SealSVG'
import Mine from './Mine'
import Node from './Node'
import Seal from './Seal'
import SealLeader from './SealLeader'
class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            pageNum:0,
            pageData:[
                {title:'移动印控机系统'},
                {title:'记录'},
                {title:'我的',right:'设置',rightfn:()=>{this.goSet()}}
            ],
            type:0
        }
        this.initData()
    };
    goSet(){
        this.props.navigation.navigate('Set')
    }
    changePage(num){
        this.setState({
            pageNum:num
        })
    }
    async initData(){
        let user= await storageGet('user')
        this.setState({type:user.applyType})
        console.log(this.state)
        return user;
    }

    render() {
        return (
            <View style={{flex:1}}>
                <HeadC back={false}
                       title={this.state.pageData[this.state.pageNum].title}
                       right={this.state.pageData[this.state.pageNum].right||null}
                       rightfn={this.state.pageData[this.state.pageNum].rightfn||null}/>
                <TabC
                    data={[
                        {Icon:SealSVG,name:'印章',Compoment:this.state.type?Seal:SealLeader},
                        {Icon:NodeSVG,name:'记录',Compoment:Node},
                        {Icon:MineSVG,name:'我的',Compoment:Mine}
                    ]}
                    navigation={this.props.navigation}
                    change={(num)=>{this.changePage(num)}}
                />
            </View>
        )
    }
}


export default Main;