console.log('index')

import * as monaco from 'monaco-editor';

window.editor = monaco.editor.create(document.getElementById('container'), {
    value: [
        'function x() {',
        '\tconsole.log("Hello world!");',
        '}'
    ].join('\n'),
    language: 'javascript'
});