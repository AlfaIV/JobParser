# Программа для парсинга фронтенд вакансий Frontend на сайте компаний

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

```bash
    pnpm exec playwright open
```

### Подготовка LLM

```bash
    docker run -d -v путьДоМоделей:/root/.ollama -p 11434:11434 --name llm ollama/ollama
    docker start llm
```

После установки и запуска контейнера с моделью, вводим команду для запуска LLM:
[Дока по CLI Ollama](https://docs.ollama.com/cli)

```bash
    docker exec llm ollama list
    docker exec llm ollama ps
    # docker exec llm ollama run deepseek-coder-v2:16b
    docker exec llm ollama run qwen2.5-coder:14b 
```



https://openrouter.ai
https://kilo.ai/docs/ai-providers/openrouter