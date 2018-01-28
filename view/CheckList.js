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
import DoubleButtonC from '../modules/DoubleButtonC'
import PanelCellC from '../modules/PanelCellC'
import HeadC from '../modules/HeadC'
let rnToastAndroid = NativeModules.RNToastAndroid;
class CheckList extends React.Component {
    constructor(props) {
        super(props);
        this.state={list:[]}
    };
    _separatorCom(){
        return(
            <View style={{height:parseInt(6*w),width:'100%'}}></View>
        )
    }
    goCheck(type){
        type == '待审核'? this.props.navigation.navigate('Check'):this.props.navigation.navigate('Checked')
    }
    async getList(){
        let device = await storageGet('device');
        device["Content-Type"]="application/x-www-form-urlencoded"
        device["User-Agent"]="Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Mobile Safari/537.36"
        device["Host"]="218.17.55.193:8888"
        /*rnToastAndroid.Post("https://www.baidu.com",'{}',function(d){
            debugger;
        })*/
        /*let rp;
        try {
            rp = await fetch(rootURL+'/mechseal/task/simpleSealUseApplyTaskAction_queryTask.action', {
                method: 'POST',
                headers: device,
                mode: 'cors',
                body: JSON.stringify({ //参数
                    moduleId:'001',
                    queryBean:{
                        pageSize:20,
                        pageNo:1,
                        params:{
                            operatorOrgNo:'001',
                            ge_applyTime:'2018-01-27 18:21:22',
                            le_applyTime:'2018-01-27 18:21:28',
                            status:'001'
                        }
                    },

                })
            })
            debugger;
            if (rp.ok) {
                let obj = await rp.json()
                let list = []
                for (var i in obj.pageBean.data) {
                    let item={title:'申请时间: '+ obj.pageBean.data[i].applyTime,dsc:'待审核',color:'#00c005',item:[{label:'申请人',value:obj.pageBean.data[i].applyPeopleName
                    },{label:'设备编号',value:obj.pageBean.data[i].autoId}]}
                    if(data[i].BOND=="未绑定"){
                        unpaired.push(item)
                    }else{
                        paired.push(item)
                    }
                }

                this.setState({list})
            }


        } catch(error){
            debugger;
            console.log(error)
        }*/
    }
    componentDidMount(){
        this.getList()
    }
    render() {
        return (
            <View style={{flex:1}}>
                <HeadC title={'未完成'} right={'已完成'} back={true} navigation={this.props.navigation}/>
                <DoubleButtonC left={"开始时间"} right={"结束时间"} deg={true}/>
                <View style={{flex:1,marginTop:parseInt(6*w)}}>
                    <SectionList
                        renderItem={({item}) => <TouchableOpacity onPress={this.goCheck.bind(this,item.dsc)}><PanelCellC title={item.title} dsc={item.dsc} color={item.color} item={item.item}/></TouchableOpacity>}
                        renderSectionHeader={({section}) => null}
                        sections={[
                            {data: [
                                {title:'申请时间: 2017-11-04 10:20',dsc:'待审核',color:'#00c005',item:[{label:'申请人',value:'张兰'},{label:'设备编号',value:'20171104001'}]},
                                {title:'申请时间: 2017-11-04 10:20',dsc:'待审核',color:'#00c005',item:[{label:'申请人',value:'张兰'},{label:'设备编号',value:'20171104001'}]}
                            ], title: null}
                        ]}
                        ItemSeparatorComponent={this._separatorCom}
                    />
                </View>
                <DoubleButtonC left={"上一页"} right={"下一页"}/>
            </View>
        )
    }
}


export default CheckList;