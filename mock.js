import Mock from 'mockjs';
let mock={}
mock.init = function(){
    Mock.mock(rootURL+'/mechseal/task/simpleSealUseApplyTaskAction_applyTask.action',{
            "responseMessage": {
                "code": "xxx",//状态码
                "data": {id:"001"},
                "message": "xxx",//响应信息
                "stackTrace": null,
                "success": true//接口状态 true成功 false失败
            }
        }
    );
    Mock.mock(rootURL+'/mechseal/task/getState.action',{
            "responseMessage": {
                "code": "xxx",//状态码
                "data": {state:1},//0审批中，1同意，2拒绝
                "message": "xxx",//响应信息
                "stackTrace": null,
                "success": true//接口状态 true成功 false失败
            }
        }
    );
    Mock.mock(rootURL+'/mechseal/task/simpleSealUseApplyTaskAction_updateUseSealInfo.action',{
            "responseMessage": {
                "code": "xxx",//状态码
                "data": {id:"001"},
                "message": "xxx",//响应信息
                "stackTrace": null,
                "success": true//接口状态 true成功 false失败
            }
        }
    );
}
export default mock;