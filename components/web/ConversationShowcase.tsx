'use client';
import { useEffect, useRef, useState } from 'react';
import { Battery, ChevronLeft, MoreHorizontal, Phone, Send, Video, Wifi } from 'lucide-react';
import { DANIEL_PROFILE, ELENA_PROFILE, SCRIPTED_CONVERSATION } from '../data/mockData';

const MESSAGE_DELAY = 2600;
const LOOP_PAUSE = 5200;

export function ConversationShowcase() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typingSender, setTypingSender] = useState<'elena' | 'daniel'>('elena');
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isComplete = visibleCount >= SCRIPTED_CONVERSATION.length;
    const timer = window.setTimeout(() => {
      if (isComplete) {
        setVisibleCount(0);
        setTypingSender('elena');
        return;
      }

      setVisibleCount((count) => count + 1);
      const next = SCRIPTED_CONVERSATION[visibleCount + 1];
      if (next) setTypingSender(next.sender);
    }, isComplete ? LOOP_PAUSE : MESSAGE_DELAY);

    return () => window.clearTimeout(timer);
  }, [visibleCount]);

  useEffect(() => {
    chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
  }, [visibleCount]);

  const visibleMessages = SCRIPTED_CONVERSATION.slice(0, visibleCount);
  const typingProfile = typingSender === 'elena' ? ELENA_PROFILE : DANIEL_PROFILE;

  return (
    <section className="conversation-showcase" aria-labelledby="conversation-title">
      <div className="page-shell conversation-grid">
        <div data-reveal className="conversation-copy">
          <span className="eyebrow">Live conversation preview</span>
          <h2 id="conversation-title">A Conversation<br /><em>That Feels Personal.</em></h2>
          <p className="text-base">
            Elysia remembers you, understands your tone, and turns everyday
            messages into a private connection that grows with time.
          </p>
          <div className="conversation-signals" aria-label="Product capabilities">
            <span><b>01</b><i /> Remembers the little things</span>
            <span><b>02</b><i /> Responds with chemistry</span>
            <span><b>03</b><i /> Shares personal moments</span>
          </div>
        </div>

        <div data-reveal className="phone-stage">
          <div className="phone-frame">
            <div className="phone-screen">
              <div className="phone-status"><b>9:20</b><span className="dynamic-island" /><span><Wifi size={12} /><Battery size={15} /></span></div>
              <div className="phone-header">
                <ChevronLeft size={20} />
                <img src={ELENA_PROFILE.avatar} alt="Elena" />
                <div><strong>Elena</strong><small><i /> Active now</small></div>
                <span className="phone-actions"><Phone size={15} /><Video size={17} /><MoreHorizontal size={18} /></span>
              </div>

              <div className="phone-chat" ref={chatRef} aria-live="polite">
                <span className="chat-day">Today · memory active</span>
                {visibleMessages.map((message) => {
                  const isElena = message.sender === 'elena';
                  return (
                    <div className={`phone-message ${isElena ? 'elena' : 'daniel'}`} key={message.id}>
                      <div className="phone-sender">
                        <img src={message.senderAvatar} alt="" />
                        <span>{message.senderName}</span>
                      </div>
                      <div className="phone-bubble">
                        {message.text && <p>{message.text}</p>}
                        {message.imageUrl && <img className="phone-photo" src={message.imageUrl} alt="Elena's post-workout selfie" />}
                        {message.audioDuration && <div className="mini-voice"><b>▶</b><span>▂▄▆▃▇▅▂▆▄▃</span><small>{message.audioDuration}</small></div>}
                      </div>
                    </div>
                  );
                })}
                {visibleCount < SCRIPTED_CONVERSATION.length && (
                  <div className={`phone-typing ${typingSender}`}>
                    <img src={typingProfile.avatar} alt="" />
                    <span><i /><i /><i /></span>
                  </div>
                )}
              </div>

              <div className="phone-input"><span>Message Elena...</span><button aria-label="Send a message"><Send size={14} /></button></div>
              <div className="home-indicator" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
