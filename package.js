Package.describe({
    name: 'zhaoyao91:submail',
    version: '1.0.0',
    summary: 'a wrapper of submail sdk for meteor',
    git: 'https://github.com/zhaoyao91/meteor-submail',
    documentation: 'README.md'
});

Npm.depends({
    request: '2.58.0'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');

    api.addFiles('lib/config.js', 'server');
    api.addFiles('lib/mail.js', 'server');
    api.addFiles('lib/message.js', 'server');
    api.addFiles('lib/addressbookMail.js', 'server');
    api.addFiles('lib/addressbookMessage.js', 'server');
    api.addFiles('lib/mailSend.js', 'server');
    api.addFiles('lib/mailXSend.js', 'server');
    api.addFiles('lib/messageXSend.js', 'server');
    api.addFiles('submail.js', 'server');

    api.export('Submail', 'server');
});