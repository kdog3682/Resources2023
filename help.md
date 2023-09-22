09-21-2023 Files

/home/kdog3682/RESOURCES/temp.md 
    The current version of "changelog" or "dated notes"
    It will be shunted occassionally to drive

/home/kdog3682/RESOURCES/temp.txt
    holds random scrappings 
    no dated notes

/home/kdog3682/RESOURCES/help.md
    a form of "dated notes"
    holds the faq for everything

09-21-2023 FAQ

problem: getImplied includes `setTimeout`
solution: check `variables.javascriptNativeBindings`

problem: getBody isnt working
solution: this._lezer.getBody.bind(this._lezer)


09-21-2023 serveFile.js

Versioning:
    Version 1: serve_html_file.js

Run: serveFile(<File>)

VimControl:
    F3: screenshot    
    F4: html    
    F5: print    
    F6: empty    
    F10: host    

Debug:
    simple: serveFile('simpleDebug')
    advanced: serveFile('advancedDebug')



Date: 09-21-2023 
Fixed: addMissingImports2
File: codeOrganizer2.js
Problem: it wasn't working

Changes:
    CodeState -> CodeState2
    setImports -> setImports2
    importString is able to handle star imports and default imports
    `path` parameter has been added to checkpointf
    indexes for CodeState.getSortIndex have been improved
    `options` are injected at `codeOrganizerManager`

Example: codeOrganizerManager({debug: true, file: 'serveFile.js', key: 'addMissingImports2', options: {sortByType: true}})
-------------------------------------------------------

09-21-2023 End of Day Recap

serveFile (screenshot | html | empty | print | localhost)
serveVite (server | build)

vim.exec.ami = addMissingImports2
vim.normal.` -> deprecated

vim.PackageManager2

    - purely for javascript
    - replaces PackageManager very well because it is easier to use
    - uses g:pmr2 (packageManagerRef2)
    - is connected via AnythingHandler

Examples: 
    let g:pmr2['vite']   = 'serveVite.js serve baseComponents.html'
    let g:pmr2['vbuild'] = 'serveVite.js build baseComponents.html'
    let g:pmr2['vserve'] = 'serveVite.js serve baseComponents.html'
    let g:pmr2['ami']    = 'codeOrganizer2.js ami cf'
    let g:pmr2['print']  = 'serveFile.js print baseComponents.html'
    let g:pmr2['html']   = 'serveFile.js html baseComponents.html'
    let g:pmr2['ss']     = 'serveFile.js screenshot baseComponents.html'

Todo:

vimscript css
vim.autocomplete for css
vim.leaders for css
vim.iabs for css

A wrapper for





Done: deleteRepo and viewRepo
