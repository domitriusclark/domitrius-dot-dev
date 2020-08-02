// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as blogPosts } from './blog/*.mdx';
import Fuse from 'fuse.js';
import { useImage } from 'use-cloudinary';

import {
  Flex,
  Image,
  Text
} from "@chakra-ui/core"

export default function Home() {
  const { generateUrl, url, isLoading, isError } = useImage({ cloudName: "testing-hooks-upload" });

  React.useEffect(() => {
    generateUrl({ publicId: "transparent_dom_logo", transformations: {} })
  }, [])

  if (isLoading) {
    return (
      <p>Loading...</p>
    )
  }

  return (
    <Flex direction="column" m={16} alignItems="center" justify="center">
      <Image src={url} />
      <Flex direction="column" alignItems="center" textAlign="center" w="50%">
        <Text fontSize="50px" mt={8}>Welcome 👋</Text>
        <Text mt={8}>My name is Domitrius. I'm an Advocate Engineer at Cloudinary. I stream on Twitch. I make educational content on Egghead. All my other time is consumed by video games</Text>
      </Flex>
    </Flex>
  )
}

// import ContentBox from '../components/ContentBox';

// const [query, updateQuery] = React.useState('');

// const fuse = new Fuse(blogPosts, {
//   keys: ['tags', 'title']
// })
// const results = fuse.search(query)
// const blogResults = query ? results.map(blog => blog.item) : blogPosts;

// function onSearch(e) {
//   return updateQuery(e.target.value)
// }

// <Input w="40%" onChange={e => onSearch(e)} />

{/* {blogResults.map(blog => <ContentBox blog={blog} key={blog.__resourcePath} />)} */ }
