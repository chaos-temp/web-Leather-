import { useState, useEffect } from 'react'

interface Technique {
  id: number
  title: string
  description: string
  icon: string
  image: string
  detailedContent: {
    overview: string
    steps: { title: string; content: string; image: string }[]
    tips: string[]
    precautions: string[]
  }
}

const techniques: Technique[] = [
  { 
    id: 1, 
    title: '裁切', 
    description: '使用专业皮革刀具进行精确裁切，掌握刀法技巧', 
    icon: '✂️',
    image: '/technique-1-cutting.jpg',
    detailedContent: {
      overview: '裁切是皮革工艺的第一步，也是最基础的环节。精准的裁切决定了后续所有工序的质量。掌握正确的裁切技术，需要熟悉各种皮革刀具的使用方法，了解皮革纤维走向，并学会根据不同皮革特性选择合适的裁切方式。',
      steps: [
        { title: '准备工具', content: '选择合适的裁切工具，包括美工刀、旋转裁刀、皮刀等。确保刀具锋利，钝刀会导致皮革边缘撕裂。准备切割垫板和钢尺作为辅助工具。', image: '/step-1-1-tools.jpg' },
        { title: '划线标记', content: '使用锥子或划线工具沿着纸版边缘划出裁切线。注意预留适当的余量，一般为0.3-0.5厘米，以便后续打磨修正。', image: '/step-1-2-marking.jpg' },
        { title: '裁切操作', content: '持刀时保持刀与皮革垂直下切，力度均匀。沿裁切线一次性完成，避免中途停顿导致接口不平整。转弯处要缓慢转向，保持线条流畅。', image: '/step-1-3-cutting.jpg' },
        { title: '边缘修整', content: '裁切完成后，使用打磨块或砂纸轻轻修整边缘，去除毛刺。对于需要粘合的部位，可适当削薄边缘厚度，使接合处更平整。', image: '/step-1-4-trimming.jpg' }
      ],
      tips: [
        '皮革正面（粒面）朝下放置，更容易看清裁切线',
        '裁切时保持手腕稳定，运刀方向与皮革纤维方向垂直',
        '购买专业皮革刀具，质量好的刀具使用寿命更长',
        '练习时使用便宜的超纤皮或边角料，熟悉后再用好料'
      ],
      precautions: [
        '裁切时务必在切割垫板上操作，保护桌面和刀具',
        '手指远离刀刃，保持安全距离',
        '定期检查刀具锋利度，钝刀容易造成危险',
        '昂贵皮革建议使用旋转裁刀，精度更高'
      ]
    }
  },
  { 
    id: 2, 
    title: '缝合', 
    description: '学习各种针法，包括双线缝、单线缝、菱形缝等', 
    icon: '🧵',
    image: '/technique-2-stitching.jpg',
    detailedContent: {
      overview: '缝合是皮革制作中最核心的工艺之一，它决定了成品的牢固程度和美观度。皮革缝合与普通缝纫不同，需要使用专门的皮革针和麻线，采用特殊针法才能达到理想效果。',
      steps: [
        { title: '准备工作', content: '首先在皮革背面标记缝合位置，使用间距规保持针距一致。安装好菱斩或锥子，在缝合位置先打好孔位。', image: '/step-2-1-prepare.jpg' },
        { title: '穿针引线', content: '皮革缝合通常使用双线或单线麻线。将线切成适当长度（约50-60厘米），线的两端各穿一根皮革针。', image: '/step-2-2-threading.jpg' },
        { title: '基础针法', content: '最常用的是马鞍针法：针从上一个针孔穿入，从下一个针孔穿出，拉紧后形成平整的线迹。双线缝合时，两根针对穿，交替进行。', image: '/step-2-3-stitching.jpg' },
        { title: '收尾处理', content: '缝合到末端时，将针穿入相邻孔位两次形成加固结。用火机轻轻烧熔线头，或涂少量胶水固定，防止脱线。', image: '/step-2-4-finishing.jpg' }
      ],
      tips: [
        '保持均匀的拉力，使线迹平整美观',
        '针距一般控制在3-4mm根据皮革厚度调整',
        '使用CMC或蜡可以减少线与皮革的摩擦',
        '缝合时手指抵住皮革，防止偏移'
      ],
      precautions: [
        '缝合前务必检查孔位是否对齐',
        '线不要拉得太紧，以免皮革变形',
        '转角处适当增加密度，防止开裂',
        '重要部位建议使用双线加固'
      ]
    }
  },
  { 
    id: 3, 
    title: '打磨', 
    description: '皮革边缘打磨处理，使成品更加精致美观', 
    icon: '🪚',
    image: '/technique-3-sanding.jpg',
    detailedContent: {
      overview: '打磨是提升皮革制品档次的关键工序。精细的边缘处理不仅美观，还能增强皮革的耐久性和防水性。打磨需要耐心和技巧，从粗到细逐步进行。',
      steps: [
        { title: '粗磨处理', content: '使用120-180号砂纸或打磨块，沿边缘轻轻打磨，去除毛刺和不平整处。打磨方向要一致，不要来回摩擦。', image: '/step-3-1-coarse-sand.jpg' },
        { title: '细磨精修', content: '更换320-400号砂纸，继续打磨使边缘更加光滑。注意不要磨穿皮革的涂层或保护层。', image: '/step-3-2-fine-sand.jpg' },
        { title: '画线处理', content: '使用CMC（羧甲基纤维素）或边油前处理剂涂抹边缘，增加光滑度和附着性。这一步可以让后续的边油或打磨效果更好。', image: '/step-3-3-cmc.jpg' },
        { title: '最终抛光', content: '使用600号以上细砂纸或专用抛光布，轻轻摩擦使边缘达到镜面效果。也可以涂抹少量皮革蜡进行抛光。', image: '/step-3-4-polishing.jpg' }
      ],
      tips: [
        '打磨时保持砂纸平整，不要过度用力',
        '根据皮革种类选择合适的砂纸号数',
        '植鞣革可以打磨出漂亮的包浆效果',
        '细腻的边缘处理是高端皮革制品的标志'
      ],
      precautions: [
        '打磨时要顺着皮革纹理方向',
        '避免打磨到皮革正面（粒面）',
        '二榔皮等涂层皮革不宜过度打磨',
        '边角处要特别小心，防止磨穿'
      ]
    }
  },
  { 
    id: 4, 
    title: '上油', 
    description: '正确使用皮革油进行保养护理，延长使用寿命', 
    icon: '🫒',
    image: '/technique-4-oiling.jpg',
    detailedContent: {
      overview: '上油是皮革保养最重要的一步。天然皮革需要定期补充油脂来保持柔软度和光泽。正确的上油方法可以显著延长皮革制品的使用寿命，并形成独特的包浆效果。',
      steps: [
        { title: '清洁表面', content: '使用软毛刷或干净布轻轻刷去皮革表面的灰尘和污垢。对于顽固污渍，可使用专用皮革清洁剂。', image: '/step-4-1-cleaning.jpg' },
        { title: '选择油品', content: '根据皮革种类选择合适的保养油。常见的有貂油、牛角油、绵羊油等。植鞣革适合使用貂油，铬鞣革可使用较温和的护理油。', image: '/step-4-2-selecting-oil.jpg' },
        { title: '均匀涂抹', content: '用软布沾取适量皮革油，均匀涂抹在皮革表面。遵循少量多次的原则，油脂过多会导致皮革变软变形。', image: '/step-4-3-applying-oil.jpg' },
        { title: '静置吸收', content: '涂抹完成后，让皮革在阴凉通风处静置数小时或一夜，使油脂充分渗透吸收。多余的油脂用软布擦除。', image: '/step-4-4-absorbing.jpg' }
      ],
      tips: [
        '新制作的皮革制品建议先上油保养后再使用',
        '上油后可以让皮革获得更好的光泽和颜色',
        '定期保养（每1-3个月）比一次性大量用油效果更好',
        '浅色皮革建议使用无色或淡色保养油'
      ],
      precautions: [
        '避免使用含有溶剂或化学成分的清洁剂',
        '不要将皮革暴露在阳光直射下晾晒',
        '上油后未完全吸收前不要使用或折叠',
        '不同种类皮革使用不同的护理产品'
      ]
    }
  },
  { 
    id: 5, 
    title: '染色', 
    description: '掌握皮革染色技巧，实现丰富多彩的效果', 
    icon: '🎨',
    image: '/technique-5-dyeing.jpg',
    detailedContent: {
      overview: '皮革染色是一项需要经验和技巧的工艺。通过染色，可以将原色皮革变成各种颜色，创造出独特的效果。皮革染色分为浸染、刷染、喷染等多种方法，每种方法都能产生不同的视觉效果。',
      steps: [
        { title: '前期处理', content: '使用脱脂剂或酒精清洁皮革表面，去除油脂和杂质。对于深色皮革改浅色，需要先进行脱色处理。', image: '/step-5-1-degreas.jpg' },
        { title: '调配染料', content: '根据需要的颜色，将染料与水或酒精按比例调配。酒精基染料干燥快，水基染料渗透更好。首次使用建议先在小块皮料上测试效果。', image: '/step-5-2-mixing.jpg' },
        { title: '染色操作', content: '使用棉布、海绵或喷枪均匀涂抹染料。遵循"少量多次"的原则，每遍待干后再涂下一遍。转角和边缘处要特别留意，防止积色。', image: '/step-5-3-dyeing.jpg' },
        { title: '固色处理', content: '染色完成后，使用固色剂或定色剂进行固色处理。固色后再上一次保养油，使颜色更持久。最后在阴凉处晾干。', image: '/step-5-4-fixing.jpg' }
      ],
      tips: [
        '从浅到深逐渐调整，容易控制最终颜色',
        '潮湿环境下染色渗透效果更好',
        '使用喷枪可以获得更均匀的效果',
        '创作渐变效果时使用海绵轻轻过渡'
      ],
      precautions: [
        '染色前务必在不显眼处测试颜色',
        '酒精染料干燥快，需要快速均匀操作',
        '染色后避免直接日晒，以防褪色',
        '深色皮革改浅色难度较大，建议由专业处理'
      ]
    }
  },
  { 
    id: 6, 
    title: '组装', 
    description: '学习五金配件安装与成品组装技巧', 
    icon: '🔧',
    image: '/technique-6-assembly.jpg',
    detailedContent: {
      overview: '组装是将所有部件组合成成品的关键步骤。五金配件的安装和组装技巧直接影响成品的整体品质和耐用性。精细的组装工艺能让作品既美观又牢固。',
      steps: [
        { title: '部件检查', content: '在组装前检查所有裁切好的部件，确保边缘光滑、孔位准确。检查五金配件的规格和质量，确认安装位置。', image: '/step-6-1-checking.jpg' },
        { title: '画线定位', content: '使用锥子或打孔工具在预定位置做标记。确保两侧对应位置准确对称，避免安装后产生偏差。', image: '/step-6-2-positioning.jpg' },
        { title: '打孔安装', content: '使用合适尺寸的打孔器或冲子打孔。安装螺丝时先用手拧紧，再用螺丝刀或钳子加固。安装铆钉时注意敲击力度。', image: '/step-6-3-installing.jpg' },
        { title: '调整检查', content: '组装完成后检查各部件是否安装牢固，开合是否顺畅。调整至最佳状态后，在活动部位滴少量蜡或润滑油。', image: '/step-6-4-adjusting.jpg' }
      ],
      tips: [
        '使用专业工具事半功倍',
        '重要部位使用双面胶或胶水加强固定',
        '定期检查螺丝紧固程度，防止松动',
        '选择与皮革颜色风格匹配的五金配件'
      ],
      precautions: [
        '打孔前确认位置，避免错误无法挽回',
        '螺丝不要拧得太紧，防止皮革变形或开裂',
        '贵金属配件建议使用专用工具安装',
        '组装前确保皮革完全干燥，防止生锈'
      ]
    }
  },
]

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [selectedTechnique, setSelectedTechnique] = useState<Technique | null>(null)

  return (
    <div className="min-h-screen bg-[#1a1612] text-[#e8dcc8]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a1612]/90 backdrop-blur-sm border-b border-[#3d3428]">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-serif tracking-wider text-[#c9a87c]">皮革工艺</h1>
          <div className="flex gap-8">
            {['home', 'techniques', 'about'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`text-sm tracking-widest transition-colors ${
                  activeSection === section ? 'text-[#c9a87c]' : 'text-[#8b7d6b] hover:text-[#c9a87c]'
                }`}
              >
                {section === 'home' ? '首页' : section === 'techniques' ? '技法' : '关于'}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a87c' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>
          
          <div className="relative z-10 text-center px-6">
            <p className="text-[#c9a87c] tracking-[0.3em] text-sm mb-6">CRAFTMANSHIP</p>
            <h2 className="text-5xl md:text-7xl font-serif mb-8 text-[#e8dcc8]">
              皮革艺术
            </h2>
            <p className="text-[#8b7d6b] text-lg max-w-xl mx-auto mb-12 leading-relaxed">
              传承千年皮革工艺，以匠心雕琢每一件作品
            </p>
            <button
              onClick={() => setActiveSection('techniques')}
              className="px-8 py-3 border border-[#c9a87c] text-[#c9a87c] hover:bg-[#c9a87c] hover:text-[#1a1612] transition-all duration-300 tracking-wider text-sm"
            >
              探索技法
            </button>
          </div>

          {/* Decorative Line */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="w-px h-16 bg-gradient-to-b from-[#c9a87c] to-transparent" />
          </div>
        </section>
      )}

      {/* Techniques Section */}
      {activeSection === 'techniques' && (
        <section className="pt-32 pb-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#c9a87c] tracking-[0.3em] text-sm mb-4">TECHNIQUES</p>
              <h2 className="text-4xl font-serif text-[#e8dcc8]">基础技法</h2>
              <div className="w-24 h-px bg-[#c9a87c] mx-auto mt-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techniques.map((tech, index) => (
                <div
                  key={tech.id}
                  onClick={() => setSelectedTechnique(tech)}
                  className="group p-0 border border-[#3d3428] hover:border-[#c9a87c] transition-all duration-500 cursor-pointer relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={tech.image} 
                      alt={tech.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 relative">
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#c9a87c]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                    <div className="relative z-10">
                      <h3 className="text-xl font-serif text-[#e8dcc8] mb-3 group-hover:text-[#c9a87c] transition-colors">{tech.title}</h3>
                      <p className="text-[#8b7d6b] text-sm leading-relaxed mb-4">{tech.description}</p>
                      
                      {/* Preview Steps */}
                      <div className="mb-4 space-y-2">
                        {tech.detailedContent.steps.slice(0, 2).map((step, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-[#6b5d4d]">
                            <span className="w-4 h-4 rounded-full bg-[#3d3428] flex items-center justify-center text-[#c9a87c] flex-shrink-0">{i + 1}</span>
                            <span className="truncate">{step.title}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-[#c9a87c] text-sm tracking-wider group-hover:translate-x-2 transition-transform">
                        <span>点击查看详情</span>
                        <span className="ml-2">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technique Detail Modal */}
      {selectedTechnique && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedTechnique(null)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-[#1a1612] border border-[#c9a87c]/30 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedTechnique(null)}
              className="absolute top-4 right-4 text-[#8b7d6b] hover:text-[#c9a87c] transition-colors z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Header */}
            <div className="relative">
              {/* Hero Image */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={selectedTechnique.image} 
                  alt={selectedTechnique.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1612] to-transparent" />
              </div>
              
              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 pb-6">
                <div className="flex items-center gap-6">
                  <div className="text-6xl">{selectedTechnique.icon}</div>
                  <div>
                    <h2 className="text-3xl font-serif text-[#e8dcc8] mb-2">{selectedTechnique.title}</h2>
                    <p className="text-[#8b7d6b]">{selectedTechnique.description}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-8 space-y-8">
              {/* Overview */}
              <div>
                <h3 className="text-lg font-serif text-[#c9a87c] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#c9a87c] rounded-full" />
                  概述
                </h3>
                <p className="text-[#b8a899] leading-relaxed text-lg">{selectedTechnique.detailedContent.overview}</p>
              </div>
              
              {/* Steps */}
              <div>
                <h3 className="text-lg font-serif text-[#c9a87c] mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#c9a87c] rounded-full" />
                  操作步骤
                </h3>
                <div className="space-y-6">
                  {selectedTechnique.detailedContent.steps.map((step, index) => (
                    <div 
                      key={index}
                      className="border border-[#3d3428] rounded-lg overflow-hidden hover:border-[#c9a87c]/50 transition-colors bg-[#241d16]/50"
                    >
                      {/* Step Image */}
                      <div className="h-40 overflow-hidden">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Step Content */}
                      <div className="p-5">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="w-8 h-8 bg-[#c9a87c]/20 rounded-full flex items-center justify-center text-[#c9a87c] font-semibold text-sm">
                            {index + 1}
                          </span>
                          <h4 className="text-[#e8dcc8] font-medium text-lg">{step.title}</h4>
                        </div>
                        <p className="text-[#8b7d6b] text-sm leading-relaxed">{step.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Tips */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-[#c9a87c]/5 border border-[#c9a87c]/20 rounded-lg">
                  <h3 className="text-lg font-serif text-[#c9a87c] mb-4 flex items-center gap-2">
                    <span className="text-xl">💡</span>
                    技巧要点
                  </h3>
                  <ul className="space-y-3">
                    {selectedTechnique.detailedContent.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-2 text-[#b8a899] text-sm">
                        <span className="text-[#c9a87c] mt-1">•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-6 bg-red-900/10 border border-red-900/30 rounded-lg">
                  <h3 className="text-lg font-serif text-red-400 mb-4 flex items-center gap-2">
                    <span className="text-xl">⚠️</span>
                    注意事项
                  </h3>
                  <ul className="space-y-3">
                    {selectedTechnique.detailedContent.precautions.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-[#c9a87c] text-sm">
                        <span className="text-red-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-[#3d3428] flex justify-end">
              <button
                onClick={() => setSelectedTechnique(null)}
                className="px-6 py-2 border border-[#c9a87c] text-[#c9a87c] hover:bg-[#c9a87c] hover:text-[#1a1612] transition-all duration-300"
              >
                关闭详情
              </button>
            </div>
          </div>
        </div>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section className="pt-32 pb-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#c9a87c] tracking-[0.3em] text-sm mb-4">ABOUT</p>
              <h2 className="text-4xl font-serif text-[#e8dcc8]">关于皮革工艺</h2>
              <div className="w-24 h-px bg-[#c9a87c] mx-auto mt-6" />
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-[#8b7d6b] leading-relaxed mb-6">
                  皮革工艺是一门历史悠久的传统手工艺，人类使用皮革的历史可追溯到远古时期。
                  从最初的遮体保暖，到如今的精美艺术品，皮革始终承载着匠人的智慧与情感。
                </p>
                <p className="text-[#8b7d6b] leading-relaxed mb-6">
                  本教程涵盖皮革工艺的基础技法，包括选料、裁切、缝合、打磨、上油、染色等核心工艺，
                  帮助初学者入门皮革制作，开启你的手工之旅。
                </p>
              </div>
              <div className="relative h-80 border border-[#3d3428] flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl mb-4">� Leather</p>
                  <p className="text-[#8b7d6b] text-sm">传统手工艺与现代审美的结合</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#3d3428]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-[#8b7d6b] text-sm">皮革工艺基础技法</p>
          <p className="text-[#5a4f42] text-xs mt-2">© 2025 Leather Craft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
