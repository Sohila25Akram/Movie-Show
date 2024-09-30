"use client";

import React, { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import './Input.css'

// interface IFormInput {
//     name: string
//     email: string
//     comment: string
// }

export function Input({role}: {role: string}) {
    const { register } = useForm()
  return (
    <input className='custom-input'
        type='text'
        {...register(role, {required: true})}
        style={{
        width: '100%',
        padding: '12px 15px',
        border: '1px solid #d8d8d8',
        backgroundColor: '#fff',
        transition: 'all 300ms ease-in-out'
    }}
        
    />
  )
}

export function TextArea({role}: {role: string}) {
    const { register } = useForm()
    return (
      <input
        className='custom-input'
        {...register(role, {required: true})}
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
    )
  }

export function Label({children}: {children: ReactNode}){
    return(
        <label
            style={{
                letterSpacing: '1.5px',
                fontSize: '12px',
                textTransform: 'uppercase',
                color: '#4a4a4a',
                marginBottom: '5px',
                display: 'block'
            }}
        >
            {children}
        </label>
    )
}
