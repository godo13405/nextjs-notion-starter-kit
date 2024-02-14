import { siteConfig } from './lib/site-config';


export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'Goncalo-Andrade-e7444b32839745d2b6199b5f97ae78e9',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Goncalo Stratford Andrade | Design',
  domain: 'portfolio.goncaloandrade.com',
  author: 'Goncalo Stratford Andrade',

  // open graph metadata (optional)
  description: 'Goncalo Andrade\'s portfolio and personal site',

  // social usernames (optional)
  // twitter: 'transitive_bs',
  // github: 'transitive-bullshit',
  // linkedin: 'goncaloandrade',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon:
    'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9fc14744-02f6-4234-874a-557dc12379ff%2Fezgif.com-resize.gif?table=block&id=e7444b32-8397-45d2-b619-9b5f97ae78e9&cache=v2',
  // defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0,

  // whether or not to enable support for LQIP preview images (optional)
  // isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  // isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Work',
      pageId:
        '2e1f47b4f5954b07a15f2bab10225cee?v=7cb7c1ef65d64933bf3c15b75a4e0bc4'
    },
    {
      title: 'Testimonials',
      pageId:
        '0dab09b9f9064f5fb259af6d1f56fafd?v=acdc7b20cfde4ff697a97ed48e378421&pvs=4'
    }
  ]
})