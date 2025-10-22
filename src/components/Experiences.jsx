import React from 'react'

const Experiences = () => {
  const experiences = [
    {
      role: 'Senior Sales Representative',
      company: 'Salesforce',
      period: '2021 - Present',
      description: 'Leading enterprise sales initiatives and managing key client relationships across the West Coast region.',
    },
    {
      role: 'Sales Representative',
      company: 'Salesforce',
      period: '2018 - 2021',
      description: 'Drove revenue growth through strategic account management and new business development.',
    },
    {
      role: 'Business Development Associate',
      company: 'Tech Solutions Inc.',
      period: '2016 - 2018',
      description: 'Identified and pursued new business opportunities, achieving 150% of quota consistently.',
    },
  ]

  return (
    <div className="space-y-4">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="p-4 bg-dark-bg rounded-xl hover:bg-dark-cardHover transition-colors"
        >
          <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
          <p className="text-dark-textSecondary text-sm mt-1">
            {exp.company} • {exp.period}
          </p>
          <p className="text-dark-textSecondary text-sm mt-2 leading-relaxed">
            {exp.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Experiences
