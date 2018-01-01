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
class DeviceControl extends React.Component {
    constructor(props) {
        super(props);
        var rnToastAndroid = NativeModules.RNToastAndroid;
        rnToastAndroid.searchDevice(function(data){
            console.log(data)
        },function(err){
            console.log(err)
        })
    };
    _separatorCom(){
        return(
            <View style={{height:parseInt(6*w),width:'100%'}}></View>
        )
    }
    gopaired(){
        this.props.navigation.navigate('Paired')
    }
    bindDevicel(){

    }
    search(){

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
                            {data: [
                                {title:'Text1',dsc:'已连接',deg:true,icon:true},
                                {title:'Text2',dsc:null,deg:true,icon:true},
                                {title:'Text3',dsc:null,deg:true,icon:true}
                            ], title: '已配对的设备',
                                renderItem:({item}) => { return (<TouchableOpacity onPress={this.gopaired.bind(this)}><CellC left={item.title} dsc={item.dss} icon={item.icon} deg={item.deg}/></TouchableOpacity>)}
                                },
                            {data: [
                                {title:'Device1',dsc:null,deg:true,icon:true},
                                {title:'Device1',dsc:null,deg:true,icon:true},
                                {title:'Device1',dsc:null,deg:true,icon:true}
                            ], title: '可用的设备',
                                renderItem:({item}) => {return (<TouchableOpacity onPress={this.bindDevicel.bind(this)}><CellC left={item.title} dsc={item.dss} icon={item.icon} deg={item.deg}/></TouchableOpacity>)}
                            },

                        ]}
                    />
                </View>
            </View>
        )
    }
}


export default DeviceControl;