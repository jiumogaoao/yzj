package com.yzj;

import android.app.Application;

import com.bluetooth.BluetoothSppClient;
import com.facebook.react.ReactApplication;
import fr.bamlab.rnimageresizer.ImageResizerPackage;
import com.rnfs.RNFSPackage;
import com.learnium.RNDeviceInfo.RNDeviceInfo;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.storage.CJsonStorage;
import com.storage.CKVStorage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {
  /**蓝牙SPP通信连接对象*/
  public BluetoothSppClient mBSC = null;
  /**动态公共存储对象*/
  public CKVStorage mDS = null;
  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ImageResizerPackage(),
            new RNFSPackage(),
            new RNDeviceInfo(),
            new RCTCameraPackage(),
              new RNJavaReactPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    this.mDS = new CJsonStorage(this, getString(R.string.app_name));
    SoLoader.init(this, /* native exopackage */ false);
  }

  /**
   * 建立蓝牙连接
   * @param String sMac 蓝牙硬件地址
   * @return boolean
   * */
  public boolean createConn(String sMac){
    if (null == this.mBSC)
    {
      this.mBSC = new BluetoothSppClient(sMac);
      if (this.mBSC.createConn())
        return true;
      else{
        this.mBSC = null;
        return false;
      }
    }
    else
      return true;
  }

  /**
   * 关闭并释放连接
   * @return void
   * */
  public void closeConn(){
    if (null != this.mBSC){
      this.mBSC.closeConn();
      this.mBSC = null;
    }
  }
}
