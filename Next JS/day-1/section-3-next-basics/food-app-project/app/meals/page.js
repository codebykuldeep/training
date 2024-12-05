import React, { Suspense } from 'react'
import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from '@/components/meals/meal-grid'
import { getMeals } from '@/lib/meals'

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid  meals={meals}/>
}
export default async function page() {
  
  return (
    <>
    <header className={classes.header}>
      <h1>
        Delicious meals, created{' '}
        <span className={classes.highlight}>by you</span>
      </h1>
      <p>
        Choose your favourite recipe and cook it youself.It is easy and fun.
      </p>
      <p className={classes.cta}>
        <Link href={'/meals/share'}>
        Share YOur Favorite Recipe
        </Link>
      </p>
    </header>
    <main className={classes.main}>
      <Suspense fallback={<p className={classes.loading}>Meals Loading. Please wait ....</p>}>
      <Meals/>
      </Suspense>
    </main>
    </>
  )
}
