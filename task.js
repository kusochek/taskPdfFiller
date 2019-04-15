var params = {
    lines: [
        {
            background:'#00F',
            updateTime:1000,
            elements: [{
                background: '#00F',
                width: 25
            },
            {
                background: '#00F',
                width: 25
            },
            {
                background: '#00F',
                width: 25
            }
            ]
        },
        {
            background:'#00F',
            updateTime:1000,
            elements: [{
                background: '#00F',
                width: 25
            },
            {
                background: '#00F',
                width: 25
            },
            {
                background: '#00F',
                width: 25
            }
            ]
        },
        {
            background:'#00F',
            updateTime:1000,
            elements: [{
                background: '#00F',
                width: 25
            },
            {
                background: '#00F',
                width: 25
            },
            {
                background: '#00F',
                width: 25
            }
            ]
        }
    ]
    
}
for (var i = 0; i < params.lines.length; i++) {
    const lines = params.lines[i].background;

const maineLine = document.createElement('div');
maineLine.classList.add('maineBlock');
maineLine.style.backgroundColor = (lines);
maineLine.style.height = '100%';
maineLine.style.width = '100%';
maineLine.style.position = 'relative';
document.getElementById('allScreen').appendChild(maineLine);

    for(var j = 0; j < params.lines[i].elements.length; j++) {
        const blockColor = params.lines[i].elements[j].background;
        const blockWidth = params.lines[i].elements[j].width;

    const inLine = document.createElement('div');
    inLine.classList.add('inLine');
    
    inLine.style.position = 'absolute';
    inLine.style.backgroundColor = blockColor;
    inLine.style.width = (blockWidth + '%');
    inLine.style.height = '100%';
    inLine.style.display = 'inline';
    inLine.style.cssFloat = 'left'
    
    maineLine.appendChild(inLine);
        function myFunction() {
          
          var letters = '0123456789ABCDEF';
          var color = '#';
           for(var k = 0; k < 6; k++ ) {
            color += letters[Math.floor(Math.random() * 16)]}
        
            inLine.style.backgroundColor = color;        
        }
        var myVar = setInterval(function(){myFunction()},  (params.lines[i].updateTime));
    }
}