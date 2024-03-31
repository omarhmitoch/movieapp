import { data } from "autoprefixer";
import React, { Fragment } from "react";
import Card from "../components/card";
import Input from "../components/input";
import { ThumbnailCard } from "../components/thumbnail-card";

export function Home(props: any){
  return (
		<Fragment>
			<Card title='Trending'>
        <div className='flex items-center gap-4 md:gap-10 overflow-auto pr-3'>
          {
            props.data.filter((e:any)=> e.isTrending).map((el: any)=> {
              return (
                <ThumbnailCard
                  isLarge
                  data={
                    {
                      rating: el.rating,
                      bookmarked: el.isBookmarked,
                      thumbnail: (el.thumbnail as any).trending.large,
                      title: el.title,
                      type: el.category,
                      year: el.year
                    }
                  }                
                />
              )
            })
          }
        </div>
      </Card>
      <Card className='md:mt-[21px]' title='Recommended for you'>
        <div className='flex items-center gap-x-[15px] md:gap-x-10 gap-y-4 md:gap-y-8 flex-wrap'>
          {
            props.data.filter((e:any)=> e.category === "Movie").map((el:any)=> {
              return (
                <ThumbnailCard
                  data={
                    {
                      rating: el.rating,
                      bookmarked: el.isBookmarked,
                      thumbnail: (el.thumbnail as any).regular.medium,
                      title: el.title,
                      type: el.category,
                      year: el.year
                    }
                  }                
                />
              )
            })
          }
        </div>
      </Card>
		</Fragment>
  )
}