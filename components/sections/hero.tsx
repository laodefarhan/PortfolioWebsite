'use client';

import { useState, useEffect, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { WhatsAppIcon, InstagramIcon, TikTokIcon, GitHubIcon } from '@/components/icons';
import Image from 'next/image';
import { motion } from 'framer-motion';

const socialLinks = [
    { icon: WhatsAppIcon, href: 'https://wa.me/yourNumber', label: 'WhatsApp' },
    { icon: InstagramIcon, href: 'https://instagram.com/laodefarhan_', label: 'Instagram' },
    { icon: TikTokIcon, href: 'https://tiktok.com/@l.f.fadilah_', label: 'TikTok' },
    { icon: GitHubIcon, href: 'https://github.com/laodefarhan', label: 'GitHub' },
];

export function HeroSection() {
    const [typedText, setTypedText] = useState('');
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const words = useMemo(() => ['Full Stack Developer', 'Freelancer'], []);
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1000;

    useEffect(() => {
        const handleTyping = () => {
            const currentWord = words[currentWordIndex];

            if (isDeleting) {
                setTypedText(currentWord.substring(0, typedText.length - 1));
            } else {
                setTypedText(currentWord.substring(0, typedText.length + 1));
            }

            if (!isDeleting && typedText === currentWord) {
                setTimeout(() => setIsDeleting(true), pauseTime);
            } else if (isDeleting && typedText === '') {
                setIsDeleting(false);
                setCurrentWordIndex((currentWordIndex + 1) % words.length);
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timer);
    }, [typedText, currentWordIndex, isDeleting, words]);

    return (
        <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <motion.div
                        className="lg:w-1/2 text-center lg:text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl lg:text-4xl font-bold mb-4">
                            Hi, Im <span className="text-blue-500">Laode F. Fadilah</span>,<br />
                            a <span className="text-blue-500">{typedText}</span>
                            <span className="animate-blink">|</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8">
                            a software developer who is skilled in both front-end and back-end development.
                            They can handle the entire development lifecycle, from designing the user interface
                            to building the server-side logic and managing databases.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-gray-800 hover:bg-blue-500 p-3 rounded-full transition-colors duration-300"
                                    aria-label={social.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.1 * index }}
                                    whileHover={{ scale: 1.1 }}
                                >
                                    <social.icon className="h-5 w-5 text-white" />
                                </motion.a>
                            ))}
                        </div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-2 rounded-full">
                                View My Work
                            </Button>
                        </motion.div>
                    </motion.div>
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
                                src="/assets/hero-profile-laode-farhan-fadilah.jpg"
                                alt="Laode Farhan Fadilah"
                                fill
                                className="object-cover rounded-full p-5"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
