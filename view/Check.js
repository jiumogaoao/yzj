import React from 'react';
import {
    View,
    Button,
    Text,
    TouchableOpacity,
    SectionList,
    TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import DoubleButtonC from '../modules/DoubleButtonC'
import HeadC from '../modules/HeadC'

class Check extends React.Component {
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
                <DoubleButtonC left={"通过"} right={"不通过"}/>
            </View>
        )
    }
}

export default Check;