
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ContentCarouselProps {
  theme: 'light' | 'dark';
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ theme }) => {
  const cardBg = theme === 'dark' 
    ? 'bg-[#282828] border-[#363636]' 
    : 'bg-white border-[#e8e8e8]';
  
  const textColor = theme === 'dark' ? 'text-[#f1f1f1]' : 'text-[#1e1e1e]';
  const secondaryText = theme === 'dark' ? 'text-[#a8a8a8]' : 'text-[#666666]';

  const carouselItems = [
    {
      id: 1,
      title: 'Early access',
      author: 'Sarah',
      readTime: '3 mins read',
      badge: 'new',
      badgeColor: 'bg-green-100 text-green-800',
      gradient: 'linear-gradient(to bottom, #DEB2FF, #D49EFC)',
      icon: '📅'
    },
    {
      id: 2,
      title: 'Access use guidelines',
      author: 'Mike',
      readTime: '9 mins read',
      badge: 'hot',
      badgeColor: 'bg-red-100 text-red-800',
      gradient: 'linear-gradient(to bottom, #FFE4B1, #FFCF75)',
      icon: '📸'
    },
    {
      id: 3,
      title: 'Exclusive downloads',
      author: 'Anna',
      readTime: '16 mins read',
      badge: 'new',
      badgeColor: 'bg-green-100 text-green-800',
      gradient: 'linear-gradient(to bottom, rgba(208, 242, 223, .7), #B5E4CA)',
      icon: '📥'
    },
    {
      id: 4,
      title: 'Life & work updates',
      author: 'David',
      readTime: '35 mins read',
      badge: 'hot',
      badgeColor: 'bg-red-100 text-red-800',
      gradient: 'linear-gradient(to bottom, #D2F4FF, #A1E0F5)',
      icon: '✅'
    }
  ];

  return (
    <div className={`${cardBg} border rounded-[20px] overflow-hidden mb-8`}>
      {/* Header */}
      <div className="flex items-center justify-between p-6 pb-3">
        <h3 className={`text-xl font-semibold ${textColor}`}>Overview</h3>
        <div className="flex items-center gap-2">
          <button className={`p-2 rounded-full border transition-all ${theme === 'dark' ? 'border-[#363636] hover:bg-[#363636]' : 'border-gray-300 hover:bg-gray-50'}`}>
            <ChevronLeft className={`w-4 h-4 ${secondaryText}`} />
          </button>
          <button className={`p-2 rounded-full border transition-all ${theme === 'dark' ? 'border-[#363636] hover:bg-[#363636]' : 'border-gray-300 hover:bg-gray-50'}`}>
            <ChevronRight className={`w-4 h-4 ${secondaryText}`} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="px-6 pb-6">
        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {carouselItems.map((item) => (
              <CarouselItem key={item.id} className="pl-4 basis-1/3">
                <div className={`p-4 border rounded-2xl cursor-pointer transition-all hover:shadow-lg ${theme === 'dark' ? 'border-[#363636] hover:bg-[#363636]' : 'border-gray-200 hover:bg-gray-50'}`}>
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 text-2xl"
                    style={{ background: item.gradient }}
                  >
                    {item.icon}
                  </div>
                  
                  {/* Title */}
                  <h4 className={`font-semibold mb-3 ${textColor}`}>{item.title}</h4>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-gray-300 rounded-full"></div>
                      <span className={`text-xs ${secondaryText}`}>{item.readTime}</span>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${theme === 'dark' ? 
                      item.badge === 'new' ? 'bg-green-900 text-green-300' : 'bg-red-900 text-red-300'
                      : item.badgeColor
                    }`}>
                      {item.badge}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ContentCarousel;
