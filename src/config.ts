// TODO: возможно переписать на Zod для лучшей валидации
import dotenv from 'dotenv';
import { resolve } from 'path';
dotenv.config();

interface Config {
  env: 'dev' | 'prod';
  telegramToken: string;
  vkToken: string;
  dbPath: string;
};

function getRequiredEnv(key: string) {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Необходима env переменная: ${key}`);
  }
  return value;
}

function getOptionalEnv(key: string, defaultValue: string) {
  return process.env[key] || defaultValue;
}

const dbAbsolutePath = resolve(process.cwd(), './database/vacancies.sqlite');

export const config: Config = {
  env: getRequiredEnv('env') as Config['env'],
  telegramToken: getOptionalEnv('telegramToken', ''),
  vkToken: getRequiredEnv('vkToken'),
  dbPath: getOptionalEnv('dbPath', dbAbsolutePath),
};
