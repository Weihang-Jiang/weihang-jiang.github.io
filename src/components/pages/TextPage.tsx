'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Download } from 'lucide-react';
import { assetPath } from '@/lib/assetPath';
import { TextPageConfig } from '@/types/page';

interface TextPageProps {
    config: TextPageConfig;
    content: string;
    embedded?: boolean;
}

export default function TextPage({ config, content, embedded = false }: TextPageProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={embedded ? "" : "max-w-3xl mx-auto"}
        >
            {config.pdf ? (
                <div className="mb-8 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-3">
                    <h1 className={`${embedded ? 'text-2xl' : 'text-3xl sm:text-[2rem]'} font-serif leading-snug text-primary`}>
                        <span className="font-bold">{config.title}:</span>{' '}
                        <span className="font-normal">
                            in{' '}
                            <a
                                href={assetPath(config.pdf)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-bold text-[#c64b2a] underline underline-offset-2 transition-colors hover:text-[#9e381c] dark:text-[#f08b6d] dark:hover:text-[#ffb59d]"
                                aria-label={`${config.title} (PDF)`}
                            >
                                pdf
                            </a>{' '}
                            version.
                        </span>
                    </h1>
                    <a
                        href={assetPath(config.pdf)}
                        download="Weihang-Jiang-CV.pdf"
                        className="rounded p-2 text-neutral-600 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                        aria-label="Download CV (PDF)"
                        title="Download CV (PDF)"
                    >
                        <Download className="h-5 w-5" aria-hidden="true" />
                    </a>
                </div>
            ) : (
                <h1 className={`${embedded ? "text-2xl" : "text-4xl"} font-serif font-bold text-primary mb-4`}>{config.title}</h1>
            )}
            {config.description && (
                <p className={`${embedded ? "text-base" : "text-lg"} text-neutral-600 dark:text-neutral-500 mb-8 max-w-2xl`}>
                    {config.description}
                </p>
            )}
            <div className="text-neutral-700 dark:text-neutral-600 leading-relaxed">
                <ReactMarkdown
                    components={{
                        h1: ({ children }) => <h1 className="text-3xl font-serif font-bold text-primary mt-8 mb-4">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{children}</h3>,
                        p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
                        ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1 ml-4">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1 ml-4">{children}</ol>,
                        li: ({ children }) => <li className="mb-1">{children}</li>,
                        a: ({ ...props }) => (
                            <a
                                {...props}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent font-medium transition-all duration-200 rounded hover:bg-accent/10 hover:shadow-sm"
                            />
                        ),
                        blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-accent/50 pl-4 italic my-4 text-neutral-600 dark:text-neutral-500">
                                {children}
                            </blockquote>
                        ),
                        strong: ({ children }) => <strong className="font-semibold text-primary">{children}</strong>,
                        em: ({ children }) => <em className="italic text-neutral-600 dark:text-neutral-500">{children}</em>,
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </motion.div>
    );
}
