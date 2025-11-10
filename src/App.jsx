import { useState } from "react";
import SessionSelector from "./components/SessionSelector.jsx";
import SessionExam from "./pages/SessionExam.jsx";
import UnifiedExam from "./pages/UnifiedExam.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

export default function App() {
  const [screen, setScreen] = useState("menu");
  const [selectedSession, setSelectedSession] = useState(null);

  const startSession = (session) => {
    setSelectedSession(session);
    setScreen("session");
  };

  const startUnified = () => {
    setScreen("unified");
  };
    
  const goBack = () => {
    setScreen("menu");
    setSelectedSession(null);
  };

  return (
    <>
      {screen === "menu" && (
        <SessionSelector
          startSession={startSession}
          startUnified={startUnified}
        />
      )}

      {screen === "session" && (
        <SessionExam session={selectedSession} goBack={goBack} />
      )}

      {screen === "unified" && <UnifiedExam goBack={goBack} />}
       <ThemeToggle />
    </>
  );
}
