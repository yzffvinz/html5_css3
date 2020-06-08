function getHTTPObject() {
    if (typeof XMLHttpRequest === undefined) {
        XMLHttpRequest = function() {
            try {
                return new ActiveXObject('Msxml2.XMLHTTP.6.0');
            } catch (e) {}
            try {
                return new ActiveXObject('Msxml2.XMLHTTP.3.0');
            } catch (e) {};
            try {
                return new ActiveXObject('Msxml2.XMLHTTP');
            } catch (e) {};
        }
    }
    return new XMLHttpRequest();
}

window.onload = function() {
    var request = getHTTPObject();
    if (request) {
        request.open("POST", "req", true);
        console.log(request);
        
        var i = 0;
        request.onreadystatechange = function() {
            
            if (request.readyState === 4) {
                var rst = JSON.parse(request.responseText);
                var p = document.createElement(rst.nodeType);
                p.appendChild(document.createTextNode(rst.nodeValue));
                document.body.appendChild(p);
            }
        };
        request.send(null);
    } else {
        alert('not support');
    }
    
};