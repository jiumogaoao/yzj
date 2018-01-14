package com.yzj;

import android.annotation.SuppressLint;
import android.app.Activity;
import android.app.AlertDialog;
import android.app.ProgressDialog;
import android.bluetooth.BluetoothAdapter;
import android.bluetooth.BluetoothDevice;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Bundle;
import android.os.Parcelable;
import android.os.SystemClock;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.view.Window;
import android.widget.ArrayAdapter;
import android.widget.AutoCompleteTextView;
import android.widget.Button;
import android.widget.ImageButton;
import android.widget.LinearLayout;
import android.widget.ListView;
import android.widget.ScrollView;
import android.widget.SimpleAdapter;
import android.widget.TextView;
import android.widget.Toast;

import com.bluetooth.BluetoothCtrl;
import com.bluetooth.BluetoothSppClient;
import com.facebook.react.ReactActivity;
import com.facebook.react.bridge.Callback;
import com.google.gson.Gson;
import com.storage.CJsonStorage;
import com.storage.CKVStorage;
import com.storage.CSharedPreferences;
import com.util.CHexConver;


import java.util.ArrayList;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Hashtable;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class MainActivity extends ReactActivity {
    Callback updateToRN;
    Callback PairSuccess;
    /**CONST: scan device menu id*/
    public static final byte MEMU_RESCAN = 0x01;
    /**CONST: exit application*/
    public static final byte MEMU_EXIT = 0x02;
    /**CONST: about me*/
    public static final byte MEMU_ABOUT = 0x03;
    /**全局静态对象池*/
    private MainApplication mGP = null;
    /**手机的蓝牙适配器*/
    private BluetoothAdapter mBT = BluetoothAdapter.getDefaultAdapter();
    /**蓝牙设备连接句柄*/
    private BluetoothDevice mBDevice = null;
    /**控件:Device Info显示区*/
    private TextView mtvDeviceInfo = null;
    /**控件:Service UUID显示区*/
    private TextView mtvServiceUUID = null;
    /**控件:设备信息显示区容器*/
    private LinearLayout mllDeviceCtrl = null;
    /**控件:选择连接成功后的设备通信模式面板*/
    private LinearLayout mllChooseMode = null;
    /**控件:配对按钮*/
    private Button mbtnPair = null;
    /**控件:通信按钮*/
    private Button mbtnComm = null;
    /**常量:搜索页面返回*/
    public static final byte REQUEST_DISCOVERY = 0x01;
    /**常量:从字符流模式返回*/
    public static final byte REQUEST_BYTE_STREAM = 0x02;
    /**常量:从命令行模式返回*/
    public static final byte REQUEST_CMD_LINE = 0x03;
    /**常量:从键盘模式返回*/
    public static final byte REQUEST_KEY_BOARD = 0x04;
    /**常量:从关于页面返回*/
    public static final byte REQUEST_ABOUT = 0x05;
    /**选定设备的配置信息*/
    private Hashtable<String, String> mhtDeviceInfo = new Hashtable<String, String>();
    /**蓝牙配对进程操作标志*/
    private boolean mbBonded = false;
    /**获取到的UUID Service 列表信息*/
    private ArrayList<String> mslUuidList = new ArrayList<String>();
    /**保存蓝牙进入前的开启状态*/
    private boolean mbBleStatusBefore = false;
    /*************************************/
    /**CONST: scan device menu id*/
    public static final int MEMU_SCAN = 1;
    /**CONST: quit system*/
    public static final int MEMU_QUIT = 2;
    /**CONST: device type bltetooth 2.1*/
    public static final int DEVICE_TYPE_BREDR = 0x01;
    /**CONST: device type bltetooth 4.0 ble*/
    public static final int DEVICE_TYPE_BLE = 0x02;
    /**CONST: device type bltetooth double mode*/
    public static final int DEVICE_TYPE_DUMO = 0x03;

    public final static String EXTRA_DEVICE_TYPE = "android.bluetooth.device.extra.DEVICE_TYPE";

    /** Discovery is Finished */
    private boolean _discoveryFinished;

    /**bluetooth List View*/
    private ListView mlvList = null;
    /**
     * Storage the found bluetooth devices
     * format:<MAC, <Key,Val>>;Key=[RSSI/NAME/COD(class od device)/BOND/UUID]
     * */
    private Hashtable<String, Hashtable<String, String>> mhtFDS = null;

    /**ListView的动态数组对象(存储用于显示的列表数组)*/
    private ArrayList<HashMap<String, Object>> malListItem = null;
    /**SimpleAdapter对象(列表显示容器对象)*/
    private SimpleAdapter msaListItemAdapter = null;
    /*************************************/
    /**Control: the Send button*/
    private ImageButton mibtnSend = null;
    /**Controls: input box*/
    private AutoCompleteTextView mactvInput = null;
    /**Controls: data receive area*/
    private TextView mtvReceive = null;
    /**Control: Scroll screen control*/
    private ScrollView msvCtl = null;
    /**对象:引用全局的蓝牙连接对象*/
    protected BluetoothSppClient mBSC = null;
    /**对象:引用全局的动态存储对象*/
    protected CKVStorage mDS = null;
    /**控件:发送数据量*/
    private TextView mtvTxdCount = null;
    /**控件:接收数据量*/
    private TextView mtvRxdCount = null;
    /**控件:连接保持时间*/
    private TextView mtvHoleRun = null;
    /**常量:历史发送命令字符保存关键字*/
    protected static final String KEY_HISTORY = "send_history";
    /**常量:历史发送命令字符串分隔符(将命令历史保存到字符串中，使用这个分隔符进行数组切割)*/
    protected static final String HISTORY_SPLIT = "&#&";
    /**输入自动完成列表*/
    protected ArrayList<String> malCmdHistory = new ArrayList<String>();
    /**常量:动态存储存储对象的Key; subkey:input_mode/output_mode*/
    protected final static String KEY_IO_MODE = "key_io_mode";
    /** 输入模式 */
    protected byte mbtInputMode = BluetoothSppClient.IO_MODE_STRING;
    /** 输出模式 */
    protected byte mbtOutputMode = BluetoothSppClient.IO_MODE_STRING;
    /**线程终止标志(用于终止监听线程)*/
    protected boolean mbThreadStop = false;
    /**未设限制的AsyncTask线程池(重要)*/
    protected static ExecutorService FULL_TASK_EXECUTOR;
    Gson gson = new Gson();
    static{
        FULL_TASK_EXECUTOR = (ExecutorService) Executors.newCachedThreadPool();
    };
    /***********************************/



    /**广播监听:获取UUID服务*/
    private BroadcastReceiver _mGetUuidServiceReceiver = new BroadcastReceiver(){
        @Override
        public void onReceive(Context arg0, Intent intent){
            String action = intent.getAction();
            int iLoop = 0;
            if (BluetoothDevice.ACTION_UUID.equals(action)){
                Parcelable[] uuidExtra =
                        intent.getParcelableArrayExtra("android.bluetooth.device.extra.UUID");
                if (null != uuidExtra)
                    iLoop = uuidExtra.length;
				/*uuidExtra should contain my service's UUID among his files, but it doesn't!!*/
                for(int i=0; i<iLoop; i++)
                    mslUuidList.add(uuidExtra[i].toString());
            }
        }
    };
    /** 广播监听:蓝牙配对处理 */
    private BroadcastReceiver _mPairingRequest = new BroadcastReceiver(){
        @Override
        public void onReceive(Context context, Intent intent){
            BluetoothDevice device = null;
            if (intent.getAction().equals(BluetoothDevice.ACTION_BOND_STATE_CHANGED)){	//配对状态改变时，的广播处理
                device = intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE);
                if (device.getBondState() == BluetoothDevice.BOND_BONDED)
                    mbBonded = true;//蓝牙配对设置成功
                else
                    mbBonded = false;//蓝牙配对进行中或者配对失败
            }
        }
    };

//	@Override
//	public boolean onCreateOptionsMenu(Menu menu)
//	{
//		// Inflate the menu; this adds items to the action bar if it is present.
//		getMenuInflater().inflate(R.menu.act_main, menu);
//		return true;
//	}

    /**
     * add top menu
     * */
    /*@Override
    public boolean onCreateOptionsMenu(Menu menu){
        super.onCreateOptionsMenu(menu);
        //扫描设备
        MenuItem miScan = menu.add(0, MEMU_RESCAN, 0, getString(R.string.actMain_menu_rescan));
        miScan.setShowAsAction(MenuItem.SHOW_AS_ACTION_IF_ROOM);
        //进入关于页面
        MenuItem miAbout = menu.add(0, MEMU_ABOUT, 1, getString(R.string.menu_about));
        miAbout.setShowAsAction(MenuItem.SHOW_AS_ACTION_NEVER);
        //退出系统
        MenuItem miExit = menu.add(0, MEMU_EXIT, 2, getString(R.string.menu_close));
        miExit.setShowAsAction(MenuItem.SHOW_AS_ACTION_NEVER);
        return super.onCreateOptionsMenu(menu);
    }*/

    /**
     * 菜单点击后的执行指令
     * */
    /*@Override
    public boolean onMenuItemSelected(int featureId, MenuItem item) {
        switch(item.getItemId()) {
            case MEMU_RESCAN: //开始扫描
                this.mGP.closeConn();//关闭连接
                this.initActivityView(); //进入扫描时，显示界面初始化
                this.openDiscovery(); //进入搜索页面
                return true;
            case MEMU_EXIT: //退出程序
                this.finish();
                return true;
            case MEMU_ABOUT: //打开关于页面
                this.openAbout();
                return true;
            default:
                return super.onMenuItemSelected(featureId, item);
        }
    }*/

    /**
     * 页面构造
     * */
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //this.requestWindowFeature(Window.FEATURE_NO_TITLE);
    }
    public void create(){
        if (null == mBT){ //系统中不存在蓝牙模块
            Toast.makeText(this, "Bluetooth module not found", Toast.LENGTH_LONG).show();
            //this.finish();
        }else{
            this.initFirstInstallTimestemp(); //记录首次安装的时间

            this.mGP = ((MainApplication)this.getApplicationContext()); //得到全局对象的引用

            new startBluetoothDeviceTask().execute(""); //启动蓝牙设备
        }

    }

    /**
     * 初始化首次安装程序的时间
     */
    private void initFirstInstallTimestemp(){
        CKVStorage oDS = new CSharedPreferences(this);
        if (oDS.getLongVal("SYSTEM", "FIRST_INSTALL_TIMESTEMP") == 0){
            oDS.setVal("SYSTEM", "FIRST_INSTALL_TIMESTEMP", System.currentTimeMillis()).saveStorage();
        }
    }

    /**
     * 初始化显示界面的控件
     * @return void
     * */
    private void initActivityView(){
        this.mllDeviceCtrl.setVisibility(View.GONE); //隐藏 扫描到的设备信息
        this.mbtnPair.setVisibility(View.GONE); //隐藏 配对按钮
        this.mbtnComm.setVisibility(View.GONE); //隐藏 连接按钮
        this.mllChooseMode.setVisibility(View.GONE); //隐藏 通信模式选择
    }

    /**
     * 析构处理
     * */
    @Override
    protected void onDestroy() {
        super.onDestroy();

        if (mBT.isDiscovering())
            mBT.cancelDiscovery();
        this.mGP.closeConn();//关闭连接

        //检查如果进入前蓝牙是关闭的状态，则退出时关闭蓝牙
        if (null != mBT && !this.mbBleStatusBefore)
            mBT.disable();
    }

    /**
     * 进入搜索蓝牙设备列表页面
     * */
    public void openDiscovery(){
        //进入蓝牙设备搜索界面
        /*Intent intent = new Intent(this, actDiscovery.class);
        this.startActivityForResult(intent, REQUEST_DISCOVERY); //等待返回搜索结果*/
        //立即启动扫描线程
        new scanDeviceTask().execute("");
    }

    /**
     * 进入关于页面
     * */
    private void openAbout(){
        Intent intent = new Intent(this, actAbout.class);
        this.startActivityForResult(intent, REQUEST_ABOUT); //等待返回搜索结果
    }

    /**
     * 显示选中这被的信息
     * @return void
     * */
    private void showDeviceInfo(){
		/*显示需要连接的设备信息*/
        this.mtvDeviceInfo.setText(
                String.format(getString(R.string.actMain_device_info),
                        this.mhtDeviceInfo.get("NAME"),
                        this.mhtDeviceInfo.get("MAC"),
                        this.mhtDeviceInfo.get("COD"),
                        this.mhtDeviceInfo.get("RSSI"),
                        this.mhtDeviceInfo.get("DEVICE_TYPE"),
                        this.mhtDeviceInfo.get("BOND"))
        );
    }
    /**
     * 显示Service UUID信息
     * @return void
     * */
    private void showServiceUUIDs(){
        //对于4.0.3以上的系统支持获取UUID服务内容的操作
        if (Build.VERSION.SDK_INT >= 15){
            new GetUUIDServiceTask().execute("");
        }else{	//不支持获取uuid service信息
            this.mtvServiceUUID.setText(getString(R.string.actMain_msg_does_not_support_uuid_service));
        }
    }

    /**
     * 蓝牙设备选择完后返回处理
     * */
    public void selectDeviceToPair(String data,Callback success){
        PairSuccess = success;
        HashMap<String, String> s = gson.fromJson(data, HashMap.class);
        this.mhtDeviceInfo.put("NAME", s.get("NAME"));
        this.mhtDeviceInfo.put("MAC", s.get("MAC"));
        this.mhtDeviceInfo.put("COD", s.get("COD"));
        this.mhtDeviceInfo.put("RSSI", s.get("RSSI"));
        this.mhtDeviceInfo.put("DEVICE_TYPE", s.get("DEVICE_TYPE"));
        this.mhtDeviceInfo.put("BOND", s.get("BOND"));
        //如果设备未配对，显示配对操作
        if (this.mhtDeviceInfo.get("BOND").equals(getString(R.string.actDiscovery_bond_nothing))){
            this.onClickBtnPair();
        }else{
            //已存在配对关系，建立与远程设备的连接
            this.mBDevice = this.mBT.getRemoteDevice(this.mhtDeviceInfo.get("MAC"));
            this.onClickBtnConn();
        }
    }


    /**
     * 配对按钮的单击事件
     * @return void
     * */
    public void onClickBtnPair(){
        new PairTask().execute(this.mhtDeviceInfo.get("MAC"));
    }

    /**
     * 建立设备的串行通信连接
     * 建立成功后出现通信模式的选择按钮
     * @return void
     * */
    public void onClickBtnConn(){
        new connSocketTask().execute(this.mBDevice.getAddress());
    }

    /**
     * 通信模式选择-串行流模式
     * @return void
     * */
    public void onClickBtnSerialStreamMode(){
        //进入串行流模式
        this.toConn();
    }

    /**
     * 通信模式选择-键盘模式
     * @return void
     * */
    public void onClickBtnKeyBoardMode(View v){
        //进入键盘模式界面
        Intent intent = new Intent(this, actKeyBoard.class);
        this.startActivityForResult(intent, REQUEST_KEY_BOARD); //等待返回搜索结果
    }

    /**
     * 通信模式选择-命令行模式
     * @return void
     * */
    public void onClickBtnCommandLine(View v){
        //进入命令行模式界面
        Intent intent = new Intent(this, actCmdLine.class);
        this.startActivityForResult(intent, REQUEST_CMD_LINE); //等待返回搜索结果
    }

    //----------------
    /*多线程处理(开机时启动蓝牙)*/
    private class startBluetoothDeviceTask extends AsyncTask<String, String, Integer> {
        /**常量:蓝牙已经启动*/
        private static final int RET_BULETOOTH_IS_START = 0x0001;
        /**常量:设备启动失败*/
        private static final int RET_BLUETOOTH_START_FAIL = 0x04;
        /**等待蓝牙设备启动的最长时间(单位S)*/
        private static final int miWATI_TIME = 15;
        /**每次线程休眠时间(单位ms)*/
        private static final int miSLEEP_TIME = 150;
        /**进程等待提示框*/
        private ProgressDialog mpd;

        /**
         * 线程启动初始化操作
         */
        @Override
        public void onPreExecute(){
	    	/*定义进程对话框*/
            mpd = new ProgressDialog(MainActivity.this);
            mpd.setMessage(getString(R.string.actDiscovery_msg_starting_device));//蓝牙启动中
            mpd.setCancelable(false);//不可被终止
            mpd.setCanceledOnTouchOutside(false);//点击外部不可终止
            mpd.show();
            mbBleStatusBefore = mBT.isEnabled(); //保存进入前的蓝牙状态
        }

        /**异步的方式启动蓝牙，如果蓝牙已经启动则直接进入扫描模式*/
        @Override
        protected Integer doInBackground(String... arg0){
            int iWait = miWATI_TIME * 1000;//倒减计数器
			/* BT isEnable */
            if (!mBT.isEnabled()){
                mBT.enable(); //启动蓝牙设备
                //等待miSLEEP_TIME秒，启动蓝牙设备后再开始扫描
                while(iWait > 0){
                    if (!mBT.isEnabled())
                        iWait -= miSLEEP_TIME; //剩余等待时间计时
                    else
                        break; //启动成功跳出循环
                    SystemClock.sleep(miSLEEP_TIME);
                }
                if (iWait < 0) //表示在规定时间内,蓝牙设备未启动
                    return RET_BLUETOOTH_START_FAIL;
            }
            return RET_BULETOOTH_IS_START;
        }

        /**
         * 阻塞任务执行完后的清理工作
         */
        @Override
        public void onPostExecute(Integer result){
            if (mpd.isShowing())
                mpd.dismiss();//关闭等待对话框

            if (RET_BLUETOOTH_START_FAIL == result){	//蓝牙设备启动失败
                AlertDialog.Builder builder = new AlertDialog.Builder(MainActivity.this); //对话框控件
                builder.setTitle(getString(R.string.dialog_title_sys_err));//设置标题
                builder.setMessage(getString(R.string.actDiscovery_msg_start_bluetooth_fail));
                builder.setPositiveButton(R.string.btn_ok, new DialogInterface.OnClickListener(){
                    @Override
                    public void onClick(DialogInterface dialog, int which){
                        mBT.disable();
                        //蓝牙设备无法启动，直接终止程序
                        finish();
                    }
                });
                builder.create().show();
            }
            else if (RET_BULETOOTH_IS_START == result){	//蓝牙启动成功
                //openDiscovery(); //进入搜索页面
            }
        }
    }

    //----------------
    /*多线程处理(配对处理线程)*/
    private class PairTask extends AsyncTask<String, String, Integer>{
        /**常量:配对成功*/
        static private final int RET_BOND_OK = 0x00;
        /**常量: 配对失败*/
        static private final int RET_BOND_FAIL = 0x01;
        /**常量: 配对等待时间(10秒)*/
        static private final int iTIMEOUT = 1000 * 10;
        /**
         * 线程启动初始化操作
         */
        @Override
        public void onPreExecute(){
            //提示开始建立配对
            Toast.makeText(MainActivity.this,
                    getString(R.string.actMain_msg_bluetooth_Bonding),
                    Toast.LENGTH_SHORT).show();
    		/*蓝牙自动配对*/
            //监控蓝牙配对请求
            registerReceiver(_mPairingRequest, new IntentFilter(BluetoothCtrl.PAIRING_REQUEST));
            //监控蓝牙配对是否成功
            registerReceiver(_mPairingRequest, new IntentFilter(BluetoothDevice.ACTION_BOND_STATE_CHANGED));
        }

        @Override
        protected Integer doInBackground(String... arg0){
            final int iStepTime = 150;
            int iWait = iTIMEOUT; //设定超时等待时间
            try{	//开始配对
                //获得远端蓝牙设备
                mBDevice = mBT.getRemoteDevice(arg0[0]);
                BluetoothCtrl.createBond(mBDevice);
                mbBonded = false; //初始化配对完成标志
            }catch (Exception e1){	//配对启动失败
                Log.d(getString(R.string.app_name), "create Bond failed!");
                e1.printStackTrace();
                return RET_BOND_FAIL;
            }
            while(!mbBonded && iWait > 0){
                SystemClock.sleep(iStepTime);
                iWait -= iStepTime;
            }
            return (int) ((iWait > 0)? RET_BOND_OK : RET_BOND_FAIL);
        }

        /**
         * 阻塞任务执行完后的清理工作
         */
        @Override
        public void onPostExecute(Integer result){
            unregisterReceiver(_mPairingRequest); //注销监听

            if (RET_BOND_OK == result){//配对建立成功
                Toast.makeText(MainActivity.this,
                        getString(R.string.actMain_msg_bluetooth_Bond_Success),
                        Toast.LENGTH_SHORT).show();
                mhtDeviceInfo.put("BOND", getString(R.string.actDiscovery_bond_bonded));//显示已绑定
                MainActivity.this.onClickBtnConn();
            }else{	//在指定时间内未完成配对
               Toast.makeText(MainActivity.this,
                        getString(R.string.actMain_msg_bluetooth_Bond_fail),
                        Toast.LENGTH_LONG).show();
                try{
                    BluetoothCtrl.removeBond(mBDevice);
                }catch (Exception e){
                    Log.d(getString(R.string.app_name), "removeBond failed!");
                    e.printStackTrace();
                }
                mbtnPair.setEnabled(true); //解冻配对按钮
            }
        }
    }

    //----------------
    /*多线程处理(读取UUID Service信息线程)*/
    private class GetUUIDServiceTask extends AsyncTask<String, String, Integer>{
        /**延时等待时间*/
        private static final int miWATI_TIME = 4 * 1000;
        /**每次检测的时间*/
        private static final int miREF_TIME = 200;
        /**uuis find service is run*/
        private boolean mbFindServiceIsRun = false;
        /**
         * 线程启动初始化操作
         */
        @Override
        public void onPreExecute(){
            mslUuidList.clear();
            //提示UUID服务搜索中
            mtvServiceUUID.setText(getString(R.string.actMain_find_service_uuids));
            // Don't forget to unregister during onDestroy
            registerReceiver(_mGetUuidServiceReceiver,
                    new IntentFilter(BluetoothDevice.ACTION_UUID));// Register the BroadcastReceiver
            this.mbFindServiceIsRun = mBDevice.fetchUuidsWithSdp();
        }

        /**
         * 线程异步处理
         */
        @Override
        protected Integer doInBackground(String... arg0){
            int iWait = miWATI_TIME;//倒减计数器

            if (!this.mbFindServiceIsRun)
                return null; //UUID Service扫瞄服务器启动失败

            while(iWait > 0){
                if (mslUuidList.size() > 0 && iWait > 1500)
                    iWait = 1500; //如果找到了第一个UUID则继续搜索N秒后结束
                SystemClock.sleep(miREF_TIME);
                iWait -= miREF_TIME;//每次循环减去刷新时间
            }
            return null;
        }
        /**
         * 阻塞任务执行完后的清理工作
         */
        @Override
        public void onPostExecute(Integer result){
            StringBuilder sbTmp = new StringBuilder();
            unregisterReceiver(_mGetUuidServiceReceiver); //注销广播监听
            //如果存在数据，则自动刷新
            if (mslUuidList.size() > 0){
                for(int i=0; i<mslUuidList.size(); i++)
                    sbTmp.append(mslUuidList.get(i) + "\n");
                mtvServiceUUID.setText(sbTmp.toString());
            }else//未发现UUIS服务列表
                mtvServiceUUID.setText(R.string.actMain_not_find_service_uuids);
        }
    }

    //----------------
    /*多线程处理(建立蓝牙设备的串行通信连接)*/
    private class connSocketTask extends AsyncTask<String, String, Integer>{
        /**进程等待提示框*/
        private ProgressDialog mpd = null;
        /**常量:连接建立失败*/
        private static final int CONN_FAIL = 0x01;
        /**常量:连接建立成功*/
        private static final int CONN_SUCCESS = 0x02;

        /**
         * 线程启动初始化操作
         */
        @Override
        public void onPreExecute(){
	    	/*定义进程对话框*/
            this.mpd = new ProgressDialog(MainActivity.this);
            this.mpd.setMessage(getString(R.string.actMain_msg_device_connecting));
            this.mpd.setCancelable(false);//可被终止
            this.mpd.setCanceledOnTouchOutside(false);//点击外部可终止
            this.mpd.show();
        }

        @Override
        protected Integer doInBackground(String... arg0){
            if (mGP.createConn(arg0[0]))
                return CONN_SUCCESS; //建立成功
            else
                return CONN_FAIL; //建立失败
        }

        /**
         * 阻塞任务执行完后的清理工作
         */
        @Override
        public void onPostExecute(Integer result){
            this.mpd.dismiss();

            if (CONN_SUCCESS == result){	//通信连接建立成功
                Toast.makeText(MainActivity.this,
                        getString(R.string.actMain_msg_device_connect_succes),
                        Toast.LENGTH_SHORT).show();
                MainActivity.this.onClickBtnSerialStreamMode();
                PairSuccess.invoke(MainActivity.this.mhtDeviceInfo.get("MAC"));
            }else{	//通信连接建立失败
                Toast.makeText(MainActivity.this,
                        getString(R.string.actMain_msg_device_connect_fail),
                        Toast.LENGTH_SHORT).show();
            }
        }
    }
    /**
     * Returns the name of the main component registered from JavaScript.
     * This is used to schedule rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "yzj";
    }

    public void setUpdate(Callback cb){
        updateToRN = cb;
    }

    public void toConn(){
        this.mBSC = ((MainApplication)this.getApplicationContext()).mBSC;
        this.mDS =  ((MainApplication)this.getApplicationContext()).mDS;

        if (null == this.mBSC || !this.mBSC.isConnect()){	//当进入时，发现连接已丢失，则直接返回主界面
            Toast.makeText(this, "no mBSC",Toast.LENGTH_SHORT).show();
            return;
        }
        this.initCtl(); //Initialize controls
        //Loading the contents of the input box automatically
        this.loadAutoComplateCmdHistory(this.getLocalClassName(), this.mactvInput);
        this.initIO_Mode(); //初始化输入输出模式
        new receiveTask()
                .executeOnExecutor(FULL_TASK_EXECUTOR);
    }
    private void initCtl(){
        this.refreshRxdCount();
        this.refreshTxdCount();
    }
    /**
     * 刷新数据统计状态条-接收统计值
     * @return void
     * @see 必须使用 usedDataCount()以后才能使用这个函数
     * */
    @SuppressLint("StringFormatMatches")
    protected void refreshRxdCount(){
        long lTmp = 0;
        if (null != this.mtvRxdCount)
        {
            lTmp = this.mBSC.getRxd();
            this.mtvRxdCount.setText(String.format(getString(R.string.templet_rxd, lTmp)));
            lTmp = this.mBSC.getConnectHoldTime();
            this.mtvHoleRun.setText(String.format(getString(R.string.templet_hold_time, lTmp)));
        }
    }
    /**
     * 刷新数据统计状态条-发送统计值<br/>
     *  备注：同时会刷新运行时间显示值
     * @return void
     * @see 必须使用 usedDataCount()以后才能使用这个函数
     * */
    @SuppressLint("StringFormatMatches")
    protected void refreshTxdCount(){
        long lTmp = 0;
        if (null != this.mtvTxdCount)
        {
            lTmp = this.mBSC.getTxd();
            this.mtvTxdCount.setText(String.format(getString(R.string.templet_txd, lTmp)));
            lTmp = this.mBSC.getConnectHoldTime();
            this.mtvHoleRun.setText(String.format(getString(R.string.templet_hold_time, lTmp)));
        }
    }

    /**
     * 取出用于自动完成控件的命令历史字
     * @param String sClass 所属的类一般为this.getLocalClassName()
     * @param AutoCompleteTextView v 自动完成控件的引用
     * @return void
     * */
    protected void loadAutoComplateCmdHistory(String sClass, AutoCompleteTextView v){
        CKVStorage kvAutoComplate = new CJsonStorage(this, getString(R.string.app_name), "AutoComplateList");
        String sTmp = kvAutoComplate.getStringVal(KEY_HISTORY, sClass);
        kvAutoComplate = null;
        if(!sTmp.equals("")){	//保存输入提示历史
            String[] sT = sTmp.split(HISTORY_SPLIT);
            for (int i=0;i<sT.length; i++)
                this.malCmdHistory.add(sT[i]);
            v.setAdapter(
                    new ArrayAdapter<String>(this,
                            android.R.layout.simple_dropdown_item_1line,sT)
            );
        }
    }
    /**
     * 初始化输入输出模式
     * @return void
     * */
    protected void initIO_Mode(){
        this.mbtInputMode = (byte)this.mDS.getIntVal(KEY_IO_MODE, "input_mode");
        if (this.mbtInputMode == 0)
            this.mbtInputMode = BluetoothSppClient.IO_MODE_STRING;

        this.mbtOutputMode = (byte)this.mDS.getIntVal(KEY_IO_MODE, "output_mode");
        if (this.mbtOutputMode == 0)
            this.mbtOutputMode = BluetoothSppClient.IO_MODE_STRING;
        mBSC.setRxdMode(mbtInputMode);
        mBSC.setTxdMode(mbtOutputMode);
    }
    //----------------
    /*多线程处理(建立蓝牙设备的串行通信连接)*/
    private class receiveTask extends AsyncTask<String, String, Integer>
    {
        /**Constant: the connection is lost*/
        private final static byte CONNECT_LOST = 0x01;
        /**Constant: the end of the thread task*/
        private final static byte THREAD_END = 0x02;
        /**
         * 线程启动初始化操作
         */
        @Override
        public void onPreExecute()
        {
            Toast.makeText(MainActivity.this,
                    getString(R.string.msg_receive_data_wating),
                    Toast.LENGTH_SHORT).show();
            mbThreadStop = false;
        }

        /**
         * 线程异步处理
         */
        @Override
        protected Integer doInBackground(String... arg0){
            mBSC.Receive(); //首次启动调用一次以启动接收线程
            while(!mbThreadStop){
                if (!mBSC.isConnect())//检查连接是否丢失
                    return (int)CONNECT_LOST;

                if (mBSC.getReceiveBufLen() > 0){
                    SystemClock.sleep(20); //先延迟让缓冲区填满
                    this.publishProgress(mBSC.Receive());
                }
            }
            return (int)THREAD_END;
        }

        /**
         * 线程内更新处理
         */
        @Override
        public void onProgressUpdate(String... progress){
            if (null != progress[0]){
                Toast.makeText(MainActivity.this,
                        progress[0],
                        Toast.LENGTH_SHORT).show();
                updateToRN.invoke("{\"type\":\"deviceReceive\",\"data\":\""+replaceBlank(progress[0])+"\"}");
                refreshRxdCount(); //刷新接收数据统计值
            }
        }
        public  String replaceBlank(String src) {
            String dest = "";
            if (src != null) {
                Pattern pattern = Pattern.compile("\t|\r|\n|\\s*");
                Matcher matcher = pattern.matcher(src);
                dest = matcher.replaceAll("");
            }
            return dest;
        }
        /**
         * 阻塞任务执行完后的清理工作
         */
        @Override
        public void onPostExecute(Integer result){
            if (CONNECT_LOST == result) //connection is lost
                Toast.makeText(MainActivity.this,
                        getString(R.string.msg_msg_bt_connect_lost),
                        Toast.LENGTH_SHORT).show();
            else
                Toast.makeText(MainActivity.this,
                        getString(R.string.msg_receive_data_stop),
                        Toast.LENGTH_SHORT).show();
            //mibtnSend.setEnabled(false); //Disable the Send button
            refreshHoldTime(); //刷新数据统计状态条-运行时间
        }
    }
    /**
     * 刷新数据统计状态条-运行时间<br/>
     *  备注：同时会刷新运行时间显示值
     * @return void
     * @see 必须使用 usedDataCount()以后才能使用这个函数
     * */
    @SuppressLint("StringFormatMatches")
    protected void refreshHoldTime(){
        if (null != this.mtvHoleRun)
        {
            long lTmp = this.mBSC.getConnectHoldTime();
            this.mtvHoleRun.setText(String.format(getString(R.string.templet_hold_time, lTmp)));
        }
    }
    /*************************************************************/
    /**
     * Scan for Bluetooth devices. (broadcast listener)
     */
    private BroadcastReceiver _foundReceiver = new BroadcastReceiver(){
        public void onReceive(Context context, Intent intent){
			/* bluetooth device profiles*/
            Hashtable<String, String> htDeviceInfo = new Hashtable<String, String>();

            Log.d(getString(R.string.app_name), ">>Scan for Bluetooth devices");

			/* get the search results */
            BluetoothDevice device = intent.getParcelableExtra(BluetoothDevice.EXTRA_DEVICE);
			/* create found device profiles to htDeviceInfo*/
            Bundle b = intent.getExtras();
            htDeviceInfo.put("RSSI", String.valueOf(b.get(BluetoothDevice.EXTRA_RSSI)));
            if (null == device.getName())
                htDeviceInfo.put("NAME", "Null");
            else
                htDeviceInfo.put("NAME", device.getName());

            htDeviceInfo.put("COD",  String.valueOf(b.get(BluetoothDevice.EXTRA_CLASS)));
            if (device.getBondState() == BluetoothDevice.BOND_BONDED)
                htDeviceInfo.put("BOND", getString(R.string.actDiscovery_bond_bonded));
            else
                htDeviceInfo.put("BOND", getString(R.string.actDiscovery_bond_nothing));
            //TODO:内容为空
            String sDeviceType = String.valueOf(b.get(EXTRA_DEVICE_TYPE));
            if (!sDeviceType.equals("null"))
                htDeviceInfo.put("DEVICE_TYPE", sDeviceType);
            else
                htDeviceInfo.put("DEVICE_TYPE", "-1"); //不存在设备号

			/*adding scan to the device profiles*/
            mhtFDS.put(device.getAddress(), htDeviceInfo);

			/*Refresh show list*/
            showDevices();
        }
    };
    /**
     * Bluetooth scanning is finished processing.(broadcast listener)
     */
    private BroadcastReceiver _finshedReceiver = new BroadcastReceiver(){
        @Override
        public void onReceive(Context context, Intent intent){
            Log.d(getString(R.string.app_name), ">>Bluetooth scanning is finished");
            _discoveryFinished = true; //set scan is finished
            unregisterReceiver(_foundReceiver);
            unregisterReceiver(_finshedReceiver);

			/* 提示用户选择需要连接的蓝牙设备 */
            if (null != mhtFDS && mhtFDS.size()>0){	//找到蓝牙设备
                Toast.makeText(MainActivity.this,
                        getString(R.string.actDiscovery_msg_select_device),
                        Toast.LENGTH_SHORT).show();
            }else{	//未找到蓝牙设备
                Toast.makeText(MainActivity.this,
                        getString(R.string.actDiscovery_msg_not_find_device),
                        Toast.LENGTH_LONG).show();
            }

            String json = gson.toJson(mhtFDS);
            updateToRN.invoke("{\"type\":\"deviceList\",\"data\":" +json+"}");
            if (mBT.isDiscovering())
                mBT.cancelDiscovery();

        }
    };

    /**
     * add top menu
     * */
    /*@Override
    public boolean onCreateOptionsMenu(Menu menu){
        super.onCreateOptionsMenu(menu);
        MenuItem miScan = menu.add(0, MEMU_SCAN, 0, getString(R.string.actDiscovery_menu_scan));
        MenuItem miClose = menu.add(0, MEMU_QUIT, 1, getString(R.string.menu_close));
        miScan.setShowAsAction(MenuItem.SHOW_AS_ACTION_IF_ROOM);
        miClose.setShowAsAction(MenuItem.SHOW_AS_ACTION_IF_ROOM);
        return super.onCreateOptionsMenu(menu);
    }*/

    /**
     * 菜单点击后的执行指令
     * */
    /*@Override
    public boolean onMenuItemSelected(int featureId, MenuItem item) {
        switch(item.getItemId()){
            case MEMU_SCAN: //开始扫描
                new actDiscovery.scanDeviceTask().execute("");
                return true;
            case MEMU_QUIT: //结束程序
                this.setResult(Activity.RESULT_CANCELED, null);
                this.finish();
                return true;
            default:
                return super.onMenuItemSelected(featureId, item);
        }
    }*/



    /**
     * 开始扫描周围的蓝牙设备<br/>
     *  备注:进入这步前必须保证蓝牙设备已经被启动
     *  @return void
     * */
    private void startSearch(){
        _discoveryFinished = false; //标记搜索未结束

        //如果找到的设别对象为空，则创建这个对象。
        if (null == mhtFDS)
            this.mhtFDS = new Hashtable<String, Hashtable<String, String>>();
        else
            this.mhtFDS.clear();

		/* Register Receiver*/
        IntentFilter discoveryFilter = new IntentFilter(BluetoothAdapter.ACTION_DISCOVERY_FINISHED);
        registerReceiver(_finshedReceiver, discoveryFilter);
        IntentFilter foundFilter = new IntentFilter(BluetoothDevice.ACTION_FOUND);
        registerReceiver(_foundReceiver, foundFilter);
        mBT.startDiscovery();//start scan

        this.showDevices(); //the first scan clear show list
    }

    /**
     * 将设备类型ID，转换成设备解释字符串
     * @return String
     * */
    private String toDeviceTypeString(String sDeviceTypeId){
        Pattern pt = Pattern.compile("^[-\\+]?[\\d]+$");
        if (pt.matcher(sDeviceTypeId).matches()){
            switch(Integer.valueOf(sDeviceTypeId)){
                case DEVICE_TYPE_BREDR:
                    return getString(R.string.device_type_bredr);
                case DEVICE_TYPE_BLE:
                    return getString(R.string.device_type_ble);
                case DEVICE_TYPE_DUMO:
                    return getString(R.string.device_type_dumo);
                default: //默认为蓝牙2.0
                    return getString(R.string.device_type_bredr);
            }
        }
        else
            return sDeviceTypeId; //如果不是数字，则直接输出
    }

    /* Show devices list */
    protected void showDevices(){
        if (null == this.malListItem) //数组容器不存在时，创建
            this.malListItem = new ArrayList<HashMap<String, Object>>();


/*
        //如果列表适配器未创建则创建之
        if (null == this.msaListItemAdapter){
            //生成适配器的Item和动态数组对应的元素
            this.msaListItemAdapter = new SimpleAdapter(this,malListItem,//数据源
                    R.layout.list_view_item_devices,//ListItem的XML实现
                    //动态数组与ImageItem对应的子项
                    new String[] {"NAME","MAC", "COD", "RSSI", "DEVICE_TYPE", "BOND"},
                    //ImageItem的XML文件里面的一个ImageView,两个TextView ID
                    new int[] {R.id.device_item_ble_name,
                            R.id.device_item_ble_mac,
                            R.id.device_item_ble_cod,
                            R.id.device_item_ble_rssi,
                            R.id.device_item_ble_device_type,
                            R.id.device_item_ble_bond
                    }
            );
            //添加并且显示
            this.mlvList.setAdapter(this.msaListItemAdapter);
        }

        //构造适配器的数据
        this.malListItem.clear();//清除历史项
        Enumeration<String> e = this.mhtFDS.keys();*/
        /*重新构造数据*/
        /*while (e.hasMoreElements()){
            HashMap<String, Object> map = new HashMap<String, Object>();
            String sKey = e.nextElement();
            map.put("MAC", sKey);
            map.put("NAME", this.mhtFDS.get(sKey).get("NAME"));
            map.put("RSSI", this.mhtFDS.get(sKey).get("RSSI"));
            map.put("COD", this.mhtFDS.get(sKey).get("COD"));
            map.put("BOND", this.mhtFDS.get(sKey).get("BOND"));
            map.put("DEVICE_TYPE", toDeviceTypeString(this.mhtFDS.get(sKey).get("DEVICE_TYPE")));
            this.malListItem.add(map);
        }
        this.msaListItemAdapter.notifyDataSetChanged(); //通知适配器内容发生变化自动跟新*/
    }

    //----------------
    /*多线程处理:设备扫描监管线程*/
public class scanDeviceTask extends AsyncTask<String, String, Integer>{
    /**常量:蓝牙未开启*/
    private static final int RET_BLUETOOTH_NOT_START = 0x0001;
    /**常量:设备搜索完成*/
    private static final int RET_SCAN_DEVICE_FINISHED = 0x0002;
    /**等待蓝牙设备启动的最长时间(单位S)*/
    private static final int miWATI_TIME = 10;
    /**每次线程休眠时间(单位ms)*/
    private static final int miSLEEP_TIME = 150;
    /**进程等待提示框*/
    private ProgressDialog mpd = null;

    /**
     * 线程启动初始化操作
     */
    @Override
    public void onPreExecute(){
	    	/*定义进程对话框*/
        this.mpd = new ProgressDialog(MainActivity.this);
        this.mpd.setMessage(getString(R.string.actDiscovery_msg_scaning_device));
        this.mpd.setCancelable(true);//可被终止
        this.mpd.setCanceledOnTouchOutside(true);//点击外部可终止
        this.mpd.setOnCancelListener(new DialogInterface.OnCancelListener(){
            @Override
            public void onCancel(DialogInterface dialog){	//按下取消按钮后，终止搜索等待线程
                _discoveryFinished = true;
            }
        });
        this.mpd.show();

        startSearch(); //执行蓝牙扫描
    }

    @Override
    protected Integer doInBackground(String... params){
        if (!mBT.isEnabled()) //蓝牙未启动
            return RET_BLUETOOTH_NOT_START;

        int iWait = miWATI_TIME * 1000;//倒减计数器
        //等待miSLEEP_TIME秒，启动蓝牙设备后再开始扫描
        while(iWait > 0){
            if (_discoveryFinished)
                return RET_SCAN_DEVICE_FINISHED; //蓝牙搜索结束
            else
                iWait -= miSLEEP_TIME; //剩余等待时间计时
            SystemClock.sleep(miSLEEP_TIME);;
        }
        return RET_SCAN_DEVICE_FINISHED; //在规定时间内，蓝牙设备未启动
    }
    /**
     * 线程内更新处理
     */
    @Override
    public void onProgressUpdate(String... progress){
    }
    /**
     * 阻塞任务执行完后的清理工作
     */
    @Override
    public void onPostExecute(Integer result){
        if (this.mpd.isShowing())
            this.mpd.dismiss();//关闭等待对话框

        if (mBT.isDiscovering())
            mBT.cancelDiscovery();

        if (RET_SCAN_DEVICE_FINISHED == result){//蓝牙设备搜索结束

        }else if (RET_BLUETOOTH_NOT_START == result){	//提示蓝牙未启动
            Toast.makeText(MainActivity.this, getString(R.string.actDiscovery_msg_bluetooth_not_start),
                    Toast.LENGTH_SHORT).show();
        }
    }
}
    /**
     * Send button event handler
     * */
    public void Send(String sSend){
        Log.d("send", sSend);
        sSend.trim();
        Log.d("send", sSend);
        if (BluetoothSppClient.IO_MODE_HEX == this.mbtOutputMode){
            Log.d("send", "IO_MODE_HEX");
            //当使用HEX发送时，对发送内容做检查
            if (!CHexConver.checkHexStr(sSend)){
                Toast.makeText(this, //提示 本次发送失败
                        getString(R.string.msg_not_hex_string),
                        Toast.LENGTH_SHORT).show();
                return;
            }
        }

        //this.mibtnSend.setEnabled(false);// 禁用发送按钮
//    	sSend += "\r\n";
        Log.d("send", "toSend");
        if (this.mBSC.Send(sSend) >= 0){
            Log.d("send", "toSend>1");
            this.refreshTxdCount(); //刷新发送数据计值
            //this.mibtnSend.setEnabled(true); //发送成功恢复发送按钮
            //this.addAutoComplateVal(sSend, this.mactvInput); //追加自动完成值
        }else{
            Toast.makeText(this, //提示 连接丢失
                    getString(R.string.msg_msg_bt_connect_lost),
                    Toast.LENGTH_LONG).show();
            //this.mactvInput.setEnabled(false); //禁用输入框
        }
    }
}
