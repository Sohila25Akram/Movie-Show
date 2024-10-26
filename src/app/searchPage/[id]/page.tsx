import React from 'react'
import MovieDetails from '@/components/MovieDetails/MovieDetails'

interface IProps {
	params: {
		id: string;
        genre: string | string[];
        label: string,
        coverImgPath: string
	}
}

export default function page({params} : IProps) {
  return (
    <>  
        <MovieDetails params={params} />
    </>

  )
}
