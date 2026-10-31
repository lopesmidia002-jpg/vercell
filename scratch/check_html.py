import urllib.request
html = urllib.request.urlopen('http://localhost:3000').read().decode('utf-8')
print('Includes API de:', 'API de' in html)
print('Includes id="produtos":', 'id="produtos"' in html)

