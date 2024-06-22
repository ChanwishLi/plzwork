import React from 'react';

const Request: React.FC = () => {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'Arial, sans-serif',
    };

    const textStyle: React.CSSProperties = {
        margin: '10px 0',
        padding: '10px',
        color: '#333',
        fontSize: '1.2em',
    };

    const languages = [
        { id: 1, text: 'Thank you for using Guider!', language: 'English' },
        { id: 2, text: 'ขอบคุณที่ใช้ไกเดอร์!', language: 'Thai' },
        { id: 3, text: '感谢您使用 Guider！', language: 'Chinese' },
    ];

    return (
        <div style={containerStyle}>
            {languages.map(lang => (
                <p key={lang.id} style={textStyle}>
                    {lang.text}
                </p>
            ))}
        </div>
    );
};

export default Request;