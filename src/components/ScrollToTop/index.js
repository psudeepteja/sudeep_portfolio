"use client"
import { ArrowTop } from '@/icons/ArrowTop'
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            setVisible(window.pageYOffset > 300);
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        visible && (
            <div className="fixed bottom-4 px-2 py-1 right-8 bg-gray-200 dark:bg-gray-800 flex flex-col items-center text-sm font-bold cursor-pointer"
                onClick={scrollToTop}
                style={{ display: visible ? "inline" : "none" }}>
                <ArrowTop />
            </div>
        )
    )
}