import {flatten} from 'flat'

const defaultValues = flatten<Record<string, unknown>, Record<string, string>>({
  'theme-color': '#000000', // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name
  'color-scheme': 'normal',
  title: 'Untitled',
  description: '',
  keywords: '',
  url: '',
  shortlink: '',
  image: '',
  site_name: '',
  publisher: '', // name
  creator: '', // organization or institution
  twitter: {
    'image:alt': '',
    card: '', // `summary`, `summary_large_image`, `app`, or `player`.
    site: '', // @username
    creator: '', // @username
  },
  fb: {
    app_id: '',
  },
  canonical: '',
  rss: '',
  // robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  locale: 'en_US',
  // 'locale:alternate': 'vi_VN', // comma-separated
  type: '', // https://ogp.me/#types
  audio: '',
  video: '',
  article: {
    author: '', // url
    published_time: '', // 2016-06-20T13:18:32+00:00
    modified_time: '',
  },
})

export default defaultValues
