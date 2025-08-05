import React, { useState } from "react";
import phrases from "../data/phrases.json";
import { useNavigate } from "react-router-dom";

export default function TootsieButton() {
  const navigate = useNavigate();

  const clickSound = new Audio("/sounds/click.mp3");
  const birthdaySong = new Audio("/sounds/happy-birthday.mp3");

  const [message, setMessage] = useState("اكبس عالزر توتسي");
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count < phrases.length) {
      setMessage(phrases[count]);
      setCount((prev) => prev + 1);

      clickSound.currentTime = 0;
      clickSound.play();

      const countEl = document.querySelector(".press-count");
      if (countEl) {
        countEl.style.animation = "none";
        void countEl.offsetHeight;
        countEl.style.animation = null;
      }
    } else {
      // ✅ شغل الغنية و بعدين انقل للمعايدة
      birthdaySong.currentTime = 0;
      birthdaySong.play();

      setTimeout(() => {
        navigate("/greeting");
      }, 2000); // ناطرين ثانيتين مشان تسمع أول الغنية 😎
    }
  };

  return (
    <div className="tootsie-container">
      <h2 className="rtl-fix">{message}</h2>

      <button
        onClick={handleClick}
        className={`tootsie-button ${count >= phrases.length ? "greeting-mode" : ""}`}
      >
        {count >= phrases.length ? "🎉 عرض المعايدة 🎉" : "اضغطني توتسي"}
      </button>

      {count < phrases.length && (
        <p className="press-count">
          {count === 0
            ? "ليش لسا ما كبست؟"
            : count < 5
            ? `برافو! كبست ${count} مرة`
            : count < 10
            ? `ماشي يا توتسي، ${count} كبسات`
            : `وحش كاسر! ${count} كبسة`}
        </p>
      )}
    </div>
  );
}