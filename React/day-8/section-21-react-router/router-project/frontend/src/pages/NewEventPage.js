import React from 'react'
import EventForm from '../components/EventForm'
import { Form, json } from 'react-router-dom';
import classes from '../components/EventForm.module.css';

export default function NewEventPage() {
  return (
    <Form  method='POST' className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title"  required />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input id="image" type="url" name="image"  required />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input id="date" type="date" name="date"  required />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" rows="5"  required />
      </p>
      <div className={classes.actions}>
        <button type="button" >
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  )
}


export async function action({request,params}) {
  const data = await request.formData();

  const eventData = {
    title: data.get('title'),
    image:data.get('image'),
    date:data.get('date'),
    description:data.get('description'),
  }

  const response = await fetch('http://localhost:8080/events',{
    method:'POST',
    headers:{
      "Content-Type" : 'application/json'
    },
    body: JSON.stringify(eventData),
  });

  if(!response.ok){
    throw json({message:'Could not save event.'},{status:500});
  }
}

