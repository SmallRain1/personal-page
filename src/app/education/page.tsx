import DetailPage from '@/components/DetailPage';

export default function Education() {
  return (
    <DetailPage
      title="教育背景"
      description="我的学习经历和教育历程"
      color="bg-blue-500"
    >
      <div className="space-y-8">
        {/* 这里可以添加具体的教育经历 */}
        <div className="border-l-4 border-blue-500 pl-4">
          <div className="text-sm text-gray-500">2020 - 至今</div>
          <h3 className="text-xl font-semibold text-gray-900 mt-1">学校名称</h3>
          <div className="text-gray-700 mt-2">专业名称</div>
          <p className="text-gray-600 mt-2">
            在这里添加详细描述，包括：
            - 主修课程
            - 研究方向
            - 获得荣誉
            - 参与项目
            等等...
          </p>
        </div>

        {/* 可以复制上面的div来添加更多教育经历 */}
      </div>
    </DetailPage>
  );
} 