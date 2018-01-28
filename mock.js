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
    Mock.mock(rootURL+'/mechseal/task/simpleSealUseApplyTaskAction_queryTask.action',{
            "bizInfo": null,
            "pageBean": {
                "data": [
                    {
                        "applyNum": 2,
                        "applyOrgName": "总行",
                        "applyOrgNo": "root",
                        "applyPeopleCode": "a01",
                        "applyPeopleName": "申请人",
                        "applyTime": "2017-04-07 16:14:59",
                        "autoId": "402881e45b477930015b477b12790000",
                        "bizKey": "402881e45b477930015b477b12790000",
                        "externMap": null,
                        "fileNum": 2,
                        "fileOwnerCode": "a01",
                        "fileOwnerName": "申请人",
                        "materialName": "werwe",
                        "memo": "",
                        "status": "",//任务状态（001：等待审核；002：审核通过；003：审核拒绝；004:等待用印；006:用印完成；008:异常）
                        " operatorOrgNo " : "",//审核机构
                        "storeId": "1e2ee1ddcf1140e0ae1ba41308b6864114593252722C86197893F9A476",
                        "title": "sdfsd"
                    }
                ],
                "firstNo": 1,
                "order": "desc,desc",
                "orderBy": "createdate,createtime",
                "pageNo": 1,
                "pageSize": 10,
                "totalPages": 1,
                "totalRecords": 4
            },
            "responseMessage": {
                "code": "GSSUSSFW001",
                "data": null,
                "message": "请求响应成功",
                "success": true
            }
        }
    );
}
export default mock;