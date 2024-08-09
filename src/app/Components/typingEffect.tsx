'use client';

import { useEffect, useState } from "react";

const TypingEffect = () => {
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(10);
    const textArray = ["Chanbeen, Kim", "김찬빈 입니다."];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % textArray.length;
            const fullText = textArray[i];
            const updatedText = isDeleting
                ? fullText.substring(0, displayText.length - 1)
                : fullText.substring(0, displayText.length + 1);

            setDisplayText(updatedText);

            if (!isDeleting && updatedText === fullText) {
                setIsDeleting(true);
                setTypingSpeed(3000); // 3초 대기
            } else if (isDeleting && updatedText === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            } else {
                setTypingSpeed(isDeleting ? 75 : 150);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, loopNum, typingSpeed]);

    return (
        <h1>
            {displayText}
            <span>|</span>
        </h1>
    )
}

export default TypingEffect;
