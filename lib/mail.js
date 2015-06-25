var request = Npm.require('request');
var crypto = Npm.require('crypto');

Mail = function() {
    this.send = function (params) {
        var api = 'https://api.submail.cn/mail/send.json';
        var requestParams = params;
        requestParams['appid'] = Config.mailConfig.appid;
        var self = this;
        request({
            uri: 'https://api.submail.cn/service/timestamp.json',
            method: 'GET'
        }, function (error, response, body) {
            var result = JSON.parse(body);
            requestParams['timestamp'] = result["timestamp"];
            requestParams['sign_type'] = Config.mailConfig.signtype;
            requestParams['signature'] = self.createSignature(requestParams);
            request.post({url: api, formData: requestParams}, function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('upload failed:', err);
                }
                console.log('Upload successful!  Server responded with:', body);
            });
        });
    };
    this.xsend = function (params) {
        var api = 'https://api.submail.cn/mail/xsend.json';
        var requestParams = params;
        requestParams['appid'] = Config.mailConfig.appid;
        var self = this;
        request({
            uri: 'https://api.submail.cn/service/timestamp.json',
            method: 'GET'
        }, function (error, response, body) {
            var result = JSON.parse(body);
            requestParams['timestamp'] = result["timestamp"];
            requestParams['sign_type'] = Config.mailConfig.signtype;
            requestParams['signature'] = self.createSignature(requestParams);
            request.post({url: api, formData: requestParams}, function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('upload failed:', err);
                }
                console.log('Upload successful!  Server responded with:', body);
            });
        });
    };
    this.subscribe = function (params) {
        var api = 'https://api.submail.cn/addressbook/mail/subscribe.json';
        var requestParams = params;
        requestParams['appid'] = Config.mailConfig.appid;
        var self = this;
        request({
            uri: 'https://api.submail.cn/service/timestamp.json',
            method: 'GET'
        }, function (error, response, body) {
            var result = JSON.parse(body);
            requestParams['timestamp'] = result["timestamp"];
            requestParams['sign_type'] = Config.mailConfig.signtype;
            requestParams['signature'] = self.createSignature(requestParams);
            request.post({url: api, formData: requestParams}, function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('upload failed:', err);
                }
                console.log('Upload successful!  Server responded with:', body);
            });
        });
    };
    this.unsubscribe = function (params) {
        var api = 'https://api.submail.cn/addressbook/mail/unsubscribe.json';
        var requestParams = params;
        requestParams['appid'] = Config.mailConfig.appid;
        var self = this;
        request({
            uri: 'https://api.submail.cn/service/timestamp.json',
            method: 'GET'
        }, function (error, response, body) {
            var result = JSON.parse(body);
            requestParams['timestamp'] = result["timestamp"];
            requestParams['sign_type'] = Config.mailConfig.signtype;
            requestParams['signature'] = self.createSignature(requestParams);
            request.post({url: api, formData: requestParams}, function optionalCallback(err, httpResponse, body) {
                if (err) {
                    return console.error('upload failed:', err);
                }
                console.log('Upload successful!  Server responded with:', body);
            });
        });
    };
    this.createSignature = function (params) {
        if (Config.mailConfig.signtype == 'normal') {
            return Config.mailConfig.appkey;
        } else {
            return this.buildSignature(params);
        }
    };

    this.buildSignature = function (params) {
        var sortedParams = this.sortOnKeys(params);
        var signStr = "";
        for (var key in sortedParams) {
            signStr += key + '=' + sortedParams[key] + '&';
        }
        signStr = signStr.substring(0, signStr.length - 1);
        signStr = Config.mailConfig.appid + Config.mailConfig.appkey + signStr + Config.mailConfig.appid + Config.mailConfig.appkey;
        if (Config.mailConfig.signtype == 'md5') {
            var md5sum = crypto.createHash('md5');
            md5sum.update(signStr);
            return md5sum.digest('hex');
        }
        if (Config.mailConfig.signtype == 'sha1') {
            var sha1sum = crypto.createHash('sha1');
            sha1sum.update(signStr);
            return sha1sum.digest('hex');
        }
        return '';
    };

    this.sortOnKeys = function (dict) {
        var sorted = [];
        for (var key in dict) {
            if (key == 'attachments') {
                continue;
            }
            sorted[sorted.length] = key;
        }
        sorted.sort();

        var tempDict = {};
        for (var i = 0; i < sorted.length; i++) {
            tempDict[sorted[i]] = dict[sorted[i]];
        }

        return tempDict;
    };
};