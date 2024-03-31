import React from 'react'
import Card from '../components/card';
import { ThumbnailCard } from '../components/thumbnail-card';

function Bookmarks(props: any) {
	const movies = props.data.filter((e: any)=> e.category === "Movie")
	const tvseries = props.data.filter((e: any)=> e.category === "TV Series")
	return (
		<div className='flex flex-col gap-6 md:gap-10'>
			<Card className='md:mt-[21px]' title='Bookmarked Movies'>
				<div className='flex items-center gap-x-[15px] gap-y-4 md:gap-x-10 md:gap-y-8  flex-wrap'>
					{
						movies.map((el:any)=> {
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
			<Card className='mt-[21px]' title='Bookmarked TV Series'>
				<div className='flex items-center gap-x-[15px] gap-y-4 md:gap-x-10 md:gap-y-8  flex-wrap'>
					{
						tvseries.map((el:any)=> {
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
		</div>
	)
}

export default Bookmarks;