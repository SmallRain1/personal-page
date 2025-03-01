'use client';

import Link from 'next/link';

interface DetailPageProps {
  title: string;
  description: string;
  color: string;
  children: React.ReactNode;
}

export default function DetailPage({ title, description, color, children }: DetailPageProps) {
  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className={`${color} text-white`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center space-x-4">
            <Link
              href="/"
              className="inline-flex items-center text-white hover:text-gray-100"
            >
              <svg
                className="w-6 h-6 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              返回
            </Link>
          </div>
          <div className="mt-6">
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-2 text-lg opacity-90">{description}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6">
          {children}
        </div>
      </div>
    </main>
  );
} 