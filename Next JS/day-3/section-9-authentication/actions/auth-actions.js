'use server';

import { redirect } from "next/navigation";
import { hashUserPassword, verifyPassword } from "./hash";
import { createUser, getUserByEmail } from "./user";
import { createAuthSession, destroySession } from "@/lib/auth";

export async function signup(prevState,formData){
    const email = formData.get('email');
    const password =formData.get('password');

    let errors ={};

    if(!email.includes('@')){
        errors.email ='Please enter a valid address';
    }
    if(password.trim().length < 6){
        errors.password ='Password must be at least 6 characters long'
    }

    if(Object.keys(errors).length>0){
        return {
            errors
        }
    }
    //store it in the database (create a user)
    const hashedPassword = hashUserPassword(password);
    try {
        const id = createUser(email,hashedPassword);
        await createAuthSession(id)
        
    } catch (error) {
        if(error.code === 'SQLITE_CONSTRAINT_UNIQUE'){
            return {
                errors:{
                    email:'Email id already exists'
                }
            }
        }
        else{
            throw new Error(error)
        }

        
    }
    redirect('/training')
    
}

export async function  login(prevState,formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    const existingUser =getUserByEmail(email);

    if(!existingUser){
        return {
            errors:{
                email:'Could not authenticate user,Check your email'
            }
        }
    }

    const isValidated =verifyPassword(existingUser.password,password);

    if(!isValidated){
        return {
            errors:{
                password:'Could not authenticate user,Check your password'
            }
        }
    }

    await createAuthSession(existingUser.id);
    redirect('/training')
}

export async function auth(mode,prevState,formData) {
    if(mode === 'login'){
        return login(prevState,formData)
    }
    return signup(prevState,formData);
}

export async function logout() {
    await destroySession();
    redirect('/');
}