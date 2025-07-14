import React, { useState, useEffect } from 'react'

export { Page }

interface WorkflowOverview {
  total_projects: number
  total_commits: number
  latest_commit: any
  test_success_rate: number
}

interface ManusFlowStep {
  step: number
  title: string
  description: string
  status: 'completed' | 'in_progress' | 'pending'
}

interface Commit {
  id: string
  message: string
  author: string
  timestamp: string
  files_changed: string[]
}

interface TestResult {
  id: number
  commit_id: string
  status: string
  total_tests: number
  passed_tests: number
  failed_tests: number
  timestamp: string
}

function Page() {
  const [overview, setOverview] = useState<WorkflowOverview | null>(null)
  const [manusFlow, setManusFlow] = useState<ManusFlowStep[]>([])
  const [commits, setCommits] = useState<Commit[]>([])
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    try {
      // จำลองข้อมูล API calls
      const mockOverview: WorkflowOverview = {
        total_projects: 1,
        total_commits: 3,
        latest_commit: {
          id: 'abc123',
          message: 'Initial commit',
          timestamp: new Date().toISOString()
        },
        test_success_rate: 100
      }

      const mockManusFlow: ManusFlowStep[] = [
        {
          step: 1,
          title: 'รับคำสั่งจากผู้ใช้',
          description: 'Manus รับคำสั่งและวิเคราะห์ความต้องการ',
          status: 'completed'
        },
        {
          step: 2,
          title: 'สร้างโค้ดและไฟล์',
          description: 'Manus เขียนโค้ด สร้างไฟล์ และจัดโครงสร้างโปรเจกต์',
          status: 'completed'
        },
        {
          step: 3,
          title: 'ทดสอบโค้ด',
          description: 'Manus รันและทดสอบโค้ดเพื่อให้แน่ใจว่าทำงานได้ถูกต้อง',
          status: 'completed'
        },
        {
          step: 4,
          title: 'สร้าง Test Cases',
          description: 'Manus เขียน Unit Tests และ Integration Tests',
          status: 'in_progress'
        },
        {
          step: 5,
          title: 'จัดการ Version Control',
          description: 'Manus จัดการ Git และ GitHub สำหรับการเก็บโค้ด',
          status: 'pending'
        },
        {
          step: 6,
          title: 'Deploy และ Monitor',
          description: 'Manus deploy แอปพลิเคชันและติดตามการทำงาน',
          status: 'pending'
        }
      ]

      const mockCommits: Commit[] = [
        {
          id: 'abc123',
          message: 'Initial commit',
          author: 'Manus AI',
          timestamp: new Date().toISOString(),
          files_changed: ['main.tsx', 'README.md']
        },
        {
          id: 'def456',
          message: 'Add workflow components',
          author: 'Manus AI',
          timestamp: new Date().toISOString(),
          files_changed: ['components/Workflow.tsx', 'pages/index.tsx']
        }
      ]

      const mockTestResults: TestResult[] = [
        {
          id: 1,
          commit_id: 'abc123',
          status: 'passed',
          total_tests: 5,
          passed_tests: 5,
          failed_tests: 0,
          timestamp: new Date().toISOString()
        },
        {
          id: 2,
          commit_id: 'def456',
          status: 'passed',
          total_tests: 8,
          passed_tests: 8,
          failed_tests: 0,
          timestamp: new Date().toISOString()
        }
      ]

      setOverview(mockOverview)
      setManusFlow(mockManusFlow)
      setCommits(mockCommits)
      setTestResults(mockTestResults)
      setLoading(false)
    } catch (error) {
      console.error('Error loading data:', error)
      setLoading(false)
    }
  }

  const simulateCommit = async () => {
    const newCommit: Commit = {
      id: `sim${commits.length + 1}`,
      message: 'จำลองการเพิ่มฟีเจอร์ใหม่',
      author: 'Manus AI',
      timestamp: new Date().toISOString(),
      files_changed: ['feature.tsx', 'test_feature.ts']
    }

    const newTestResult: TestResult = {
      id: testResults.length + 1,
      commit_id: newCommit.id,
      status: 'passed',
      total_tests: 10,
      passed_tests: 10,
      failed_tests: 0,
      timestamp: new Date().toISOString()
    }

    setCommits([...commits, newCommit])
    setTestResults([...testResults, newTestResult])
    
    if (overview) {
      setOverview({
        ...overview,
        total_commits: overview.total_commits + 1,
        latest_commit: newCommit
      })
    }

    alert('จำลอง Commit สำเร็จ! ระบบได้รัน Tests อัตโนมัติแล้ว')
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-white">
          <div className="text-2xl">กำลังโหลด...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center text-white mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">🤖 Manus Demo</h1>
        <p className="text-lg md:text-xl opacity-90">
          แสดงขั้นตอนการทำงานร่วมกันระหว่าง Manus, GitHub และ Test Cases
        </p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Overview Card */}
        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">📊 ภาพรวม</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{overview?.total_projects}</div>
              <div className="text-sm text-gray-600">โปรเจกต์</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{overview?.total_commits}</div>
              <div className="text-sm text-gray-600">Commits</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{overview?.test_success_rate}%</div>
              <div className="text-sm text-gray-600">อัตราสำเร็จ</div>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {overview?.latest_commit ? new Date(overview.latest_commit.timestamp).toLocaleDateString('th-TH') : 'N/A'}
              </div>
              <div className="text-sm text-gray-600">Commit ล่าสุด</div>
            </div>
          </div>
        </div>

        {/* Manus Flow Card */}
        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">🔄 ขั้นตอนการทำงานของ Manus</h3>
          <div className="space-y-3">
            {manusFlow.map((step) => (
              <div
                key={step.step}
                className={`flex items-center p-3 rounded-lg ${
                  step.status === 'completed'
                    ? 'bg-green-100 border-l-4 border-green-500'
                    : step.status === 'in_progress'
                    ? 'bg-yellow-100 border-l-4 border-yellow-500'
                    : 'bg-gray-100 border-l-4 border-gray-400'
                }`}
              >
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {step.step}
                </div>
                <div>
                  <h4 className="font-medium">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commits Card */}
        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">📝 Commits ล่าสุด</h3>
          <div className="space-y-3">
            {commits.slice(-3).reverse().map((commit) => (
              <div key={commit.id} className="p-3 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                <div className="font-medium">{commit.message}</div>
                <div className="text-sm text-gray-600 mt-1">
                  {commit.author} • {new Date(commit.timestamp).toLocaleString('th-TH')}
                  <br />
                  ไฟล์ที่เปลี่ยน: {commit.files_changed.join(', ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Test Results Card */}
        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">✅ ผลลัพธ์การทดสอบ</h3>
          <div className="space-y-3">
            {testResults.slice(-3).reverse().map((test) => (
              <div key={test.id} className="p-3 bg-gray-50 rounded-lg border-l-4 border-blue-600">
                <div className="flex items-center justify-between">
                  <div className="font-medium">Test สำหรับ Commit {test.commit_id}</div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-bold rounded-full">
                    {test.status.toUpperCase()}
                  </span>
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {test.passed_tests}/{test.total_tests} tests ผ่าน • {new Date(test.timestamp).toLocaleString('th-TH')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simulation Card */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-semibold text-blue-600 mb-4">🚀 จำลองการทำงาน</h3>
        <p className="text-gray-700 mb-4">ลองจำลองการ commit ใหม่เพื่อดูการทำงานของระบบ</p>
        <button
          onClick={simulateCommit}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
        >
          จำลอง Commit ใหม่
        </button>
      </div>
    </div>
  )
}

