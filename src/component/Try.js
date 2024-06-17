import './Try.css'

function Try(props){
    return (
        <button className={props.className} onClick={props.onClick}>
          {props.children}
        </button>
      );
}

export default Try;