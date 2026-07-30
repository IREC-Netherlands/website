export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: string[]
	published: boolean
}

export type Member = {
	slug: string
	name: string
	job: string
	research: string
    phd: string
	master: string
	bachelor: string
    phdcandidate : true
    email: string
    phone: string
}

export type Crumb<M = any> = {
    title?: string;
    url?: string;
    metadata?: M;
  };
  export type ModuleData = {
    pageTitle?: string;
    getPageTitle?: (data: any) => string;
  };
