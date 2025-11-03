import type { SiteDetectionMode, CraftSites, Prettify } from '@query-api/js';
import type { Component } from 'svelte';

export type CraftPageEntry = {
	metadata: { entryType?: string };
	sectionHandle?: string;
	[key: string]: unknown;
};

export type CraftAreaComponent = {
	type: string;
	[key: string]: unknown;
};

export type HandledErrorCodes = '404' | '500';

export type ContentMapping = {
	pages: Prettify<
		{
			[key: string]: Component;
		} & {
			[K in `page${HandledErrorCodes}`]?: Component;
		} & {
			error?: Component;
		}
	>;
	components: {
		[key: string]: Component;
	};
};

export type CraftOptions = {
	baseUrl: string;
	authToken: string;
	contentMapping?: ContentMapping;
	debug?: boolean;
	enableEntryTypeMapping?: boolean;
	siteMap?: CraftSites;
	siteDetectionMode?: SiteDetectionMode;
};
