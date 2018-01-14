import React from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    SectionList,
    TextInput,
    NativeModules
} from 'react-native';
import CellC from '../modules/CellC'
import HeadC from '../modules/HeadC'
let rnToastAndroid = NativeModules.RNToastAndroid;
class DeviceControl extends React.Component {
    constructor(props) {
        super(props);
        let that=this;
        updateFn.deviceList=function(data){
            let paired = [];
            let unpaired = [];
            for (var i in data) {
                let item={title:data[i].NAME,dsc:null,deg:true,icon:true,uuid:i,data:{...data[i],MAC:i}}
                if(data[i].BOND=="未绑定"){
                    unpaired.push(item)
                }else{
                    paired.push(item)
                }
            }
            that.setState({paired,unpaired});
        }
        this.state={
            unpaired:[],
            paired:[]
        }
        rnToastAndroid.openDiscovery()
    };
    _separatorCom(){
        return(
            <View style={{height:parseInt(6*w),width:'100%'}}></View>
        )
    }

    gopaired(e){
        let that = this;
        rnToastAndroid.selectDeviceToPair(JSON.stringify(e.data),function(mac){
            storageSet('machine', {
                machineNum:mac,
                connected:true
            });
            that.props.navigation.goBack();
        })
    }
    bindDevicel(){

    }
    search(){
        rnToastAndroid.openDiscovery()
    }
    render() {
        return (
            <View style={{flex:1}}>
                <HeadC back={true} title={'设备管理'} right={'搜索'} navigation={this.props.navigation} rightfn={this.search.bind(this)}/>
                <View style={{flex:1,marginTop:parseInt(6*w)}}>
                    <SectionList
                        renderItem={({item}) => <CellC left={item.title} dsc={item.dss} icon={item.icon} deg={item.deg}/>}
                        renderSectionHeader={({section}) => <View style={{height:parseInt(31*w),justifyContent:'center'}}><Text style={{fontSize:parseInt(11*w),color:'#7e7e7e',marginLeft:parseInt(30*w)}}>{section.title}</Text></View>}
                        sections={[
                            {data: this.state.paired, title: '已配对的设备',
                                renderItem:({item}) => { return (<TouchableOpacity onPress={this.gopaired.bind(this,item)} key={item.uuid}><CellC left={item.title} dsc={item.dss} icon={item.icon} deg={item.deg}/></TouchableOpacity>)}
                                },
                            {data: this.state.unpaired, title: '可用的设备',
                                renderItem:({item}) => {return (<TouchableOpacity onPress={this.gopaired.bind(this,item)} key={item.uuid}><CellC left={item.title} dsc={item.dss} icon={item.icon} deg={item.deg}/></TouchableOpacity>)}
                            },

                        ]}
                    />
                </View>
            </View>
        )
    }
}


export default DeviceControl;