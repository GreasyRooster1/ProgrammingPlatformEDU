import React from 'react';

function HexSvg(props) {

    let points = []
    let ratio = Math.PI*2/6.0
    let shift = ratio/2
    for(let i=0;i<6;i++){
        let x = Math.cos(i*ratio+shift)*props.r+(props.cx??0);
        let y = Math.sin(i*ratio+shift)*props.r+(props.cy??0);
        points.push(x+" "+y)
        points.push((props.cx??0)+" "+(props.cy??0))
    }

    return (
        <polygon
            points={points.join(' ')}
            stroke={"var(--neutral-icon)"}
            strokeWidth={.2}
            fill={"transparent"}
            {...props}
        />
    );
}

export default HexSvg;