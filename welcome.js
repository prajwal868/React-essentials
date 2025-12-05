export function Welcome(props){
    const isAdmin = false
    return(
        <div>
            <h1>Welcome to Avenger's World</h1>
            <button type="button" onClick={props.clik}>Sign Out</button>
            {isAdmin && <button type="button">Delete</button>}

            </div>
    );

}