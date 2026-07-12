import { VK } from 'vk-io'
import { config } from './config.ts';

const vk = new VK({
  token: config.vkToken,
});

vk.updates.on('message_new', async (context) => {
  if (context.isOutbox) return;

  await context.send(`Вы сказали: "${context.text}"`);
});

vk.updates.start().then(() => {
  console.log('ВКонтакте бот запущен');
});