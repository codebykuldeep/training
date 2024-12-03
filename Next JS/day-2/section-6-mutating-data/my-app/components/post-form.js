'use client';
import React from 'react'
import FormSubmit from './form-submit';
import {useActionState} from 'react';

export default function PostForm({action}) {
    const [state,formAction] =useActionState(action,[])
    
  return (
    <form action={formAction}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
          {state[0] && <p className='form-errors'>{state[0]}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="image">Image URL</label>
          <input
            type="file"
            accept="image/png, image/jpeg"
            id="image"
            name="image"
          />
          {state[2] && <p className='form-errors'>{state[2]}</p>}
        </div>
        <div className="form-control">
          <label htmlFor="content">Content</label>
          <textarea id="content" name="content" rows="5" />
          {state[1] && <p className='form-errors'>{state[1]}</p>}
        </div>
        <p className="form-actions">
          <FormSubmit/>
        </p>
      </form>

  )
}
