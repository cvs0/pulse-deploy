import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'
import Modal from '@/components/Modal'
import Form from '@/components/Form'
import PostFeed from '@/components/posts/PostFeed'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='text-3xl text-sky-500'>
        <Header label="Home" />
        <Form placeholder="What's happening?" />
        <PostFeed />
      </div>
    </>
  )
}
