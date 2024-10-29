"use client";

import { useForm, SubmitHandler } from 'react-hook-form'
import { Label } from '../Input/Input';
import { PostCommentButton } from '../Button/Button';

interface IFormInput {
    userName: string
    email: string
    description: string
    movieId?: string
}

export default function Form({isFlex = false, movieId}:{isFlex?: boolean, movieId?: string}) {
    const { handleSubmit, register } = useForm<IFormInput>()

    const createComment = async(data: IFormInput) => {
      try{
        const response = await fetch(`/api/movies/${movieId}/comments`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({...data, movieId})
        })

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Error response:', errorData);
          throw new Error(`Failed to create comment: ${errorData.message}`);
        }
  

        console.log('Comment created successfully:', await response.json());
        //
      }catch (error){
        console.error('Error creating comment:', error);
      }
    }

    const onSubmit: SubmitHandler<IFormInput> = (data) => {
      console.log(data)
      createComment({...data, movieId});
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{display: `${isFlex ? 'flex': 'block'}`, gap: '15px'}}>
            <div className="form-control" style={{width: '100%', marginBottom: '20px'}}>
                <Label>Name</Label>
                {/* <input type="text" {...register("name", {required: true})} style={{width: '100%'}} /> */}
                {/* <Input role='userName' /> */}
                <input className='custom-input'
                  type='text'
                  {...register('userName', {required: true})}
                  style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '1px solid #d8d8d8',
                  backgroundColor: '#fff',
                  transition: 'all 300ms ease-in-out'
                }}
                />
            </div>
            <div className="form-control" style={{width: '100%', marginBottom: '20px'}}>
                <Label>Email</Label>
                {/* <input type="text" {...register("email", {required: true})} style={{width: '100%'}} /> */}
                {/* <Input role='email' /> */}
                <input className='custom-input'
                  type='text'
                  {...register('email', {required: true})}
                  style={{
                  width: '100%',
                  padding: '12px 15px',
                  border: '1px solid #d8d8d8',
                  backgroundColor: '#fff',
                  transition: 'all 300ms ease-in-out'
                }}
                />
            </div>
        </div>
        <div className="form-control" style={{marginBottom: '20px'}}>
            <Label>Comment</Label>
            {/* <textarea {...register("comment", {required: true})} style={{width: '100%'}}></textarea> */}
            {/* <TextArea role='description' /> */}
            <input
              className='custom-input'
              {...register('description', {required: true})}
                style={{
                width: '100%',
                padding: '12px 15px',
                border: '1px solid #d8d8d8',
                resize: 'none',
                backgroundColor: '#fff',
                transition: 'all 300ms ease-in-out',
                height: '208px',
            }}
           />
        </div>
        {/* <button type="submit" style={{padding: '12px 24px', border: '2px solid #ec7532', color: '#ec7532', backgroundColor: '#fff', outline: 'none', letterSpacing: '4px', textTransform: 'uppercase',fontSize: '13px', borderRadius: '30px'}}>post comment</button> */}
        <PostCommentButton />
      </form>
    </div>
  )
}

