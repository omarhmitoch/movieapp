import React, {Fragment} from 'react'

export function Account() {
	const [value, setValue] = React.useState("");
	const [signUp, setSignUp] = React.useState(false);
	return (
		<Fragment>
			<img className='w-8 h-[26px]' src={require("../assets/logo.svg").default} alt="app logo" />
			{
				!signUp ? (
					<div className='form'>
						<span className='text-white font-light text-[32px] mb-10'>Login</span>
						<div className='flex flex-col gap-8'>
							<Input 
								value={value}
								onChange={(e)=> {setValue(e)}}
								placeholder="Email address"
								type="text"
							/>
							<Input 
								value={value}
								onChange={(e)=> {setValue(e)}}
								placeholder="Password"
								type="password"
							/>
						</div>
						<div 
							onClick={()=> {}}
							className='cursor-pointer transition-all mt-10 mb-6 w-full h-[48px] flex items-center justify-center bg-red
							hover:bg-white rounded-md text-[15px] font-light hover:text-semi-dark-blue text-white '
						>
							Login to your account
						</div>
						<div
							onClick={()=> setSignUp(true)}
						 	className='flex items-center justify-center gap-2 text-[15px] font-light w-full text-white cursor-pointer'
						>
							Don't have an account?<span className='text-red'>Sign Up</span>
						</div>
					</div>
				): (
					<div className='form'>
						<span className='text-white font-light text-[32px] mb-10'>Sign Up</span>
						<div className='flex flex-col gap-8'>
							<Input 
								value={value}
								onChange={(e)=> {setValue(e)}}
								placeholder="Email address"
								type="text"
							/>
							<Input 
								value={value}
								onChange={(e)=> {setValue(e)}}
								placeholder="Password"
								type="password"
							/>
							<Input 
								value={value}
								onChange={(e)=> {setValue(e)}}
								placeholder="Repeat password"
								type="password"
							/>
						</div>
						<div className='cursor-pointer transition-all mt-10 mb-6 w-full h-[48px] flex items-center justify-center bg-red
						hover:bg-white rounded-md text-[15px] font-light hover:text-semi-dark-blue text-white '>
							Create an account
						</div>
						<div 
							onClick={()=> setSignUp(false)}
							className='flex items-center justify-center gap-2 text-[15px] font-light w-full text-white cursor-pointer'
						>
							Already have an account?<span className='text-red'>Login</span>
						</div>
					</div>
				)
			}
		</Fragment>
	)
}

type InputProps = {
	value: string
	placeholder: string
	onChange: (a:string) => void
	type: string
}
function Input(props: InputProps){
	const hasError = false;
	return(
		<div className='relative w-full'>
			<input 
				type={props.type} 
				className={`w-full pl-4 pr-[120px] text-white outline-none !bg-transparent border-solid pb-[17px] 
					border-b-[1px]  focus:border-white ${hasError ? "border-[#FC4747] caret-[#FC4747]" : "border-[rgb(90,105,143)]"}`}
				placeholder={props.placeholder}
				value={props.value}
				onChange={(e)=> props.onChange(e.target.value)}
			/>
			{
				hasError && (
					<div className='absolute right-4 text-[13px] font-light top-[50%] -translate-y-[calc(50%+7.5px)] text-[#FC4747]'>
						Can’t be empty
					</div>
				)
			}
		</div>
	)
}