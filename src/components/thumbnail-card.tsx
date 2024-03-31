import React from 'react';
import { ReactComponent as MovieIcon } from "../assets/icon-nav-movies.svg";
import { ReactComponent as TvSeriesIcon } from "../assets/icon-nav-tv-series.svg";
import { ReactComponent as BookmarkIconEmpty } from "../assets/icon-bookmark-empty.svg";
import { ReactComponent as BookmarkIconFull } from "../assets/icon-bookmark-full.svg";


type ThumbnailCardType = {
  data: {
    title: string
    year: number
    type: "Movie" | "TV Series"
    bookmarked: boolean
    rating: string
    thumbnail: string
  }
  isLarge?: boolean

}
export function ThumbnailCard(props: ThumbnailCardType){
  return (
    <div className={`thumbnailCard shrink-0 flex flex-col gap-2 ${props.isLarge ? "trending": "normal"}`}>
      <div className={`group ${props.data.bookmarked ? "active": ""} relative cursor-pointer rounded-lg shrink-0 overflow-hidden ${props.isLarge ? "w-[470px] h-[230px]" : "w-[280px] max-h-[174px]"}`}>
        <img src={props.data.thumbnail} alt={`${props.data.title} thumbnail`} />
        {
          props.isLarge && (
            <div className='bottomOverlay z-10 w-full h-[100px] absolute bottom-0 left-0 p-6 flex flex-col gap-[3px]'>
              <div className='flex items-center gap-2'>
                <span className='info text-white/75 text-[15px] font-thin'>{props.data.year}</span>
                <div className='hasDot flex items-center gap-1.5 pl-2'>
                  {props.data.type === 'Movie' ? <MovieIcon className='svgIcon'/> : <TvSeriesIcon className='svgIcon'/>}
                  <span className='info text-white/75 text-[15px] font-thin '>{props.data.type}</span>
                </div>
                <span className='info hasDot text-white/75 text-[15px] font-thin pl-2'>{props.data.rating}</span>
              </div>
              <div className='title text-2xl leading-6 text-white'>
                {props.data.title}
              </div>
            </div>
          )
        }
        <div className='absolute z-10 top-2 right-2 md:right-6 md:top-4 w-8 h-8 rounded-full flex items-center justify-center bookmark'>
          {
            !props.data.bookmarked ? (<BookmarkIconEmpty className='emptyIcon'/> ): 
           ( <BookmarkIconFull />)
          }
        </div>
        <div className='playBtn absolute bg-black/50 inset-0 invisible md:group-hover:visible '/>
        <div className='absolute hidden z-50 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] md:group-hover:flex items-center gap-[19px] justify-center bg-white/25 rounded-3xl h-[48px] w-[117px] '>
          <img src={require("../assets/icon-play.svg").default} alt="play button icon" className='max-w-[30px]' />
          <span className='text-lg leading-[100%] text-white font-light'>Play</span>
        </div>
      </div>
      {
        !props.isLarge && (
          <div className='w-full flex flex-col gap-1 md:gap-[5px]'>
            <div className='flex items-center gap-2'>
              <span className='text-white/75 text-[11px] md:text-[13px] font-thin'>{props.data.year}</span>
              <div className='hasDot flex items-center gap-1.5 pl-2'>
                {props.data.type === 'Movie' ? <MovieIcon className='svgBottomIcon'/> : <TvSeriesIcon className='svgBottomIcon'/>}
                <span className='text-white/75 text-[11px] md:text-[13px] font-thin '>{props.data.type}</span>
              </div>
              <span className='hasDot text-white/75 text-[11px] md:text-[13px] font-thin pl-2'>{props.data.rating}</span>
            </div>
            <div className='text-sm md:text-lg md:leading-[18px] md:h-[23px] text-white'>
              {props.data.title}
            </div>
          </div>
        )
      }
    </div>
  )
}