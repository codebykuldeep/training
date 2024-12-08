'use client';
import { auth } from '@/actions/auth-actions';
import Link from 'next/link';
import {useActionState} from 'react'
export default function AuthForm({mode}) {

  const [state,formAction] = useActionState(auth.bind(null,mode),{});
  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {
        state.errors && (
          <ul id='form-errors'>
            {Object.values(state.errors).map(error=>(
              <li key={error}>{error}</li>
            ))}
          </ul>
        )
      }
      <p>
        <button type="submit">
          {mode === 'login' ? 'LOGIN' : 'SIGN UP'}
        </button>
      </p>
      <p>
        {mode === 'login' ? (
          <Link href="/?mode=signup">Create an account</Link>
        ):(
          <Link href="/?mode=login">Login with existing account.</Link>
        )}
        
      </p>
    </form>
  );
}
