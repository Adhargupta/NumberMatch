import React, { useEffect } from 'react'

function Message({messages, difference, setDifference}) {
  const getMessage = () => {
    if (!messages) return null;
    
    if (difference >= 0.2) return { text: 'Too Fast', emoji: '⚡', color: 'message-fast' };
    if (difference < 0.2 && difference > 0) return { text: 'Almost There', emoji: '🎯', color: 'message-close' };
    if (difference === 0) return { text: 'PERFECT', emoji: '🏆', color: 'message-perfect' };
    if (difference < 0 && difference > -0.2) return { text: 'Almost There', emoji: '🎯', color: 'message-close' };
    if (difference < -0.2) return { text: 'Too Slow', emoji: '🐌', color: 'message-slow' };
    
    return null;
  };

  const messageData = getMessage();

  return (
    <div className={`message-container ${messageData ? 'message-visible' : ''}`}>
      {messageData && (
        <>
          <div className="message-emoji">{messageData.emoji}</div>
          <div className={`message-text ${messageData.color}`}>
            {messageData.text}
          </div>
        </>
      )}
    </div>
  )
}

export default Message
