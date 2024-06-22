"use client"

import React, { useState } from 'react';
import '../../../../styles2/fpage.css';
import Link from "next/link";

type Profile = {
    name: string;
    stars: number;
    badges: string[];
    description: string;
    email: string;
};
const profiles = [
    {
        name: "Chanwish Lim",
        stars: 5,
        badges: ["TH/EN/CN", "History", "Fun"],
        description: "大家好！我是 Chanwish，我喜欢探索新的爱好并了解不同的文化。无论是阅读新书、尝试新食谱还是前往新地方，我总能在发现新事物中找到乐趣。我相信每一天都是学习和成长的机会，我努力充分利用它。在空闲时间，你会发现我在自然小径上徒步旅行、绘画或与朋友和家人共度美好时光。我总是乐于接受新体验，并喜欢与他人分享我的冒险经历。",
        email: "chanwishlim.2007@gmail.com"
    },
    {
        name: "Brennan Johnson",
        stars: 4,
        badges: ["TH/EN", "Shopping", "Foodie"],
        description: "你好！我是 Alex，一名热爱游戏和音乐的科技爱好者。我喜欢组装定制电脑、探索最新的科技创新，以及沉迷于史诗般的游戏冒险。音乐是我生活中的另一大组成部分，无论是弹吉他还是参加现场音乐会。我相信科技的力量可以改变生活，并努力走在新发展的前沿。",
        email: "alex.johnson@example.com"
    },
    {
        name: "Thiery Henry",
        stars: 3,
        badges: ["TH/CN", "Foodie", "Cool"],
        description: "大家好！我是 Samantha,一个热爱旅行和烹饪的艺术家。我从不同文化的美丽中寻找灵感，并喜欢通过我的艺术将这种灵感带入生活。烹饪是我表达创造力的另一种方式，我总是尝试新的食谱和口味。旅行让我能够积累新的经验和想法，我喜欢将它们融入到我的艺术作品中。",
        email: "samantha.lee@example.com"
    },
    {
        name: "Gugliemo Vicaro",
        stars: 5,
        badges: ["TH/CN/EN", "Foodie", "Cool"],
        description: "大家好！我是 Samantha,一个热爱旅行和烹饪的艺术家。我从不同文化的美丽中寻找灵感，并喜欢通过我的艺术将这种灵感带入生活。烹饪是我表达创造力的另一种方式，我总是尝试新的食谱和口味。旅行让我能够积累新的经验和想法，我喜欢将它们融入到我的艺术作品中。",
        email: "samantha.lee@example.com"
    }
];

type ProfileCardProps = {
    profile: Profile;
};

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
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
};

const ProfileCardList: React.FC = () => {
    return (
        <div className="profile-card-list">
            {profiles.map((profile, index) => (
                <ProfileCard profile={profile} key={index} />
            ))}
        </div>
    );
};

export default ProfileCardList;