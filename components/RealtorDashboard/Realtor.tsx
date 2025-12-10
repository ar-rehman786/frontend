'use client'
import React, { useState } from 'react'
import Sidebar from './Tabs/Sidebar'
import TopBar from './Tabs/TopBar';
import HomeTab from './Tabs/Home';
import { realtorMockData } from '@/utils/data/mockData';
import PropertyCardDemo from './Tabs/Properties';
import FeedsTab from './Tabs/Feeds';
import ReportsTab from './Reports';
import UploadTab from './Tabs/Upload';
import QATab from './Tabs/QA';
import SettingsTab from './Tabs/Setting';

export default function Realtor() {
    const mockData = realtorMockData
    // const [activeTab, setActiveTab] = useState('home');
    const [activeTab, setActiveTab] = useState<string>("home");

    return (
        <>
            <div className="flex h-screen bg-black text-white">
                <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <TopBar />

                    {/* Tab Content */}
                    <div className="flex-1 overflow-auto bg-black">
                        
                        {activeTab === "home" && <HomeTab/>}
                        {activeTab === "properties" && <PropertyCardDemo/>}
                        {activeTab === "feeds" && <FeedsTab/>}
                        {activeTab === "reports" && <ReportsTab/>}
                        {activeTab === "upload" && <UploadTab/>}
                        {activeTab === "qa" && <QATab/>}
                        {activeTab === "settings" && <SettingsTab/>}

                        {/* Footer Disclaimer */}
                        <div className="bg-zinc-900 border-t border-zinc-800 px-6 py-3">
                            <p className="text-xs text-gray-500 flex items-center gap-2">
                                <span className="text-yellow-500">⚖️</span>
                                24h Delay — Informational Only. Not for immediate transaction decisions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
