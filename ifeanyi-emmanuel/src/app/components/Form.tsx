import React from "react";
import Button from "./Button";

const Form = () => {
	return (
		<form className="lg:w-1/2">
			{/* name */}
			<div className="mb-3">
				<label className="block text-[14px] text-[#000] font-semibold mb-3">
					Name
				</label>
				<input
					type="text"
					required
					placeholder="Name"
					id="name"
					className="w-full  focus:outline-none focus:shadow-outline appearance-none border bg-[#D9D9D9] py-2 px-3 h-[52px] text-[14px] text-[#575757]"
				/>
			</div>

			{/* email */}
			<div className="mb-3">
				<label className="block text-[14px] text-[#000] font-semibold mb-3">
					Email
				</label>
				<input
					type="email"
					required
					placeholder="Email"
					id="email"
					className="w-full  focus:outline-none focus:shadow-outline appearance-none border bg-[#D9D9D9] py-2 px-3 h-[52px] text-[14px] text-[#575757]"
				/>
			</div>

			{/* message */}
			<div className="mb-3">
				<label className="block text-[14px] text-[#000] font-semibold mb-3">
					Message
				</label>
				<textarea
					placeholder="Message"
					id="message"
					rows={8}
					required
					className="resize-none w-full h-[130px] focus:outline-none focus:shadow-outline appearance-none border bg-[#D9D9D9] text-[14px] text-[#575757] px-3 py-2"
				></textarea>
			</div>

			<Button
                label="Send"
                href="/"
				className="mt-5 lg:mt-6 text-[18px] lg:text-[20px] bg-[#3547EE] text-white px-6 py-2 items-center"
			/>
		</form>
	);
};

export default Form;
