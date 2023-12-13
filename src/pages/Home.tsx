import { useState } from "preact/hooks";

export function Home() {
	const [isFocused, setIsFocused] = useState(false);

	return (
		<div class="flex justify-center items-center h-full">
			<input 
				onFocus={(e) => {
					setIsFocused(true);
				}}
				onBlur={(e) => {
					setIsFocused(false);
				}}
				type="text"
				class="p-2 border border-input-border-color rounded-2xl h-14 w-80 text-center bg-input text-xl placeholder:text-input-text focus:outline-none font-roboto" 
				placeholder={isFocused ? '' : 'Explore the web freely'}
			>
			</input>
		</div>
	);
}