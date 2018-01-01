import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';
import Swiper from 'react-native-swiper';
class TabC extends Component {
    constructor(props) {
        super(props);
        this.state={pageNum:0}
    };
    changePage (num){
        this.refs.scroll.scrollBy(num-this.state.pageNum)
        this.setState({pageNum:num})
        this.props.change(num)
    }
    scrollPage(index){
        this.setState({pageNum:index})
        this.props.change(index)
    }
    render() {
        let that=this
        return (
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <Swiper horizontal={true} loop={false} showsPagination={false} onIndexChanged={(index)=>{this.scrollPage(index)}} ref="scroll">
                        {
                            this.props.data.map((page,index)=>{
                                let {Compoment}=page
                                return (<View style={{width:360*w,height:'100%'}} key={index}><Compoment data={page} navigation={this.props.navigation}/></View>)
                            })
                        }
                    </Swiper>
                </View>
                <View style={{flexDirection:'row',height:parseInt(50*w),backgroundColor:'#fff',justifyContent:'space-around'}}>
                    {
                        this.props.data.map((page,index)=>{
                            let {Icon,name}=page
                            return (<View key={index}>
                                <TouchableOpacity onPress={()=>{this.changePage(index)}}>
                                    <View style={{marginLeft:parseInt(5*w),marginTop:parseInt(5*w)}}><Icon s={0.12} hl={(this.state.pageNum==index)}/></View>
                                    <Text style={{textAlign:'center'}}>{name}</Text>
                                </TouchableOpacity>
                            </View>)
                        })
                    }
                </View>
            </View>
        )
    }
}
export default TabC;