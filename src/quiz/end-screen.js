import "./end-screen.css";

function EndStat({ label, value }) {
    return (
        <div className="end-screen__stat">
            <div className="end-screen__label">{label}</div>
            <div className="end-screen__stat-value">{value}</div>
        </div>
    );
}
/**
 * Endscreen renders the final game stats.
 * @param {object} props
 * @param {number} props.score
 * @param {number} props.bestScore
 * @param { () => void} props.onRetryClick A function to run when the retry button is clicked.
 * */

function EndScreen({score, bestScore , onRetryClick }) {
    return (
      <div className = "end-screen">
        <h1> Quiz Complete!</h1>
        <div className="end-screen__trophy"> 👍 </div>
        <EndStat label="Score" values={score} />
        <EndStat label="Best Score" value={bestScore} />
        <button className="end-screen__button" onClick={onRetryClick}>
          Retry?
        </button>
      </div> 
    );      
         
}

export default EndScreen;