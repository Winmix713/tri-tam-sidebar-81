
import React from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';

interface SocialMediaPromotionProps {
  theme: 'light' | 'dark';
}

const SocialMediaPromotion: React.FC<SocialMediaPromotionProps> = ({ theme }) => {
  const cardBg = theme === 'dark' 
    ? 'bg-[#282828] border-[#363636]' 
    : 'bg-white border-[#e8e8e8]';
  
  const textColor = theme === 'dark' ? 'text-[#f1f1f1]' : 'text-[#1e1e1e]';
  const secondaryText = theme === 'dark' ? 'text-[#a8a8a8]' : 'text-[#666666]';

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  ];

  // Custom Threads icon as SVG
  const ThreadsIcon = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.02 11.234l-.275-.125c-.162-2.986-1.794-4.696-4.534-4.714h-.037c-1.639 0-3.002.7-3.841 1.973l1.507 1.033c.627-.951 1.61-1.153 2.335-1.153h.025c.902.006 1.583.268 2.023.78.321.373.536.887.641 1.537-.8-.136-1.665-.178-2.59-.124-2.605.15-4.28 1.669-4.168 3.781.057 1.071.591 1.992 1.502 2.594.771.509 1.763.758 2.795.701 1.363-.075 2.432-.595 3.177-1.545.566-.722.925-1.658 1.083-2.836.649.392 1.13.908 1.396 1.528.452 1.054.479 2.785-.934 4.197-1.238 1.237-2.726 1.772-4.975 1.789-2.495-.019-4.381-.818-5.608-2.378-1.149-1.46-1.742-3.569-1.765-6.269.022-2.699.616-4.809 1.765-6.269 1.227-1.559 3.113-2.359 5.608-2.378 2.512.019 4.432.823 5.706 2.39.625.769 1.096 1.735 1.406 2.861l1.766-.471c-.377-1.387-.968-2.582-1.774-3.573-1.633-2.009-4.021-3.038-7.098-3.06h-.012c-3.07.021-5.432 1.055-7.018 3.071-1.412 1.795-2.14 4.292-2.165 7.421V12v.007c.025 3.13.753 5.627 2.165 7.421 1.586 2.017 3.948 3.05 7.018 3.071h.012c2.73-.019 4.655-.733 6.24-2.317 2.074-2.072 2.011-4.669 1.328-6.264-.491-1.144-1.426-2.072-2.704-2.686l.001.001zm-4.714 4.432c-1.141.065-2.328-.448-2.386-1.546-.043-.814.579-1.722 2.457-1.831l.633-.019a8.93 8.93 0 0 1 1.9.193c-.216 2.701-1.485 3.141-2.603 3.202z"/>
    </svg>
  );

  return (
    <div className={`${cardBg} border rounded-[20px] p-6`}>
      {/* Header */}
      <h3 className={`text-xl font-semibold ${textColor} mb-6`}>Get more customers</h3>
      
      {/* Description */}
      <p className={`text-sm ${secondaryText} mb-6`}>
        Fifty percent of new customers explore products because the author shares their work on social media.{' '}
        <br />
        Start earning now! 🔥
      </p>
      
      {/* Social Media Buttons */}
      <div className="flex gap-3">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 p-3 border rounded-2xl transition-all hover:shadow-md hover:scale-105 ${
              theme === 'dark' 
                ? 'border-[#363636] hover:bg-[#363636] hover:border-[#4c4c4c]' 
                : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            <social.icon className={`w-6 h-6 mx-auto ${secondaryText} hover:${textColor} transition-colors`} />
          </a>
        ))}
        
        {/* Threads Button */}
        <a
          href="https://threads.net"
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-1 p-3 border rounded-2xl transition-all hover:shadow-md hover:scale-105 ${
            theme === 'dark' 
              ? 'border-[#363636] hover:bg-[#363636] hover:border-[#4c4c4c]' 
              : 'border-gray-300 hover:bg-gray-50 hover:border-gray-400'
          }`}
        >
          <div className={`${secondaryText} hover:${textColor} transition-colors flex justify-center`}>
            <ThreadsIcon />
          </div>
        </a>
      </div>
    </div>
  );
};

export default SocialMediaPromotion;
