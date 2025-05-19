'use client';

import { motion } from 'framer-motion';
import {
    Code, Smartphone, TrendingUp, User, Globe
} from 'lucide-react';

const services = [
    {
        icon: Code,
        title: 'App Development',
        description: 'App development is the process of creating software designed for use on mobile devices such as smartphones and tablets.',
    },
    {
        icon: Smartphone,
        title: 'Mobile App',
        description: 'A mobile app is software designed for use on mobile devices such as smartphones, tablets, and other mobile devices.',
    },
    {
        icon: TrendingUp,
        title: 'SEO Marketing',
        description: 'Optimization strategies to improve visibility and organic traffic to your websites.',
    },
    {
        icon: User,
        title: 'Personal Portfolio',
        description: 'Crafting professional portfolios to showcase your skills and experience effectively.',
    },
    {
        icon: Globe,
        title: 'Web Development',
        description: 'Web development is the process of creating, building, and maintaining websites or web applications over the internet.',
    },
];

export function ServicesSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="services" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
                    <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        I offer a wide range of services to help businesses and individuals
                        establish strong digital presence and achieve their goals.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors group"
                        >
                            <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                <service.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}