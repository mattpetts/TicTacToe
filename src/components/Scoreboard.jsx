export default function Scoreboard( { scorecard } ) {
    return (
        <table className="w-full max-w-sm text-center border-collapse shadow-md rounded overflow-hidden mt-6">
            <thead className="bg-blue-500 text-white">
                <tr>
                <th className="px-4 py-2 text-sm font-semibold uppercase">Player</th>
                <th className="px-4 py-2 text-sm font-semibold uppercase">Wins</th>
                </tr>
            </thead>
            <tbody className="bg-white">
                { Object.entries( scorecard ).map( ( [ player, score ] ) => (
                    <tr key={ player } className="border-t hover:bg-blue-50 transition-colors">
                    <td className="px-4 py-3 font-medium">{ player }</td>
                    <td className="px-4 py-3">{ score }</td>
                    </tr>
                ) ) }
            </tbody>
        </table>
    )
}
