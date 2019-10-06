import {useState} from 'react';
function useEdit ( initialValue = false){
    const [state,setState] = useState(initialValue);
    const edit = () =>{
        setState(!state)
    }
    //return state
    return[state,edit];
}
export default useEdit;