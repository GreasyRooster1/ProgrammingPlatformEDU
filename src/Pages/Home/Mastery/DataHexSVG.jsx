import React from 'react';

function DataHexSvg(props) {

    let points = []
    let ratio = Math.PI*2/6.0
    let shift = ratio/2
    for(let i=0;i<6;i++){
        let d = props.data[i]*props.r;
        let x = Math.cos(i*ratio+shift)*d+(props.cx??0);
        let y = Math.sin(i*ratio+shift)*d+(props.cy??0);
        points.push(x+" "+y)
    }

    return (
        <polygon
            points={points.join(' ')}
            strokeWidth={.2}
            {...props}
        />
    );
}

export default DataHexSvg;