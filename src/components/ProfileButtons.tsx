'use client';

import Link from 'next/link';

const profileItems = [
  {
    title: '教育背景',
    href: '/education',
    description: '学习经历和教育历程',
    color: 'bg-blue-500',
  },
  {
    title: '专业领域',
    href: '/expertise',
    description: '专业知识和技能领域',
    color: 'bg-green-500',
  },
  {
    title: '研究方向',
    href: '/research-areas',
    description: '当前研究方向和兴趣',
    color: 'bg-purple-500',
  },
  {
    title: '个人兴趣',
    href: '/interests',
    description: '爱好和日常活动',
    color: 'bg-orange-500',
  },
  {
    title: '联系方式',
    href: '/contact',
    description: '与我联系',
    color: 'bg-red-500',
  },
];

export default function ProfileButtons() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {profileItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="group relative overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
        >
          <div className={`${item.color} p-6 text-white h-full`}>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm opacity-90">{item.description}</p>
            <div className="absolute bottom-3 right-3 transform translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
} 