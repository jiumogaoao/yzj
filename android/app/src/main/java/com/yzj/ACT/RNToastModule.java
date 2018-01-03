package com.yzj.ACT;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

import android.app.Activity;
import android.content.Intent;


import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.JSApplicationIllegalArgumentException;
import com.yzj.ACT.MainActivity;

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
    public void show(String message, int duration) {
        Toast.makeText(getReactApplicationContext(), message, duration).show();
    }

    @ReactMethod
    public void searchDevice(final Callback successCallback, Callback errorCallback)  {
        MainActivity m = (MainActivity) getCurrentActivity();
        m.connect();
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
    public void update(Callback toUpdate){
        MainActivity m = (MainActivity) getCurrentActivity();
        m.setUpdate(toUpdate);
    }
    @ReactMethod
    public void send(String message){
        MainActivity m = (MainActivity) getCurrentActivity();
        m.send(message);
    }
}