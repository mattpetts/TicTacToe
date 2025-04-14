import { useState } from "react";

import * as settings from './settings.json';
const { players, player_symbols, board_tiles, win_patterns } = settings;

import Tile from "./components/Tile";
import GameWrapper from "./components/GameWrapper";
import Scoreboard from "./components/Scoreboard";
import Reset from "./components/Reset";

function App() {
  const [ currentPlayer, setCurrentPlayer ] = useState( 0 );
  const [ tilesClaimed, setTilesClaimed ] = useState( [] );
  const [ playerTiles, setPlayerTiles ] = useState( [ [], [] ] );
  const [ gameOver, setGameOver ] = useState( false );
  const [ winningPattern, setWinningPattern ] = useState( [] );
  const [ scorecard, setScorecard ] = useState( { [ players[ 0 ] ]: 0, [ players[ 1 ] ]: 0 } );

  const handleResetGame = () => {
    setCurrentPlayer( 0 );
    setTilesClaimed( [] );
    setPlayerTiles( [ [], [] ] );
    setGameOver( false );
    setWinningPattern( [] );
  };

  const handleClickTile = ( index ) => {
    if ( tilesClaimed.includes( index ) || gameOver ) {
      return
    };

    const nextClaimed = [ ...tilesClaimed, index ];
    const nextPlayerTiles = [ ...playerTiles ];
    nextPlayerTiles[ currentPlayer ] = [ ...nextPlayerTiles[ currentPlayer ], index ];

    const pattern = win_patterns.find(p =>
      p.every( tile => nextPlayerTiles[ currentPlayer ].includes( tile ) )
    );

    if ( pattern ) {
      setPlayerTiles( nextPlayerTiles );
      setTilesClaimed( nextClaimed );
      setGameOver( true );
      setWinningPattern( pattern );
      setScorecard(prev => ({
        ...prev,
        [ players[ currentPlayer ] ]: prev[ players[ currentPlayer ] ] + 1,
      }));
      return;
    }

    setPlayerTiles( nextPlayerTiles );
    setTilesClaimed( nextClaimed );
    setCurrentPlayer( ( currentPlayer + 1 ) % 2 );

    if ( nextClaimed.length === board_tiles ) {
      setGameOver( true );
    }
  };

  return (
    <div>
      <GameWrapper currentPlayer={ players[ currentPlayer ] }>
        {Array.from( { length: board_tiles } ).map(( _, index ) => {
          const isWinningTile = winningPattern.includes( index );
          const symbol =
            playerTiles[0].includes( index ) ? player_symbols[0] :
            playerTiles[1].includes( index ) ? player_symbols[1] : null;

          return <Tile callback={ () => handleClickTile( index ) } isWinningTile={ isWinningTile } key={ index } symbol={ symbol } />
        })}
      </GameWrapper>
      <div className="p-5 flex flex-col justify-center items-center gap-5">
        <Scoreboard scorecard={ scorecard } />
        { gameOver && <Reset callback={ handleResetGame } /> }
      </div>
    </div>
  );
}

export default App;