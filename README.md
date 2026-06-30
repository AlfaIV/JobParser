# Программа для парсинга фронтенд вакансий Frontend на сайте компаний

программа предназначена для парсинга фронтенд вакансий с фиксированного количества сайтов биг-тех компаний (Ozon, Сбер,)

## Подготовка среды

### Запуск Docker dev-container 

```bash
    docker build -t jobparser-dev -f ./dockers/Dockerfile.dev .
    docker image ls 
    docker run -it --name jobparser -v ${pwd}:/app jobparser-dev
    docker ps -a
    docker start jobparser
    docker exec -it jobparser bash
```
Запуск базы данных

```bash
    docker build -t sqllite -f .\dockers\Dockerfile.SQLite .
    docker run -it --rm -v ${pwd}/database:/database sqlite:latest
    sqlite3 ./database/vacancies.sqlite < ./database/init.sql
```

```bash
    pnpm exec playwright open
```

### Подготовка LLM

Необходимо подготовить конт

```bash
    docker run -d -v путьДоМоделей:/root/.ollama -p 11434:11434 --name llm ollama/ollama
```

После установки и запуска контейнера с моделью, вводим команду для запуска LLM:
[Дока по CLI Ollama](https://docs.ollama.com/cli)

```bash
    docker start llm
    docker exec llm ollama list
    docker exec llm ollama ps
    # docker exec llm ollama run deepseek-coder-v2:16b
    docker exec llm ollama run qwen2.5-coder:14b 
```



https://openrouter.ai
https://kilo.ai/docs/ai-providers/openrouter