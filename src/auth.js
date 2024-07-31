export function verifyLocalStorage(){
    if(localStorage.getItem('user')&&localStorage.getItem('token')){
        return true;
    }
    else{
        return false;
    }
}