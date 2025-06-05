
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ContentCarouselProps {
  theme: 'light' | 'dark';
}

const ContentCarousel: React.FC<ContentCarouselProps> = ({ theme }) => {
  const cardBg = theme === 'dark' 
    ? 'bg-gray-800/50 border-gray-700/50 backdrop-blur-sm' 
    : 'bg-white/80 border-gray-200/50 backdrop-blur-sm';
  
  const textPrimary = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const textSecondary = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const itemBg = theme === 'dark' ? 'bg-gray-700/50 border-gray-600/50' : 'bg-gray-50/80 border-gray-200/50';

  const carouselItems = [
    {
      id: 1,
      title: 'Early access',
      author: 'Sarah',
      readTime: '3 mins read',
      badge: 'new',
      badgeColor: 'bg-green-500 text-white',
      gradient: 'linear-gradient(135deg, #DEB2FF, #D49EFC)',
      icon: '📅'
    },
    {
      id: 2,
      title: 'Access use guidelines',
      author: 'Mike',
      readTime: '9 mins read',
      badge: 'hot',
      badgeColor: 'bg-red-500 text-white',
      gradient: 'linear-gradient(135deg, #FFE4B1, #FFCF75)',
      icon: '📸'
    },
    {
      id: 3,
      title: 'Exclusive downloads',
      author: 'Anna',
      readTime: '16 mins read',
      badge: 'new',
      badgeColor: 'bg-green-500 text-white',
      gradient: 'linear-gradient(135deg, rgba(208, 242, 223, .8), #B5E4CA)',
      icon: '📥'
    },
    {
      id: 4,
      title: 'Life & work updates',
      author: 'David',
      readTime: '35 mins read',
      badge: 'hot',
      badgeColor: 'bg-red-500 text-white',
      gradient: 'linear-gradient(135deg, #D2F4FF, #A1E0F5)',
      icon: '✅'
    }
  ];

  return (
    <div className={`${cardBg} border rounded-3xl overflow-hidden mb-10 hover:shadow-2xl transition-all duration-300`}>
      {/* Enhanced Header */}
      <div className="flex items-center justify-between p-8 pb-6">
        <div>
          <h3 className={`text-2xl font-bold ${textPrimary} mb-1`}>Content Overview</h3>
          <p className={`${textSecondary} text-sm`}>Latest updates and resources</p>
        </div>
        <div className="flex items-center gap-3">
          <button className={`p-3 ${itemBg} border rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105`}>
            <ChevronLeft className={`w-5 h-5 ${textSecondary}`} />
          </button>
          <button className={`p-3 ${itemBg} border rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105`}>
            <ChevronRight className={`w-5 h-5 ${textSecondary}`} />
          </button>
        </div>
      </div>

      {/* Enhanced Carousel */}
      <div className="px-8 pb-8">
        <Carousel className="w-full">
          <CarouselContent className="-ml-6">
            {carouselItems.map((item) => (
              <CarouselItem key={item.id} className="pl-6 basis-1/3">
                <div className={`p-6 ${itemBg} border rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group`}>
                  {/* Enhanced Icon */}
                  <div 
                    className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6 text-3xl group-hover:scale-110 transition-transform duration-300"
                    style={{ background: item.gradient }}
                  >
                    {item.icon}
                  </div>
                  
                  {/* Enhanced Title */}
                  <h4 className={`text-lg font-bold mb-4 ${textPrimary} group-hover:text-blue-500 transition-colors`}>
                    {item.title}
                  </h4>
                  
                  {/* Enhanced Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"></div>
                      <span className={`text-sm ${textSecondary}`}>{item.readTime}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-xl text-xs font-semibold ${item.badgeColor} uppercase tracking-wide`}>
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
