import React from 'react';

function HexSvg(props) {

    let points = []
    let ratio = Math.PI*2/6.0
    for(let i=0;i<6;i++){
        let x = Math.cos(i*ratio)*props.r+props.cx;
        let y = Math.cos(i*ratio)*props.r+props.cy;
        points.push(x+" "+y)
    }

    return (
        <polygon
            points={points.join(' ')}
            {...props}
        />
    );
}

export default HexSvg;