export default function GameWrapper( props ) {
    return (
        <div className="p-5 flex flex-col justify-center items-center gap-5">
            <h1 className="text-3xl font-bold font-sans">Noughts & Crosses</h1>
            <h5>{ props.currentPlayer }'s turn</h5>
            <div className="w-60 h-60 grid grid-cols-3 gap-2">
                { props.children }
            </div>
        </div>
    )
}
