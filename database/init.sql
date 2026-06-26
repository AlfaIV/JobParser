CREATE TABLE IF NOT EXISTS vacancies (
    id            TEXT PRIMARY KEY,
    company_name  TEXT NOT NULL,
    position_name TEXT NOT NULL,
    description   TEXT,
    source_links  TEXT NOT NULL,
    vacancy_links TEXT NOT NULL,
    tags          TEXT   -- JSON‑массив, например '["js","remote"]'
);

CREATE TABLE IF NOT EXISTS companes (
    company_name  TEXT PRIMARY KEY,
    parsed_at TEXT,
    FOREIGN KEY (company_name) REFERENCES vacancies(company_name)
);
