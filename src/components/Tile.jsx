import React from 'react'

export default function Tile( { callback, isWinningTile, symbol } ) {
    return (
        <div
            className={ `cursor-pointer border border-gray-200 transition-all duration-75 hover:border-blue-400 hover:scale-110 aspect-square flex items-center justify-center rounded text-4xl font-bold font-sans
            ${ isWinningTile ? "bg-green-400 text-white" : "bg-gray-200" }` }
            onClick={ callback }
        >
            { symbol }
        </div>
    )
}
