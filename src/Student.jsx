import Score from './Score'

export default function Student(props){


    return(
        <div>
            <h2>Name: {props.name}</h2>
            <p><strong>Bio:</strong> {props.bio}</p>
            <Score
                scores = {props.scores}
            />
        </div>
    )
}