import './Home.css'

function Home(props){
    const name = props.name;
    const className = props.className;
    const rollNumber = props.rollNumber;
    return(
        <div className='data'>
            <p>Name:- {name}</p>
            <p>Class:-{className}</p>
            <p>Roll Number:-{rollNumber}</p>
            {props.children}
        </div>
    );
}

export default Home;