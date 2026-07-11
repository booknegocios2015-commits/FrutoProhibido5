import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Sparkles, Send, ShieldAlert, MessageCircle } from 'lucide-react';

interface ChatMessage {
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

export default function ConciergeChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: 'bot',
      text: 'Bienvenido a la discreta asesoría de Fruto Prohibido. Estoy aquí para guiarte en tu exploración de nuestra selección de bienestar íntimo de forma privada. ¿En qué puedo asistirte hoy?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    '¿Cómo viene el empaque?',
    'Sugiéreme un perfume',
    'Háblame de Éxtasis Minimal',
  ];

  // Auto-scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleWhatsAppDirect = () => {
    const text = 'Hola Fruto Prohibido. Deseo recibir asesoría íntima directa y personalizada con un asesor real por WhatsApp. ¡Muchas gracias!';
    window.open(`https://wa.me/56973770617?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/concierge/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMsg],
        }),
      });

      const data = await response.json();
      
      const botMsg: ChatMessage = {
        sender: 'bot',
        text: data.text || data.error || 'Mis disculpas, por el momento no puedo responder. Por favor intente más tarde.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error('Error contacting concierge backend:', error);
      const errorMsg: ChatMessage = {
        sender: 'bot',
        text: 'Mis disculpas. He experimentado un inconveniente. Puedes contactarnos directo por WhatsApp haciendo clic en el botón de arriba.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  return (
    <div id="concierge-chat-widget" className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      
      {/* Floating Chat Bubble */}
      {!isOpen && (
        <button
          id="btn-open-concierge-chat"
          onClick={() => setIsOpen(true)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-fuchsia text-white hover:bg-brand-fuchsia-hover shadow-lg shadow-brand-fuchsia/25 hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Hablar con Asesoría Privada"
        >
          <Sparkles className="h-5.5 w-5.5 text-white" />
        </button>
      )}

      {/* Chat Window Box */}
      {isOpen && (
        <div 
          id="concierge-chat-window"
          className="w-[86vw] sm:w-[340px] h-[460px] max-h-[72vh] rounded-xl bg-black border border-brand-silver/15 shadow-2xl overflow-hidden flex flex-col justify-between animate-scaleUp"
        >
          {/* Header */}
          <div className="p-3 bg-brand-dark border-b border-brand-silver/10 flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="h-7 w-7 rounded-full bg-brand-fuchsia/15 border border-brand-fuchsia/30 flex items-center justify-center">
                <Sparkles className="h-3.5 w-3.5 text-brand-fuchsia" />
              </div>
              <div>
                <h4 className="font-serif text-[12px] font-bold text-white tracking-wide">Asesoría Privada</h4>
                <div className="flex items-center space-x-1 mt-0.5">
                  <span className="h-1 w-1 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-[8px] text-brand-silver/50 tracking-widest uppercase font-medium">Privado y Seguro</span>
                </div>
              </div>
            </div>

            {/* Close and Exit Button */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleWhatsAppDirect}
                className="flex items-center gap-1 px-2 py-1 rounded bg-green-500/10 border border-green-500/25 hover:bg-green-500/20 text-[9px] text-green-400 font-semibold tracking-wider transition-colors cursor-pointer"
                title="Pasar a WhatsApp"
              >
                <MessageCircle className="h-3 w-3 fill-green-400/10" />
                <span>WSP</span>
              </button>
              
              <button 
                id="btn-close-concierge-chat"
                onClick={() => setIsOpen(false)} 
                className="p-1 text-brand-silver/50 hover:text-white rounded hover:bg-white/5 transition-colors text-xs flex items-center gap-1 font-semibold"
                title="Cerrar ventana"
              >
                <X className="h-4.5 w-4.5" />
              </button>
            </div>
          </div>

          {/* Messages stage */}
          <div className="flex-1 overflow-y-auto p-3.5 space-y-3 bg-[#080808]">
            
            {/* Confidential Banner */}
            <div className="flex items-start space-x-2 p-2 rounded bg-amber-500/5 border border-amber-500/10 text-[8px] text-amber-500/80 uppercase tracking-wider font-semibold">
              <ShieldAlert className="h-3 w-3 flex-shrink-0 mt-0.5" />
              <span>Encriptación SSL activa. Ningún dato queda guardado.</span>
            </div>

            {messages.map((m, idx) => {
              const isBot = m.sender === 'bot';
              return (
                <div key={idx} className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} space-y-0.5`}>
                  <div
                    className={`max-w-[85%] rounded-xl px-3 py-2 text-[11px] tracking-wide leading-relaxed ${
                      isBot
                        ? 'bg-brand-gray text-brand-silver/90 rounded-tl-none border border-brand-silver/5'
                        : 'bg-brand-fuchsia text-white rounded-tr-none'
                    }`}
                  >
                    {m.text}
                  </div>
                  <span className="text-[7.5px] text-brand-silver/30 font-light px-1">{m.time}</span>
                </div>
              );
            })}

            {/* Typing indicator */}
            {isLoading && (
              <div className="flex flex-col items-start space-y-1">
                <div className="bg-brand-gray text-brand-silver/60 rounded-xl rounded-tl-none px-3 py-2 text-[11px] border border-brand-silver/5 flex items-center space-x-1">
                  <span className="h-1 w-1 rounded-full bg-brand-fuchsia animate-bounce"></span>
                  <span className="h-1 w-1 rounded-full bg-brand-fuchsia animate-bounce [animation-delay:0.2s]"></span>
                  <span className="h-1 w-1 rounded-full bg-brand-fuchsia animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick recommendations */}
          <div className="px-3 py-1.5 bg-[#050505] border-t border-brand-silver/5 flex gap-1.5 overflow-x-auto scrollbar-none">
            {quickPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                disabled={isLoading}
                className="whitespace-nowrap px-2.5 py-1 rounded-full bg-brand-gray/30 border border-brand-silver/10 hover:border-brand-fuchsia hover:bg-brand-gray text-[8.5px] font-medium tracking-wide text-brand-silver hover:text-white transition-all duration-300 flex-shrink-0 disabled:opacity-50 cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Form inputs */}
          <form onSubmit={handleFormSubmit} className="p-2.5 bg-brand-dark border-t border-brand-silver/10 flex gap-1.5">
            <input
              id="input-concierge-message"
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Consulta íntima privada..."
              disabled={isLoading}
              className="flex-1 bg-[#0b0b0b] border border-brand-outline/20 focus:border-brand-fuchsia focus:outline-none rounded px-3 py-2 text-[11px] text-white placeholder-brand-silver/30"
            />
            <button
              id="btn-send-concierge"
              type="submit"
              disabled={!inputText.trim() || isLoading}
              className="p-2 bg-brand-fuchsia hover:bg-brand-fuchsia-hover text-white rounded transition-colors flex-shrink-0 flex items-center justify-center disabled:opacity-50 cursor-pointer"
              aria-label="Enviar mensaje"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
