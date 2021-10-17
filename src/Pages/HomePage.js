import React from 'react';
import { ReactComponent as Facebook } from '../img/facebook.svg';
import { ReactComponent as Instagram } from '../img/instagram.svg';
import { ReactComponent as Github } from '../img/github.svg';
import { ReactComponent as Twitter } from '../img/twitter.svg';
import { ReactComponent as TikTok } from '../img/tiktok.svg';
import { ReactComponent as Snapchat } from '../img/snapchat.svg';
import {Link} from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <div className="hero">
                <h1 className="hero-text">
                    Hello, I am 
                    <span> a Software Engineer</span>
                </h1>
                <p class="h-sub-text">I have over 3+ years experience building websites from scratch or working on a team on an Agile
                    Scrum basis. My specialty is Ruby on Rails with React, or a PHP Laravel with Vue.JS. I can design a website from 
                    concept to product. Giving clients what they need in the timeframe they propose. My specific niche entails
                    e-commerce development in Shopify, and can also build in Wordpress. Furthermore, I am a skilled entrepreneur that
                    can also help out in Digital Marketing, starting up businesses, and even your own blog.
                </p>
                <div className="icons">
                    <Link to="https://www.facebook.com/CMS-Devmasters-109770954815250"className="icon-holder">
                        <Facebook className="icon fb"/>
                    </Link>
                    <Link to='https://www.github.com/lggg123/' className="icon-holder">
                       <Github className="icon gh"/>
                    </Link>
                    <Link to='https://www.instagram.com/codedevs2021/' className="icon-holder">
                        <Instagram className="icon ig"/>
                    </Link>
                    <Link className="icon-holder">
                        <Twitter className="icon tw"/>
                    </Link>
                    <Link to='https://www.snapchat.com/add/codedevs2021/' className="icon-holder">
                        <Snapchat className="icon sp"/>
                    </Link>
                    <Link className="icon-holder">
                        <TikTok className="icon tt"/>
                    </Link>
                </div>
            </div> 
        </div>
    )
}

export default HomePage