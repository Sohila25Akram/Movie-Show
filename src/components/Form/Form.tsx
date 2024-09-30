"use client";

import { useForm, SubmitHandler } from 'react-hook-form'
import { Input, Label, TextArea } from '../Input/Input';
import { PostCommentButton } from '../Button/Button';

interface IFormInput {
    name: string
    email: string
    comment: string
}

export default function Form({isFlex = false}:{isFlex?: boolean}) {
    const { handleSubmit } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{display: `${isFlex ? 'flex': 'block'}`, gap: '15px'}}>
            <div className="form-control" style={{width: '100%', marginBottom: '20px'}}>
                <Label>Name</Label>
                {/* <input type="text" {...register("name", {required: true})} style={{width: '100%'}} /> */}
                <Input role='name' />
            </div>
            <div className="form-control" style={{width: '100%', marginBottom: '20px'}}>
                <Label>Email</Label>
                {/* <input type="text" {...register("email", {required: true})} style={{width: '100%'}} /> */}
                <Input role='email' />
            </div>
        </div>
        <div className="form-control" style={{marginBottom: '20px'}}>
            <Label>Comment</Label>
            {/* <textarea {...register("comment", {required: true})} style={{width: '100%'}}></textarea> */}
            <TextArea role='comment' />
        </div>
        {/* <button type="submit" style={{padding: '12px 24px', border: '2px solid #ec7532', color: '#ec7532', backgroundColor: '#fff', outline: 'none', letterSpacing: '4px', textTransform: 'uppercase',fontSize: '13px', borderRadius: '30px'}}>post comment</button> */}
        <PostCommentButton />
      </form>
    </div>
  )
}

