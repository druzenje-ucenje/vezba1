var http = require('http');

var brojPartizanovaca = 0;
var brojZvezdasa = 0;

// Podesavanje serverra
var server = http.createServer(function (request, response) {
    response.writeHead(200, {
        'Tip-sajta': 'rodoljubivo navijacki',
        'Set-Cookie': 'tandara=mandara',
        'content-type': 'text/html; charset=utf-8'
    });

    var requestString = JSON.stringify(request.headers, null, 4);
    var responseString = JSON.stringify(request.headers, null, 4);
    response.write("<pre><strong>Request headeri(salje ih vas browser):</strong>" + "\n");
    response.write(requestString + "\n\n\n");
    response.write("<strong>Response headeri(salje ih web server koji ste pokrenuli):</strong>" + "\n" + response._header + "</pre>")

    if(request.url == "/partizan") {
        brojPartizanovaca++;
        response.write("<pre style='color: #FFF; height: 300px; background:#000'> Broj partizanovaca: " + brojPartizanovaca + "</pre>");
        response.end();
    } else if(request.url == "/crvena-zvezda"){
        brojZvezdasa++;
        response.write("<div style='color: #FFF; height: 300px; line-height:500px; background:red'> Broj zvezdasa:" + brojZvezdasa + "</div>");
        response.end();
    } else {
        response.end();
    }

});

server.listen(8080);

// U konzoli ce te dobiti poruku na kom portu radi server
console.log("Server running at http://127.0.0.1:8080/");