import { useRef } from "react";


const User = ({setUsername}) => {
    const inputRef = useRef()
    const handleClick = () => {
        setUsername(inputRef.current.value)
    }
    return (
        <div className="user">
            <input type="text" ref={inputRef} className='user_input' placeholder="Votre prénom"/>
            <button className="user_button" onClick={handleClick}>Commencer</button>
        </div>
    );
};

export default User;