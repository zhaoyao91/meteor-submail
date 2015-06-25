Config = function (config) {
    Config.mailConfig = {
        appid: config.mailConfig.appid,
        appkey: config.mailConfig.appkey,
        signtype: config.mailConfig.signtype
    };

    Config.messageConfig = {
        appid: config.messageConfig.appid,
        appkey: config.messageConfig.appkey,
        signtype: config.messageConfig.signtype
    };
};