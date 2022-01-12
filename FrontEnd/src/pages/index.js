import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Router from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() =>{
    Router.push('profissional/home')
  },[])
  return <div></div>
}
