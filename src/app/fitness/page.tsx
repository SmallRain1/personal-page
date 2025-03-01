import Navbar from '@/components/Navbar';

export default function Fitness() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900">健身记录</h1>
          <p className="mt-4 text-xl text-gray-500">记录我的健身之旅和成果展示</p>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Stats Card */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">运动时长</h3>
              <p className="text-3xl font-bold text-blue-600">0 小时</p>
              <p className="text-sm text-gray-500 mt-1">本月累计</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">运动次数</h3>
              <p className="text-3xl font-bold text-green-600">0 次</p>
              <p className="text-sm text-gray-500 mt-1">本月累计</p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">消耗热量</h3>
              <p className="text-3xl font-bold text-orange-600">0 kcal</p>
              <p className="text-sm text-gray-500 mt-1">本月累计</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Log */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">训练日志</h2>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              {/* Workout Entry Template */}
              <div className="border-b border-gray-200 pb-4 mb-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-medium text-gray-900">训练项目名称</h3>
                  <span className="text-sm text-gray-500">YYYY-MM-DD</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-2">
                  <div>
                    <span className="text-sm text-gray-500">训练时长：</span>
                    <span className="text-sm font-medium text-gray-900">XX 分钟</span>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">消耗热量：</span>
                    <span className="text-sm font-medium text-gray-900">XXX kcal</span>
                  </div>
                </div>
                <p className="text-gray-600">训练备注和感受...</p>
              </div>
              {/* 可以复制上面的 Workout Entry 来添加更多记录 */}
            </div>
          </div>
        </div>
      </section>

      {/* Progress Photos */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">进度照片</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Photo Card Template */}
            <div className="bg-gray-100 rounded-lg overflow-hidden aspect-w-4 aspect-h-3">
              <div className="flex items-center justify-center h-full">
                <span className="text-gray-400">添加照片</span>
              </div>
            </div>
            {/* 可以复制上面的 Photo Card 来添加更多照片 */}
          </div>
        </div>
      </section>
    </main>
  );
} 