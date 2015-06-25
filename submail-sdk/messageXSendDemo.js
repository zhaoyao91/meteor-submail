var MessageXSend = require('./messageXSend.js');

var messageXSend = new MessageXSend();

messageXSend.add_to('18610811234');
messageXSend.set_project('qagsN');

messageXSend.xsend();
