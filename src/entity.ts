export type company = 'Ozon'

export type Vacancy = {
    id: string,
    companyName: string,
    positionName: string,
    description?: string,
    sourceLinks: string,
    vacancyLinks: string,
    tags?: string[],
    updateAt: string,
}

export interface SiteParser {
  parse(url: string): Promise<Vacancy[]>;
}
