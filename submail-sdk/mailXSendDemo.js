var MailXSend = require('./mailXSend.js');

var mailXSend = new MailXSend();

mailXSend.add_to('jseanj@126.com');
mailXSend.add_to_name('jseanj');
mailXSend.set_from('no-reply@insight.submail.me');
mailXSend.set_project('ZvNGo');

mailXSend.xsend();
