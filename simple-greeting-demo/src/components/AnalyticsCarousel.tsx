import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, TrendingUp, Zap, Target, DollarSign, Activity } from "lucide-react";
const tilesData = [{
  id: 1,
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
  alt: "Monitor showing Java programming",
  title: "Code Analytics",
  keyInsight: "Gain real-time insights into your market performance with advanced analytics."
}, {
  id: 2,
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
  alt: "Macro photography of black circuit board",
  title: "Hardware Metrics",
  keyInsight: "Identify competitive pricing trends effortlessly across all platforms."
}, {
  id: 3,
  image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=400&fit=crop",
  alt: "Colorful software or web code on a computer monitor",
  title: "Development Tools",
  keyInsight: "Understand your market position with data-driven analytics and insights."
}, {
  id: 4,
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=400&fit=crop",
  alt: "A MacBook with lines of code on its screen on a busy desk",
  title: "Workspace Analytics",
  keyInsight: "Make informed decisions to outperform competitors in your market."
}, {
  id: 5,
  image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400&h=400&fit=crop",
  alt: "Gray and black laptop computer on surface",
  title: "System Performance",
  keyInsight: "Monitor and optimize your pricing strategy with comprehensive data."
}];
const AnalyticsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotation logic
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % tilesData.length);
      }, 4500);
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered]);
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % tilesData.length);
  };
  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + tilesData.length) % tilesData.length);
  };
  const getSlideStyle = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = (diff % tilesData.length + tilesData.length) % tilesData.length;
    if (normalizedDiff === 0) {
      // Current slide
      return {
        transform: 'translateX(0%) scale(1)',
        zIndex: 10,
        opacity: 1
      };
    } else if (normalizedDiff === 1 || normalizedDiff === -(tilesData.length - 1)) {
      // Next slide (right)
      return {
        transform: 'translateX(70%) scale(0.8)',
        zIndex: 5,
        opacity: 0.6
      };
    } else if (normalizedDiff === tilesData.length - 1 || normalizedDiff === -1) {
      // Previous slide (left)
      return {
        transform: 'translateX(-70%) scale(0.8)',
        zIndex: 5,
        opacity: 0.6
      };
    } else {
      // Hidden slides
      return {
        transform: 'translateX(100%) scale(0.8)',
        zIndex: 1,
        opacity: 0
      };
    }
  };
  return <div className="w-full max-w-4xl mx-auto mb-12" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Title */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-alpha-charcoal mb-2">
          {tilesData[currentIndex]?.title || "Image Gallery"}
        </h3>
        
      </div>

      {/* Carousel Container */}
      <div className="relative h-80 mb-8 overflow-hidden">
        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110" aria-label="Previous slide">
          <ChevronLeft className="w-5 h-5 text-alpha-charcoal" />
        </button>
        
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/90 hover:bg-white shadow-lg transition-all duration-200 hover:scale-110" aria-label="Next slide">
          <ChevronRight className="w-5 h-5 text-alpha-charcoal" />
        </button>

        {/* Image Tiles Grid */}
        <div className="relative h-full flex items-center justify-center">
          {tilesData.map((tile, index) => <div key={tile.id} className="absolute w-80 h-64 transition-all duration-500 ease-out cursor-pointer" style={getSlideStyle(index)} onClick={() => goToSlide(index)}>
              <div className="grid grid-cols-2 gap-4 h-full p-4">
                {/* Main large tile */}
                <div className="col-span-2 row-span-1">
                  <img src={tile.image} alt={tile.alt} className="w-full aspect-square object-cover rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300" />
                </div>
                {/* Smaller tiles */}
                <div className="aspect-square">
                  <img src={tile.image} alt={tile.alt} className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300" />
                </div>
                <div className="aspect-square">
                  <img src={tile.image} alt={tile.alt} className="w-full h-full object-cover rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300" />
                </div>
              </div>
              {/* Title overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="text-lg font-bold text-white bg-black/50 rounded-lg px-3 py-2 backdrop-blur-sm">
                  {tile.title}
                </h3>
              </div>
            </div>)}
        </div>
      </div>

      {/* Key Insight */}
      <div className="text-center mb-8">
        <p className="text-lg text-alpha-text-muted max-w-2xl mx-auto">
          {tilesData[currentIndex]?.keyInsight}
        </p>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2">
        {tilesData.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-alpha-purple scale-110' : 'bg-alpha-gray-light hover:bg-alpha-purple/50'}`} aria-label={`Go to slide ${index + 1}`} />)}
      </div>
    </div>;
};
export default AnalyticsCarousel;