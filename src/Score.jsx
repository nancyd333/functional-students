export default function Score(props){
    const studentScores = props.scores.map((score, idx)=>{
        return(
            <div key={`score${idx}`}>
                <p><strong>Score:</strong> {score.score}</p>
                <p><strong>Score date:</strong> {score.date}</p>
            </div>
        )
    })

    return(
        <div>
            {studentScores}
        </div>
    )
}