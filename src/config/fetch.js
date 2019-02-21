import { baseUrl } from './env'
const CryptoJS = require('crypto-js');  //引用AES源码js
const key = CryptoJS.enc.Utf8.parse("1234123412ABCDEF");  //十六位十六进制数作为密钥

export default async(url = '', data = {}, type = 'GET', method = 'fetch') => {
    type = type.toUpperCase();
    url = baseUrl + url;
    let timestamp = '';
    let str = '';
    let sign = '';

    if(window.fetch){
        let requestConfig = {
            credentials: 'include',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            mode: "cors",
        }

        try {
            const response = await fetch(baseUrl+'/index/v1/time', requestConfig);
            const responseJson = await response.json();
            if(responseJson.status == 1){
                timestamp = responseJson.data.time;
                str = responseJson.data.str;
                let srcs = CryptoJS.enc.Utf8.parse(timestamp+str);
                let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: key, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
                /*var hexStr = encrypted.ciphertext.toString().toUpperCase();
                var oldHexStr = CryptoJS.enc.Hex.parse(hexStr);
                var base64Str = CryptoJS.enc.Base64.stringify(oldHexStr);*/
                sign = encrypted ;
            }else{
                throw new Error('访问出错');
            }
        } catch (error) {
            throw new Error(error)
        }
    }else{
        return new Promise((resolve, reject) => {
            let requestObj;
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } else {
                requestObj = new ActiveXObject;
            }

            let sendData = JSON.stringify(data);

            requestObj.open(type, url, true);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.send(sendData);

            requestObj.onreadystatechange = () => {
                if (requestObj.readyState == 4) {
                    if (requestObj.status == 200) {
                        let obj = requestObj.response
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        resolve(obj)
                    } else {
                        reject(requestObj)
                    }
                }
            }
        })
    }

    if (type == 'GET') {
        let dataStr = ''; //数据拼接字符串
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&';
        })

        if (dataStr !== '') {
            dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
            url = url + '?' + dataStr;
        }
    }

    if (window.fetch && method == 'fetch') {
        let requestConfig = {
            credentials: 'include',
            method: type,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'timestamp':timestamp,
                'str':str,
                'sign':sign
            },
            mode: "cors",
        }

        if(type != 'GET'){
            Object.defineProperty(requestConfig, 'body', {
                value: JSON.stringify(data)
            });
        }


        try {
            const response = await fetch(url, requestConfig);
            const responseJson = await response.json();
            return responseJson
        } catch (error) {
            throw new Error(error)
        }
    } else {
        return new Promise((resolve, reject) => {
            let requestObj;
            if (window.XMLHttpRequest) {
                requestObj = new XMLHttpRequest();
            } else {
                requestObj = new ActiveXObject;
            }

            let sendData = '';
            if (type != 'GET') {
                sendData = JSON.stringify(data);
            }

            requestObj.open(type, url, true);
            requestObj.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            requestObj.send(sendData);

            requestObj.onreadystatechange = () => {
                if (requestObj.readyState == 4) {
                    if (requestObj.status == 200) {
                        let obj = requestObj.response
                        if (typeof obj !== 'object') {
                            obj = JSON.parse(obj);
                        }
                        resolve(obj)
                    } else {
                        reject(requestObj)
                    }
                }
            }
        })
    }
}