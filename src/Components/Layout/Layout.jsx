import React from 'react';
import c from './Layout.module.css';


export const LayOut = () => {

    return <section className={c.layoutWrap}>
        
        <div className={c.purpleBall} />
        <div className={c.redBall} />
        <div className={c.smallRedBall} />
        <div className={c.purpleLight} />
        <div className={c.redLight} />
        <div className={c.yellowLight} />
        <div className={c.noise} />
        <div className={c.glass} />

    </section>
}