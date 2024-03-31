import React from 'react';
import "./main.scss";

function Input(props: {value: string, onChange: (value:string)=> void}) {
	const [value, setValue] = React.useState();
	return (
		<div className={"input"}>
			<div className='searchIcon'>
				<img src={require("../assets/icon-search.svg").default} alt="" />
			</div>
			<input 
				type="text"
				placeholder='Search for movies or TV series'
				value={props.value}
				onChange={(e)=> props.onChange(e.target.value)}
			/>
		</div>
	)
}

export default Input