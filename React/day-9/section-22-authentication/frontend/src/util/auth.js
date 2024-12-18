import { redirect } from "react-router-dom";

export function getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
}

export function getAuthToken(){
    const token = localStorage.getItem('token');
    const duration = getTokenDuration();
    if(!token){
        return;
    }

    if(duration <= 0 ){
        return "EXPIRED"
    }
    return token;
}

export function tokenLoader(){
    return getAuthToken();
}

export function routeProtection(){
    const token =getAuthToken();
    console.log('working');
    
    if(!token){
        console.log('redirect');
        
        return redirect('/auth');
    }

    return null;
}