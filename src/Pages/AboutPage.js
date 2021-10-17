import React from 'react'
import SkillsSection from '../Components/SkillsSection';
import Title from '../Components/Title'
import ImageSection from '../Components/ImageSection'
import ServicesSection from '../Components/ServicesSection'
import design from '../img/design.svg'
import ui_ux from '../img/ui_ux.svg'
import social_media from '../img/social_media.svg'
import business from '../img/chart_up.svg'
import data_science from '../img/data_science.svg'
import intelligence from '../img/intelligence.svg'
import crypto from '../img/crypto.svg'

function AboutPage() {
    return (
        <div className="AboutPage">
            <Title title={'About Me'} span={'About Me'}/>
            <ImageSection /> 
            <Title title={'My Skills'} span={'My Skills'}/>
            <div className="skillsContainer">
                <SkillsSection skill={'HTML'} progress={'100%'} width={'100%'}/>
                <SkillsSection skill={'CSS'} progress={'100%'} width={'100%'}/>
                <SkillsSection skill={'Javascript'} progress={'100%'} width={'100%'}/>
                <SkillsSection skill={'React'} progress={'95%'} width={'95%'}/>
                <SkillsSection skill={'VueJS'} progress={'80%'} width={'80%'}/>
                <SkillsSection skill={'Ruby on Rails'} progress={'99%'} width={'99%'}/>
                <SkillsSection skill={'PHP(Laravel)'} progress={'90%'} width={'90%'}/>
                <SkillsSection skill={'SQL'} progress={'100%'} width={'100%'}/>
                <SkillsSection skill={'MySQL'} progress={'100%'} width={'100%'}/>
                <SkillsSection skill={'MongoDB'} progress={'70%'} width={'70%'}/>
            </div>
            <div className="services-container">
                <ServicesSection image={design} title={'Full Stack Web development'}/>
                <ServicesSection image={ui_ux} title={'UI/UX Design'} />
                <ServicesSection image={social_media} title={'Social Media Marketing'} />
                <ServicesSection image={business} title={'Business & Consulting'} />
                <ServicesSection image={data_science} title={'Data Science'} />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'} />
                <ServicesSection image={crypto} title={'Blockchain/Cryptocurrency Development'} />
            </div>
        </div>
    )
}

export default AboutPage;
