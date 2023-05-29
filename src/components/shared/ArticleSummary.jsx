import React from 'react'

const ArticleSummary = ({summary}) => {
  // summary.split('/n').map(p => console.log(p))
  // console.log(summary)
  // const formattedSummary = summary.replace(/\n\n/g, '<br>');
  // console.log(formattedSummary)
  return (
    <div className='flex flex-col gap-3'>
      <h2 className="font-satoshi font-bold text-gray-600 text-2xl">
        Article <span className='green_gradient'>Summary</span>
      </h2>
      <div className="summary_box">
        {summary.split('/n').map((paragraph,index) => (
          <p className='font-inter font-medium text-sm green_gradient' key={index}>
            {paragraph}
            {<br/>}
          </p>
        ))}
      </div>
    </div>
  )
}

export default ArticleSummary
