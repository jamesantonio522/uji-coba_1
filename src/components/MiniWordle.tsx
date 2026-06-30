import { useState, useEffect } from 'react';
import { RefreshCw, Trophy, HelpCircle } from 'lucide-react';

const WORDS_POOL = ['PRESS', 'PAPER', 'STORY', 'COURT', 'TIMES', 'MEDIA', 'BRIEF', 'WORLD', 'TRUTH'];

export default function MiniWordle() {
  const [solution, setSolution] = useState('');
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [showHelp, setShowHelp] = useState(false);
  const [stats, setStats] = useState({
    played: 0,
    won: 0,
    streak: 0,
  });

  const maxGuesses = 6;

  useEffect(() => {
    startNewGame();
    // Load state stats if existing
    const saved = localStorage.getItem('nyt_wordle_stats');
    if (saved) {
      try {
        setStats(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const startNewGame = () => {
    const randomWord = WORDS_POOL[Math.floor(Math.random() * WORDS_POOL.length)];
    setSolution(randomWord);
    setGuesses([]);
    setCurrentGuess('');
    setGameStatus('playing');
  };

  const handleKeyPress = (key: string) => {
    if (gameStatus !== 'playing') return;

    if (key === 'ENTER') {
      if (currentGuess.length !== 5) return;
      
      const newGuesses = [...guesses, currentGuess];
      setGuesses(newGuesses);
      
      if (currentGuess === solution) {
        setGameStatus('won');
        const newStats = {
          played: stats.played + 1,
          won: stats.won + 1,
          streak: stats.streak + 1,
        };
        setStats(newStats);
        localStorage.setItem('nyt_wordle_stats', JSON.stringify(newStats));
      } else if (newGuesses.length >= maxGuesses) {
        setGameStatus('lost');
        const newStats = {
          played: stats.played + 1,
          won: stats.won,
          streak: 0,
        };
        setStats(newStats);
        localStorage.setItem('nyt_wordle_stats', JSON.stringify(newStats));
      }
      setCurrentGuess('');
    } else if (key === 'BACKSPACE') {
      setCurrentGuess((prev) => prev.slice(0, -1));
    } else if (/^[A-Z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => prev + key);
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toUpperCase();
      if (key === 'ENTER' || key === 'BACKSPACE' || e.keyCode === 8) {
        handleKeyPress(key === 'BACKSPACE' || e.keyCode === 8 ? 'BACKSPACE' : key);
      } else if (/^[A-Z]$/.test(key)) {
        handleKeyPress(key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentGuess, guesses, gameStatus, solution]);

  const getLetterClass = (char: string, index: number, isSubmitted: boolean, guess: string) => {
    if (!isSubmitted) return 'bg-white border-neutral-300 text-black';
    if (guess[index] === solution[index]) {
      return 'bg-green-600 border-green-600 text-white'; // Correct
    }
    if (solution.includes(char)) {
      return 'bg-yellow-500 border-yellow-500 text-white'; // Present
    }
    return 'bg-neutral-500 border-neutral-500 text-white'; // Absent
  };

  const getKeyboardKeyClass = (key: string) => {
    // Find highest status for this key
    let status = 'default';
    for (const guess of guesses) {
      const idx = guess.indexOf(key);
      if (idx !== -1) {
        if (solution[idx] === key) {
          status = 'correct';
          break; // Green is highest, can't be overridden
        } else if (solution.includes(key)) {
          status = 'present';
        } else if (status === 'default') {
          status = 'absent';
        }
      }
    }

    if (status === 'correct') return 'bg-green-600 text-white';
    if (status === 'present') return 'bg-yellow-500 text-white';
    if (status === 'absent') return 'bg-neutral-400 text-white';
    return 'bg-neutral-200 text-black hover:bg-neutral-300';
  };

  return (
    <div className="bg-white p-4 max-w-md mx-auto space-y-6 select-none border border-outline-variant rounded-none">
      {/* Game Header */}
      <div className="flex justify-between items-center border-b border-neutral-100 pb-3">
        <div className="flex items-center space-x-2">
          <Trophy className="w-5 h-5 text-neutral-800" />
          <h3 className="font-headline-lg text-lg font-bold tracking-tight">NYT Wordle Mini</h3>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowHelp(!showHelp)}
            className="p-1.5 hover:bg-neutral-100 rounded-none cursor-pointer text-neutral-500"
            title="How to play"
          >
            <HelpCircle className="w-4 h-4" />
          </button>
          <button
            onClick={startNewGame}
            className="p-1.5 hover:bg-neutral-100 rounded-none cursor-pointer text-neutral-500"
            title="New puzzle"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Help Instructions */}
      {showHelp && (
        <div className="bg-neutral-50 p-3 border border-neutral-200 text-xs font-metadata space-y-2 text-neutral-700">
          <p className="font-bold uppercase text-black">How to Play:</p>
          <p>Guess the word in 6 tries. Each guess must be a valid 5-letter word.</p>
          <ul className="list-disc pl-4 space-y-1">
            <li><span className="text-green-600 font-bold">Green</span>: Letter is in the word and in the correct spot.</li>
            <li><span className="text-yellow-600 font-bold">Yellow</span>: Letter is in the word but in the wrong spot.</li>
            <li><span className="text-neutral-500 font-bold">Gray</span>: Letter is not in the word.</li>
          </ul>
        </div>
      )}

      {/* 6x5 Letter Grid */}
      <div className="grid grid-rows-6 gap-1.5 max-w-[280px] mx-auto">
        {Array.from({ length: maxGuesses }).map((_, rowIndex) => {
          const guess = guesses[rowIndex];
          const isSubmitted = !!guess;
          const displayVal = guess || (rowIndex === guesses.length ? currentGuess : '');

          return (
            <div key={rowIndex} className="grid grid-cols-5 gap-1.5">
              {Array.from({ length: 5 }).map((_, colIndex) => {
                const char = displayVal[colIndex] || '';
                const bgClass = getLetterClass(char, colIndex, isSubmitted, guess);
                return (
                  <div
                    key={colIndex}
                    className={`aspect-square w-full flex items-center justify-center font-bold text-lg sm:text-xl border-2 transition-all duration-300 rounded-none ${bgClass}`}
                  >
                    {char}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      {/* Game Over Message */}
      {gameStatus !== 'playing' && (
        <div className="text-center p-4 bg-neutral-50 border border-neutral-200 space-y-2">
          {gameStatus === 'won' ? (
            <p className="font-headline-lg text-green-700 font-bold">Magnificent! You guessed it!</p>
          ) : (
            <div>
              <p className="font-headline-lg text-breaking-red font-bold">Better luck next time!</p>
              <p className="font-metadata text-xs text-neutral-600 mt-1">
                The word was: <span className="font-bold text-black tracking-wider">{solution}</span>
              </p>
            </div>
          )}

          {/* Mini Stats Display */}
          <div className="grid grid-cols-3 gap-2 py-2 text-center border-t border-b border-neutral-200">
            <div>
              <div className="font-bold text-lg">{stats.played}</div>
              <div className="text-[10px] uppercase font-label-caps text-neutral-500">Played</div>
            </div>
            <div>
              <div className="font-bold text-lg">
                {stats.played > 0 ? Math.round((stats.won / stats.played) * 100) : 0}%
              </div>
              <div className="text-[10px] uppercase font-label-caps text-neutral-500">Win %</div>
            </div>
            <div>
              <div className="font-bold text-lg">{stats.streak}</div>
              <div className="text-[10px] uppercase font-label-caps text-neutral-500">Streak</div>
            </div>
          </div>

          <button
            onClick={startNewGame}
            className="w-full py-2 bg-black hover:bg-neutral-800 text-white font-label-caps text-xs uppercase cursor-pointer transition-transform active:scale-95 rounded-none"
          >
            Play Again
          </button>
        </div>
      )}

      {/* Visual Keyboard */}
      <div className="space-y-1.5 max-w-[400px] mx-auto pt-2">
        {[
          ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
          ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
          ['ENTER', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'BACKSPACE'],
        ].map((row, rIdx) => (
          <div key={rIdx} className="flex justify-center space-x-1.5">
            {row.map((key) => {
              const bgClass = getKeyboardKeyClass(key);
              const isActionKey = key === 'ENTER' || key === 'BACKSPACE';
              return (
                <button
                  key={key}
                  onClick={() => handleKeyPress(key)}
                  className={`text-[11px] sm:text-xs font-bold py-3 px-1.5 sm:px-2.5 transition-colors cursor-pointer rounded-none uppercase flex-1 flex items-center justify-center ${bgClass} ${
                    isActionKey ? 'text-[9px] px-1 sm:px-1.5 font-extrabold max-w-[64px]' : 'max-w-[34px]'
                  }`}
                >
                  {key === 'BACKSPACE' ? 'DEL' : key}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
