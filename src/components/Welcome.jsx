import { Link, useParams} from 'react-router-dom';

export default function Welcome() {
    const {fName, lName} = useParams()
    console.log(useParams())
    return(
        <div>
            <Link to={'/'}>Home</Link>
            <h1>Hello {fName} {lName} </h1>
        </div>
    )
}