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
class Node extends React.Component {
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
                <DoubleButtonC left={"开始时间"} right={"结束时间"} deg={true}/>
                <View style={{flex:1,marginTop:parseInt(6*w)}}>
                    <SectionList
                        renderItem={({item}) => <PanelCellC title={item.title} dsc={item.dsc} color={item.color} item={item.item}/>}
                        renderSectionHeader={({section}) => null}
                        sections={[
                            {data: [
                                {title:'盖章时间: 2017-11-04 10:20',dsc:'异常',color:'#ff0000',item:[{label:'印章编号',value:'2017110400001'},{label:'印章类型',value:'公章'}]},
                                {title:'盖章时间: 2017-11-04 10:20',dsc:'审核成功',color:'#00c005',item:[{label:'印章编号',value:'2017110400001'},{label:'印章类型',value:'公章'}]},
                                {title:'盖章时间: 2017-11-04 10:20',dsc:'审核失败',color:'#d5d5d5',item:[{label:'印章编号',value:'2017110400001'},{label:'印章类型',value:'公章'}]},
                                {title:'盖章时间: 2017-11-04 10:20',dsc:'审核成功',color:'#00c005',item:[{label:'印章编号',value:'2017110400001'},{label:'印章类型',value:'公章'}]},
                                {title:'盖章时间: 2017-11-04 10:20',dsc:'审核失败',color:'#d5d5d5',item:[{label:'印章编号',value:'2017110400001'},{label:'印章类型',value:'公章'}]},
                                {title:'盖章时间: 2017-11-04 10:20',dsc:'审核成功',color:'#00c005',item:[{label:'印章编号',value:'2017110400001'},{label:'印章类型',value:'公章'}]},
                                {title:'盖章时间: 2017-11-04 10:20',dsc:'审核失败',color:'#d5d5d5',item:[{label:'印章编号',value:'2017110400001'},{label:'印章类型',value:'公章'}]}
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



export default Node;