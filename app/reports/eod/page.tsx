import React, { useState } from 'react';
import { Download, Filter, TrendingUp, TrendingDown, DollarSign, Users, Clock, CheckCircle, AlertCircle, Calendar } from 'lucide-react';

const EODReport = () => {
  const [reportDate, setReportDate] = useState(new Date().toISOString().split('T')[0]);

  const dailySummary = {
    totalLeads: 42,
    newLeads: 18,
    contacted: 35,
    applications: 12,
    approvals: 8,
    closings: 6,
    totalValue: '$2.4M',
    avgDealSize: '$385K'
  };

  const performanceMetrics = [
    { metric: 'Lead Response Time', value: '4.2 mins', target: '5 mins', status: 'good' },
    { metric: 'First Contact Rate', value: '92%', target: '90%', status: 'good' },
    { metric: 'Application Completion', value: '78%', target: '80%', status: 'warning' },
    { metric: 'Approval Rate', value: '68%', target: '70%', status: 'warning' },
    { metric: 'Closing Rate', value: '32%', target: '30%', status: 'good' }
  ];

  const teamPerformance = [
    { name: 'John Smith', leads: 12, contacted: 11, apps: 4, approvals: 3, closings: 2, revenue: '$520K' },
    { name: 'Lisa Wang', leads: 10, contacted: 9, apps: 3, approvals: 2, closings: 2, revenue: '$480K' },
    { name: 'Mike Johnson', leads: 8, contacted: 7, apps: 2, approvals: 1, closings: 1, revenue: '$385K' },
    { name: 'Sarah Chen', leads: 6, contacted: 5, apps: 2, approvals: 1, closings: 1, revenue: '$360K' }
  ];

  const dailyIssues = [
    { id: 1, issue: 'System slowdown', severity: 'medium', resolved: true, time: '10:30 AM' },
    { id: 2, issue: 'Email delivery delay', severity: 'low', resolved: true, time: '2:15 PM' },
    { id: 3, issue: 'CRM sync failure', severity: 'high', resolved: false, time: '4:45 PM' }
  ];

  const upcomingTasks = [
    { id: 1, task: 'Follow-up with 8 warm leads', priority: 'high', due: 'Tomorrow' },
    { id: 2, task: 'Review 5 pending applications', priority: 'medium', due: 'Tomorrow' },
    { id: 3, task: 'Schedule 3 closing appointments', priority: 'high', due: 'Tomorrow' },
    { id: 4, task: 'Update marketing campaigns', priority: 'low', due: 'Next week' }
  ];

  const marketUpdates = [
    { id: 1, update: '30yr Fixed Rate dropped to 6.05%', impact: 'positive', source: 'Freddie Mac' },
    { id: 2, update: 'Fed announces steady rates', impact: 'neutral', source: 'Federal Reserve' },
    { id: 3, update: 'Housing inventory up 8.5% MoM', impact: 'positive', source: 'MLS Data' }
  ];

  return (
    <div className="space-y-6 p-14">
      {/* Header Controls */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">End of Day Report</h2>
          <p className="text-[#9CA3AF]">Daily summary and performance metrics</p>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#9CA3AF]" />
            <input 
              type="date" 
              value={reportDate}
              onChange={(e) => setReportDate(e.target.value)}
              className="px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:border-[#00D1D1] outline-none"
            />
          </div>
          
          <button className="px-4 py-2 bg-[#2A2A2A] text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filters
          </button>
          
          <button className="px-6 py-2 bg-[#00D1D1] text-white rounded-lg hover:bg-[#00B8B8] transition-colors flex items-center gap-2 font-semibold">
            <Download className="w-4 h-4" />
            Export Report
          </button>
        </div>
      </div>

      {/* Daily Summary */}
      <div className="grid grid-cols-8 gap-6">
        <div className="bg-gradient-to-br from-[#00D1D1]/10 to-[#00B8B8]/5 border border-[#00D1D1]/30 rounded-xl p-6 col-span-2">
          <p className="text-[#9CA3AF] text-sm mb-2">Total Leads</p>
          <h3 className="text-3xl font-bold text-white mb-2">{dailySummary.totalLeads}</h3>
          <div className="flex items-center">
            <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
            <p className="text-green-400 text-sm font-semibold">+{dailySummary.newLeads} new today</p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/30 rounded-xl p-6">
          <p className="text-[#9CA3AF] text-sm mb-2">Contacted</p>
          <h3 className="text-3xl font-bold text-white mb-2">{dailySummary.contacted}</h3>
          <p className="text-[#9CA3AF] text-sm">83% of leads</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-xl p-6">
          <p className="text-[#9CA3AF] text-sm mb-2">Applications</p>
          <h3 className="text-3xl font-bold text-white mb-2">{dailySummary.applications}</h3>
          <p className="text-[#9CA3AF] text-sm">29% of contacted</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-xl p-6">
          <p className="text-[#9CA3AF] text-sm mb-2">Approvals</p>
          <h3 className="text-3xl font-bold text-white mb-2">{dailySummary.approvals}</h3>
          <p className="text-[#9CA3AF] text-sm">67% of apps</p>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/30 rounded-xl p-6">
          <p className="text-[#9CA3AF] text-sm mb-2">Closings</p>
          <h3 className="text-3xl font-bold text-white mb-2">{dailySummary.closings}</h3>
          <p className="text-green-400 text-sm font-semibold">75% of approvals</p>
        </div>
        
        <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/30 rounded-xl p-6 col-span-2">
          <p className="text-[#9CA3AF] text-sm mb-2">Total Value Closed</p>
          <h3 className="text-3xl font-bold text-white mb-2">{dailySummary.totalValue}</h3>
          <p className="text-[#9CA3AF] text-sm">Avg: {dailySummary.avgDealSize}</p>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
        <h3 className="text-white text-xl font-semibold mb-4">Daily Performance Metrics</h3>
        <div className="grid grid-cols-5 gap-6">
          {performanceMetrics.map((metric, idx) => (
            <div key={idx} className="p-4 bg-[#2A2A2A] rounded-lg">
              <p className="text-[#9CA3AF] text-sm mb-2">{metric.metric}</p>
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-2xl font-bold text-white">{metric.value}</h4>
                <div className={`w-3 h-3 rounded-full ${metric.status === 'good' ? 'bg-green-500' : metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`} />
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#9CA3AF]">Target: {metric.target}</span>
                <span className={metric.status === 'good' ? 'text-green-400' : metric.status === 'warning' ? 'text-yellow-400' : 'text-red-400'}>
                  {metric.status === 'good' ? '✓ On Target' : '⚠ Needs Attention'}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Team Performance & Issues */}
      <div className="grid grid-cols-2 gap-6">
        {/* Team Performance */}
        <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
          <h3 className="text-white text-xl font-semibold mb-4">Team Daily Performance</h3>
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-4 text-[#9CA3AF] font-semibold">Loan Officer</th>
                <th className="text-center py-3 px-4 text-[#9CA3AF] font-semibold">Leads</th>
                <th className="text-center py-3 px-4 text-[#9CA3AF] font-semibold">Contacted</th>
                <th className="text-center py-3 px-4 text-[#9CA3AF] font-semibold">Apps</th>
                <th className="text-center py-3 px-4 text-[#9CA3AF] font-semibold">Approvals</th>
                <th className="text-center py-3 px-4 text-[#9CA3AF] font-semibold">Closings</th>
                <th className="text-center py-3 px-4 text-[#9CA3AF] font-semibold">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {teamPerformance.map((member, idx) => (
                <tr key={idx} className="border-b border-gray-800 hover:bg-[#2A2A2A] transition-colors">
                  <td className="py-4 px-4 text-white font-semibold">{member.name}</td>
                  <td className="py-4 px-4 text-center text-white">{member.leads}</td>
                  <td className="py-4 px-4 text-center text-white">{member.contacted}</td>
                  <td className="py-4 px-4 text-center text-blue-400 font-semibold">{member.apps}</td>
                  <td className="py-4 px-4 text-center text-yellow-400 font-semibold">{member.approvals}</td>
                  <td className="py-4 px-4 text-center text-green-400 font-semibold">{member.closings}</td>
                  <td className="py-4 px-4 text-center text-white font-semibold">{member.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Daily Issues & Resolutions */}
        <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
          <h3 className="text-white text-xl font-semibold mb-4">Daily Issues & Resolutions</h3>
          <div className="space-y-3">
            {dailyIssues.map((issue) => (
              <div key={issue.id} className="p-4 bg-[#2A2A2A] rounded-lg hover:bg-gray-800 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {issue.severity === 'high' ? (
                      <AlertCircle className="w-5 h-5 text-red-400" />
                    ) : issue.severity === 'medium' ? (
                      <AlertCircle className="w-5 h-5 text-yellow-400" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-blue-400" />
                    )}
                    <span className="text-white font-semibold">{issue.issue}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs ${
                    issue.resolved ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                  }`}>
                    {issue.resolved ? 'Resolved' : 'Pending'}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-[#9CA3AF]">
                  <span>Severity: {issue.severity}</span>
                  <span>Time: {issue.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Tasks & Market Updates */}
      <div className="grid grid-cols-2 gap-6">
        {/* Upcoming Tasks */}
        <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
          <h3 className="text-white text-xl font-semibold mb-4">Upcoming Tasks</h3>
          <div className="space-y-3">
            {upcomingTasks.map((task) => (
              <div key={task.id} className="p-4 bg-[#2A2A2A] rounded-lg hover:bg-gray-800 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">{task.task}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    task.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                    task.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {task.priority.toUpperCase()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#9CA3AF] text-sm">Due: {task.due}</span>
                  <button className="px-3 py-1 bg-[#00D1D1] text-white rounded-lg hover:bg-[#00B8B8] transition-colors text-sm">
                    Assign
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Updates */}
        <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
          <h3 className="text-white text-xl font-semibold mb-4">Market Updates</h3>
          <div className="space-y-3">
            {marketUpdates.map((update) => (
              <div key={update.id} className="p-4 bg-[#2A2A2A] rounded-lg hover:bg-gray-800 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">{update.update}</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    update.impact === 'positive' ? 'bg-green-500/20 text-green-400' :
                    update.impact === 'negative' ? 'bg-red-500/20 text-red-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {update.impact.toUpperCase()}
                  </span>
                </div>
                <div className="text-[#9CA3AF] text-sm">
                  Source: {update.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary & Recommendations */}
      <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
        <h3 className="text-white text-xl font-semibold mb-4">Daily Summary & Recommendations</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-lg">
            <h4 className="text-white font-semibold mb-3">✓ What Went Well</h4>
            <ul className="text-[#9CA3AF] text-sm space-y-2">
              <li>• Exceeded closing target by 20%</li>
              <li>• Lead response time improved</li>
              <li>• New lead volume up 25%</li>
            </ul>
          </div>
          
          <div className="p-4 bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/30 rounded-lg">
            <h4 className="text-white font-semibold mb-3">⚠ Areas for Improvement</h4>
            <ul className="text-[#9CA3AF] text-sm space-y-2">
              <li>• Application completion rate below target</li>
              <li>• CRM sync issues need resolution</li>
              <li>• Follow-up rate needs improvement</li>
            </ul>
          </div>
          
          <div className="p-4 bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-lg">
            <h4 className="text-white font-semibold mb-3">🎯 Tomorrow's Focus</h4>
            <ul className="text-[#9CA3AF] text-sm space-y-2">
              <li>• Resolve CRM synchronization</li>
              <li>• Follow up with warm leads</li>
              <li>• Review pending applications</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EODReport;