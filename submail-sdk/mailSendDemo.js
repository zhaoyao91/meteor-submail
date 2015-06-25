var MailSend = require('./mailSend.js');

var mailSend = new MailSend();

mailSend.add_to('jseanj@126.com');
mailSend.set_from('no-reply@insight.submail.me');
mailSend.set_subject('test subject');
mailSend.set_text('test text');
mailSend.send();