module.exports = {
    HTML:function(name, list, body,control) {
        return `<!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${name}</title>
                </head>
                <body>
                    <h1><a href="/">아 나도 1000만원짜리 카메라로 사진 하고 싶다</a></h1>
                    ${list}
                    ${control}
                    ${body}
                </body>
                </html>
                `
    },list:function(files) {
        let list = '<ol>'
        for(i = 0; i<files; i++){
            list = list + `<li><a href="?name=${files[i]}">${files[i]}</a><li>`
        }
        list = list + '</ol>'
        return list
    }, create:function(){ //Can be properties,but we make void function 
        return `<form action="/create_process" method="post">
        <p><input type="text" name="title" placeholder="title"></p>
        <p><textarea name="description" placeholder="description"></textarea></p>
        <p><button type="submit">send</button></p>
        </form>`
    }, update:function(name, content){ //Except R among the CRUD
        return `<form action="/update_process" method="post">
        <p><input type="hidden" name="id" value=${name}></p>
        <p><input type="text" name = "title" placeholder="title" value=${name}></p>
        <p><textarea name="description" placeholder="description">${content}</textarea></p>
        <p><button type="submit">update</button></p>
        </form>`
    }
}