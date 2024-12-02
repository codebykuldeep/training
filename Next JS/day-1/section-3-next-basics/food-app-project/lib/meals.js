import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';
import fs from 'fs'

const db = sql('meals.db');

export async function getMeals(){
    await new Promise((resolve)=>setTimeout(()=>(resolve(true)),2000))
    //throw new Error('loading data failed')
    return db.prepare('SELECT * FROM meals').all();
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals where slug = ?').get(slug);
}

export async function saveMeal(meal){
    meal.slug = slugify(meal.title,{lower:true});
    meal.instructions = xss(meal.instructions);
    const extension = meal.image.name.split('.').pop();
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
        throw new Error('Saving image failed!');
        }
    });

    meal.image = `/images/${fileName}`;
    meal.creator = meal.name;
    meal.creator_email = meal.email;

    db.prepare(`
        INSERT INTO meals
          (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
          @title,
          @summary,
          @instructions,
          @creator,
          @creator_email,
          @image,
          @slug
        )
      `).run(meal);
}