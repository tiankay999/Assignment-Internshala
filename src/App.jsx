import { useState } from 'react'
import TabNavigation from './components/TabNavigation'
import AboutMe from './components/AboutMe'
import Experiences from './components/Experiences'
import Recommended from './components/Recommended'
import Gallery from './components/Gallery'

function App() {
  const [activeTab, setActiveTab] = useState('recommended')

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return <AboutMe />
      case 'experiences':
        return <Experiences />
      case 'recommended':
        return <Recommended />
      default:
        return <Recommended />
    }
  }

  return (
    <div className="min-h-screen bg-dark-bg text-dark-text">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Panel - Empty for responsive layout */}
          <div className="hidden lg:block"></div>

          {/* Right Panel - Main Content */}
          <div className="space-y-6">
            {/* Top Widget - Profile Info with Tabs */}
            <div className="bg-dark-card rounded-3xl p-6 shadow-2xl">
              {/* Question Mark Icon */}
              <div className="flex justify-end mb-4">
                <div className="w-6 h-6 rounded-full bg-dark-bg flex items-center justify-center text-dark-textSecondary text-sm cursor-pointer hover:bg-dark-cardHover transition-colors">
                  ?
                </div>
              </div>

              {/* Tab Navigation */}
              <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

              {/* Content Area */}
              <div className="mt-6">
                {renderContent()}
              </div>
            </div>

            {/* Horizontal Divider */}
            <div className="h-1 bg-gradient-to-r from-transparent via-dark-border to-transparent"></div>

            {/* Gallery Widget */}
            <Gallery />

            {/* Horizontal Divider */}
            <div className="h-1 bg-gradient-to-r from-transparent via-dark-border to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
