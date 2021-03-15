const URLS = require('./sitemap/utils/urls').default
// const posts = require('./sitemap/utils/posts')

const { SitemapStream, streamToPromise } = require( 'sitemap' )
const { Readable } = require( 'stream' )
const { readFileSync, writeFileSync } = require('fs')

const postUrls = []
const postsFile = readFileSync('./src/utils/posts.js')
const matches = [...postsFile.toString('utf-8').matchAll(/path: '([A-Za-z0-9-]+)'/g)]
for (const match of matches) {
    postUrls.push(match[1])
}

const landingUrls = []
const landingsFile = readFileSync('./src/components/LandingPage/landings.js')
const landingMatches = [...landingsFile.toString('utf-8').matchAll(/path: '([A-Za-z0-9-]+)'/g)]
for (const match of landingMatches) {
    landingUrls.push(match[1])
}

// An array with your links
const links = []

links.push({ url: URLS.HOME, changefreq: 'weekly', priority: 0.6 })
links.push({ url: URLS.ABOUT, changefreq: 'weekly', priority: 0.6 })
links.push({ url: URLS.WORK, changefreq: 'weekly', priority: 0.6 })
links.push({ url: URLS.COUPLES, changefreq: 'weekly', priority: 0.6 })
links.push({ url: URLS.OFFER, changefreq: 'weekly', priority: 0.6 })
links.push({ url: URLS.BLOG, changefreq: 'weekly', priority: 0.6 })

for (const url of postUrls) {
    links.push({ url: URLS.POST.replace(':path', url), changefreq: 'weekly', priority: 0.8 })
}

for (const url of landingUrls) {
    links.push({ url: URLS.LANDING.replace(':path', url), changefreq: 'weekly', priority: 0.9 })
}

// Create a stream to write to
const stream = new SitemapStream( { hostname: 'https://czarymarry.com' } )

// Return a promise that resolves with your XML string
const xmlData = streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
)

xmlData.then(sitemap => writeFileSync('./public/sitemap.xml', sitemap))