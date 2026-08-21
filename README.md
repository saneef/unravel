# Unravel URL

Resolve URLs on Netlify.

## API

You can use API endopint `https://unravelurl.com/api/resolve.json?url=<URL-encoded URL>` to be with any scripts.

Example:

```sh
$ curl "https://unravelurl.com/api/resolve.json?url=https:%2F%2Fsaneef.com%2Ffeed-blog.xml"
# Output:
{
    "source": "https://saneef.com/feed-blog.xml",
    "target": "https://saneef.com/feed.xml",
    "status": "ok"
}
```

## Development

```sh
npm install # Install all NPM packages
npm start # To start devlopment instance
```
