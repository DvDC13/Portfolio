import React from 'react'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

// d7S8Uh77BC8KUftFG public key
// service_xrhz9eo service
// template_9xa8l6v template

const Contact = () => {

    const formRef = useRef()
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { target } = e
        const { name, value } = target

        setForm({
            ...form,
            [name]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        emailjs.send(
            'service_xrhz9eo',
            'template_9xa8l6v',
            {
                from_name: form.name,
                to_name: 'David',
                from_email: form.email,
                to_email: 'davidchemaly1@gmail.com',
                message: form.message,
            },
            'd7S8Uh77BC8KUftFG'
        ).then(
            () => {
                setLoading(false)
                alert('Thank you. I will get back to you as soon as possible.')

                setForm({
                    name: '',
                    email: '',
                    message: '',
                })
            },
            (error) => {
                setLoading(false)
                console.error(error)

                alert('Ahh, something went wrong. Please try again.')
            }
        )
    }

    return (
        <section className="c-space py-10" id="contact">
            <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
                <div className="grid-container p-8 rounded-2xl">
                    <p className="text-gray-500 sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
                    <p className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[40px]">Contact</p>

                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        className="mt-12 flex flex-col gap-8"
                    >
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your name?"
                                className="bg-black-300 py-4 px-6 placeholder:text-white text-white-800 rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email?"
                                className="bg-black-300 py-4 px-6 placeholder:text-white text-white-800 rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Message</span>
                            <textarea
                                rows={8}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What's your message?"
                                className="bg-black-300 py-4 px-6 placeholder:text-white text-white-800 rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <button
                            type="submit"
                            className="btn w-full py-3 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-l transition-all duration-300 ease-in-out font-bold">
                            {loading ? 'Sending...' : 'Send'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
