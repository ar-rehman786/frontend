// Dashboard1.tsx
'use client'
import React, { useState, useEffect } from 'react';
import { Grid3x3, Building2, TrendingUp, ShoppingCart, FileText, MapPin, BarChart3, LucideIcon } from 'lucide-react';
import Sidebar1 from '../Sidebar1';
import Topbar1 from './Topbar1';

// Import components from first dashboard system
import RefinanceCyclePrediction from './Lender/tabs/RefinanceCyclePrediction';
import LoanLifecycleRisk from './Lender/tabs/LoanLifecycleRisk';
import SpendingBehaviorShift from './Lender/tabs/SpendingBehaviorShift';
import SilentCreditPanel from './Lender/tabs/SilentCreditPanel';
import MultiAssetWidget from './Lender/tabs/MultiAssetWidget';
import GlobalRiskMesh from './Institutional/Tabs/GlobalRiskMesh';
import CrossBankMovement from './Institutional/Tabs/CrossBankMovement';
import MultiAssetExposureTable from './Institutional/Tabs/MultiAssetExposureTable';
import TierComparisonCards from './Sales/TierComparisonCards';
import ClientUpgradePanel from './Sales/ClientUpgradePanel';
import AddOnFeaturePreviews from './Sales/AddOnFeaturePreviews';
import MarketFeedCard from './Market/MarketFeedCard';
import CartTray from './Market/CartTray';
import PackDetailModal from './Market/PackDetailModal';
import PDFListPanel from './PDF-viewer/PDFListPanel';
import PDFViewer from './PDF-viewer/PDFViewer';
import ActionBar from './PDF-viewer/ActionBar';
import MarketSelector from './GEO-intelligence/MarketSelector';
import ZIPHeatmap from './GEO-intelligence/ZIPHeatmap';
import InsightCards from './GEO-intelligence/InsightCards';

// Import components from second dashboard system
import Dashboard from '@/components/dashboard/Dashboard';
import Feeds from './Feeds/Feeds';
import Reports from './Reports/Reports';
import Uploads from './Upload/Upload';
import QAIntegrity from './QA/Qa';
import Settings from './Settings/Settings';

export type DashboardTab = {
    id: string;
    label: string;
    component?: React.ComponentType<any>;
};

export type DashboardInfo = {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    iconBg: string;
};

export type DashboardId = 'lender' | 'institutional' | 'sales' | 'marketplace' | 'reports' | 'geo' | 'Realtor';

// Tab Definitions - Axis Dashboard now has all the pages as tabs
export const DASHBOARD_TABS: Record<DashboardId, DashboardTab[]> = {
    lender: [
        { id: 'refi-prediction', label: 'Refi Prediction', component: RefinanceCyclePrediction },
        { id: 'loan-lifecycle', label: 'Loan Lifecycle', component: LoanLifecycleRisk },
        { id: 'spending-behavior', label: 'Spending Behavior', component: SpendingBehaviorShift },
        { id: 'credit-alerts', label: 'Credit Alerts', component: SilentCreditPanel },
        { id: 'multi-asset', label: 'Multi-Asset', component: MultiAssetWidget }
    ],
    institutional: [
        { id: 'risk-mesh', label: 'Global Risk Mesh', component: GlobalRiskMesh },
        { id: 'cross-bank', label: 'Cross-Bank Movement', component: CrossBankMovement },
        { id: 'multi-asset', label: 'Multi-Asset Exposure', component: MultiAssetExposureTable },
    ],
    sales: [
        { id: 'tier-comparison', label: 'Tier Comparison', component: TierComparisonCards },
        { id: 'client-upgrades', label: 'Client Upgrades', component: ClientUpgradePanel },
        { id: 'add-ons', label: 'Add-On Features', component: AddOnFeaturePreviews }
    ],
    marketplace: [
        { id: 'browse', label: 'Browse Packs', component: MarketFeedCard },
        { id: 'cart', label: 'Cart', component: CartTray },
        { id: 'orders', label: 'My Orders', component: PackDetailModal }
    ],
    reports: [
        { id: 'viewer', label: 'PDF Viewer', component: PDFViewer },
        { id: 'my-reports', label: 'My Reports', component: PDFListPanel },
        { id: 'action-bar', label: 'Action Bar', component: ActionBar }
    ],
    geo: [
        { id: 'market-selector', label: 'Market Selector', component: MarketSelector },
        { id: 'heatmap', label: 'Heat Map', component: ZIPHeatmap },
        { id: 'insight', label: 'Insight', component: InsightCards }
    ],
    // Axis Dashboard has all pages as tabs
    'Realtor': [
        { id: 'dashboard', label: 'Dashboard', component: Dashboard },
        { id: 'feeds', label: 'Feeds', component: Feeds },
        { id: 'reports', label: 'Reports', component: Reports },
        { id: 'uploads', label: 'Uploads', component: Uploads },
        { id: 'qa', label: 'QA & Integrity', component: QAIntegrity },
        { id: 'settings', label: 'Settings', component: Settings }
    ]
};

// Dashboard Definitions - This should match what's in Sidebar1.tsx
export const DASHBOARDS: DashboardInfo[] = [
    {
        id: 'Realtor',
        title: 'Realtor',
        description: 'Dashboard, Feeds, Reports & Settings',
        icon: BarChart3,
        iconBg: 'bg-gradient-to-br from-[#00D4D4] to-[#00B8B8]'
    },
    {
        id: 'lender',
        title: 'Lender Intelligence',
        description: 'Refi-ready homeowners & Loan lifecycle',
        icon: Grid3x3,
        iconBg: 'bg-gray-800'
    },
    {
        id: 'institutional',
        title: 'Institutional Intelligence',
        description: 'Cross-asset risk & macro analytics',
        icon: Building2,
        iconBg: 'bg-gray-800'
    },
    {
        id: 'sales',
        title: 'Sales Command Suite',
        description: 'Upsell panels & tier comparison',
        icon: TrendingUp,
        iconBg: 'bg-gradient-to-br from-yellow-600 to-yellow-700'
    },
    {
        id: 'marketplace',
        title: 'Data Pack Marketplace',
        description: 'Market intelligence & equity packs',
        icon: ShoppingCart,
        iconBg: 'bg-gray-800'
    },
    {
        id: 'reports',
        title: 'Analytics PDF Viewer',
        description: 'Generated reports & client delivery',
        icon: FileText,
        iconBg: 'bg-gray-800'
    },
    {
        id: 'geo',
        title: 'City/ZIP Intelligence',
        description: 'Hot ZIPs, churn risk & opportunity',
        icon: MapPin,
        iconBg: 'bg-gray-800'
    }
];

export default function AxisTradeMarket() {
    const [activeDashboard, setActiveDashboard] = useState<DashboardId>('Realtor');
    const [activeTab, setActiveTab] = useState<string>('dashboard');

    useEffect(() => {
        const tabs = DASHBOARD_TABS[activeDashboard] || [];
        if (tabs.length > 0) {
            setActiveTab(tabs[0].id);
        }
    }, [activeDashboard]);

    const handleDashboardClick = (dashboardId: DashboardId): void => {
        setActiveDashboard(dashboardId);
    };

    const handleTabClick = (tabId: string): void => {
        setActiveTab(tabId);
    };

    // Get current tabs based on active dashboard
    const currentTabs = DASHBOARD_TABS[activeDashboard] || [];
    const currentDashboardInfo = DASHBOARDS.find(d => d.id === activeDashboard);
    const ActiveTabComponent = currentTabs.find(t => t.id === activeTab)?.component;

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="flex">
                {/* Sidebar */}
                <Sidebar1 
                    activeDashboard={activeDashboard}
                    onDashboardChange={handleDashboardClick}
                />

                {/* Main Content */}
                <main className="flex-1 min-h-screen bg-black ml-[400px]">
                    {/* Top Bar with Tabs */}
                    <Topbar1 
                        currentDashboard={currentDashboardInfo}
                        currentTabs={currentTabs}
                        activeTab={activeTab}
                        onTabChange={handleTabClick}
                    />

                    {/* Content Area */}
                    <div className="p-8">
                        {ActiveTabComponent ? (
                            <ActiveTabComponent />
                        ) : (
                            <></>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}