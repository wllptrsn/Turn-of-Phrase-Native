import React, { Component } from 'react';
export const PROMPTS = [
    {
        image: "/assets/images/foodforthought.gif",
        guess: 'F,O,O,D,F,O,R,T,H,O,U,G,H,T',
        userAnswer: [],
        total:14,
        tiles: <div className='tileRapper'>
            <div></div><div></div><div></div><div></div>
            <div className='firstWord'></div><div></div><div></div>
            <div className='firstWord'></div><div></div><div></div><div></div><div></div><div></div><div></div>
        </div>,
        breaks:[4,7,14]
    },
    {
        image: "/assets/images/curiosity.gif",
        guess:'C,U,R,I,O,S,I,T,Y,K,I,L,L,E,D,T,H,E,C,A,T',
        userAnswer: [],
        total: 21,
        tiles: <div className='tileRapper'>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div>
            <div></div><div></div><div></div>
        </div>,
        breaks:[9,15,18,21]
    },
    {
        image: "/assets/images/talldrink.gif",
        guess:'T,A,L,L,D,R,I,N,K,O,F,W,A,T,E,R',
        userAnswer: [],
        total: 16,
        tiles: <div className='tileRapper'>
            <div></div><div></div><div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div>
            <div></div><div></div>
            <div></div><div></div><div></div><div></div><div></div>
        </div>,
        breaks:[4,9,11,16]
    }
];