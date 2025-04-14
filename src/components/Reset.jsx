export default function Reset( { callback } ) {
    return (
        <>
            <p className="text-lg font-bold font-sans">Game Over</p>
            <button
              className="p-3 bg-blue-500 rounded text-white font-bold cursor-pointer"
              onClick={ callback }
            >
              Play Again
            </button>
        </>
    )
}
