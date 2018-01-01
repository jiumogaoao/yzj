import React from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    SectionList,
    TextInput
} from 'react-native';
import DoubleButtonC from '../modules/DoubleButtonC'
import PanelCellC from '../modules/PanelCellC'
import HeadC from '../modules/HeadC'
class CheckList extends React.Component {
    constructor(props) {
        super(props);
    };
    _separatorCom(){
        return(
            <View style={{height:parseInt(6*w),width:'100%'}}></View>
        )
    }
    goCheck(type){
        type == '待审核'? this.props.navigation.navigate('Check'):this.props.navigation.navigate('Checked')
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