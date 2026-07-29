import React, { useState } from 'react'
import {
  Search,
  Zap,
  BookOpen,
  Share2,
  ExternalLink,
  ChevronRight,
  Sliders,
  CheckCircle2,
  AlertCircle,
  Terminal,
  Cpu,
  Globe,
  MessageSquare,
  FileText,
  HelpCircle,
  Activity,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Code
} from 'lucide-react'

type SourceItem = {
  title: string
  url: string
  source: string
  summary: string
}

type ReActStep = {
  round: number
  thought: string
  tool: string
  args: Record<string, any>
  result: any
  timestamp: string
}

type ResearchTurn = {
  id: string
  turn_index: number
  user_query: string
  mode: 'fast' | 'deep' | 'academic' | 'social'
  status: 'searching' | 'waiting_user' | 'completed' | 'error'
  assistant_answer: string
  sources: SourceItem[]
  react_steps: ReActStep[]
  clarify_prompt?: {
    question: string
    options?: string[]
    response_type: 'text' | 'yes_no' | 'choice'
  }
  follow_ups: string[]
  created_at: string
}

const INITIAL_TURNS: ResearchTurn[] = [
  {
    id: 'turn-1',
    turn_index: 1,
    user_query: 'Tin tức AI và LLM nổi bật nhất trong tuần này có gì?',
    mode: 'deep',
    status: 'completed',
    assistant_answer: 'Tuần này chứng kiến ba bước tiến lớn trong lĩnh vực Trí tuệ Nhân tạo [1]:\n\n1. Google công bố Gemini 3.6 Pro [2]: Tăng cường khả năng lập luận đa thức (multimodal reasoning) và giảm 40% chi phí API.\n2. OpenAI phát hành cập nhật Frontier Agent: Tích hợp khả năng tự sửa lỗi code và làm việc trực tiếp với terminal sandbox.\n3. Anthropic mở rộng API Context Window: Cho phép xử lý đến 500k tokens đồng thời với độ trễ thấp.',
    sources: [
      { title: 'Google Unveils Gemini 3.6 Pro & Flash', url: 'https://blog.google/technology/ai/gemini-3-6', source: 'blog.google', summary: 'Enhanced reasoning capabilities and multimodal agent tools.' },
      { title: 'OpenAI Frontier Agent Infrastructure', url: 'https://openai.com/blog/frontier-agent-update', source: 'openai.com', summary: 'Autonomous code execution with sandbox controls.' },
      { title: 'Anthropic Context Expansion Announcement', url: 'https://anthropic.com/news/context-500k', source: 'anthropic.com', summary: 'Extended context windows for enterprise workloads.' }
    ],
    react_steps: [
      {
        round: 1,
        thought: 'Truy vấn tin tức AI nổi bật tuần này -> Gọi tool lookup với topic=news, timeframe=week',
        tool: 'lookup',
        args: { query: 'AI LLM news', topic: 'news', timeframe: 'week', max_results: 3 },
        result: { items_count: 3, status: 'success' },
        timestamp: '10:31:00 AM'
      },
      {
        round: 2,
        thought: 'Trích xuất nội dung từ các bài viết hàng đầu -> Gọi tool format để tạo bản tổng hợp',
        tool: 'format',
        args: { template: 'sections', headline: 'Tin AI nổi bật tuần này' },
        result: { rendered: true },
        timestamp: '10:31:02 AM'
      }
    ],
    follow_ups: [
      'Chi tiết hơn về khả năng của Gemini 3.6 Pro?',
      'So sánh chi phí API giữa OpenAI và Google?',
      'Làm thế nào để thử nghiệm Frontier Agent sandbox?'
    ],
    created_at: '10:31 AM'
  },
  {
    id: 'turn-2',
    turn_index: 2,
    user_query: 'Tóm tắt các tweet mới nhất về AI Agent',
    mode: 'social',
    status: 'waiting_user',
    assistant_answer: '',
    sources: [],
    react_steps: [
      {
        round: 1,
        thought: 'Người dùng nói "các tweet mới nhất" nhưng chưa chỉ định tài khoản cụ thể -> Gọi tool clarify để hỏi thông tin',
        tool: 'clarify',
        args: { question: 'Bạn muốn lấy bài đăng từ tài khoản của ai? (VD: @sama, @karpathy, @elonmusk)', response_type: 'choice', options: ['@sama (Sam Altman)', '@karpathy (Andrej Karpathy)', '@elonmusk (Elon Musk)'] },
        result: { awaiting_user: true },
        timestamp: '10:31:15 AM'
      }
    ],
    clarify_prompt: {
      question: 'Bạn muốn tổng hợp bài đăng từ tài khoản chuyên gia nào?',
      options: ['@sama (Sam Altman)', '@karpathy (Andrej Karpathy)', '@elonmusk (Elon Musk)'],
      response_type: 'choice'
    },
    follow_ups: [],
    created_at: '10:31 AM'
  }
]

const App = () => {
  const [turns, setTurns] = useState<ResearchTurn[]>(INITIAL_TURNS)
  const [activeTurnId, setActiveTurnId] = useState<string>('turn-1')
  const [inputQuery, setInputQuery] = useState('')
  const [selectedMode, setSelectedMode] = useState<'fast' | 'deep' | 'academic' | 'social'>('deep')
  const [showDeveloperTrace, setShowDeveloperTrace] = useState(false)
  const [isSearching, setIsSearching] = useState(false)

  const activeTurn = turns.find(t => t.id === activeTurnId) || turns[0]

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault()
    if (!inputQuery.trim() || isSearching) return

    setIsSearching(true)
    const newTurnId = `turn-${turns.length + 1}`
    
    setTimeout(() => {
      const newTurn: ResearchTurn = {
        id: newTurnId,
        turn_index: turns.length + 1,
        user_query: inputQuery,
        mode: selectedMode,
        status: 'completed',
        assistant_answer: `Dựa trên kết quả tìm kiếm cho truy vấn "${inputQuery}" [1]:\n\n- Phân tích tổng hợp: Hệ thống đã quét 4 nguồn dữ liệu chính xác và rút ra các kết luận quan trọng.\n- Ứng dụng thực tế: Đề xuất triển khai với các ràng buộc về ngân sách và hiệu năng.`,
        sources: [
          { title: `Nghiên cứu tổng quan về ${inputQuery}`, url: 'https://arxiv.org/abs/2607.001', source: 'arxiv.org', summary: 'Báo cáo chi tiết về phương pháp luận và kết quả thực nghiệm.' },
          { title: `Dữ liệu và phân tích chuyên sâu`, url: 'https://techcrunch.com/article/ai-research', source: 'techcrunch.com', summary: 'Đánh giá thị trường và tác động doanh nghiệp.' }
        ],
        react_steps: [
          {
            round: 1,
            thought: `Nhận truy vấn người dùng: "${inputQuery}" -> Gọi tool lookup`,
            tool: 'lookup',
            args: { query: inputQuery, topic: selectedMode === 'academic' ? 'general' : 'news', max_results: 4 },
            result: { status: 'success', count: 4 },
            timestamp: new Date().toLocaleTimeString()
          },
          {
            round: 2,
            thought: 'Tổng hợp kết quả tìm kiếm và trình bày báo cáo nghiên cứu',
            tool: 'format',
            args: { template: 'sections', headline: inputQuery },
            result: { rendered: true },
            timestamp: new Date().toLocaleTimeString()
          }
        ],
        follow_ups: [
          `Tìm hiểu thêm chi tiết về ${inputQuery}?`,
          `Các rủi ro và thách thức khi triển khai?`,
          `So sánh phương pháp này với các giải pháp khác?`
        ],
        created_at: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }

      setTurns(prev => [newTurn, ...prev])
      setActiveTurnId(newTurnId)
      setInputQuery('')
      setIsSearching(false)
    }, 1200)
  }

  const handleClarifyOptionSelect = (optionText: string) => {
    const handle = optionText.split(' ')[0]
    const updatedTurn: ResearchTurn = {
      ...activeTurn,
      status: 'completed',
      assistant_answer: `Đây là 5 bài đăng mới nhất từ tài khoản ${handle} [1]:\n\n1. Về AI Agent Training: "Các mô hình suy luận agent cần môi trường phản hồi liên tục để học từ lỗi sai."\n2. Tương lai của Coding Agent: "Lập trình viên sẽ chuyển dần sang vai trò quản trị và kiểm thử kiến trúc (Architect & Reviewer)."\n3. Cập nhật Eureka Labs: "Chuẩn bị ra mắt khóa học trực quan về nguyên lý hoạt động của Transformer."`,
      sources: [
        { title: `Timeline chính thức của ${handle}`, url: `https://x.com/${handle.replace('@', '')}`, source: 'x.com', summary: 'Trích xuất bài đăng gần nhất trên mạng xã hội X.' }
      ],
      react_steps: [
        ...activeTurn.react_steps,
        {
          round: 2,
          thought: `Người dùng chọn handle ${handle} -> Gọi tool timeline với screenname=${handle.replace('@', '')}`,
          tool: 'timeline',
          args: { screenname: handle.replace('@', ''), limit: 5 },
          result: { count: 5, status: 'success' },
          timestamp: new Date().toLocaleTimeString()
        }
      ],
      follow_ups: [
        `Phân tích thêm bài đăng số 1 của ${handle}?`,
        `Tìm thêm các tweet khác về Eureka Labs?`
      ]
    }

    setTurns(prev => prev.map(t => t.id === activeTurn.id ? updatedTurn : t))
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white font-sans selection:bg-[#b86848] selection:text-white pb-24 relative overflow-x-hidden">
      
      {/* HEADER BAR (Professional Lucide Vector Icons) */}
      <header className="pt-8 pb-6 px-8 max-w-7xl mx-auto border-b border-zinc-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-baseline space-x-3">
            <h1 className="text-4xl font-extrabold tracking-tighter text-white font-sans flex items-center space-x-2">
              <Cpu className="w-8 h-8 text-[#b86848] inline-block mr-1" />
              <span>UX</span>
            </h1>
            <span className="text-lg font-light text-zinc-400 font-sans">
              perplexity research agent
            </span>
          </div>
          <span className="px-2.5 py-0.5 copper-badge radius-pill text-[10px] font-mono font-bold tracking-wider uppercase flex items-center space-x-1">
            <ShieldCheck className="w-3 h-3 text-[#d98866]" />
            <span>B2C PRO ENGINE</span>
          </span>
        </div>

        {/* Global Controls & Developer Mode Toggle */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowDeveloperTrace(!showDeveloperTrace)}
            className={`px-3.5 py-1.5 radius-sm text-xs font-mono font-bold transition-all flex items-center space-x-2 border ${
              showDeveloperTrace 
                ? 'bg-[#b86848] text-white border-[#b86848]' 
                : 'bg-[#121212] text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-white'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>{showDeveloperTrace ? 'HIDE AUDIT TRACE' : 'SHOW AUDIT TRACE'}</span>
          </button>
        </div>
      </header>

      {/* MAIN RESEARCH INTENT COMPOSER */}
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-6">
        <form onSubmit={handleSearchSubmit} className="space-y-4">
          
          <div className="relative bg-[#121212] border border-zinc-800 focus-within:border-[#b86848] radius-lg p-2 transition-all shadow-2xl">
            <div className="flex items-center px-4 py-2">
              <Search className="w-5 h-5 text-zinc-500 mr-3 shrink-0" />
              <input
                type="text"
                value={inputQuery}
                onChange={e => setInputQuery(e.target.value)}
                placeholder="Hỏi bất kỳ điều gì... (Ví dụ: Tin tức AI nổi bật, tóm tắt paper, phân tích xu hướng)"
                className="w-full bg-transparent text-base text-white placeholder-zinc-500 focus:outline-none font-sans"
              />
              <button
                type="submit"
                disabled={!inputQuery.trim() || isSearching}
                className="px-5 py-2.5 bg-[#b86848] hover:bg-[#d98866] disabled:opacity-40 text-white font-bold text-xs radius-md transition-all font-mono flex items-center space-x-1.5 shrink-0"
              >
                {isSearching ? (
                  <>
                    <Activity className="w-3.5 h-3.5 animate-spin" />
                    <span>RESEARCHING...</span>
                  </>
                ) : (
                  <>
                    <span>RESEARCH</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            {/* Mode Selector */}
            <div className="flex flex-wrap items-center gap-2 pt-2 px-3 border-t border-zinc-900">
              {[
                { id: 'fast', label: 'Fast Search', icon: Zap },
                { id: 'deep', label: 'Deep Research', icon: Sparkles },
                { id: 'academic', label: 'Academic (ArXiv)', icon: BookOpen },
                { id: 'social', label: 'Social Trends', icon: MessageSquare },
              ].map(m => {
                const IconComp = m.icon
                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setSelectedMode(m.id as any)}
                    className={`px-3 py-1 radius-xs text-xs font-mono transition-all flex items-center space-x-1.5 ${
                      selectedMode === m.id
                        ? 'bg-[#27272a] text-white border border-[#b86848]/60 font-bold'
                        : 'text-zinc-500 hover:text-zinc-300 hover:bg-[#1a1a1a]'
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{m.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Quick Suggestions Chips */}
          <div className="flex flex-wrap gap-2 text-xs font-mono text-zinc-400">
            <span className="text-zinc-600 flex items-center space-x-1">
              <Globe className="w-3 h-3" />
              <span>Presets:</span>
            </span>
            {[
              'Tin tức AI & LLM mới nhất',
              'Tóm tắt tweet @karpathy',
              'Paper mới về AI Agent Reasoning',
              'So sánh Gemini 3.6 vs GPT-4o'
            ].map((sug, i) => (
              <button
                key={i}
                type="button"
                onClick={() => { setInputQuery(sug); }}
                className="hover:text-[#d98866] transition-colors border border-zinc-800 bg-[#121212] px-2.5 py-0.5 radius-pill"
              >
                {sug}
              </button>
            ))}
          </div>
        </form>
      </section>

      {/* DEVELOPER AUDIT TRACE DRAWER */}
      {showDeveloperTrace && (
        <section className="max-w-6xl mx-auto px-6 py-6 bg-[#121212] border border-[#b86848]/40 radius-lg mb-8 space-y-6">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 font-mono text-xs">
            <span className="font-bold text-[#d98866] flex items-center space-x-2">
              <Terminal className="w-4 h-4" />
              <span>RE-ACT TRACE AUDIT</span>
              <span className="px-2 py-0.5 bg-zinc-900 text-zinc-400 border border-zinc-700 radius-pill">EVAL SUITE PROVENANCE</span>
            </span>
            <span className="text-zinc-500">
              Prompt Hash: a1b2c3d4e5f6 · Tools Hash: 1a2b3c4d5e6f
            </span>
          </div>

          {/* Sliders & Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs">
            <div className="p-3 bg-[#080808] border border-zinc-800 radius-md">
              <span className="text-zinc-500 block">Routing Accuracy</span>
              <span className="text-lg font-bold text-emerald-400">92.5%</span>
            </div>
            <div className="p-3 bg-[#080808] border border-zinc-800 radius-md">
              <span className="text-zinc-500 block">Argument Accuracy</span>
              <span className="text-lg font-bold text-emerald-400">98.0%</span>
            </div>
            <div className="p-3 bg-[#080808] border border-zinc-800 radius-md">
              <span className="text-zinc-500 block">Provider Error Rate</span>
              <span className="text-lg font-bold text-emerald-400">0.0%</span>
            </div>
            <div className="p-3 bg-[#080808] border border-zinc-800 radius-md">
              <span className="text-zinc-500 block">Active Tools Declared</span>
              <span className="text-lg font-bold text-[#d98866]">10 Tools</span>
            </div>
          </div>
        </section>
      )}

      {/* MAIN RESEARCH CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Research History Navigation */}
        <div className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-500 font-bold tracking-widest uppercase">
            <span className="flex items-center space-x-1">
              <FileText className="w-3.5 h-3.5" />
              <span>Research Threads ({turns.length})</span>
            </span>
          </div>

          <div className="space-y-3">
            {turns.map(turn => {
              const isActive = activeTurn.id === turn.id
              return (
                <div
                  key={turn.id}
                  onClick={() => setActiveTurnId(turn.id)}
                  className={`paper-interactive radius-md p-4 cursor-pointer space-y-2 ${
                    isActive ? 'border-[#b86848] bg-[#1a1a1a]' : ''
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#d98866] font-bold">THREAD #{turn.turn_index}</span>
                    <span className="text-zinc-500">{turn.created_at}</span>
                  </div>
                  <p className="text-sm font-semibold text-white line-clamp-2">
                    {turn.user_query}
                  </p>
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-zinc-400">
                    <span className="px-2 py-0.5 bg-zinc-900 border border-zinc-800 radius-xs uppercase">
                      {turn.mode}
                    </span>
                    <span>{turn.sources.length} Sources</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column: Perplexity AI Answer & Citations Card */}
        <div className="lg:col-span-8 space-y-6">
          
          <div className="bg-[#121212] border border-zinc-800 radius-md p-8 space-y-6 shadow-2xl">
            
            {/* Thread Header */}
            <div className="border-b border-zinc-900 pb-4 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#d98866] font-bold flex items-center space-x-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>RESEARCH RESULT #{activeTurn.turn_index}</span>
                </span>
                <span className="px-2.5 py-0.5 bg-zinc-900 text-zinc-400 border border-zinc-800 radius-pill font-semibold uppercase">
                  {activeTurn.mode} mode
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                "{activeTurn.user_query}"
              </h2>
            </div>

            {/* SOURCES CITATIONS CARDS (Perplexity Style) */}
            {activeTurn.sources && activeTurn.sources.length > 0 && (
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#d98866]" />
                  <span>SOURCES CONSULTED ({activeTurn.sources.length})</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeTurn.sources.map((src, idx) => (
                    <a
                      key={idx}
                      href={src.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-3 bg-[#080808] border border-zinc-800 hover:border-[#b86848] radius-sm block space-y-1 transition-colors group"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
                        <span className="text-[#d98866] group-hover:underline">[{idx + 1}] {src.source}</span>
                        <ExternalLink className="w-3 h-3" />
                      </div>
                      <h4 className="text-xs font-semibold text-white line-clamp-1 group-hover:text-[#d98866] transition-colors">
                        {src.title}
                      </h4>
                      <p className="text-[10px] text-zinc-400 line-clamp-2">
                        {src.summary}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* INTERACTIVE CLARIFY GATE (If waiting for user) */}
            {activeTurn.status === 'waiting_user' && activeTurn.clarify_prompt && (
              <div className="p-6 bg-[#1a1a1a] border border-[#b86848]/60 radius-md space-y-4 font-mono">
                <div className="flex items-center space-x-2 text-xs font-bold text-[#d98866]">
                  <AlertCircle className="w-4 h-4" />
                  <span>ACTION GATE REQUIRED — CLARIFY INTENT</span>
                </div>
                <p className="text-sm font-semibold text-white font-sans">
                  {activeTurn.clarify_prompt.question}
                </p>
                {activeTurn.clarify_prompt.options && (
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {activeTurn.clarify_prompt.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleClarifyOptionSelect(opt)}
                        className="px-4 py-2 bg-[#080808] hover:bg-[#b86848] text-white border border-zinc-700 hover:border-[#b86848] radius-sm text-xs font-mono transition-all font-semibold flex items-center space-x-1.5"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-[#d98866]" />
                        <span>{opt}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* AI SYNTHESIS ANSWER */}
            {activeTurn.assistant_answer && (
              <div className="space-y-3 pt-2">
                <div className="flex items-center space-x-2 text-xs font-mono font-bold text-[#d98866]">
                  <Sparkles className="w-4 h-4" />
                  <span>AI RESEARCH SYNTHESIS</span>
                </div>
                <div className="text-sm text-zinc-200 leading-relaxed font-sans whitespace-pre-line bg-[#080808] p-6 radius-md border border-zinc-800/80">
                  {activeTurn.assistant_answer}
                </div>
              </div>
            )}

            {/* FOLLOW-UP QUESTIONS */}
            {activeTurn.follow_ups && activeTurn.follow_ups.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-zinc-900">
                <span className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <HelpCircle className="w-3.5 h-3.5 text-[#d98866]" />
                  <span>FOLLOW-UP RESEARCH QUESTIONS</span>
                </span>
                <div className="space-y-2">
                  {activeTurn.follow_ups.map((fq, i) => (
                    <button
                      key={i}
                      onClick={() => { setInputQuery(fq); handleSearchSubmit(); }}
                      className="w-full text-left p-3 bg-[#080808] hover:bg-[#1a1a1a] border border-zinc-800 hover:border-[#b86848] radius-sm text-xs text-zinc-300 hover:text-white transition-all flex items-center justify-between font-mono"
                    >
                      <span>• {fq}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* RE-ACT TIMELINE STEPS (If Developer Trace Mode is active) */}
            {showDeveloperTrace && activeTurn.react_steps && (
              <div className="space-y-3 pt-4 border-t border-zinc-900 font-mono">
                <span className="text-xs font-bold text-[#d98866] uppercase tracking-widest flex items-center space-x-1.5">
                  <Code className="w-3.5 h-3.5" />
                  <span>RE-ACT REASONING TIMELINE ({activeTurn.react_steps.length} STEPS)</span>
                </span>
                <div className="space-y-3">
                  {activeTurn.react_steps.map((st, i) => (
                    <div key={i} className="p-4 bg-[#080808] border border-zinc-800 radius-sm text-xs space-y-2">
                      <div className="flex justify-between text-[10px] text-zinc-500">
                        <span className="text-white font-bold">ROUND #{st.round}</span>
                        <span>{st.timestamp}</span>
                      </div>
                      <p className="text-purple-400 font-semibold">THOUGHT: {st.thought}</p>
                      <div className="p-2 bg-[#121212] border border-zinc-800 radius-xs text-indigo-400">
                        ACTION: {st.tool}({JSON.stringify(st.args)})
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </main>

      {/* FOOTER WATERMARK STATEMENT */}
      <footer className="mt-20 pt-12 pb-8 max-w-6xl mx-auto px-6 border-t border-zinc-900 flex flex-col md:flex-row items-baseline justify-between gap-4 font-mono text-xs text-zinc-500">
        <div>
          <span>RESONANT UI 2027 · PERPLEXITY B2C RESEARCH AGENT ENGINE</span>
        </div>
        <div>
          <span>"Quiet surfaces for thought. Living controls for action."</span>
        </div>
      </footer>
    </div>
  )
}

export default App
