import React from 'react'
import Card from '../components/card';
import { ThumbnailCard } from '../components/thumbnail-card';

function Movies(props: any) {
	return (
		<Card className='md:mt-[21px]' title='Movies'>
			<div className='flex items-center gap-x-[15px] gap-y-4 md:gap-x-10 md:gap-y-8 flex-wrap'>
				{
					props.data.map((el:any)=> {
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
	)
}

export default Movies;