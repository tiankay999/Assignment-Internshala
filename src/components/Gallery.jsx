import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react'

const Gallery = () => {
  const [images, setImages] = useState([
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1557672199-6ff6e2c36d8e?w=400&h=300&fit=crop',
  ])
  
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleAddImage = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = (e) => {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (event) => {
          setImages([...images, event.target.result])
        }
        reader.readAsDataURL(file)
      }
    }
    input.click()
  }

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? Math.max(0, images.length - 3) : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= images.length - 3 ? 0 : prev + 1))
  }

  const visibleImages = images.slice(currentIndex, currentIndex + 3)

  return (
    <div className="bg-dark-card rounded-3xl p-6 shadow-2xl">
      {/* Question Mark Icon */}
      <div className="flex justify-end mb-4">
        <div className="w-6 h-6 rounded-full bg-dark-bg flex items-center justify-center text-dark-textSecondary text-sm cursor-pointer hover:bg-dark-cardHover transition-colors">
          ?
        </div>
      </div>

      {/* Gallery Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <button className="px-5 py-2 bg-dark-bg text-white rounded-full text-sm font-medium">
            Gallery
          </button>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleAddImage}
            className="px-4 py-2.5 bg-dark-bg text-white rounded-full text-xs font-medium hover:bg-dark-cardHover transition-colors shadow-lg flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            ADD IMAGE
          </button>
          
          <div className="flex gap-2">
            <button
              onClick={handlePrevious}
              disabled={images.length <= 3}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-[#31363F] to-[#1a1d23] flex items-center justify-center hover:from-[#3a3f49] hover:to-[#21242a] transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5 text-[#6F787C]" />
            </button>
            <button
              onClick={handleNext}
              disabled={images.length <= 3}
              className="w-11 h-11 rounded-full bg-gradient-to-br from-[#31363F] to-[#1a1d23] flex items-center justify-center hover:from-[#3a3f49] hover:to-[#21242a] transition-all shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5 text-[#6F787C]" />
            </button>
          </div>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-3 gap-4">
        {visibleImages.map((image, index) => (
          <div
            key={currentIndex + index}
            className="aspect-square rounded-2xl overflow-hidden bg-dark-bg hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg"
          >
            <img
              src={image}
              alt={`Gallery image ${currentIndex + index + 1}`}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
