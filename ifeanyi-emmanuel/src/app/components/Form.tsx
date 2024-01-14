"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
	const form = useRef<HTMLFormElement | null>(null);

	const sendEmail = (e: React.FormEvent) => {
		e.preventDefault();

		if (form.current) {
			emailjs
				.sendForm(
					"service_6ia5yqi",
					"template_v2ehcbs",
					form.current,
					"Kj8dMNwRbgkgr-lQA"
				)
				.then(
					(result) => {
						console.log(result.text);
					},
					(error) => {
						console.log(error.text);
					}
				);

			if (form.current.reset) {
				form.current.reset();
			}
		}
	};

	return (
		<form
			ref={form}
			onSubmit={sendEmail}
			className="lg:w-1/2"
		>
			<div className="mb-3">
				<label className="block text-[14px] text-[#000] font-semibold mb-3">
					Name
				</label>
				<input
					type="text"
					name="user_name"
					required
					placeholder="Name"
					id="name"
					className="w-full  focus:outline-none focus:shadow-outline appearance-none border bg-[#D9D9D9] py-2 px-3 h-[52px] text-[14px] text-[#575757] rounded-lg"
				/>
			</div>

			<div className="mb-3">
				<label className="block text-[14px] text-[#000] font-semibold mb-3">
					Email
				</label>
				<input
					type="email"
					name="user_email"
					required
					placeholder="Email"
					id="email"
					className="w-full  focus:outline-none focus:shadow-outline appearance-none border bg-[#D9D9D9] py-2 px-3 h-[52px] text-[14px] text-[#575757] rounded-lg"
				/>
			</div>

			<div className="mb-3">
				<label className="block text-[14px] text-[#000] font-semibold mb-3">
					Message
				</label>
				<textarea
					placeholder="Message"
					name="message"
					id="message"
					rows={10}
					required
					className="resize-none w-full h-[130px] focus:outline-none focus:shadow-outline appearance-none border bg-[#D9D9D9] text-[14px] text-[#575757] px-3 py-2 rounded-lg"
				></textarea>
			</div>

			<button
				type="submit"
				className="mt-5 lg:mt-6 text-[18px] lg:text-[20px] bg-[#3547EE] text-white px-6 py-2 items-center rounded-lg"
			>
				Send
			</button>
		</form>
	);
};

export default Form;
