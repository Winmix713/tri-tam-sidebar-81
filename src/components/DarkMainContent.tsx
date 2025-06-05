import React from 'react';

const DarkMainContent = () => {
  const ContentCard = ({ title, className = "", children }: { title?: string; className?: string; children: React.ReactNode }) => (
    <div 
      className={`bg-[#282828] rounded-[20px] border border-[#363636] p-6 backdrop-blur-[32px] ${className}`}
      style={{
        boxShadow: '0px 16px 24px -13px rgba(0, 0, 0, 0.5), 0px 2.15px 0.5px -2px rgba(0, 0, 0, 0.25), 0px 5px 1.5px -4px rgba(8, 8, 8, 0.2), 0px 6px 4px -4px rgba(8, 8, 8, 0.16), 0px 6px 13px rgba(8, 8, 8, 0.12), 0px 24px 24px -16px rgba(8, 8, 8, 0.08), inset 2px 4px 16px rgba(253, 253, 253, 0.05)'
      }}
    >
      {title && (
        <div className="flex items-center gap-1 mb-4">
          <div className="w-[6px] h-[6px] bg-[#00A656] rounded-full"></div>
          <span className="font-mono font-medium text-[8px] leading-[10px] tracking-[-0.02em] text-[#f1f1f1]">
            {title}
          </span>
        </div>
      )}
      {children}
    </div>
  );

  const ProgressBar = ({ width, opacity = 0.1 }) => (
    <div 
      className="h-1 bg-[#a8a8a8] rounded-sm"
      style={{ width: `${width}%`, opacity }}
    />
  );

  const WindowHeader = () => (
    <div 
      className="flex justify-between items-center px-4 py-2 bg-[rgba(253,253,253,0.025)] border-b border-[rgba(54,54,54,0.7)]"
      style={{ height: '38px' }}
    >
      <div className="flex items-center gap-[6px]">
        {[1, 2, 3].map((i) => (
          <div 
            key={i}
            className="w-2 h-2 bg-[#727272] border border-[rgba(168,168,168,0.3)] rounded-full"
            style={{ opacity: 0.2 }}
          />
        ))}
      </div>
      <div className="bg-[linear-gradient(180deg,rgba(235,235,235,0.1)_-27.27%,rgba(196,196,196,0.15)_127.27%)] border-[1.5px] border-[rgba(168,168,168,0.1)] rounded-2xl w-[54px] h-[22px] flex items-center justify-center">
        <div className="w-[26px] h-1 bg-[#f1f1f1] opacity-20 rounded-sm"></div>
      </div>
    </div>
  );

  const SimpleCard = () => (
    <ContentCard className="w-40 h-[109px]" title="ACTIVE">
      <div className="mt-[38px] space-y-2">
        <ProgressBar width={50} opacity={0.2} />
        <ProgressBar width={100} opacity={0.1} />
        <ProgressBar width={100} opacity={0.1} />
      </div>
    </ContentCard>
  );

  const DataCard = () => (
    <ContentCard className="w-40 h-40" title="METRICS">
      <div className="flex flex-col items-center justify-center h-full">
        <div 
          className="font-black text-[64px] leading-5 tracking-[-0.02em] mb-4"
          style={{
            background: 'linear-gradient(180deg, #787878 -6.32%, #464646 86.32%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          24
        </div>
        <div 
          className="font-black text-[40px] leading-10 tracking-[-0.02em] mb-4"
          style={{
            background: 'linear-gradient(180deg, #787878 -6.32%, #464646 86.32%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          12
        </div>
        <div 
          className="font-black text-[24px] leading-6 tracking-[-0.02em]"
          style={{
            background: 'linear-gradient(180deg, #787878 -6.32%, #464646 86.32%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          8
        </div>
      </div>
    </ContentCard>
  );

  const MediaCard = () => (
    <ContentCard className="w-40 h-40" title="MEDIA">
      <div className="grid grid-cols-3 gap-2 mt-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-11 h-[68px] bg-[#363636] rounded-lg relative">
            <div className="w-10 h-9 bg-[#202020] rounded-md absolute top-[2px] left-[2px]"></div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 space-y-1">
              <ProgressBar width={50} opacity={0.2} />
              <ProgressBar width={100} opacity={0.1} />
            </div>
          </div>
        ))}
      </div>
    </ContentCard>
  );

  const ButtonCard = () => (
    <ContentCard className="w-40 h-[109px]">
      <div className="flex items-center justify-between">
        <div className="bg-[#202020] rounded-2xl w-16 h-8 flex items-center justify-center backdrop-blur-[16px]">
          <div className="w-6 h-6 bg-[linear-gradient(180deg,rgba(235,235,235,0.1)_-27.27%,rgba(196,196,196,0.15)_127.27%)] border-[1.5px] border-[rgba(168,168,168,0.1)] rounded-2xl flex items-center justify-center">
            <div className="w-1 h-1 bg-[#f1f1f1] opacity-20 rounded-sm"></div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-[rgba(45,104,255,0.05)] border border-[rgba(45,104,255,0.15)] rounded px-1 py-0.5">
            <span className="font-mono font-semibold text-[8px] leading-[10px] tracking-[-0.02em] text-[#2d68ff]">SWIFT</span>
          </div>
          <div className="bg-[rgba(0,166,86,0.1)] border border-[rgba(0,166,86,0.15)] rounded px-1 py-0.5">
            <span className="font-mono font-semibold text-[8px] leading-[10px] tracking-[-0.02em] text-[#00a656]">REACT</span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <div className="bg-[linear-gradient(180deg,#779DFF_0%,#2D68FF_100%)] rounded-2xl w-16 h-8 flex items-center justify-center backdrop-blur-[16px]">
          <div className="w-6 h-6 bg-[linear-gradient(180deg,#EBEBEB_-27.27%,#FDFDFD_127.27%)] border-[1.5px] border-[rgba(168,168,168,0.1)] rounded-2xl flex items-center justify-center">
            <div className="w-1 h-1 bg-[#2d68ff] rounded-sm"></div>
          </div>
        </div>
      </div>
    </ContentCard>
  );

  return (
    <div className="relative" style={{ width: '432px', height: '880px' }}>
      {/* Main Content Box */}
      <div 
        className="border border-[#363636] rounded-[32px] relative bg-[#1b1b1b]"
        style={{ width: '730px', height: '880px' }}
      >
        {/* Content Title */}
        <div 
          className="absolute font-sf-pro font-medium text-[32px] leading-6 text-[#f1f1f1]"
          style={{ 
            width: '161px', 
            height: '24px',
            left: '32px', 
            top: '32px',
            letterSpacing: '-0.03em' 
          }}
        >
          Dashboard
        </div>
        
        {/* Content Grid */}
        <div 
          className="absolute grid grid-cols-2 gap-8"
          style={{ 
            width: '400px', 
            height: '760px',
            left: '32px',
            top: '88px'
          }}
        >
          {/* Header Card */}
          <div className="col-span-2">
            <ContentCard className="w-full h-[109px]">
              <WindowHeader />
              <div className="p-4">
                <div className="space-y-2">
                  <ProgressBar width={100} opacity={0.1} />
                  <ProgressBar width={75} opacity={0.05} />
                  <ProgressBar width={100} opacity={0.1} />
                </div>
              </div>
            </ContentCard>
          </div>

          {/* Cards Grid */}
          <SimpleCard />
          <ButtonCard />
          <DataCard />
          <MediaCard />
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute w-4 h-4 bg-gradient-to-b from-[#363636] to-[#282828] rounded-full" style={{ left: '147px', top: '83px' }}></div>
          <div className="absolute w-2 h-2 bg-gradient-to-b from-[#363636] to-[#282828] rounded-full" style={{ left: '395px', top: '264px' }}></div>
          <div className="absolute w-2 h-2 bg-gradient-to-b from-[#363636] to-[#282828] rounded-full" style={{ left: '67px', top: '345px' }}></div>
          
          {/* Circular borders */}
          <div className="absolute w-5 h-5 border-[3px] border-[#4c4c4c] opacity-50 rounded-full transform -rotate-90" style={{ left: '69px', top: '148px' }}></div>
          <div className="absolute w-5 h-5 border-[3px] border-[#4c4c4c] opacity-50 rounded-full transform rotate-90" style={{ left: '371px', top: '351px' }}></div>
        </div>
      </div>
      
      {/* Content Box Overlay */}
      <div 
        className="absolute"
        style={{
          width: '306px',
          height: '880px',
          left: '125px',
          top: '0px',
          background: 'linear-gradient(270deg, #202020 0%, rgba(32, 32, 32, 0) 100%)'
        }}
      />
    </div>
  );
};

export default DarkMainContent;
