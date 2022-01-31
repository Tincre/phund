import {author, description, entityUrl, logoSrc, title} from './cms.data';

// https://github.com/garmeeh/next-seo#default-seo-configuration
export const defaultSeoContent = {
  title : title,
  description : description,
  openGraph : {
    type : 'website',
    locale : 'en_IE',
    url : entityUrl,
    site_name : author,
  },
  twitter : {
    handle : '@handle',
    site : '@site',
    cardType : 'summary_large_image',
  }
};

export const routeSeoContent = {
  "/" : {
    title : "Using More of Config",
    description : "This example uses more of the available config options.",
    canonical : "https://www.canonical.ie/",
    openGraph : {
      url : 'https://www.url.ie/a',
      title : 'Open Graph Title',
      description : 'Open Graph Description',
      images : [
        {
          url : logoSrc,
          width : 800,
          height : 600,
          alt : author,
          type : 'image/jpeg',
        },
        {
          url : logoSrc,
          width : 900,
          height : 800,
          alt : author,
          type : 'image/jpeg',
        },
      ],
      site_name : author,
    },
    twitter : {
      handle : '@tincre',
      site : '@tincre',
      cardType : 'summary_large_image',
    }
  }
};
