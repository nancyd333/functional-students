import Student from './Student'

export default function Roster(props){
    const students = props.students.map((student, idx)=>{
        return(
            <Student
                key={`student${idx}`}
                name = {student.name}
                bio = {student.bio}
                scores = {student.scores}
            />
        )
    })
    return(
        <div>
            {students}
        </div>
        
    )


}