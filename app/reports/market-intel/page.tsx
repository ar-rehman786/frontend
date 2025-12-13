"use client";

import React, { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area } from 'recharts';
import { Download, Filter, TrendingUp, TrendingDown, DollarSign, Percent, Home, Building2 } from 'lucide-react';

const MarketIntelReport = () => {
  const [dateRange, setDateRange] = useState('last90days');

  const interestRateTrends = [
    { month: 'Jan', '30yr Fixed': 6.5, '15yr Fixed': 5.8, 'FHA': 6.2 },
    { month: 'Feb', '30yr Fixed': 6.4, '15yr Fixed': 5.7, 'FHA': 6.1 },
    { month: 'Mar', '30yr Fixed': 6.3, '15yr Fixed': 5.6, 'FHA': 6.0 },
    { month: 'Apr', '30yr Fixed': 6.2, '15yr Fixed': 5.5, 'FHA': 5.9 },
    { month: 'May', '30yr Fixed': 6.1, '15yr Fixed': 5.4, 'FHA': 5.8 },
    { month: 'Jun', '30yr Fixed': 6.0, '15yr Fixed': 5.3, 'FHA': 5.7 }
  ];

  const marketShareData = [
    { type: 'Conventional', share: 45 },
    { type: 'FHA', share: 25 },
    { type: 'VA', share: 15 },
    { type: 'USDA', share: 8 },
    { type: 'Jumbo', share: 7 }
  ];

  const housingMarketData = [
    { metric: 'Median Home Price', value: '$385K', change: '+5.2%', trend: 'up' },
    { metric: 'Days on Market', value: '24', change: '-8%', trend: 'down' },
    { metric: 'Inventory (months)', value: '3.2', change: '+12%', trend: 'up' },
    { metric: 'Price Reductions', value: '18%', change: '-4%', trend: 'down' }
  ];

  const competitorAnalysis = [
    { competitor: 'Quicken Loans', rate: 5.95, volume: 42, marketShare: 18 },
    { competitor: 'Rocket Mortgage', rate: 5.89, volume: 38, marketShare: 16 },
    { competitor: 'Wells Fargo', rate: 6.05, volume: 35, marketShare: 15 },
    { competitor: 'Chase', rate: 6.12, volume: 32, marketShare: 14 },
    { competitor: 'Bank of America', rate: 6.08, volume: 28, marketShare: 12 }
  ];

  const regionalData = [
    { region: 'Northeast', avgPrice: '$425K', yoyChange: '+4.8%', inventory: '2.8 months' },
    { region: 'South', avgPrice: '$345K', yoyChange: '+6.2%', inventory: '3.5 months' },
    { region: 'Midwest', avgPrice: '$295K', yoyChange: '+3.9%', inventory: '4.1 months' },
    { region: 'West', avgPrice: '$585K', yoyChange: '+5.8%', inventory: '2.5 months' }
  ];

  return (
    <div className="space-y-6 p-14">
      {/* Header Controls */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Market Intelligence Report</h2>
        <div className="flex gap-3">
          <select 
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:border-[#00D1D1] outline-none"
          >
            <option value="last30days">Last 30 Days</option>
            <option value="last90days">Last 90 Days</option>
            <option value="last6months">Last 6 Months</option>
            <option value="last12months">Last 12 Months</option>
          </select>
          
          <button className="px-4 py-2 bg-[#2A2A2A] text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          
          <button className="px-6 py-2 bg-[#00D1D1] text-white rounded-lg hover:bg-[#00B8B8] transition-colors flex items-center gap-2 font-semibold">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Market Overview */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/30 rounded-xl p-6">
          <p className="text-[#9CA3AF] text-sm mb-2">Avg 30yr Fixed Rate</p>
          <h3 className="text-3xl font-bold text-white mb-2">6.05%</h3>
          <div className="flex items-center">
            <TrendingDown className="w-4 h-4 text-green-400 mr-1" />
            <p className="text-green-400 text-sm font-semibold">-0.45% from last month</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-xl p-6">
          <p className="text-[#9CA3AF] text-sm mb-2">Market Volume</p>
          <h3 className="text-3xl font-bold text-white mb-2">$2.1B</h3>
          <div className="flex items-center">
            <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
            <p className="text-green-400 text-sm font-semibold">+8.2% YoY</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-xl p-6">
          <p className="text-[#9CA3AF] text-sm mb-2">Refinance %</p>
          <h3 className="text-3xl font-bold text-white mb-2">32%</h3>
          <div className="flex items-center">
            <TrendingDown className="w-4 h-4 text-red-400 mr-1" />
            <p className="text-red-400 text-sm font-semibold">-5.3% from peak</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/30 rounded-xl p-6">
          <p className="text-[#9CA3AF] text-sm mb-2">Market Competition</p>
          <h3 className="text-3xl font-bold text-white mb-2">High</h3>
          <p className="text-yellow-400 text-sm font-semibold">+3 new lenders this quarter</p>
        </div>
      </div>

      {/* Interest Rate Trends */}
      <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
        <h3 className="text-white text-xl font-semibold mb-4">Interest Rate Trends</h3>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={interestRateTrends}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" domain={[5, 7]} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A' }}
              formatter={(value) => [`${value}%`, 'Rate']}
            />
            <Legend />
            <Line type="monotone" dataKey="30yr Fixed" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="15yr Fixed" stroke="#82ca9d" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="FHA" stroke="#ffc658" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Market Share & Housing Market */}
      <div className="grid grid-cols-2 gap-6">
        {/* Market Share */}
        <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
          <h3 className="text-white text-xl font-semibold mb-4">Loan Type Market Share</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={marketShareData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2A2A2A" />
              <XAxis dataKey="type" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #2A2A2A' }}
                formatter={(value) => [`${value}%`, 'Share']}
              />
              <Bar dataKey="share" fill="#00D1D1" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Housing Market Metrics */}
        <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
          <h3 className="text-white text-xl font-semibold mb-4">Housing Market Metrics</h3>
          <div className="space-y-4">
            {housingMarketData.map((item, idx) => (
              <div key={idx} className="p-4 bg-[#2A2A2A] rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">{item.metric}</span>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">{item.value}</div>
                    <div className={`flex items-center text-sm ${item.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                      {item.trend === 'up' ? (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      {item.change}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regional Analysis */}
      <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
        <h3 className="text-white text-xl font-semibold mb-4">Regional Market Analysis</h3>
        <div className="grid grid-cols-4 gap-6">
          {regionalData.map((region, idx) => (
            <div key={idx} className="p-4 bg-[#2A2A2A] rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <Home className="w-5 h-5 text-[#00D1D1]" />
                <h4 className="text-white font-semibold">{region.region}</h4>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-[#9CA3AF] text-xs">Average Price</p>
                  <p className="text-white font-semibold text-lg">{region.avgPrice}</p>
                  <p className="text-green-400 text-sm">YoY: {region.yoyChange}</p>
                </div>
                
                <div>
                  <p className="text-[#9CA3AF] text-xs">Inventory</p>
                  <p className="text-white font-semibold">{region.inventory}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Competitor Analysis */}
      <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
        <h3 className="text-white text-xl font-semibold mb-4">Competitor Analysis</h3>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left py-3 px-4 text-[#9CA3AF] font-semibold">Competitor</th>
              <th className="text-center py-3 px-4 text-[#9CA3AF] font-semibold">Avg Rate</th>
              <th className="text-center py-3 px-4 text-[#9CA3AF] font-semibold">Volume (B)</th>
              <th className="text-center py-3 px-4 text-[#9CA3AF] font-semibold">Market Share</th>
              <th className="text-center py-3 px-4 text-[#9CA3AF] font-semibold">Competitiveness</th>
            </tr>
          </thead>
          <tbody>
            {competitorAnalysis.map((competitor, idx) => (
              <tr key={idx} className="border-b border-gray-800 hover:bg-[#2A2A2A] transition-colors">
                <td className="py-4 px-4 text-white font-semibold">{competitor.competitor}</td>
                <td className="py-4 px-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    competitor.rate < 6 ? 'bg-green-500/20 text-green-400' : 
                    competitor.rate < 6.1 ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {competitor.rate}%
                  </span>
                </td>
                <td className="py-4 px-4 text-center text-white">${competitor.volume}</td>
                <td className="py-4 px-4 text-center text-white">{competitor.marketShare}%</td>
                <td className="py-4 px-4 text-center">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    competitor.rate <= 5.95 ? 'bg-red-500/20 text-red-400' : 
                    'bg-green-500/20 text-green-400'
                  }`}>
                    {competitor.rate <= 5.95 ? 'Highly Competitive' : 'Competitive'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketIntelReport;