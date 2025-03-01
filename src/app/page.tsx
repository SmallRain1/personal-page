import Image from "next/image";
import Navbar from '@/components/Navbar';
import ProfileButtons from '@/components/ProfileButtons';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              马钰骁的个人主页
            </h1>
            <p className="text-xl text-gray-500">
              欢迎来到我的个人空间
            </p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="relative flex justify-center">
              <div className="w-full max-w-md rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/me.jpg"
                  alt="马钰骁的个人照片"
                  width={400}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                关于我
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-500">
                  关于我的更多信息：
                </p>
                <ProfileButtons />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
