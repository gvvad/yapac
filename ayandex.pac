function FindProxyForURL(url, host) {
    'use strict';
    const getProxy = function(e, t, n, r) {
        const {
            bypassDomainMasks: o,
            bypassUrlMasks: i,
            groupsInfo: u
        } = n;
        try {
            const n = e.split(":")[0];
            if ("http" !== n && "https" !== n) return "DIRECT";
            const a = o.some(e => r(t, e));
            if (a) return "DIRECT";
            const s = i.some(t => r(e, t));
            if (s) return "DIRECT";
            for (let e of u) {
                const n = e.bypassDomainMasks.some(e => r(t, e));
                if (n) continue;
                const o = e.domainMasks.some(e => r(t, e));
                if (o) return e.proxyStrings.join("; ")
            }
            return "DIRECT"
        } catch (e) {
            return "DIRECT"
        }
    };
    const matchUrlToShExp = function(e, t) {
        return t = (t = (t = t.replace(/\./g, "\\.")).replace(/\*/g, ".*")).replace(/\?/g, "."), new RegExp("^" + t + "$").test(e)
    };
    const pacParams = {
        "groupsInfo": [{
            "domainMasks": ["webvisor.org", "*.webvisor.org", "webvisor.com", "*.webvisor.com", "yandex.cloud", "*.yandex.cloud", "yandex.de", "*.yandex.de", "yaani.ru", "*.yaani.ru", "yandex-amp.net", "*.yandex-amp.net", "yandex", "*.yandex", "avto.ru", "*.avto.ru", "autoru.tv", "*.autoru.tv", "yandex.com.am", "*.yandex.com.am", "yandex.kg", "*.yandex.kg", "yandex.lt", "*.yandex.lt", "yandex.lv", "*.yandex.lv", "yandex.md", "*.yandex.md", "yandex.tj", "*.yandex.tj", "yandex.tm", "*.yandex.tm", "yandex.ee", "*.yandex.ee", "yandex.co.il", "*.yandex.co.il", "yandex-launcher.com", "*.yandex-launcher.com", "yandexdatafactory.ru", "*.yandexdatafactory.ru", "yandex.fr", "*.yandex.fr", "cloud.yandex", "*.cloud.yandex", "std-cpp.ru", "*.std-cpp.ru", "stdcpp.ru", "*.stdcpp.ru", "yandexlauncher.com", "*.yandexlauncher.com", "yandex.com.ge", "*.yandex.com.ge", "adfox.net", "*.adfox.net", "yandexlyceum.ru", "*.yandexlyceum.ru", "yavideoad.ru", "*.yavideoad.ru", "yandex.uz", "*.yandex.uz", "ecir2013.org", "*.ecir2013.org", "clickhouse.yandex", "*.clickhouse.yandex", "clickhouse.tech", "*.clickhouse.tech", "yastat.net", "*.yastat.net", "yastatic.net", "*.yastatic.net", "loginza.ru", "*.loginza.ru", "mail.yandex", "*.mail.yandex", "yandextrafik.com.tr", "*.yandextrafik.com.tr", "yandex.travel", "*.yandex.travel", "auto.ru", "*.auto.ru", "yandex.jobs", "*.yandex.jobs", "iframe-toloka.com", "*.iframe-toloka.com", "nic.yandex", "*.nic.yandex", "travel.yandex", "*.travel.yandex", "www.yandex", "*.www.yandex", "driver.yandex", "*.driver.yandex", "ydf-conference.com", "*.ydf-conference.com", "autoi.ru", "*.autoi.ru", "adfox.ru", "*.adfox.ru", "yandex-school.ru", "*.yandex-school.ru", "shad.yandex", "*.shad.yandex", "yandexdatafactory.com", "*.yandexdatafactory.com", "yandexdataschool.com", "*.yandexdataschool.com", "yandexdataschool.ru", "*.yandexdataschool.ru", "rostaxi.org", "*.rostaxi.org", "metabar.ru", "*.metabar.ru", "nota-claim.ru", "*.nota-claim.ru", "notaclaim.ru", "*.notaclaim.ru", "pricelabs.ru", "*.pricelabs.ru", "preview-adfox.ru", "*.preview-adfox.ru", "z5h64q92x9.net", "*.z5h64q92x9.net", "yandex.aero", "*.yandex.aero", "bem.info", "*.bem.info", "yadisk.cc", "*.yadisk.cc", "comparesearches.com", "*.comparesearches.com", "yate.ch", "*.yate.ch", "ya.cc", "*.ya.cc", "clck.ly", "*.clck.ly", "clck.ru", "*.clck.ru", "yandex-ad.cn", "*.yandex-ad.cn", "yandexadexchange.net", "*.yandexadexchange.net", "ruscorpora.ru", "*.ruscorpora.ru", "multiship.ru", "*.multiship.ru", "kinopoisk.ru", "*.kinopoisk.ru", "yamoney.ru", "*.yamoney.ru", "mk-test.ru", "*.mk-test.ru", "mk-beta.ru", "*.mk-beta.ru", "moikrug.ru", "*.moikrug.ru", "mk-stress.ru", "*.mk-stress.ru", "mk-dev.ru", "*.mk-dev.ru", "mk-prod.ru", "*.mk-prod.ru", "yandex.st", "*.yandex.st", "yandex.com.ua", "*.yandex.com.ua", "yandex.com.ru", "*.yandex.com.ru", "yaprobki.ru", "*.yaprobki.ru", "yandex.mobi", "*.yandex.mobi", "narod.ru", "*.narod.ru", "yadi.sk", "*.yadi.sk", "yandex.az", "*.yandex.az", "xn--d1acpjx3f.xn--p1ai", "*.xn--d1acpjx3f.xn--p1ai", "yndx.net", "*.yndx.net", "yandex.com.tr", "*.yandex.com.tr", "ya.ru", "*.ya.ru", "yandex.com", "*.yandex.com", "yandex.kz", "*.yandex.kz", "yandex.ua", "*.yandex.ua", "yandex.by", "*.yandex.by", "yandex.ru", "*.yandex.ru", "yandex.net", "*.yandex.net"],
            "bypassDomainMasks": [],
            "proxyStrings": ["HTTPS tronwertfrort5.me:443", "HTTPS storage.hostprojects.org:443", "HTTPS assets.cdn-prime.net:443", "HTTPS cdn.aaacdn.net:443"]
        }, {
            "domainMasks": ["allods.com", "*.allods.com", "allods.ru", "*.allods.ru", "allodsteam.ru", "*.allodsteam.ru", "appsmail.ru", "*.appsmail.ru", "attachmail.ru", "*.attachmail.ru", "attachmy.com", "*.attachmy.com", "beep.car", "*.beep.car", "beepcar.ru", "*.beepcar.ru", "beepcarstatic.ru", "*.beepcarstatic.ru", "bk.ru", "*.bk.ru", "cdnmail.ru", "*.cdnmail.ru", "cldmail.ru", "*.cldmail.ru", "clouder.pics", "*.clouder.pics", "datacloudmail.ru", "*.datacloudmail.ru", "dclub.ru", "*.dclub.ru", "deliveryclub.ru", "*.deliveryclub.ru", "distribmail.ru", "*.distribmail.ru", "donationalerts.ru", "*.donationalerts.ru", "dwar.ru", "*.dwar.ru", "fie.org", "*.fie.org", "giftomaster.com", "*.giftomaster.com", "giftomatic.org", "*.giftomatic.org", "gmru.net", "*.gmru.net", "ic2ster.com", "*.ic2ster.com", "icqapi.com", "*.icqapi.com", "icq.com", "*.icq.com", "icqmail.com", "*.icqmail.com", "icq.net", "*.icq.net", "imgsmail.ru", "*.imgsmail.ru", "inbox.ru", "*.inbox.ru", "iseeku.com", "*.iseeku.com", "iseekyou.com", "*.iseekyou.com", "jugger.ru", "*.jugger.ru", "list.ru", "*.list.ru", "mailapps.me", "*.mailapps.me", "mail.ru", "*.mail.ru", "mail.ua", "*.mail.ua", "maps.me", "*.maps.me", "mediator.media", "*.mediator.media", "mradx.net", "*.mradx.net", "myadx.net", "*.myadx.net", "my.com", "*.my.com", "oh-uh.net", "*.oh-uh.net", "o.life", "*.o.life", "owamail.ru", "*.owamail.ru", "parapa.ru", "*.parapa.ru", "pifagor.io", "*.pifagor.io", "pokespy.info", "*.pokespy.info", "polkrf.ru", "*.polkrf.ru", "russianaicup.ru", "*.russianaicup.ru", "russiancodecup.ru", "*.russiancodecup.ru", "russiancryptocup.com", "*.russiancryptocup.com", "russiancryptocup.ru", "*.russiancryptocup.ru", "russiandesigncup.ru", "*.russiandesigncup.ru", "russiandevcup.ru", "*.russiandevcup.ru", "russianmlcup.ru", "*.russianmlcup.ru", "seosan.io", "*.seosan.io", "skyforge.com", "*.skyforge.com", "skyforge.ru", "*.skyforge.ru", "smaper.com", "*.smaper.com", "staticmy.com", "*.staticmy.com", "tarantool.io", "*.tarantool.io", "tarantool.org", "*.tarantool.org", "terrabank.ru", "*.terrabank.ru", "terrhq.ru", "*.terrhq.ru", "territory.ru", "*.territory.ru", "timezero.ru", "*.timezero.ru", "warface.com", "*.warface.com", "warface.tv", "*.warface.tv", "xn--80abviyi.xn--p1ai", "*.xn--80abviyi.xn--p1ai", "youla.io", "*.youla.io", "youla.ru", "*.youla.ru", "bizmrg.com", "*.bizmrg.com", "vkforms.ru", "*.vkforms.ru"],
            "bypassDomainMasks": [],
            "proxyStrings": ["HTTPS brwpks.com:443", "HTTPS frpxa.com:443", "HTTPS pksfr.com:443", "HTTPS brwpx.com:443"]
        }, {
            "domainMasks": ["drw.sh", "*.drw.sh", "drweb.com", "*.drweb.com", "drweb.ru", "*.drweb.ru", "drweb.ua", "*.drweb.ua", "drweb.fr", "*.drweb.fr", "drweb-av.de", "*.drweb-av.de", "drweb-av.es", "*.drweb-av.es", "drweb-av.pl", "*.drweb-av.pl", "drweb-av.it", "*.drweb-av.it", "drweb.kz", "*.drweb.kz", "drweb.jp", "*.drweb.jp", "webiqmeter.com", "*.webiqmeter.com", "webiqmeter.ru", "*.webiqmeter.ru", "drweb-arab.com", "*.drweb-arab.com", "av-desk.pro", "*.av-desk.pro", "av-desk.cn", "*.av-desk.cn", "drweb.me", "*.drweb.me", "drweb.su", "*.drweb.su", "drweb.co.jp", "*.drweb.co.jp", "drweb.cn", "*.drweb.cn", "freedrweb.com", "*.freedrweb.com", "freedrweb.ru", "*.freedrweb.ru", "drweb-curenet.com", "*.drweb-curenet.com", "av-desk.com", "*.av-desk.com", "av-desk.ru", "*.av-desk.ru", "xn--80aerbwvhdn.xn--p1ai", "*.xn--80aerbwvhdn.xn--p1ai"],
            "bypassDomainMasks": [],
            "proxyStrings": ["HTTPS tronwertfrort5.me:443", "HTTPS storage.hostprojects.org:443", "HTTPS cdn.aaacdn.net:443", "HTTPS assets.cdn-prime.net:443"]
        }, {
            "domainMasks": ["kaspersky.com", "*.kaspersky.com", "kaspersky.ru", "*.kaspersky.ru", "kaspersky.ua", "*.kaspersky.ua", "securelist.com", "*.securelist.com", "securelist.ru", "*.securelist.ru", "viruslist.ru", "*.viruslist.ru", "securitywithoutborders.ru", "*.securitywithoutborders.ru", "kasperskyclub.ru", "*.kasperskyclub.ru", "kasperskyclub.com", "*.kasperskyclub.com", "threatpost.com", "*.threatpost.com", "threatpost.ru", "*.threatpost.ru"],
            "bypassDomainMasks": [],
            "proxyStrings": ["HTTPS tronwertfrort5.me:443", "HTTPS storage.hostprojects.org:443", "HTTPS cdn.aaacdn.net:443", "HTTPS assets.cdn-prime.net:443"]
        }, {
            "domainMasks": ["ok.ru", "*.ok.ru", "odnoklassniki.ru", "*.odnoklassniki.ru", "mycdn.me", "*.mycdn.me", "odnoklassniki.ua", "*.odnoklassniki.ua", "ok.me", "*.ok.me"],
            "bypassDomainMasks": [],
            "proxyStrings": ["HTTPS brwpks.com:443", "HTTPS frpxa.com:443", "HTTPS pksfr.com:443", "HTTPS brwpx.com:443"]
        }, {
            "domainMasks": ["userapi.com", "*.userapi.com", "vk.com", "*.vk.com", "vk.me", "*.vk.me", "vk-cdn.net", "*.vk-cdn.net", "vkontakte.ru", "*.vkontakte.ru", "vk.cc", "*.vk.cc", "vk.me", "*.vk.me", "vkuservideo.com", "*.vkuservideo.com", "vkuservideo.net", "*.vkuservideo.net", "vkuseraudio.net", "*.vkuseraudio.net"],
            "bypassDomainMasks": [],
            "proxyStrings": ["HTTPS brwpks.com:443", "HTTPS frpxa.com:443", "HTTPS pksfr.com:443", "HTTPS brwpx.com:443"]
        }],
        "bypassUrlMasks": [],
        "bypassDomainMasks": []
    };

    return getProxy(url, host, pacParams, matchUrlToShExp);
}