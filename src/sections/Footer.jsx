import React from 'react'

const Footer = () => {
    return (
        <section className="c-space pt-7 pb-3 flex justify-between items-center flex-wrap gap-7">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 hover:cursor-pointer"
                         onClick={() => window.open("https://github.com/DvDC13", "_blank")}
                    />
                </div>
                <div className="social-icon">
                    <img src="/assets/linkedin.png" alt="linkedin" className="w-1/2 h-1/2 hover:cursor-pointer"
                         onClick={() => window.open("https://www.linkedin.com/in/david-chemaly/", "_blank")}
                    />
                </div>
            </div>

            <p className="text-white-500">
                © 2024 David. All rights reserved
            </p>
        </section>
    )
}
export default Footer
