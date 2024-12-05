"use server";

import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { redirect } from "next/navigation";
import { uploadImage } from "./cloudinary";
import { revalidatePath } from "next/cache";

export async function createPost(prevState,formData) {
    
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    let errors =['','',''];
    let validation = true;
    if(!title || title.trim().length === 0){
      errors[0] ='Title is required';
      validation =false;
    }
    if(!content || content.trim().length === 0){
      errors[1] ='Content is required';
      validation =false;
    }
    if(image.size === 0){
      errors[2] ='Image is required';
      validation =false;
    }
    
    
    if(!validation){
      return errors;
    }

    let imageURL;
    try{
      imageURL = await uploadImage(image);
      console.log(imageURL);
      
    }
    catch(e){
      throw new Error(
        'Image upload failed,post was not created.PLease Try again later'
      )
    }

    await storePost({
      imageUrl: imageURL,
      title,
      content,
      userId: 1
    })

    revalidatePath('/','layout')
    redirect('/feed')
  }


  export async function togglePostLikeStatus(postId,formData) {
    await updatePostLikeStatus(postId,2);
    revalidatePath('/','layout')
  }