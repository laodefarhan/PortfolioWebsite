'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';

export function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex items-center pt-20 pb-10">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I am an experienced Junior Fullstack Developer who is ready to help realize digital
                        solutions through functional, efficient, and timely web and application development.
                    </p>
                </motion.div>
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <motion.div
                        className="lg:w-1/2 relative"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            <div className="absolute inset-4 bg-gray-800 rounded-full"></div>
                            <Image
                                src="/assets/about-profile-laode-farhan-fadilah.jpg"
                                alt="Laode Farhan Fadilah"
                                fill
                                className="object-cover rounded-full p-5"
                                priority
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-lg text-gray-400 mb-8">
                            I am a Junior Fullstack Developer with over 2 years of experience in developing
                            various types of websites, from interactive web applications to Android applications.
                            My expertise includes mastery of various programming languages ​​such as HTML, CSS,
                            JavaScript, and PHP, as well as the use of modern frameworks and libraries such as
                            Bootstrap, TailwindCSS, Laravel, and React. With good analytical and problem-solving
                            skills, I am able to solve various technical challenges in website development.
                            I am also used to working collaboratively in teams and independently,
                            and am able to complete projects on time according to the set targets.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}