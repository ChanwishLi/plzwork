"use client"

import React, { useState } from 'react';
import '../../../../styles2/fpage.css';
import Link from "next/link";


const profiles = [
    {
        name: "Chanwish Lim",
        stars: 5,
        badges: ["TH/EN/CN", "History", "Fun"],
        description: "สวัสดี! ฉันชื่อ Chanwish และฉันชอบสำรวจงานอดิเรกใหม่ๆ และเรียนรู้เกี่ยวกับวัฒนธรรมที่แตกต่างกัน ไม่ว่าจะเป็นการอ่านหนังสือใหม่ ทดลองสูตรอาหารใหม่ หรือการเดินทางไปยังสถานที่ใหม่ ฉันมักจะพบกับความสุขในการค้นพบสิ่งใหม่ๆ ฉันเชื่อว่าทุกวันเป็นโอกาสในการเรียนรู้และเติบโต และฉันก็มุ่งมั่นที่จะใช้มันให้เกิดประโยชน์สูงสุด ในเวลาว่างคุณจะพบว่าฉันเดินป่าไปตามเส้นทางธรรมชาติ วาดภาพ หรือใช้เวลาร่วมกับเพื่อนและครอบครัว ฉันเปิดรับประสบการณ์ใหม่ๆ อยู่เสมอ และชอบแบ่งปันการผจญภัยกับผู้อื่น",
        email: "chanwishlim.2007@gmail.com"
    },
    {
        name: "Alex Johnson",
        stars: 4,
        badges: ["TH/EN", "Shopping", "Foodie"],
        description: "สวัสดี! ฉันชื่อ Alex ผู้ชื่นชอบเทคโนโลยีและหลงใหลในการเล่นเกมและดนตรี ฉันสนุกกับการสร้างพีซีแบบกำหนดเอง สำรวจนวัตกรรมทางเทคโนโลยีล่าสุด และหลงไปกับการผจญภัยในการเล่นเกมครั้งยิ่งใหญ่ ดนตรีเป็นอีกส่วนสำคัญในชีวิตของฉัน ไม่ว่าจะเป็นการเล่นกีตาร์หรือดูคอนเสิร์ตสด ฉันเชื่อในพลังของเทคโนโลยีที่จะเปลี่ยนแปลงชีวิตและมุ่งมั่นที่จะก้าวนำหน้าการพัฒนาใหม่ๆ",
        email: "alex.johnson@example.com"
    },
    {
        name: "Samantha Lee",
        stars: 3,
        badges: ["TH/CN", "Foodie", "Cool"],
        description: "สวัสดี! ฉันชื่อ Samantha เป็นศิลปินที่มีหัวใจรักการเดินทางและทำอาหาร ฉันค้นพบแรงบันดาลใจในความงดงามของวัฒนธรรมที่แตกต่าง และสนุกกับการนำแรงบันดาลใจนั้นมาสู่ชีวิตผ่านงานศิลปะของฉัน การทำอาหารเป็นอีกวิธีหนึ่งที่ฉันแสดงความคิดสร้างสรรค์ โดยทดลองสูตรอาหารและรสชาติใหม่ๆ อยู่เสมอ การเดินทางทำให้ฉันได้รวบรวมประสบการณ์และแนวคิดใหม่ๆ ซึ่งฉันชอบที่จะรวมไว้ในงานศิลปะของฉัน",
        email: "samantha.lee@example.com"
    }
];

const ProfileCard = ({profile}) => {
    const [emailSent, setEmailSent] = useState(false);

    const handleEmailClick = () => {
        // Check if email has already been sent to prevent multiple clicks
        if (!emailSent) {
            window.open(`mailto:${profile.email}?subject=Guide%20Request`, '_blank');
            setEmailSent(true);
        }
    };



    return (
        <Link href="requestsent">
        <div className="cardv2" onClick={handleEmailClick}>
            <div className="profile-pic"></div>
            <div className="details">
                <div className="name">Name: {profile.name}</div>
                <div className="stars">
                    {[...Array(profile.stars)].map((_, i) => (
                        <span key={i}>★</span>
                    ))}
                </div>
                <div className="badges">
                    {profile.badges.map((badge, index) => (
                        <span className="badge" key={index}>{badge}</span>
                    ))}
                </div>
                <div className="description">
                    {profile.description}
                </div>
            </div>
        </div>
        </Link>
    );
}

const ProfileCardList = () => {
    return (
        <div className="profile-card-list">
            {profiles.map((profile, index) => (
                <ProfileCard profile={profile} key={index} />
            ))}
        </div>
    );
}

export default ProfileCardList;