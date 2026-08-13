"use client"
import React, { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import flowConfig from '@/data/chatbot-flow.json'
import portfolioData from '@/data/portfoliodata'
import blogData from '@/data/blogdata.json'
import '@/styles/chatbot.css'

// ─── Helpers ──────────────────────────────────────────────────────────────────

const delay = (ms) => new Promise((res) => setTimeout(res, ms))
const BOT_TYPING_DELAY = 700
const JOURNEY_STORAGE_KEY = 'wb_journey'
const JOURNEY_MAX_LENGTH = 20

// Friendly labels for known static routes
const STATIC_PAGE_LABELS = {
  '/': 'Home',
  '/about': 'About',
  '/services': 'Services',
  '/services/web-development': 'Web Development',
  '/services/ai-automation': 'AI Automation',
  '/services/branding': 'Branding',
  '/solutions': 'Solutions',
  '/solutions/business-automation': 'Business Automation',
  '/solutions/ai-booking-agent': 'AI Booking Agent',
  '/solutions/restaurant-management': 'Restaurant Management',
  '/case-studies': 'Case Studies',
  '/blog': 'Blog',
  '/pricing': 'Pricing',
  '/growth-plans': 'Growth Plans',
  '/start-a-project': 'Start a Project',
}

const titleCaseSegment = (segment) =>
  segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())

// Turn a pathname into a human-readable page name for the journey trail
const getPageLabel = (pathname) => {
  if (!pathname) return 'Home'
  const clean = pathname.split('?')[0].replace(/\/+$/, '') || '/'

  if (STATIC_PAGE_LABELS[clean]) return STATIC_PAGE_LABELS[clean]

  const caseStudyMatch = clean.match(/^\/case-studies\/([^/]+)/)
  if (caseStudyMatch) {
    const project = portfolioData.find((p) => p.slug === caseStudyMatch[1])
    return project ? project.title : 'Case Study'
  }

  const blogMatch = clean.match(/^\/blog\/([^/]+)/)
  if (blogMatch) {
    const post = blogData.find((p) => p.slug === blogMatch[1])
    return post ? post.title : 'Blog Post'
  }

  const cityMatch = clean.match(/^\/website-development-([^/]+)/)
  if (cityMatch) {
    return `Website Development – ${titleCaseSegment(cityMatch[1])}`
  }

  // Fallback: title-case the last path segment
  const segments = clean.split('/').filter(Boolean)
  const last = segments[segments.length - 1] || 'home'
  return titleCaseSegment(last)
}

// ─── ChatBot ──────────────────────────────────────────────────────────────────

const ChatBot = () => {
  const [mode, setMode] = useState('teaser') // teaser | minimized | chat
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Flow state
  const [phase, setPhase] = useState('service_selection')
  const [selectedService, setSelectedService] = useState(null)
  const [serviceFlowIndex, setServiceFlowIndex] = useState(0)
  const [commonIndex, setCommonIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [awaitingInput, setAwaitingInput] = useState(false)

  const bodyRef = useRef(null)
  const inputRef = useRef(null)
  const hasOpened = useRef(false)
  // Keep a ref in sync with answers so submitLead always reads the latest value
  const answersRef = useRef({})
  // Keep a ref in sync with the visitor's page journey for the same reason
  const journeyRef = useRef([])

  const pathname = usePathname()

  // ── Scroll to bottom on new messages ────────────────────────────────────────
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight
    }
  }, [messages, isTyping])

  // ── Track the visitor's page journey across navigations ─────────────────────
  // Persisted in sessionStorage so it survives a hard refresh mid-visit, and
  // clears itself once the tab closes.
  useEffect(() => {
    let stored = []
    try {
      stored = JSON.parse(sessionStorage.getItem(JOURNEY_STORAGE_KEY) || '[]')
    } catch {
      stored = []
    }

    const label = getPageLabel(pathname)
    const updated =
      stored[stored.length - 1] === label
        ? stored
        : [...stored, label].slice(-JOURNEY_MAX_LENGTH)

    journeyRef.current = updated

    try {
      sessionStorage.setItem(JOURNEY_STORAGE_KEY, JSON.stringify(updated))
    } catch {
      // sessionStorage unavailable (e.g. private mode) — journey just won't persist
    }
  }, [pathname])

  // ── Init chat on first open ──────────────────────────────────────────────────
  useEffect(() => {
    if (mode === 'chat' && !hasOpened.current) {
      hasOpened.current = true
      initChat()
    }
  }, [mode])

  // ── Core: push a bot message after a typing delay ───────────────────────────
  const pushBot = async (message) => {
    setIsTyping(true)
    await delay(BOT_TYPING_DELAY)
    setIsTyping(false)
    setMessages((prev) => [...prev, { role: 'bot', ...message }])
  }

  const pushUser = (text) => {
    setMessages((prev) => [...prev, { role: 'user', type: 'text', content: text }])
  }

  // ── Initialise: welcome + service selection ──────────────────────────────────
  const initChat = async () => {
    await pushBot({ type: 'text', content: flowConfig.welcome.message })
    await pushBot({ type: 'service_selection', content: 'Choose a service to get started:' })
  }

  // ── Handle service button click ──────────────────────────────────────────────
  const handleServiceSelect = async (service) => {
    if (isSubmitted || phase !== 'service_selection') return

    setSelectedService(service.id)
    pushUser(service.label)
    setPhase('service_flow')
    setServiceFlowIndex(0)

    const serviceQuestions = flowConfig.flows[service.id] || []
    if (serviceQuestions.length === 0) {
      await startCommonFlow(0)
    } else {
      await askServiceQuestion(service.id, 0)
    }
  }

  const askServiceQuestion = async (serviceId, index) => {
    const questions = flowConfig.flows[serviceId] || []
    if (index >= questions.length) {
      await startCommonFlow(0)
      return
    }
    const q = questions[index]
    await pushBot({ type: q.type, content: q.question, options: q.options, questionId: q.id, placeholder: q.placeholder })
    if (q.type === 'text') setAwaitingInput(true)
  }

  const startCommonFlow = async (index) => {
    setPhase('common')
    setCommonIndex(index)
    await askCommonQuestion(index)
  }

  const askCommonQuestion = async (index) => {
    if (index >= flowConfig.common.length) {
      await submitLead()
      return
    }
    const q = flowConfig.common[index]
    await pushBot({ type: q.type, content: q.question, options: q.options, questionId: q.id, placeholder: q.placeholder, optional: q.optional })
    if (q.type === 'text') setAwaitingInput(true)
  }

  // ── Handle quick reply selection ─────────────────────────────────────────────
  const handleQuickReply = async (option, questionId) => {
    if (isSubmitted) return

    pushUser(option)
    recordAnswer(questionId, option)
    setAwaitingInput(false)

    setMessages((prev) =>
      prev.map((m) => (m.questionId === questionId ? { ...m, answered: true } : m))
    )

    await advance()
  }

  // ── Handle text input submission ─────────────────────────────────────────────
  const handleTextSubmit = async () => {
    const currentQ = getCurrentQuestion()
    if (!currentQ) return

    const val = inputValue.trim()
    if (!val && !currentQ.optional) return

    setInputValue('')
    setAwaitingInput(false)

    pushUser(val || '—')
    recordAnswer(currentQ.id, val)

    setMessages((prev) =>
      prev.map((m) => (m.questionId === currentQ.id ? { ...m, answered: true } : m))
    )

    await advance()
  }

  const recordAnswer = (questionId, value) => {
    answersRef.current = { ...answersRef.current, [questionId]: value }
    setAnswers(answersRef.current)
  }

  const getCurrentQuestion = () => {
    if (phase === 'service_flow') {
      return (flowConfig.flows[selectedService] || [])[serviceFlowIndex] || null
    }
    if (phase === 'common') {
      return flowConfig.common[commonIndex] || null
    }
    return null
  }

  const advance = async () => {
    if (phase === 'service_flow') {
      const questions = flowConfig.flows[selectedService] || []
      const nextIndex = serviceFlowIndex + 1
      setServiceFlowIndex(nextIndex)
      if (nextIndex >= questions.length) {
        await startCommonFlow(0)
      } else {
        await askServiceQuestion(selectedService, nextIndex)
      }
    } else if (phase === 'common') {
      const nextIndex = commonIndex + 1
      setCommonIndex(nextIndex)
      if (nextIndex >= flowConfig.common.length) {
        await submitLead()
      } else {
        await askCommonQuestion(nextIndex)
      }
    }
  }

  // ── Submit lead via API ──────────────────────────────────────────────────────
  const submitLead = async () => {
    setPhase('done')
    setIsSubmitting(true)
    await pushBot({ type: 'text', content: 'Perfect! Give me a second to send your info to our team... ⏳' })

    try {
      const payload = {
        service: selectedService,
        serviceLabel: flowConfig.services.find((s) => s.id === selectedService)?.label,
        answers: answersRef.current, // always up-to-date via ref
        journey: journeyRef.current, // page trail leading up to this chat
      }

      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error('Network error')

      setIsSubmitted(true)
      setIsSubmitting(false)
      await pushBot({ type: 'success', content: '' })
    } catch (err) {
      setIsSubmitting(false)
      await pushBot({
        type: 'text',
        content: '❌ Something went wrong. Please email us directly at info@webefytoday.com',
      })
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleTextSubmit()
    }
  }

  // ── Open chat from teaser or minimized ──────────────────────────────────────
  const openChat = () => setMode('chat')

  // ─────────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <div>

      {/* ── Teaser ── */}
      {mode === 'teaser' && (
        <div className="wb-chat-teaser">
          <span className="wb-close" onClick={() => setMode('minimized')}>✖</span>
          <div className="wb-gift"><img src='/assets/images/robot.png' alt='webefy-ai-assistance' /></div>
          <h4>Hey there!</h4>
          <p>I'm Webefy AI Assistant.<br />How can I help you today?</p>
          <button className="wb-chat-btn" onClick={openChat}>Chat with me</button>
        </div>
      )}

      {/* ── Chat window ── */}
      {mode === 'chat' && (
        <div className="wb-chat-window">

          <div className="wb-header">
            <div className="wb-avatar"><img src='/assets/images/robot.png' /></div>
            <div>
              <h4>Webefy AI Assistant</h4>
              <span><i className='fas fa-circle'></i>Online</span>
            </div>
            <span className="wb-close" onClick={() => setMode('minimized')}>✖</span>
          </div>

          <div className="wb-body" ref={bodyRef}>
            {messages.map((msg, i) => (
              <MessageBubble
                key={i}
                msg={msg}
                onServiceSelect={handleServiceSelect}
                onQuickReply={handleQuickReply}
              />
            ))}

            {isTyping && (
              <div className="wb-bot wb-typing" aria-label="Bot is typing">
                <span /><span /><span />
              </div>
            )}
          </div>

          <div className="wb-footer">
            {isSubmitted ? (
              <p className="wb-done-note">✅ Chat completed. We'll be in touch soon!</p>
            ) : (
              <>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={
                    awaitingInput
                      ? getCurrentQuestion()?.placeholder || 'Type your answer...'
                      : 'Choose an option above...'
                  }
                  value={inputValue}
                  disabled={!awaitingInput || isSubmitting}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button
                  disabled={!awaitingInput || isSubmitting}
                  onClick={handleTextSubmit}
                >
                  ➤
                </button>
              </>
            )}
          </div>

        </div>
      )}

      {/* ── Minimized bubble ── */}
      {mode === 'minimized' && (
        <div className="wb-minimized" onClick={openChat}>
          <img src='/assets/images/robot.png' alt='webefy-ai-assistance' />
        </div>
      )}

    </div>
  )
}

// ─── MessageBubble ────────────────────────────────────────────────────────────

const MessageBubble = ({ msg, onServiceSelect, onQuickReply }) => {

  if (msg.role === 'user') {
    return <div className="wb-user">{msg.content}</div>
  }

  if (msg.type === 'service_selection') {
    return (
      <div className="wb-bot-group">
        <div className="wb-bot">{msg.content}</div>
        <div className="wb-services">
          {flowConfig.services.map((s) => (
            <button
              key={s.id}
              className="wb-service-btn"
              onClick={() => onServiceSelect(s)}
              disabled={msg.answered}
            >
              <span className="wb-service-label">{s.label}</span>
              <span className="wb-service-desc">{s.description}</span>
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (msg.type === 'quick_reply') {
    return (
      <div className="wb-bot-group">
        <div className="wb-bot">{msg.content}</div>
        <div className="wb-quick-replies">
          {(msg.options || []).map((opt) => (
            <button
              key={opt}
              className={`wb-reply-btn ${msg.answered ? 'wb-reply-btn--disabled' : ''}`}
              onClick={() => !msg.answered && onQuickReply(opt, msg.questionId)}
              disabled={msg.answered}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (msg.type === 'success') {
    return (
      <div className="wb-success-card">
        <div className="wb-success-icon">🎉</div>
        <h4>You're all set!</h4>
        <p>Thanks for reaching out. Our team will review your details and get back to you within <strong>24 hours</strong>.</p>
        <p className="wb-success-sub">Check your inbox — we may send a quick confirmation email.</p>
      </div>
    )
  }

  return <div className="wb-bot">{msg.content}</div>
}

export default ChatBot