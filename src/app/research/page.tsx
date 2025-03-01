import Navbar from '@/components/Navbar';

export default function Research() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">科研成果</h1>
          <p className="mt-4 text-xl text-gray-500">我的学术研究和项目成果展示</p>
        </div>
      </section>

      {/* Research Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project Card Template */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">研究项目标题</h3>
                <p className="text-gray-600 mb-4">项目简短描述</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">发表时间:</span>
                    <span>YYYY-MM</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">发表期刊/会议:</span>
                    <span>期刊/会议名称</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 可以复制上面的 Project Card 来添加更多项目 */}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">论文发表</h2>
          <div className="space-y-6">
            {/* Publication Item Template */}
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">论文标题</h3>
              <p className="text-gray-600 mb-2">作者列表</p>
              <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                <span>期刊名称</span>
                <span>•</span>
                <span>发表年份</span>
                <span>•</span>
                <span>引用次数</span>
              </div>
            </div>

            {/* 可以复制上面的 Publication Item 来添加更多论文 */}
          </div>
        </div>
      </section>
    </main>
  );
} 