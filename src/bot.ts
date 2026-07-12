import TelegramBot, { type ReplyKeyboardMarkup, type SendMessageParams } from 'node-telegram-bot-api';
import { SocksProxyAgent } from 'socks-proxy-agent';
import { ProxyAgent } from 'undici';

const agent = new ProxyAgent('82.209.251.53:45678'); // прокси из @freeproxysoksc5

const token = '';

const bot = new TelegramBot(token, {
    polling: true,
    request: {
        fetchOptions: {
            dispatcher: agent,
        },
    },
});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    const keyboard: ReplyKeyboardMarkup = {
        keyboard: [
            [{ text: 'Кнопка 1' }, { text: 'Кнопка 2' }],
            [{ text: 'Кнопка 3' }, { text: 'Кнопка 4' }]
        ],
        resize_keyboard: true,        // Автоматически подгоняет размер кнопок
        one_time_keyboard: false,     // true - скрыть после нажатия
        selective: false              // true - показывать только конкретным пользователям
    };

    const opts: Omit<SendMessageParams, "chat_id" | "text"> = {
        reply_markup: keyboard,
    };

    bot.sendMessage(chatId, 'Выберите действие:', opts);
});
