import './App.css';
import {useState, useEffect} from 'react'


function Board({playerOne, playerTwo}) {

    // need to figure out check for winner next

    const [playerOneName, setPlayerOneName] = useState('Player 1')
    const [playerTwoName, setPlayerTwoName] = useState('Player 2')
    const [playerOneScoreboard, setPlayerOneScoreboard] = useState([])
    const [playerTwoScoreboard, setPlayerTwoScoreboard] = useState([])
    const [playerOneScore, setPlayerOneScore] = useState(0)
    const [playerTwoScore, setPlayerTwoScore] = useState(0)
    const [previousScores, setPreviousScores] = useState([])
    const [streak, setStreak] = useState({})
    const [alert, setAlert] = useState(false)
    const [winner, setWinner] = useState("")
    const [renderToggle, setRenderToggle] = useState(true)

    useEffect(() => {
        setPlayerOneScoreboard(playerOne.scoreboard)
        setPlayerTwoScoreboard(playerTwo.scoreboard)

        if (localStorage.getItem('playerOneName') && localStorage.getItem('playerTwoName')) {
            setPlayerOneName(localStorage.getItem('playerOneName'))
            setPlayerTwoName(localStorage.getItem('playerTwoName'))
            // console.log(localStorage.getItem('playerOneName'))
        }
    }, [])

    const markScore = (value, player) => {
        let closed = isClosed(value)

        if (!closed) {
            if (player === 'p1') {

                playerOne.addScore(value)
                playerOne.totalScore()
                
                let scoreboard = playerOne.scoreboard
                setPlayerOneScoreboard(scoreboard)

                let score = playerOne.score
                setPlayerOneScore(score)
                
                let scoresArr = previousScores
                scoresArr.push({player, value})
                setPreviousScores(scoresArr)
                // console.log(previousScores)
                
                setRenderToggle(!renderToggle)

            } else {
                playerTwo.addScore(value)
                playerTwo.totalScore()

                let scoreboard = playerTwo.scoreboard
                setPlayerTwoScoreboard(scoreboard)
                
                let score = playerTwo.score
                setPlayerTwoScore(score)
                
                let scoresArr = previousScores
                scoresArr.push({player, value})
                setPreviousScores(scoresArr)
                // console.log(previousScores)
                
                setRenderToggle(!renderToggle)
                
            }
            
            getStreak()
            checkForWinner()

        } else {
            console.log('closed')
        }
    }

    const undoScore = (e) => {
        e.preventDefault()

        if (previousScores.length >= 1) {
            let previousArr = previousScores
            let previous = previousArr.pop()
            setPreviousScores(previousArr)
            // console.log(previousScores)


            if (previous.player === 'p1') {
                playerOne.removePreviousScore()
                playerOne.totalScore()
                let scoreboard = playerOne.scoreboard
                let score = playerOne.score
                setPlayerOneScoreboard(scoreboard)
                setPlayerOneScore(score)
                setRenderToggle(!renderToggle)
            } else {
                playerTwo.removePreviousScore()
                playerTwo.totalScore()
                let scoreboard = playerTwo.scoreboard
                let score = playerTwo.score
                setPlayerTwoScoreboard(scoreboard)
                setPlayerTwoScore(score)
                setRenderToggle(!renderToggle)
            }

        }
        
        getStreak() 

    }

    const getChalk = (count) => {
        if (count === 1 ) {
            return './1slash.png'
        } else if (count === 2) {
            return './x.png'
        } else if (count >= 3) {
            return './circlex.png'
        } else {
            return './1slash.png'
        }
    }

    const isClosed = (value) => {
        let playerOneValue = playerOneScoreboard.filter(s => {
            return s.value === value
        })
        let playerTwoValue = playerTwoScoreboard.filter(s => {
            return s.value === value
        })

        if (playerOneValue[0].closed && playerTwoValue[0].closed) {
            return true
        } else {
            return false
        }
    }

    const getStreak = () => {
        let previousArr = previousScores.slice()
        previousArr.reverse()
        let inARow = 0

        if (previousArr.length === 0) {
            setStreak({})
            return
        }

        for (let i = 0; i <= previousArr.length - 1; i++) {
            if (previousArr[0].player === previousArr[i].player) {
                inARow += 1
            } else {
                break
            }
        }

        let inARowArr = previousArr.slice(0, inARow)
        // console.log(inARowArr)

        let playerWithStreak = inARowArr[0].player === 'p1' ? playerOneName : playerTwoName
        let valuesArr = inARowArr.map(v => v.value).reverse()
        
        let countsOfValues = {}
        valuesArr.forEach(v => {countsOfValues[v] = (countsOfValues[v] || 0) + 1; })
        // console.log(countsOfValues)

        let valuesSetArr = Array.from(new Set(valuesArr))
        let valuesArrWithCount = valuesSetArr.map(v => {
            return `${v}{${countsOfValues[v]}}`
        })

        let newStreak = {
            playerWithStreak, 
            values: valuesArrWithCount.join(' ')
        }

        // console.log(newStreak)
        setStreak(newStreak)
    }

    const checkForWinner = () => {
        let playerOneAllClosed = allClosed(playerOneScoreboard)
        let playerTwoAllClosed = allClosed(playerTwoScoreboard)

        if (!playerOneAllClosed && !playerTwoAllClosed) {
            // console.log('no winner yet')
            return false
        }

        if (playerOneAllClosed && playerOneScore > playerTwoScore) {
            console.log(`${playerOneName} wins!`)
            setWinner(playerOneName)
        }

        if (playerTwoAllClosed && playerTwoScore > playerOneScore) {
            console.log(`${playerTwoName} wins!`)
            setWinner(playerTwoName)
        }
    }

    const allClosed = (scoreboard) => {
        let closedCount = 0
        
        for (let i = 0; i <= scoreboard.length - 1; i++) {
            if (scoreboard[i].closed) {
                closedCount += 1
            }
        }

        if (closedCount === 7) {
            return true
        } else {
            return false
        }
    }


    const reload = () => {
        window.location.reload()
        return false
    }

    const toggleAlert = (e) => {
        e.preventDefault();

        if (previousScores.length >= 1) {
            setAlert(!alert)
        }
    }


    const handleFocus = (e) => {
        e.target.select()
    }

    const numbers = ['20','19','18','17','16','15','bull']

    return (
        <div >
            <h1>cricket</h1>

            {alert && 
                <div className='modalContainer'>
                    <div className='modal'>

                        <p>Are you sure?</p>

                        <div className='buttonContainer'>
                            <button className='modalButton' onClick={reload}>yep</button>
                            <button className='modalButton' onClick={toggleAlert}>nope</button>
                        </div>

                    </div>
                </div>
            }

            {winner && 
                <div className='modalContainer'>
                    <div className='modal'>

                        <p>{winner} wins!</p>

                        <div className='buttonContainer'>
                            <button className='modalButton' onClick={reload}>restart</button>
                            {/* <button className='modalButton' onClick={() => {setWinner("")}}>view</button> */}
                        </div>

                    </div>
                </div>
            }

            <div className='infoContainer'>

                {/* player one name input */}
                <div className='infoItem' ><input type="text" name="p1Name" className='playerName' placeholder='Player 1' value={playerOneName} onChange={(e) => {setPlayerOneName(e.target.value); localStorage.setItem('playerOneName', e.target.value)}} onFocus={handleFocus} style={playerOneName === 'Player 1' ? {opacity: '.5'} : {opacity: '1'}}/></div>
                
                {/* undo move */}
                <div className='infoItemSmall'><span style={previousScores.length >= 1 ? {opacity: '1'} : {opacity: '.5'}} onClick={(e) => {undoScore(e)}}>undo</span></div>

                {/* reset board */}
                <div className='infoItemSmall'><span onClick={toggleAlert} style={previousScores.length >= 1 ? {opacity: '1'} : {opacity: '.5'}}>reset</span></div>
                
                {/* player two name input */}
                <div className='infoItem' ><input type="text" name="p2Name" className='playerName' placeholder='Player 2' value={playerTwoName} onChange={(e) => {setPlayerTwoName(e.target.value); localStorage.setItem('playerTwoName', e.target.value)}} onFocus={handleFocus} style={playerTwoName === 'Player 2' ? {opacity: '.5'} : {opacity: '1'}}/></div>

            </div>

            <div className="boardContainer">

                {/* player one chalk column */}
                <div className='column'>
                    {playerOneScoreboard.map(({value, count, textValue}) => (
                        
                        <div className='columnItem' data-value={value} key={`p1-${textValue}`}>
                            <img onClick={() => {markScore(value, 'p1')}} className='chalk' style={count === 0 ? {fontSize: '12px', opacity: '.05'} : {fontSize: '12px'}} src={getChalk(count)} alt="chalk" />
                        </div >
                            
                    ))}

                    <div className='columnItem' ><span style={{fontSize: '42px', fontFamily: "'Montserrat Subrayada', sans-serif"}}>{playerOneScore}</span></div>

                </div>
                
                {/* numbers column */}
                <div className='column' style={{border: '2px solid rgba(255,255,255,.5)', borderTop:'none', borderBottom: 'none'}}>                   
                    {numbers.map((number) => (
                        <div className='columnItem' key={number} data-number={number} style={{fontSize: '36px'}}>{number}</div>
                    ))}
                    
                    {/* previouse score entries */}
                    <div className='smallColumnItem'>
                        {streak.values && 
                            <div style={{fontSize: '20px'}}>{`${streak.playerWithStreak}`}</div>
                        }                       
                    </div>
                    <div className='smallColumnItem streak'>
                        {streak.values && 
                            <div style={{maxWidth: '100%'}}>{`${streak.values}`}</div>
                        }
                    </div>
                </div>
                
                {/* player two chalk column */}
                <div className='column'>
                {playerTwoScoreboard.map(({value, count, textValue}) => (

                        <div className='columnItem' data-value={value} key={`p2-${textValue}`}>
                            <img onClick={() => {markScore(value, 'p2')}} className='chalk' style={count === 0 ? {fontSize: '12px', opacity: '.05'} : {fontSize: '12px'}} src={getChalk(count)} alt="chalk" />
                        </div >

                    ))}

                    <div className='columnItem'><span style={{fontSize: '42px', fontFamily: "'Montserrat Subrayada', sans-serif"}}>{playerTwoScore}</span></div>

                </div>
            </div>

        </div>
    );
}

export default Board;