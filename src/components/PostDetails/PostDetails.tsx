import { Box, Typography } from '@mui/material';
import HoverMoviePhoto from '../HoverMoviePhoto/HoverMoviePhoto';
import { Post } from '@/types/postTypes';
import Tap from '../Tap/Tap';
import Comment from '../Comment/Comment';
import Form from '../Form/Form';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import Link from 'next/link';

interface IProps {
	params: {
		slug: string;
        categories: string | string[];
	}
}

export default async function PostDetails({params}: IProps) {
  
       
  const post: Post = await fetch(`http://localhost:3000/api/posts/${params.slug}`)
  .then(res => res.json());
       
  if (!post) {
    return (
      <Box sx={{ width: '100%', textAlign: 'center', padding: '50px' }}>
        <Typography variant="h4">Post not found</Typography>
      </Box>
    );
  }

  return (
    <>
        <Box borderBottom={'1px solid #d8d8d8'}>
        <Box maxHeight={'304px'} overflow='hidden' borderRadius='10px'>
          <HoverMoviePhoto ourWidth={'100%'} imgPath={post?.postImgPath} />
        </Box>
        <Box>
          <Typography color={'#fbbd61'} sx={{display: 'inline-block', marginRight: "8px", textTransform: "uppercase", margin: '30px 0 8px', fontSize: '14px', color: '#ec7532'}}>
            {post.categories.join(', ')}
          </Typography>
          <Tap tapItems={post.title} ourColor='#717171' isUpper={false} ourBorderColor='#d8d8d8' ourPadding='0 0 20px'/>
          <Typography color='#717171' margin={'20px 0'}>{post.descriptionOne}</Typography>
          <Typography color='#717171' margin={'20px 0'}>{post.descriptionTwo}</Typography>
        </Box>
        <Box borderTop='1px solid #d8d8d8' padding='10px 0' marginTop='35px' color='#717171'>
          <LocalOfferIcon style={{marginRight: '10px', fontSize: '14px', color: '#ec7532'}} />Tags: 
          {post.tags.map((tag, index) => (
            <span key={index}>
              <Link href={`/news/${params.slug}`} style={{marginLeft: '5px', fontSize: '12px'}}>{tag}</Link>
              {index < post.tags.length - 1 && ','}
            </span>
          ))}
        </Box>
      </Box>
        {/* <Post post={post} /> */}
        <Tap tapItems='comments' ourColor='#ec7532' ourBorderColor='#d8d8d8' ourMargin='45px 0'/>
        <Box>
            <Comment />
            <Comment />
        </Box>
        <Tap tapItems='leave a comment' ourColor='#ec7532' ourBorderColor='#d8d8d8' ourMargin='45px 0'/>
        <Form isFlex={true} />
    </>
  )
}
