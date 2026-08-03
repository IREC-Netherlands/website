export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: string[];
	published: boolean;
};

export type AboutContent = {
	title: string;
	slug: string;
	language: string;
  	content: any;
};

export type Crumb<M = any> = {
	title?: string;
	url?: string;
	metadata?: M;
};
export type ModuleData = {
	pageTitle?: string;
	getPageTitle?: (data: any) => string;
};
