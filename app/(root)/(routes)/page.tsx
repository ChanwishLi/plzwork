// app/(root)/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { Link as ScrollLink } from "react-scroll";
import { useState } from "react";

const HomePage = () => {
    const [isReadMore, setIsReadMore] = useState(false);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
            <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
            <nav className="flex items-center space-x-4">
                    <div>
                        <Image src="/Logogogo.jpg" alt="Random Picture" width={60} height={60} className="rounded-lg shadow-md" />
                    </div>
                    <Link href="/find-a-guide" className="nav-link">
                        Find a Guide Now
                    </Link>
                    <ScrollLink to="about-us" smooth={true} duration={500} className="nav-link cursor-pointer">
                        About Us
                    </ScrollLink>
                    <ScrollLink to="what-we-offer" smooth={true} duration={500} className="nav-link cursor-pointer">
                        What We Offer
                    </ScrollLink>
                    <ScrollLink to="contact-us" smooth={true} duration={500} className="nav-link cursor-pointer">
                        Contact Us
                    </ScrollLink>
                </nav>
                <div className="flex space-x-4 items-center">
                    <UserButton afterSignOutUrl="/" />
                </div>
            </header>
            <main className="flex-1 p-0">
                <section className="relative h-screen">
                    <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
                        <source src="https://videos.pexels.com/video-files/4133023/4133023-sd_640_360_30fps.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative flex flex-col items-start justify-center h-full pl-16">
                        <h1 className="text-white text-6xl font-bold leading-tight mb-4">Welcome to Guider</h1>
                        <p className="text-white text-xl mb-8">Experienced & Reliable Guides, since 2021</p>
                        <Link href="/find-a-guide">
                            <button className="btn-get-guide">Get a Guide</button>
                        </Link>
                        
                    </div>
                </section>
                <section id="about-us" className="my-8 bg-white shadow-md rounded-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="w-full md:w-1/2 p-8">
                            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                            <p className="mb-4">
                                We provide professional solutions to deliver safe & efficient projects. This is the space to introduce visitors to the business or brand. Briefly explain who's behind it, what it does, and what makes it unique. Share its core values and what this site has to offer.
                            </p>
                            <div className={`transition-height ${isReadMore ? 'height-auto' : 'height-0'}`}>
                                <p>
                                    Our team consists of highly skilled professionals who are dedicated to providing top-notch services. We believe in quality, reliability, and customer satisfaction. Join us on a journey to explore the best destinations with experienced guides who ensure your safety and enjoyment.
                                </p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center items-center p-8">
                            <Image src="/tg.jpg" alt="About Us Image" width={400} height={300} className="object-cover rounded-lg shadow-md" />
                        </div>
                    </div>
                    <div className="flex justify-around bg-gray-100 p-8 text-center">
                        <div className="flex-1">
                            <h3 className="text-4xl font-bold">1000</h3>
                            <p className="text-lg">Trips Done</p>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-4xl font-bold">300</h3>
                            <p className="text-lg">Guiders</p>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-4xl font-bold">5</h3>
                            <p className="text-lg">Business Partners</p>
                        </div>
                    </div>
                </section>
                <section id="what-we-offer" className="my-8">
                    <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
                    <p className="my-4">
                        We provide guided tours to various destinations with experienced professionals.
                    </p>
                    <div className="flex justify-around">
                        <div>
                            <Image src="/wood.jpg" alt="Random Picture" width={300} height={300} className="rounded-lg shadow-md" />
                        </div>
                        <div>
                            <Image src="/woman.jpg" alt="Random Picture" width={300} height={300} className="rounded-lg shadow-md" />
                        </div>
                        <div>
                            <Image src="/oldowman.jpg" alt="Random Picture" width={300} height={300} className="rounded-lg shadow-md" />
                        </div>
                        <div>
                            <Image src="/nig.jpg" alt="Random Picture" width={300} height={300} className="rounded-lg shadow-md" />
                        </div>
                    </div>
                </section>
                <section id="contact-us" className="my-8 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Want to be a Guider? Contact Us!</h2>
                    <p>Phone Number: 0018-798-9504</p>
                    <p>Email: Guider-tours@gmail.com</p>
                </section>
            </main>
            <footer className="p-4 bg-gray-800 text-white text-center">
                &copy; 2027 Guider
            </footer>
        </div>
    );
};

export default HomePage;
