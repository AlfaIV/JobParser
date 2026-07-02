import type { Config } from 'jest'

const config: Config = {
  preset: 'ts-jest/presets/default-esm', // Используем пресет ts-jest (содержит настройки для TypeScript)
  testEnvironment: 'node', // Среда выполнения: node для бэкенда, jsdom для фронтенда
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.mts'],  // Указываем, что файлы .ts и .tsx нужно обрабатывать как ESM

  testMatch: ['**/?(*.)+(test).ts'], // Паттерны для поиска тестов

  transform: {
    '^.+\\.(ts|tsx|mts)$': [
      'ts-jest',
      {
        useESM: true,
        tsconfig: './tsconfig.json',
      },
    ], // Трансформация TypeScript-файлов
  },

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // Расширения модулей
  roots: ['<rootDir>/src'], // Корни для поиска тестов

  // Важно для ESM
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    // Для ESM импортов
    '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  
  // Важно для ESM
  transformIgnorePatterns: [
    'node_modules/(?!(your-esm-module-name)/)'
  ],
};

export default config
