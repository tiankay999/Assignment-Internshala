import React from 'react'

const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recommended', label: 'Recommended' },
  ]

  return (
    <div className="flex gap-2 bg-dark-bg rounded-full p-1.5">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === tab.id
              ? 'bg-[#28292F] text-white shadow-lg'
              : 'text-dark-textSecondary hover:text-dark-text'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default TabNavigation
