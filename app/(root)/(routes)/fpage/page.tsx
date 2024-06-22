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

const profiles: Profile[] = [
    {
        name: "Chanwish Lim",
        stars: 5,
        badges: ["TH/EN/CN", "History", "Fun"],
        description: "Hi! I'm Chanwish and I love exploring new hobbies and learning about different cultures. Whether it's diving into a new book, experimenting with a new recipe, or traveling to a new place, I always find joy in discovering something new. I believe that every day is an opportunity to learn and grow, and I strive to make the most of it. In my free time, you'll find me hiking through nature trails, painting, or spending quality time with friends and family. I'm always open to new experiences and love sharing my adventures with others.",
        email: "chanwishlim.2007@gmail.com"
    },
    {
        name: "Alex Johnson",
        stars: 4,
        badges: ["TH/EN", "Shopping", "Foodie"],
        description: "Hello! I'm Alex, a tech enthusiast with a passion for gaming and music. I enjoy building custom PCs, exploring the latest in tech innovations, and losing myself in epic gaming adventures. Music is another big part of my life, whether it's playing the guitar or attending live concerts. I believe in the power of technology to transform lives and strive to stay on the cutting edge of new developments.",
        email: "alex.johnson@example.com"
    },
    {
        name: "Samantha Lee",
        stars: 3,
        badges: ["TH/CN", "Foodie", "Cool"],
        description: "Hi there! I'm Samantha, an artist at heart with a love for travel and cooking. I find inspiration in the beauty of different cultures and enjoy bringing that inspiration to life through my art. Cooking is another way I express my creativity, always experimenting with new recipes and flavors. Traveling allows me to gather new experiences and ideas, which I love to incorporate into my artwork.",
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