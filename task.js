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
for (let i = 0; i < params.lines.length; i++) {
    const lines = params.lines[i].background;

    const mainLine = document.createElement('div');
    mainLine.classList.add('mainLine');
    mainLine.style.backgroundColor = (lines);
    mainLine.style.height = '100%';
    mainLine.style.width = '100%';
    mainLine.style.display = 'flex';
    document.getElementById('allScreen').appendChild(mainLine);

    for(let j = 0; j < params.lines[i].elements.length; j++) {
        const blockColor = params.lines[i].elements[j].background;
        const blockWidth = params.lines[i].elements[j].width;

        const inLine = document.createElement('div');
        inLine.classList.add('inLine');
    
        inLine.style.backgroundColor = blockColor;
        inLine.style.width = (blockWidth + '%');
        inLine.style.height = '100%';
    
        mainLine.appendChild(inLine);
        function randomColor() {
          
            let letters = '0123456789ABCDEF';
            let color = '#';
            for(let k = 0; k < 6; k++ ) {
            color += letters[Math.floor(Math.random() * 16)]}
        
            inLine.style.backgroundColor = color;        
        }
        const myVar = setInterval(function(){randomColor()},  (params.lines[i].updateTime));
    }
}