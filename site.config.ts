import { siteConfig } from './lib/site-config';


/*
const config = {
  // the site's root Notion page (required)
  rootNotionPageId: `${process.env.ROOTID}`,

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: `${process.env.ROOTID}`,

  // basic site info (required)
  name: process.env.SITENAME || '',
  domain: process.env.SITEDOMAIN || '',
  author: process.env.SITEAUTHOR || '',

  // open graph metadata (optional)
  description: process.env.SITEDESCRIPTION || '',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'goncaloandrade',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9fc14744-02f6-4234-874a-557dc12379ff%2Fezgif.com-resize.gif?table=block&id=e7444b32-8397-45d2-b619-9b5f97ae78e9&cache=v2',
  // defaultPageIcon: null,
  // defaultPageCover: null,
  // defaultPageCoverPosition: 0,

  // whether or not to enable support for LQIP preview images (optional)
  // isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: null,
  pageUrlOverrides: process.env.PAGEURLOVERRIDES
    ? JSON.parse(process.env.PAGEURLOVERRIDES)
    : null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle,
  navigationLinks
}
*/

const config = JSON.parse(process.env.CONFIG);

if (config.pageUrlOverrides) config.pageUrlOverrides = JSON.parse(config.pageUrlOverrides);
if (config.navigationLinks) config.navigationLinks = JSON.parse(config.navigationLinks);
console.log("🚀 ~ config:", config)


export default siteConfig(config)