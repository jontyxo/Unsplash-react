import {useEffect} from 'react';

export const useOnKeyPress=(callback,target) => {
useEffect(()=>{
    const keyPressHandler=(e)=>{
        if(e.key==target){
            callback();
        }
    }
    window.addEventListener('keydown',keyPressHandler);
    return()=>{
        window.removeEventListener('keydown',keyPressHandler);
    }
},[callback,target]);
}