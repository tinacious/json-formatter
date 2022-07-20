const Fs = require('fs')
const Path = require('path')
const Handlebars = require('handlebars')

// const matcher = '{{replace_with_css}}'

// const 

const cssContents = Fs.readFileSync(Path.resolve(__dirname, 'extension/css/content.css'), 'utf-8')
const jsSource = Fs.readFileSync(Path.resolve(__dirname, 'templates/content.hbs'), 'utf-8')
const template = Handlebars.compile(jsSource)

const result = template({ replace_with_css: `${'`' + cssContents.trim() + '`'}` })

// const modifiedJsContents = jsContents.replace(matcher, cssContents)

Fs.writeFileSync(Path.resolve(__dirname, 'extension/js/content.js'), result)