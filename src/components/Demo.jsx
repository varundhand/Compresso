// import { useState, useEffect } from "react"
import { useEffect, useState } from 'react'
import {ReactComponent as LinkSVG} from '../assets/link.svg'
import { copy, linkIcon, loader, tick } from "../assets";

import LoadingSpinner from './shared/LoadingSpinner';
import ErrorMessage from './shared/ErrorMessage';
import ArticleSummary from './shared/ArticleSummary';

import { useLazyGetSummaryQuery } from '../services/article'

const Demo = () => {
  // const [{url,summary},setArticle] = useState({  //destructered them on the spot
  const [article,setArticle] = useState({ // current article
  url: '',
  summary: ''
  })
  const [allArticles, setAllArticles] = useState([])
  
  const [getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(localStorage.getItem('articles')); // retrieving all articles from local storage
    if (articlesFromLocalStorage){
      setAllArticles(articlesFromLocalStorage)
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {data} = await getSummary({articleUrl: article.url});

    if (data?.summary){ // if data object exists with summary property
      const newArticle = {...article, summary: data.summary};
      const updatedAllArticles = [newArticle,...allArticles ]
      
      setArticle(newArticle)
      setAllArticles(updatedAllArticles)

      localStorage.setItem('articles',JSON.stringify(updatedAllArticles)) // setting all articles in local storage
    }
  }

  return (
    <div>
      <section className="mt-16 w-full max-w-xl">
        <div className="flex flex-col w-full gap-2 ">
          <form 
            className="relative flex justify-center items-center"
            onSubmit={handleSubmit}  
          >
            {/* <img 
              src={linkIcon} 
              alt="link_icon" 
              className='absolute left-0 my-2 ml-3 w-5'
            /> */}
            <LinkSVG/>
            <input 
              type="url" 
              placeholder='Enter a URL'
              value={article.url}
              onChange={e => setArticle({...article,url:e.target.value})}
              required
              className='url_input peer'
            />
            <button
              type='submit'
              className='submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700'
            >
              ↩
            </button>
          </form>

          {/* URL HISTORY  */}
          <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
            {allArticles.map((item,index) => (
              <div
                key={`link-${index}`}
                onClick={() => setArticle(item)}
                className="link_card"
              >
                <div className="copy_btn">
                  <img 
                    src={copy} 
                    alt='copy_icon' 
                    className='w-[40%] h-[40%] object-contain'
                  />
                </div>
              <p className='flex-1 font-satoshi font-medium text-sm truncate text-emerald-500'>
                {item.url}
              </p>
              </div>
            ))}  
          </div>
        </div>

        {/* RENDERING RESULTS */}
        <div className='my-10 max-w-full flex justify-center items-center'>
          {isFetching ? <LoadingSpinner/> : error ? <ErrorMessage error={error?.data?.error}/> : (article.summary && <ArticleSummary summary={article.summary}/>)}
        </div>
      </section>
    </div>
  )
}

export default Demo
