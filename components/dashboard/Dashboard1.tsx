import React, { useState, useEffect } from 'react';
import { Grid3x3, Building2, TrendingUp, ShoppingCart, FileText, MapPin, LucideIcon } from 'lucide-react';
import RefinanceCyclePrediction from './Lender/tabs/RefinanceCyclePrediction';
import LoanLifecycleRisk from './Lender/tabs/LoanLifecycleRisk';
import SpendingBehaviorShift from './Lender/tabs/SpendingBehaviorShift';
import SilentCreditPanel from './Lender/tabs/SilentCreditPanel';
import MultiAssetWidget from './Lender/tabs/MultiAssetWidget';
import Sidebar1 from '../Sidebar1';
import Topbar1 from './Topbar1';
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

export type DashboardId = 'lender' | 'institutional' | 'sales' | 'marketplace' | 'reports' | 'geo';

// Tab Definitions
export const DASHBOARD_TABS: Record<DashboardId, DashboardTab[]> = {
    lender: [
        { id: 'refi-prediction', label: 'Refi Prediction', component: RefinanceCyclePrediction },
        { id: 'loan-lifecycle', label: 'Loan Lifecycle', component: LoanLifecycleRisk },
        { id: 'spending-behavior', label: 'Spending Behavior', component: SpendingBehaviorShift },
        { id: 'credit-alerts', label: 'Credit Alerts', component: SilentCreditPanel },
        { id: 'multi-asset', label: 'Multi-Asset', component: MultiAssetWidget }
    ],
    institutional: [
        // { id: 'overview', label: 'Overview', },
        { id: 'risk-mesh', label: 'Global Risk Mesh', component: GlobalRiskMesh },
        { id: 'cross-bank', label: 'Cross-Bank Movement',component: CrossBankMovement},
        { id: 'multi-asset', label: 'Multi-Asset Exposure', component: MultiAssetExposureTable },
        // { id: 'exports', label: 'Data Exports' }
    ],
    sales: [
        // { id: 'overview', label: 'Overview' },
        { id: 'tier-comparison', label: 'Tier Comparison', component:TierComparisonCards},
        { id: 'client-upgrades', label: 'Client Upgrades', component: ClientUpgradePanel},
        { id: 'add-ons', label: 'Add-On Features', component:AddOnFeaturePreviews }
    ],
    marketplace: [
        { id: 'browse', label: 'Browse Packs',component: MarketFeedCard },
        { id: 'cart', label: 'Cart', component:CartTray },
        { id: 'orders', label: 'My Orders', component: PackDetailModal }
    ],
    reports: [
        { id: 'viewer', label: 'PDF Viewer',component: PDFViewer},
        { id: 'my-reports', label: 'My Reports' ,component: PDFListPanel},
        { id: 'action-bar', label: 'Action Bar', component:ActionBar  }
    ],
    geo: [
        { id: 'market-selector', label: 'Market Selector', component:MarketSelector },
        { id: 'heatmap', label: 'Heat Map', component:ZIPHeatmap },
        { id: 'insight', label: 'Insight', component:InsightCards }
    ]
};

// Dashboard Definitions
export const DASHBOARDS: DashboardInfo[] = [
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
    const [activeDashboard, setActiveDashboard] = useState<DashboardId>('lender');
    const [activeTab, setActiveTab] = useState<string>('refi-prediction');

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
                            // <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-2xl p-12">
                            //     <div className="max-w-3xl mx-auto text-center">
                            //         <div className="w-24 h-24 bg-gradient-to-br from-[#00D4D4]/20 to-[#00D4D4]/5 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-[#00D4D4]/20">
                            //             {currentDashboardInfo && React.createElement(currentDashboardInfo.icon, {
                            //                 className: "w-12 h-12 text-[#00D4D4]"
                            //             })}
                            //         </div>

                            //         <h2 className="text-3xl font-bold mb-3 text-white">
                            //             {currentDashboardInfo?.title}
                            //         </h2>

                            //         <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D4D4]/10 border border-[#00D4D4]/30 rounded-lg mb-6">
                            //             <div className="w-2 h-2 bg-[#00D4D4] rounded-full animate-pulse"></div>
                            //             <span className="text-sm font-medium text-[#00D4D4]">
                            //                 Active Tab: {currentTabs.find(t => t.id === activeTab)?.label || 'Overview'}
                            //             </span>
                            //         </div>

                            //         <p className="text-gray-400 text-lg mb-8">
                            //             This tab is coming soon. Please check back later.
                            //         </p>

                            //         <div className="text-sm text-yellow-400">
                            //             Component not yet implemented
                            //         </div>
                            //     </div>
                            // </div>
                            <></>
                        )}
                    </div>
                </main>
            </div>
        </div>
    );
}
