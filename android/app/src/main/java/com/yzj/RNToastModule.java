package com.yzj;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import android.app.Activity;
import android.content.Intent;


import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.yzj.MainActivity;

public class RNToastModule extends ReactContextBaseJavaModule {

    private static final String DURAION_SHORT_KEY = "SHORT";
    private static final String DURAION_LONG_KEY = "LONG";

    public RNToastModule(ReactApplicationContext reactApplicationContext) {
        super(reactApplicationContext);
    }

    @Override
    public String getName() {
        return "RNToastAndroid";
    }


    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(DURAION_SHORT_KEY, Toast.LENGTH_SHORT);
        constants.put(DURAION_LONG_KEY, Toast.LENGTH_LONG);
        return constants;
    }

    @ReactMethod
    public void show(String message) {
        MainActivity m = (MainActivity) getCurrentActivity();
        Toast.makeText(m, message, Toast.LENGTH_SHORT).show();
    }

    @ReactMethod
        public void startActivityFromJS(String name, String params){
            try{
                Activity currentActivity = getCurrentActivity();
                if(null!=currentActivity){
                    Class toActivity = Class.forName(name);
                    Intent intent = new Intent(currentActivity,toActivity);
                    intent.putExtra("params", params);
                    currentActivity.startActivity(intent);
                }
            }catch(Exception e){
                throw new JSApplicationIllegalArgumentException(
                        "不能打开Activity : "+e.getMessage());
            }
        }
    @ReactMethod
    public void openDiscovery(){
        MainActivity m = (MainActivity) getCurrentActivity();
       m.openDiscovery();
    }
    @ReactMethod
    public void update(Callback toUpdate){
        MainActivity m = (MainActivity) getCurrentActivity();
        m.setUpdate(toUpdate);
    }
    @ReactMethod
    public void send(String message){
        MainActivity m = (MainActivity) getCurrentActivity();
        m.Send(message);
    }
    @ReactMethod
    public void init(){
        MainActivity m = (MainActivity) getCurrentActivity();
        //m.send(message)
        m.create();
    }
    @ReactMethod
    public void selectDeviceToPair(String data,Callback success){
        MainActivity m = (MainActivity) getCurrentActivity();
        m.selectDeviceToPair(data,success);
    }
}