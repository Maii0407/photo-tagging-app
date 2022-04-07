import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import Snackbar from '@material-ui/core/Snackbar';

import { Photo } from './components/Photo';
import { Header } from './components/Header';
import { Timer } from './components/Timer';
import { Sidebar } from './components/SideBar';
import { NewGame } from './components/NewGameOverlay';
import { Form } from './components/FormOverlay';
import { Scoreboard } from './components/ScoreboardOverlay';

import './App.css';
import murataArt from './assets/murata-POKEMON.png';
import { data } from './components/data';
import { database } from './firebase-config';
import { SnackbarContent } from '@material-ui/core';

const App = () => {
  const { cardList } = data;
  const coordsRef = collection( database, 'imageCoords' );
  const scoreRef = collection( database, 'scoreBoard' );

  const [ findItems, setFindItems ] = useState( cardList );
  const [ mapCoords, setMapCoords ] = useState([]);
  const [ currentItem, setCurrentItem ] = useState('');
  const [ openSnackbar, setOpenSnackbar ] = useState( false );
  const [ timerStatus, setTimerStatus ] = useState( false );
  const [ count, setCount ] = useState( 0 );
  const [ scoreArray, setScoreArray ] = useState([]);

  const replayGame = () => {
    setFindItems( cardList );
  };

  const startGame = async () => {
    //this fetches the area maps from firestore
    const data = await getDocs( coordsRef );
    setMapCoords( data.docs.map(( doc ) => ({ ...doc.data() })));
    //this makes the overlay disapppear
    document.getElementById( 'overlay' ).style.display = 'none';
    setTimerStatus( true );
  };

  const saveScore = async ( nameText ) => {
    try{
      await addDoc( scoreRef, {
        name: nameText,
        time: count,
      })
    }
    catch( error ) {
      console.error( 'Error in sending score to database', error );
    }
  };

  const getScores = async () => {
    const data = await getDocs( scoreRef );
    const newArray = data.docs.map(( doc ) => ({ ...doc.data() }));
    const sortArray = newArray.sort(( a, b ) => { return a-b });
    setScoreArray( sortArray );
  };

  const removeFindItems = ( obj ) => {
    setFindItems( findItems.filter(( val ) => val.name !== obj.name ) );
  };

  const onOpen = () => {
    setOpenSnackbar( true );
  };

  const closeSnckbar = ( e, reason ) => {
    if( 'clickaway' === reason ){
      return;
    } else {
      setOpenSnackbar( false );
    }
  };

  useEffect(() => {
    let timerID;

    if( timerStatus === true ) {
      timerID = setInterval(() => {
        setCount( count + 1 );
      }, 1000);
    };

    return () => clearInterval( timerID );
  }, [ timerStatus, count ]);

//makes the game end if findItems array length equals to 0
  useEffect(() => {
    if( findItems.length === 0 ) {
      setTimerStatus( false );
      document.getElementById( 'form-overlay' ).style.display = 'block';
    } else {
      return;
    };
  }, [ findItems ]);

  return (
    <div className='App' >
      <div className='upper-container'>
        <Header header={ `Find That Pokémon` }/>
        <Timer count={ count } />
      </div>
      <NewGame startGame={ startGame } findItems={ findItems } />
      <Form count={ count } setCount={ setCount } getScores={ getScores } saveScore={ saveScore } />
      <Scoreboard replayGame={ replayGame } scoreArray={ scoreArray }/>
      <div className='content-container'>
        <Sidebar findItems={ findItems }/>
        <Photo currentItem={ currentItem } setCurrentItem={ setCurrentItem }
        mapCoords={ mapCoords } findItems={ findItems }
        removeFindItems={ removeFindItems } photo={ murataArt }
        onOpen={ onOpen } alt=' PHOTO OF POKEMON FANART '/>
      </div>
      <Snackbar open={ openSnackbar } autoHideDuration={ 700 }
      onClose={ closeSnckbar } anchorOrigin={{ vertical: 'top', horizontal: 'center', }} >
        <SnackbarContent style={{ backgroundColor: 'green', }}
        message={ <span id='client-snackbar'>{ `${ currentItem } is found!` }</span> }/>
      </Snackbar>
    </div>
  );
};

export { App };