import web
import urllib2
import urllib

import sae

urls = (
    '/', 'index'
)

class index:
    def POST(self):
        url = 'http://dict.youdao.com/wordbook/wordlist?action=add'
        data = web.input()
        word = data.get('word')
        cookie = data.get('ok')

        data = urllib.urlencode({'word': word, 'phonetic': '', 'desc': '', 'tags': ''})
        opener = urllib2.build_opener()
        opener.addheaders.append(('Cookie', cookie))
        opener.addheaders.append(('Referer', 'http://dict.youdao.com/wordbook/wordlist'))
        opener.open(url, data)


if __name__ == "__main__":
    app = web.application(urls, globals()).wsgifunc()
    application = sae.create_wsgi_app(app)
