'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';

const education = [
    {
        degree: 'Informatics Engineering - S1',
        institution: 'BOROBUDUR UNIVERSITY',
        period: '2021 - NOW',
        description: 'Jl. Raya Kalimalang, Cipinang Melayu, Kec. Makasar, Kota Jakarta Timur, DKI Jakarta.',
    },
    {
        degree: 'Science - Biology',
        institution: 'SMAN 1 PANGKALANBARU',
        period: '2017 - 2019',
        description: 'Dul, Kec. Pangkalan Baru, Kab. Bangka Tengah, Kep. Bangka Belitung',
    },
    {
        degree: '-',
        institution: 'SMPN 2 PANGKALANBARU',
        period: '2014 - 2016',
        description: 'Depan Mako Brimob Polda Kep. Babel, Batu Belubang, Kec. Pangkalan Baru, Kab. Bangka Tengah, Kep. Bangka Belitung.',
    },
    {
        degree: '-',
        institution: 'SDN 11 PANGKALANBARU',
        period: '2011 - 2013',
        description: 'Tj. Gn. Kec. Pangkalan Baru, Kab. Bangka Tengah, Kep. Bangka Belitung.',
    },
];

const experience = [
    {
        title: 'Junior Front-end Web Developer',
        company: 'FREELANCER',
        period: '2025 - NOW',
        description: 'web developers who are just starting out in the front end field, who are responsible for building and designing the visual appearance (user interface) of a website or web application. They focus on client-side programming languages, such as HTML, CSS, and JavaScript, to create interactive and responsive user experiences.',
    },
];

const skills = [
    {
        image: '/assets/skills/html.png',
        name: 'HTML',
    },
    {
        image: '/assets/skills/css.png',
        name: 'CSS',
    },
    {
        image: '/assets/skills/javascript.png',
        name: 'JavaScript',
    },
    {
        image: '/assets/skills/php.png',
        name: 'PHP',
    },
    {
        image: '/assets/skills/react.png',
        name: 'React',
    },
    {
        image: '/assets/skills/next js.png',
        name: 'Next JS',
    },
    {
        image: '/assets/skills/laravel.png',
        name: 'Laravel',
    },
    {
        image: '/assets/skills/tailwindcss.png',
        name: 'TailwindCSS',
    },
    {
        image: '/assets/skills/bootstrap.png',
        name: 'Bootstrap',
    },
    {
        image: '/assets/skills/daisyui.png',
        name: 'Daisy UI',
    },
    {
        image: '/assets/skills/material ui.png',
        name: 'Material UI',
    },
    {
        image: '/assets/skills/git.png',
        name: 'GIT',
    },
    {
        image: '/assets/skills/mysql.png',
        name: 'MySQL',
    },
];

const projects = [
    {
        id: 1,
        title: 'Pondok Burger',
        description: 'Pondok Burger online — fast ordering experience and lightweight design based on HTML & CSS.',
        image: '/assets/projects/projects-pondok-burger.jpg',
        category: 'Web Application',
        link: '#',
        github: '#',
    },
    {
        id: 2,
        title: 'Online Store',
        description: 'A modern e-commerce website, built with Laravel 11 and modern TailwindCSS design.',
        image: '/assets/projects/projects-toko-online.jpg',
        category: 'Web Application',
        link: '#',
        github: '#',
    }
]

const certificate = [
    {
        image: '/assets/certificates/Certificates-Kampus-Merdeka.jpg',
        degree: 'Kampus Merdeka',
        institution: 'Teknologi Informasi Institut Shanti Bhuana',
        period: 'May 06, 2023',
        description: 'Peran Teknologi Artificial Intelligence Untuk Menunjang Pekerjaan',
        pdfUrl: '/assets/pdf/Laode Farhan Fadilah.pdf',
    },

    {
        image: '/assets/certificates/Certificates-Introduction-to-Information-Security-Course.jpg',
        degree: 'Cyber Academy',
        institution: 'Cyber Academy Indonesia',
        period: 'May 04, 2025',
        description: 'Introduction to Information Security Course',
        pdfUrl: '/assets/pdf/Certificate-of-Completion-Introduction-to-Information-Security.pdf',
    },

    {
        image: '/assets/certificates/Certificates-Classical-Cryptography-for-Beginner-Course.jpg',
        degree: 'Cyber Academy',
        institution: 'Cyber Academy Indonesia',
        period: 'May 22, 2025',
        description: 'Classical Cryptography for Beginner Course',
        pdfUrl: '/assets/pdf/Certificate-of-Completion-Classical-Cryptography-for-Beginner.pdf',
    }
]

export function ResumeSection() {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [showAlert, setShowAlert] = useState(false);

    const handleVisitClick = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000); // alert hilang setelah 3 detik
    };

    const filteredProjects = projects;

    return (
        <section id="resume" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Resume</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My educational background, professional experience, and technical skills that
                        enable me to deliver exceptional results.
                    </p>
                </motion.div>

                <Tabs
                    defaultValue="education"
                    className="w-full"
                >
                    <TabsList className="grid grid-cols-5 gap-1 w-full max-w-md mx-auto mb-10 bg-blue-500">
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="projects">Projects</TabsTrigger>
                        <TabsTrigger value="certificate">Certificate</TabsTrigger>
                    </TabsList>

                    <TabsContent value="education">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key="education"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                {education.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Card className="bg-gray-800 border-none">
                                            <CardContent className="p-6">
                                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                                                        <p className="text-blue-400 text-sm">{item.institution}</p>
                                                    </div>
                                                    <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 inline-block">
                                                        {item.period}
                                                    </div>
                                                </div>
                                                <p className="text-gray-400">{item.description}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </TabsContent>

                    <TabsContent value="experience">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key="experience"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                {experience.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Card className="bg-gray-800 border-none">
                                            <CardContent className="p-6">
                                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                                        <p className="text-blue-400 text-sm">{item.company}</p>
                                                    </div>
                                                    <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 inline-block">
                                                        {item.period}
                                                    </div>
                                                </div>
                                                <p className="text-gray-400">{item.description}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </TabsContent>

                    <TabsContent value="skills">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key="skills"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1"
                            >
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.05 }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="w-28 h-28 mb-4 relative bg-gray-800 rounded-lg flex flex-col items-center justify-center">
                                            <Image
                                                src={skill.image}
                                                alt={skill.name}
                                                width={52}
                                                height={52}
                                                className="object-contain mb-2"
                                            />
                                            <p className="text-white text-sm text-center">{skill.name}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </TabsContent>


                    <TabsContent value="projects">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key="projects"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-8"
                            >
                            </motion.div>

                            <motion.div
                                layout
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {filteredProjects.map((project) => (
                                    <motion.div
                                        key={project.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.5 }}
                                        className="bg-gray-800 rounded-xl overflow-hidden group"
                                        onHoverStart={() => setHoveredProject(project.id)}
                                        onHoverEnd={() => setHoveredProject(null)}
                                    >
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className={`object-cover transition-transform duration-500 ${hoveredProject === project.id ? 'scale-110' : 'scale-100'
                                                    }`}
                                            />
                                            <div className={`absolute inset-0 bg-blue-500/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                                                }`}>
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition"
                                                >
                                                    <ExternalLink className="h-5 w-5" />
                                                </a>
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="bg-white text-blue-600 p-3 rounded-full hover:bg-gray-100 transition"
                                                >
                                                    <Github className="h-5 w-5" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full mb-3">
                                                {project.category}
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                            <p className="text-gray-400 mb-4">{project.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </TabsContent>

                    <TabsContent value="certificate">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key="certificate"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-6"
                            >
                                {certificate.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <Card className="bg-gray-800 border-none">
                                            <CardContent className="p-6">
                                                {/* Optional Image */}
                                                {item.image && (
                                                    <img
                                                        src={item.image}
                                                        alt={item.degree}
                                                        className="mb-4 rounded-md w-full h-auto"
                                                    />
                                                )}

                                                {/* Header and Badge */}
                                                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-white">{item.degree}</h3>
                                                        <p className="text-blue-400 text-sm">{item.institution}</p>
                                                    </div>
                                                    <div className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm mt-2 md:mt-0 inline-block">
                                                        {item.period}
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <p className="text-gray-400 mb-4">{item.description}</p>

                                                <div>
                                                    {/* Fixed alert */}
                                                    {showAlert && (
                                                        <div className="fixed top-5 right-5 z-50 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-md w-[320px]">
                                                            <strong className="font-bold">Hak Akses Anda Dibatasi!</strong>
                                                            <span className="block text-sm mt-1">
                                                                Anda tidak dapat melihat certificate tanpa izin dari developer Laode F. Fadilah.
                                                            </span>
                                                        </div>
                                                    )}

                                                    {/* Button Visit */}
                                                    <button
                                                        onClick={handleVisitClick}
                                                        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
                                                    >
                                                        Visit
                                                    </button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
}