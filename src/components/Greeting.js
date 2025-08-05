// src/components/Greeting.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Greeting() {
  const navigate = useNavigate();

  return (
    <div className="greeting-page">
      <div className="greeting-content">
        <h1 className="rtl-fix">🎉 كل عام و انت بألف خير توتسي! 🎉</h1>
        <p>
          إن شاء الله أيامك كلها حلوة و سعيدة، بتحقق فيهن اللي بدك ياه، و بتكون مبسوط و مرتاح دايماً.
        </p>
        <button onClick={() => navigate("/")} className="tootsie-button">
          🔁 ارجع للصفحة الرئيسية
        </button>
      </div>
    </div>
  );
}