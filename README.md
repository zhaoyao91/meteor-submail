# meteor-submail

**a wrapper of submail sdk for meteor**  
see [submail docs](http://submail.cn/chs/documents/developer/cPDcZ4)
## Installation
`meteor add zhaoyao91:submail`
## Example

    Submail.config({
        mailConfig: {
            appid: 'your app id',
            appkey: 'your app key',
            signtype: 'normal'
        },

        messageConfig: {
            appid: 'your app id',
            appkey: 'your app key',
            signtype: 'normal'
        }
    });

    Meteor.methods({
        sendEmail: function () {
            var mailXSend = new Submail.MailXSend();
    
            mailXSend.add_to('some email address');
            mailXSend.set_project('some project id');
            // ... 
            mailXSend.xsend();
    
            return 'ok';
        },
    
        sendMessage: function () {
            var messageXSend = new Submail.MessageXSend();
    
            messageXSend.add_to('some phone number');
            messageXSend.set_project('some project id');
            // ...
            messageXSend.xsend();
    
            return 'ok';
        }
    });
    
## Other Usage
see [submail docs](http://submail.cn/chs/documents/developer/cPDcZ4)