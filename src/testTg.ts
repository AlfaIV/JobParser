import { config } from "./config.ts";
import { setGlobalDispatcher, ProxyAgent } from 'undici';
import { HttpsProxyAgent } from 'https-proxy-agent';
import { SocksProxyAgent } from 'socks-proxy-agent';

const token = config.telegramToken;

const proxyList = [
    "107.172.20.143:1080"	,
    "186.96.16.117:1080"	,
    "103.131.156.90:6789"	,
    "103.61.122.229:1080"	,
    "103.254.57.227:48293"	,
    "88.218.206.170:5432"	,
    "159.223.87.50:443"	    ,
    "192.158.15.201:50877"	,
    "8.215.25.3:2080"	    ,
    "41.216.188.132:9050"	,
    "202.148.22.106:5678"	,
    "178.16.140.119:1080"	,
];

// Проверяем прокси через правильный агент
const testProxy = async (proxy: string): Promise<boolean> => {
    try {
        console.log(`\n🔍 Тестируем: ${proxy}`);
        
        // Определяем тип прокси по порту
        const port = parseInt(proxy.split(':')[1] || '1080');
        let agent;
        
        // SOCKS5: порты 1080, 9050
        if (port === 1080 || port === 9050) {
            console.log('   📌 Используем SOCKS5');
            agent = new SocksProxyAgent(`socks5://${proxy}`);
        } else {
            console.log('   📌 Используем HTTP');
            agent = new HttpsProxyAgent(`http://${proxy}`);
        }
        
        const url = `https://api.telegram.org/bot${token}/getMe`;
        
        const response = await fetch(url, {
            dispatcher: agent as any,
            signal: AbortSignal.timeout(10000)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.ok) {
            console.log(`   ✅ РАБОТАЕТ! Бот: ${data.result.username}`);
            return true;
        }
        
        return false;
    } catch (error: any) {
        const msg = error.message || String(error);
        if (msg.includes('timeout')) {
            console.log('   ⏰ Таймаут');
        } else if (msg.includes('ECONNREFUSED')) {
            console.log('   🔌 Отказ в соединении');
        } else if (msg.includes('Authentication')) {
            console.log('   🔑 Требуется авторизация');
        } else {
            console.log(`   ❌ ${msg.slice(0, 80)}`);
        }
        return false;
    }
};

const main = async () => {
    console.log('🚀 Начинаем проверку прокси...\n');
    
    let workingProxy = null;
    
    for (const proxy of proxyList) {
        const success = await testProxy(proxy);
        if (success) {
            workingProxy = proxy;
            break;
        }
        // Пауза между проверками
        await new Promise(r => setTimeout(r, 500));
    }
    
    console.log('\n' + '='.repeat(50));
    if (workingProxy) {
        console.log(`✅ РАБОЧИЙ ПРОКСИ НАЙДЕН: ${workingProxy}`);
        console.log(`\nИспользуйте в коде:\nsetGlobalDispatcher(new SocksProxyAgent('socks5://${workingProxy}'));`);
    } else {
        console.log('❌ Ни один прокси не работает!');
        console.log('\n💡 Возможные причины:');
        console.log('   • Прокси требуют авторизации (логин/пароль)');
        console.log('   • Прокси уже заблокированы Telegram');
        console.log('   • В контейнере ограничен исходящий трафик');
    }
};

main().catch(console.error);