import type { BrowserContextOptions, LaunchOptions } from "@playwright/test";

export type parserConfig = {
    url: string,
    anchors: anchorsConfig;
}

export type anchorsConfig = {
    vacanciesList: string,
    name: string,
    tags: string,
}

export const chromiumOpitins: LaunchOptions = {
    headless: true,
    args: [
        // '--ignore-certificate-errors',
        // '--ignore-ssl-errors',
        // '--no-sandbox',
        // '--disable-setuid-sandbox',
        // '--disable-web-security',
        // '--allow-insecure-localhost',
        // '--reduce-security-for-testing'
    ]
}

export const ozonBrowserOpitins: BrowserContextOptions = {
    ignoreHTTPSErrors: true,
    bypassCSP: true,
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 YaBrowser/26.3.0.0 Safari/537.36',
    viewport: { width: 1920, height: 1080 },
    locale: 'ru-RU',
    timezoneId: 'Europe/Moscow',
    extraHTTPHeaders: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'ru,en;q=0.9',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Sec-Fetch-Dest': 'document',
        'Sec-Fetch-Mode': 'navigate',
        'Sec-Fetch-Site': 'none',
        'Sec-Fetch-User': '?1',
        'Upgrade-Insecure-Requests': '1',
        'sec-ch-ua': '"Not(A:Brand";v="8", "Chromium";v="144", "YaBrowser";v="26.3", "Yowser";v="2.5", "YaBrowserCorp";v="144"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"'
    }
} 

export const ozonCookies = [
      {
        name: 'TSDK_trackerSessionId',
        value: '63410a60-c469-373e-544c',
        domain: '.ozon.tech',
        path: '/',
        httpOnly: false,
        secure: true,
        sameSite: 'Lax' as const
      },
      {
        name: '__Secure-ETC',
        value: 'e28718e9c3ab0b1017d1ebe574d08c40',
        domain: '.ozon.tech',
        path: '/',
        httpOnly: false,
        secure: true,
        sameSite: 'Lax' as const
      },
      {
        name: 'abt_data',
        value: '7.9RVs-bnTb4IDjs2el-Mvecw0HMMB8uc3nqybFSRLQciDnrDkRuUuE33qou7Ha4rov2RdIJHzibo6gGDJjZclk6nQyNGSXm4aPuRzMgLIXsidg1aNf5YhivKE2y5akVjrCynQUd3OgpJR7apix7ti6joZBXJN4d_Z6IoRiFLc3d7lW_gizJ3r6_dgpxPbqv6Rpy0WBHuEwJDWKa4skoSR9CEl_BeHCqIJFEcPbNbtgo0SpErRAXN-SIfn-UDn2JmEOEIGzpBArSgjPChlDETO3mu3HBsnnhrw9R8uRKWzbGPYAj8_FB-G7uVfv6Ck-t_0Vqm1ujo7VopFcX2K6UdSkPPu4LMqO3rMCQTb0ieFJSCT1riwvHoTc-RybDUKfLRj37vgwlMkXiO4LZ7afvNv72o_5Bp6cFc2uuUCYVOCD9g7ueNJbljPRr34CMxkDIPDcXx7n_UGjY2VqPRGen-16B1NlB1hZIpjEqjaDjgJx8r89jLAsJGVJWaDZsl5ZVEqQIINmQHpEAqYPsN07JcuWxh-Nozz4IUGNf-6TCWRK1FhlJwEK7k',
        domain: '.ozon.tech',
        path: '/',
        httpOnly: false,
        secure: false,
        sameSite: 'Lax' as const
      },
      {
        name: 'X-O3-INGRESSCOOKIE',
        value: '14a7c99d6fd16083ca4ffe734ed0bfa3|6d74333020c47da12980f6062fb14d92',
        domain: '.ozon.tech',
        path: '/',
        httpOnly: false,
        secure: false,
        sameSite: 'Lax' as const
      }
    ];
