function FindProxyForURL(url, host) {
    try {
        var i;
        var schema = url.split(':')[0];
        if (schema !== 'http' && schema !== 'https') {
            return 'DIRECT';
        }
        var proxies = [{
            "type": "HTTPS",
            "host": "tronwertfrort5.me",
            "port": "443"
        }, {
            "type": "HTTPS",
            "host": "storage.hostprojects.org",
            "port": "443"
        }, {
            "type": "HTTPS",
            "host": "cdn.aaacdn.net",
            "port": "443"
        }, {
            "type": "HTTPS",
            "host": "assets.cdn-prime.net",
            "port": "443"
        }];
        var proxyString = '';
        for (i = 0; i < proxies.length; i++) {
            var proxy = proxies[i];
            proxyString += proxy.type + ' ' + proxy.host + ':' + proxy.port + '; ';
        }
        var bypassHosts = [];
        for (i = 0; i < bypassHosts.length; i++) {
            if (shExpMatch(host, bypassHosts[i])) {
                return DIRECT;
            }
        }
        var bypassUrls = [];
        for (i = 0; i < bypassUrls.length; i++) {
            if (url === bypassUrls[i]) {
                return DIRECT;
            }
        }
        var hosts = ["userapi.com", "*.userapi.com", "vk.com", "*.vk.com", "vk.me", "*.vk.me", "vk-cdn.net", "*.vk-cdn.net", "vkontakte.ru", "*.vkontakte.ru", "vk.cc", "*.vk.cc", "vk.me", "*.vk.me", "vkuservideo.com", "*.vkuservideo.com", "vkuservideo.net", "*.vkuservideo.net", "allods.com", "*.allods.com", "allods.ru", "*.allods.ru", "allodsteam.ru", "*.allodsteam.ru", "appsmail.ru", "*.appsmail.ru", "attachmail.ru", "*.attachmail.ru", "attachmy.com", "*.attachmy.com", "beep.car", "*.beep.car", "beepcar.ru", "*.beepcar.ru", "beepcarstatic.ru", "*.beepcarstatic.ru", "bk.ru", "*.bk.ru", "cdnmail.ru", "*.cdnmail.ru", "cldmail.ru", "*.cldmail.ru", "clouder.pics", "*.clouder.pics", "datacloudmail.ru", "*.datacloudmail.ru", "dclub.ru", "*.dclub.ru", "deliveryclub.ru", "*.deliveryclub.ru", "distribmail.ru", "*.distribmail.ru", "donationalerts.ru", "*.donationalerts.ru", "dwar.ru", "*.dwar.ru", "fie.org", "*.fie.org", "giftomaster.com", "*.giftomaster.com", "giftomatic.org", "*.giftomatic.org", "gmru.net", "*.gmru.net", "ic2ster.com", "*.ic2ster.com", "icqapi.com", "*.icqapi.com", "icq.com", "*.icq.com", "icqmail.com", "*.icqmail.com", "icq.net", "*.icq.net", "imgsmail.ru", "*.imgsmail.ru", "inbox.ru", "*.inbox.ru", "iseeku.com", "*.iseeku.com", "iseekyou.com", "*.iseekyou.com", "jugger.ru", "*.jugger.ru", "list.ru", "*.list.ru", "mailapps.me", "*.mailapps.me", "mail.ru", "*.mail.ru", "mail.ua", "*.mail.ua", "maps.me", "*.maps.me", "mediator.media", "*.mediator.media", "mradx.net", "*.mradx.net", "myadx.net", "*.myadx.net", "my.com", "*.my.com", "oh-uh.net", "*.oh-uh.net", "o.life", "*.o.life", "owamail.ru", "*.owamail.ru", "parapa.ru", "*.parapa.ru", "pifagor.io", "*.pifagor.io", "pokespy.info", "*.pokespy.info", "polkrf.ru", "*.polkrf.ru", "russianaicup.ru", "*.russianaicup.ru", "russiancodecup.ru", "*.russiancodecup.ru", "russiancryptocup.com", "*.russiancryptocup.com", "russiancryptocup.ru", "*.russiancryptocup.ru", "russiandesigncup.ru", "*.russiandesigncup.ru", "russiandevcup.ru", "*.russiandevcup.ru", "russianmlcup.ru", "*.russianmlcup.ru", "seosan.io", "*.seosan.io", "skyforge.com", "*.skyforge.com", "skyforge.ru", "*.skyforge.ru", "smaper.com", "*.smaper.com", "staticmy.com", "*.staticmy.com", "tarantool.io", "*.tarantool.io", "tarantool.org", "*.tarantool.org", "terrabank.ru", "*.terrabank.ru", "terrhq.ru", "*.terrhq.ru", "territory.ru", "*.territory.ru", "timezero.ru", "*.timezero.ru", "warface.com", "*.warface.com", "warface.tv", "*.warface.tv", "xn--80abviyi.xn--p1ai", "*.xn--80abviyi.xn--p1ai", "youla.io", "*.youla.io", "youla.ru", "*.youla.ru"];
        for (i = 0; i < hosts.length; i++) {
            if (shExpMatch(host, hosts[i])) {
                return proxyString;
            }
        }
        return 'DIRECT';
    } catch (e) {
        return 'DIRECT';
    }
}