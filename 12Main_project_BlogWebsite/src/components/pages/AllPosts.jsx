import React, { useEffect, useState } from 'react'
import appwriteService from '../../AppWrite/config'
import { Container,AddPost } from '../container'

function AllPosts() {
    const [post , setPosts] = useState([])
    useEffect(() => {} , [])
    appwriteService.getPost([]).then((post) => setPosts(post))
  return (
    
  )
}

export default AllPosts