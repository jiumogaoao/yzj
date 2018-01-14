import React from 'react';
import {
   View,
   Dimensions,
  StyleSheet,
  Text,
    TouchableOpacity,
  Vibration,
  Animated,
  Easing,
NativeModules
} from 'react-native';

import Camera from 'react-native-camera';
import HeadC from '../modules/HeadC'
import CameraSVG from '../svg/CameraSVG'
import RNFS from 'react-native-fs';

class Photo2 extends React.Component {

   constructor(props) {
        super(props);
        this.camera = null;
    }

    componentDidMount() {

    }

    async takePicture() {
        const options = {};
        let picData=await this.camera.capture({metadata: options})
        let b64=await RNFS.readFile(picData.mediaUri,'base64')
        let finishFile = await storageGet('finishFile')
        finishFile.file='data:image/jpg;base64,'+b64
        await storageSet('readyFile', finishFile);
        let device = await storageGet('device');
        let user = await storageGet('user');
        let leader = await storageGet('leader');
        let seal = await storageGet('seal');
        let machine = await storageGet('machine');
        let rp;
        try {
            rp = await fetch(rootURL+'/mechseal/task/simpleSealUseApplyTaskAction_updateUseSealInfo.action', {
                method: 'POST',
                headers: device,
                body: JSON.stringify({ //参数
                    file:'data:image/jpg;base64,'+b64,
                    fileType:'jpg',
                    bizInfo:{
                        status:'006',
                        autoId:machine.id,
                        xPosition:finishFile.xPosition,
                        yPosition:finishFile.yPosition,
                        memo:''
                    }
                })
            })
            if (rp.ok) {
                this.props.navigation.state.params.finishS()
                NativeModules.RNToastAndroid.show('用印信息已提交')
                this.props.navigation.goBack()
            }
        } catch(error){
            console.log(error)
        }
    }

   render() {
      return (
          <View style={styles.container}>
            <HeadC back={true} title={'盖章完成'} navigation={this.props.navigation}/>
            <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}>
              <View style={{height:parseInt(10*w),backgroundColor:'rgba(0,0,0,0.5)',width:'100%'}}/>
              <View style={{width:'100%',height:parseInt(200*w),flexDirection:'row'}}>
                  <View style={{width:parseInt(30*w),backgroundColor:'rgba(0,0,0,0.5)',height:'100%'}}/>
                  <View style={{flex:1,height:'100%'}}>
                    <View style={{width:'100%',height:'100%',borderWidth:1,borderColor:'#0099fd'}}></View>
                    <View style={{width:parseInt(25*w),height:parseInt(25*w),borderTopWidth:5,borderTopColor:'#0099fd',borderLeftWidth:5,borderLeftColor:'#0099fd',position:'absolute',top:0,left:0}}></View>
                    <View style={{width:parseInt(25*w),height:parseInt(25*w),borderTopWidth:5,borderTopColor:'#0099fd',borderRightWidth:5,borderRightColor:'#0099fd',position:'absolute',top:0,right:0}}></View>
                    <View style={{width:parseInt(25*w),height:parseInt(25*w),borderLeftWidth:5,borderLeftColor:'#0099fd',borderBottomWidth:5,borderBottomColor:'#0099fd',position:'absolute',bottom:0,left:0}}></View>
                    <View style={{width:parseInt(25*w),height:parseInt(25*w),borderRightWidth:5,borderRightColor:'#0099fd',borderBottomWidth:5,borderBottomColor:'#0099fd',position:'absolute',bottom:0,right:0}}></View>
                  </View>
                  <View style={{width:parseInt(30*w),backgroundColor:'rgba(0,0,0,0.5)',height:'100%'}}/>
              </View>
                <View style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)',width:'100%',alignItems:'center',justifyContent:'space-between'}}>
                    <Text style={{color:'#fff',marginTop:parseInt(15*w)}}>请将印章就绪置于拍摄区域</Text>
                    <TouchableOpacity onPress={this.takePicture.bind(this)}>
                        <View style={{backgroundColor:"#fff",width:parseInt(49*w),height:parseInt(49*w),borderRadius:parseInt(24*w),justifyContent:'center',alignItems:'center',marginBottom:parseInt(20*w)}}><CameraSVG s={0.1} color={"#0099fd"}/></View>
                    </TouchableOpacity>

                </View>
            </Camera>
      </View>
      );
   }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

export default Photo2;