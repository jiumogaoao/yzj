import React from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    SectionList,
    TextInput
} from 'react-native';
import HeadC from '../modules/HeadC'
class Checked extends React.Component {
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
                <HeadC title={'盖章审批'} back={true} navigation={this.props.navigation}/>
                <View style={{flex:1}}>

                </View>
            </View>
        )
    }
}


export default Checked;