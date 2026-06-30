-- Таблица со справочником компаний
CREATE TABLE IF NOT EXISTS companies (
    company_name TEXT PRIMARY KEY,
    update_at    TEXT          -- без запятой в конце
);

-- Таблица вакансий
CREATE TABLE IF NOT EXISTS vacancies (
    id               TEXT PRIMARY KEY,
    company_name     TEXT NOT NULL,
    position_name    TEXT NOT NULL,
    description      TEXT,
    source_links     TEXT NOT NULL,
    vacancy_links    TEXT NOT NULL,
    update_at        TEXT NOT NULL,  -- YYYY-MM-DD-HH-MM
    tags             TEXT   -- JSON‑массив, например '["js","remote"]'
    -- FOREIGN KEY (company_name) REFERENCES companies(company_name)
);