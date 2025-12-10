// import React, { useState } from 'react';
// import { Grid3x3, Building2, TrendingUp, ShoppingCart, FileText, MapPin, ChevronRight } from 'lucide-react';
// import RefinanceCyclePrediction from './tabs/RefinanceCyclePrediction';
// import LoanLifecycleRisk from './tabs/LoanLifecycleRisk';
// import SpendingBehaviorShift from './tabs/SpendingBehaviorShift';
// import SilentCreditPanel from './tabs/SilentCreditPanel';
// import MultiAssetWidget from './tabs/MultiAssetWidget';

// // types/dashboard.types.ts
// export type DashboardTab = {
//   id: string;
//   label: string;
//   component: React.ComponentType<any>; 
// };

// const DASHBOARD_TABS = {
//   lender: [
//     { id: 'refi-prediction', label: 'Refi Prediction', component: RefinanceCyclePrediction },
//     { id: 'loan-lifecycle', label: 'Loan Lifecycle', component: LoanLifecycleRisk },
//     { id: 'spending-behavior', label: 'Spending Behavior', component: SpendingBehaviorShift },
//     { id: 'credit-alerts', label: 'Credit Alerts', component: SilentCreditPanel },
//     { id: 'multi-asset', label: 'Multi-Asset', component: MultiAssetWidget }
//   ],
// //   institutional: [
// //     { id: 'overview', label: 'Overview', component: InstitutionalOverviewTab },
// //     { id: 'risk-mesh', label: 'Global Risk Mesh', component: RiskMeshTab },
// //     { id: 'cross-bank', label: 'Cross-Bank Movement', component: CrossBankTab },
// //     { id: 'multi-asset', label: 'Multi-Asset Exposure', component: MultiAssetExposureTab },
// //     { id: 'exports', label: 'Data Exports', component: ExportsTab }
// //   ],
//   sales: [
//     { id: 'overview', label: 'Overview' },
//     { id: 'tier-comparison', label: 'Tier Comparison' },
//     { id: 'client-upgrades', label: 'Client Upgrades' },
//     { id: 'add-ons', label: 'Add-On Features' }
//   ],
//   marketplace: [
//     { id: 'browse', label: 'Browse Packs' },
//     { id: 'cart', label: 'Cart' },
//     { id: 'orders', label: 'My Orders' }
//   ],
//   reports: [
//     { id: 'viewer', label: 'PDF Viewer' },
//     { id: 'my-reports', label: 'My Reports' },
//     { id: 'generate', label: 'Generate New' }
//   ],
//   geo: [
//     { id: 'overview', label: 'Overview' },
//     { id: 'zip-analysis', label: 'ZIP Analysis' },
//     { id: 'heatmap', label: 'Heat Map' },
//     { id: 'trends', label: 'Trends' }
//   ]
// };

// // Sidebar navigation items
// const DASHBOARDS = [
//   {
//     id: 'lender',
//     title: 'Lender Intelligence',
//     description: 'Refi-ready homeowners & Loan lifecycle',
//     icon: Grid3x3,
//     iconBg: 'bg-gray-800'
//   },
//   {
//     id: 'institutional',
//     title: 'Institutional Intelligence',
//     description: 'Cross-asset risk & macro analytics',
//     icon: Building2,
//     iconBg: 'bg-gray-800'
//   },
//   {
//     id: 'sales',
//     title: 'Sales Command Suite',
//     description: 'Upsell panels & tier comparison',
//     icon: TrendingUp,
//     iconBg: 'bg-gradient-to-br from-yellow-600 to-yellow-700'
//   },
//   {
//     id: 'marketplace',
//     title: 'Data Pack Marketplace',
//     description: 'Market intelligence & equity packs',
//     icon: ShoppingCart,
//     iconBg: 'bg-gray-800'
//   },
//   {
//     id: 'reports',
//     title: 'Analytics PDF Viewer',
//     description: 'Generated reports & client delivery',
//     icon: FileText,
//     iconBg: 'bg-gray-800'
//   },
//   {
//     id: 'geo',
//     title: 'City/ZIP Intelligence',
//     description: 'Hot ZIPs, churn risk & opportunity',
//     icon: MapPin,
//     iconBg: 'bg-gray-800'
//   }
// ];

import React from "react";

const LenderDashboard: React.FC = () => {
  return (
    // import React, { useState } from 'react';
    // import { Grid3x3, Building2, TrendingUp, ShoppingCart, FileText, MapPin, ChevronRight } from 'lucide-react';
    // import RefinanceCyclePrediction from './tabs/RefinanceCyclePrediction';
    // import LoanLifecycleRisk from './tabs/LoanLifecycleRisk';
    // import SpendingBehaviorShift from './tabs/SpendingBehaviorShift';
    // import SilentCreditPanel from './tabs/SilentCreditPanel';
    // import MultiAssetWidget from './tabs/MultiAssetWidget';

    // // types/dashboard.types.ts
    // export type DashboardTab = {
    //   id: string;
    //   label: string;
    //   component: React.ComponentType<any>; 
    // };

    // const DASHBOARD_TABS = {
    //   lender: [
    //     { id: 'refi-prediction', label: 'Refi Prediction', component: RefinanceCyclePrediction },
    //     { id: 'loan-lifecycle', label: 'Loan Lifecycle', component: LoanLifecycleRisk },
    //     { id: 'spending-behavior', label: 'Spending Behavior', component: SpendingBehaviorShift },
    //     { id: 'credit-alerts', label: 'Credit Alerts', component: SilentCreditPanel },
    //     { id: 'multi-asset', label: 'Multi-Asset', component: MultiAssetWidget }
    //   ],
    // //   institutional: [
    // //     { id: 'overview', label: 'Overview', component: InstitutionalOverviewTab },
    // //     { id: 'risk-mesh', label: 'Global Risk Mesh', component: RiskMeshTab },
    // //     { id: 'cross-bank', label: 'Cross-Bank Movement', component: CrossBankTab },
    // //     { id: 'multi-asset', label: 'Multi-Asset Exposure', component: MultiAssetExposureTab },
    // //     { id: 'exports', label: 'Data Exports', component: ExportsTab }
    // //   ],
    //   sales: [
    //     { id: 'overview', label: 'Overview' },
    //     { id: 'tier-comparison', label: 'Tier Comparison' },
    //     { id: 'client-upgrades', label: 'Client Upgrades' },
    //     { id: 'add-ons', label: 'Add-On Features' }
    //   ],
    //   marketplace: [
    //     { id: 'browse', label: 'Browse Packs' },
    //     { id: 'cart', label: 'Cart' },
    //     { id: 'orders', label: 'My Orders' }
    //   ],
    //   reports: [
    //     { id: 'viewer', label: 'PDF Viewer' },
    //     { id: 'my-reports', label: 'My Reports' },
    //     { id: 'generate', label: 'Generate New' }
    //   ],
    //   geo: [
    //     { id: 'overview', label: 'Overview' },
    //     { id: 'zip-analysis', label: 'ZIP Analysis' },
    //     { id: 'heatmap', label: 'Heat Map' },
    //     { id: 'trends', label: 'Trends' }
    //   ]
    // };

    // // Sidebar navigation items
    // const DASHBOARDS = [
    //   {
    //     id: 'lender',
    //     title: 'Lender Intelligence',
    //     description: 'Refi-ready homeowners & Loan lifecycle',
    //     icon: Grid3x3,
    //     iconBg: 'bg-gray-800'
    //   },
    //   {
    //     id: 'institutional',
    //     title: 'Institutional Intelligence',
    //     description: 'Cross-asset risk & macro analytics',
    //     icon: Building2,
    //     iconBg: 'bg-gray-800'
    //   },
    //   {
    //     id: 'sales',
    //     title: 'Sales Command Suite',
    //     description: 'Upsell panels & tier comparison',
    //     icon: TrendingUp,
    //     iconBg: 'bg-gradient-to-br from-yellow-600 to-yellow-700'
    //   },
    //   {
    //     id: 'marketplace',
    //     title: 'Data Pack Marketplace',
    //     description: 'Market intelligence & equity packs',
    //     icon: ShoppingCart,
    //     iconBg: 'bg-gray-800'
    //   },
    //   {
    //     id: 'reports',
    //     title: 'Analytics PDF Viewer',
    //     description: 'Generated reports & client delivery',
    //     icon: FileText,
    //     iconBg: 'bg-gray-800'
    //   },
    //   {
    //     id: 'geo',
    //     title: 'City/ZIP Intelligence',
    //     description: 'Hot ZIPs, churn risk & opportunity',
    //     icon: MapPin,
    //     iconBg: 'bg-gray-800'
    //   }
    // ];

    // export default function AxisTradeMarket() {
    //   const [activeDashboard, setActiveDashboard] = useState('lender');

    //   const [activeTab, setActiveTab] = useState('overview');

    //   const handleDashboardClick = (dashboardId: string): void => 
    //     { setActiveDashboard(dashboardId); 
    //         setActiveTab('overview'); 
    //     };

    // //   const currentTabs = DASHBOARD_TABS[activeDashboard] || [];
    // const currentTabs: DashboardTab[] = (DASHBOARD_TABS[activeDashboard as keyof typeof DASHBOARD_TABS] ?? []) as DashboardTab[];

    //   const currentDashboardInfo = DASHBOARDS.find(d => d.id === activeDashboard);
    //   const ActiveTabComponent = currentTabs.find(t => t.id === activeTab)?.component;

    //   return (
    //     <div className="min-h-screen bg-black text-white">

    //       <div className="flex">
    //         {/* Sidebar */}
    //         <aside className="w-[400px] min-h-screen bg-black border-r border-gray-900 flex flex-col fixed left-0 top-0">
    //           {/* Logo */}
    //           <div className="p-6 pb-4 border-b border-gray-900">
    //             <h1 className="text-2xl font-bold tracking-tight">
    //               <span className="text-white">AXIS</span>
    //               <span className="text-[#00D4D4]">TRADE</span>
    //             </h1>
    //             <p className="text-gray-500 text-xs font-mono mt-1 tracking-wider">MARKET AI</p>
    //           </div>

    //           {/* Dashboards Section */}
    //           <div className="flex-1 overflow-y-auto">
    //             <div className="p-6">
    //               <div className="flex items-center justify-between mb-4">
    //                 <h2 className="text-[#00D4D4] text-sm font-bold tracking-wider">DASHBOARDS</h2>
    //                 <div className="w-7 h-7 bg-[#00D4D4] rounded-full flex items-center justify-center text-black text-xs font-bold">
    //                   6
    //                 </div>
    //               </div>

    //               {/* Dashboard Cards */}
    //               <div className="space-y-3">
    //                 {DASHBOARDS.map((dashboard) => {
    //                   const Icon = dashboard.icon;
    //                   const isActive = activeDashboard === dashboard.id;
                  
    //                   return (
    //                     <button
    //                       key={dashboard.id}
    //                       onClick={() => handleDashboardClick(dashboard.id)}
    //                       className={`w-full text-left p-4 rounded-xl border transition-all group ${
    //                         isActive
    //                           ? 'bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700'
    //                           : 'bg-transparent border-gray-900 hover:border-gray-800 hover:bg-gray-900/30'
    //                       }`}
    //                     >
    //                       <div className="flex items-start gap-4">
    //                         <div className={`w-12 h-12 ${dashboard.iconBg} rounded-lg flex items-center justify-center flex-shrink-0`}>
    //                           <Icon className="w-6 h-6 text-white" />
    //                         </div>
                        
    //                         <div className="flex-1 min-w-0">
    //                           <h3 className="text-white font-semibold text-base mb-1 leading-tight">
    //                             {dashboard.title}
    //                           </h3>
    //                           <p className="text-gray-500 text-xs leading-relaxed">
    //                             {dashboard.description}
    //                           </p>
    //                         </div>
                        
    //                         <ChevronRight className={`w-5 h-5 flex-shrink-0 transition-transform ${
    //                           isActive ? 'text-[#00D4D4]' : 'text-gray-600 group-hover:text-gray-400'
    //                         }`} />
    //                       </div>
    //                     </button>
    //                   );
    //                 })}
    //               </div>
    //             </div>
    //           </div>

    //           {/* Footer */}
    //           <div className="p-6 border-t border-gray-900">
    //             <div className="flex items-center justify-center gap-2">
    //               <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-sm font-bold">
    //                 N
    //               </div>
    //             </div>
    //           </div>
    //         </aside>

    //         {/* Main Content */}
    //         <main className="flex-1 min-h-screen bg-black ml-[400px]">
    //           {/* Top Bar with Tabs */}
    //           <div className="border-b border-gray-900 sticky top-0 bg-black z-10">
    //             {/* Dashboard Title */}
    //             <div className="px-8 py-6 border-b border-gray-900">
    //               <div className="flex items-center gap-3">
    //                 {currentDashboardInfo && (
    //                   <>
    //                     <div className={`w-10 h-10 ${currentDashboardInfo.iconBg} rounded-lg flex items-center justify-center`}>
    //                       {React.createElement(currentDashboardInfo.icon, { className: "w-5 h-5 text-white" })}
    //                     </div>
    //                     <div>
    //                       <h1 className="text-xl font-bold text-white">{currentDashboardInfo.title}</h1>
    //                       <p className="text-xs text-gray-500">{currentDashboardInfo.description}</p>
    //                     </div>
    //                   </>
    //                 )}
    //               </div>
    //             </div>

    //             {/* Nested Tabs */}
    //             {currentTabs.length > 0 && (
    //               <div className="px-8">
    //                 <div className="flex gap-1 overflow-x-auto scrollbar-hide">
    //                   {currentTabs.map((tab) => (
    //                     <button
    //                       key={tab.id}
    //                       onClick={() => setActiveTab(tab.id)}
    //                       className={`px-5 py-4 text-sm font-medium whitespace-nowrap transition-all border-b-2 ${
    //                         activeTab === tab.id
    //                           ? 'text-[#00D4D4] border-[#00D4D4]'
    //                           : 'text-gray-500 border-transparent hover:text-gray-300'
    //                       }`}
    //                     >
    //                       {tab.label}
    //                     </button>
    //                   ))}
    //                 </div>
    //               </div>
    //             )}
    //           </div>

    //           {/* Content Area */}
    //           <div className="p-8">
    //             {ActiveTabComponent ? (
    //               <ActiveTabComponent />
    //             ) : (
    //               <div className="bg-gradient-to-br from-gray-900/50 to-gray-900/20 border border-gray-800 rounded-2xl p-12">
    //                 <div className="max-w-3xl mx-auto text-center">
    //                   <div className="w-24 h-24 bg-gradient-to-br from-[#00D4D4]/20 to-[#00D4D4]/5 rounded-2xl mx-auto mb-6 flex items-center justify-center border border-[#00D4D4]/20">
    //                     {currentDashboardInfo && React.createElement(currentDashboardInfo.icon, {
    //                       className: "w-12 h-12 text-[#00D4D4]"
    //                     })}
    //                   </div>

    //                   <h2 className="text-3xl font-bold mb-3 text-white">
    //                     {currentDashboardInfo?.title}
    //                   </h2>

    //                   <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00D4D4]/10 border border-[#00D4D4]/30 rounded-lg mb-6">
    //                     <div className="w-2 h-2 bg-[#00D4D4] rounded-full animate-pulse"></div>
    //                     <span className="text-sm font-medium text-[#00D4D4]">
    //                       Active Tab: {currentTabs.find(t => t.id === activeTab)?.label}
    //                     </span>
    //                   </div>

    //                   <p className="text-gray-400 text-lg mb-8">
    //                     This dashboard is coming soon. Please check back later.
    //                   </p>

    //                   <div className="text-sm text-yellow-400">
    //                     Tab UI not yet implemented
    //                   </div>
    //                 </div>
    //               </div>
    //             )}
    //           </div>
    //         </main>
    //       </div>
    //     </div>
    //   );
    // }
    null
  );
};

export default LenderDashboard;