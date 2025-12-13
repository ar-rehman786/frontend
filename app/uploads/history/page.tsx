"use client";

import React, { useState } from 'react';
import { Clock, FileText, Users, Database, Download, Filter, Search, CheckCircle, XCircle, AlertCircle, Calendar, BarChart3 } from 'lucide-react';

type UploadStatus = 'completed' | 'processing' | 'failed';
type UploadType = 'leads' | 'documents' | 'properties' | 'transactions';

type UploadRecord = {
  id: number;
  fileName: string;
  uploadDate: string;
  status: UploadStatus;
  type: UploadType;
  records: number;
  errors: number;
  user: string;
  size: string;
  duration: string;
  imported: number;
  skipped: number;
};

const UploadHistory = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateRange, setDateRange] = useState('30days');

  const uploadHistory: UploadRecord[] = [
    {
      id: 1,
      fileName: 'Q4_Leads_November.csv',
      uploadDate: '2025-11-20 14:30',
      status: 'completed',
      type: 'leads',
      records: 1247,
      errors: 0,
      user: 'John Smith',
      size: '2.4 MB',
      duration: '2m 15s',
      imported: 1247,
      skipped: 0
    },
    {
      id: 2,
      fileName: 'Realtor_Referrals_Q3.xlsx',
      uploadDate: '2025-11-18 09:15',
      status: 'completed',
      type: 'leads',
      records: 856,
      errors: 12,
      user: 'Lisa Wang',
      size: '1.8 MB',
      duration: '1m 48s',
      imported: 844,
      skipped: 12
    },
    {
      id: 3,
      fileName: 'Property_Data_Update.csv',
      uploadDate: '2025-11-15 16:45',
      status: 'processing',
      type: 'properties',
      records: 0,
      errors: 0,
      user: 'Mike Johnson',
      size: '4.2 MB',
      duration: 'Processing...',
      imported: 0,
      skipped: 0
    },
    {
      id: 4,
      fileName: 'Client_Documents_Batch.zip',
      uploadDate: '2025-11-12 11:20',
      status: 'failed',
      type: 'documents',
      records: 0,
      errors: 45,
      user: 'Sarah Chen',
      size: '15.6 MB',
      duration: '45s',
      imported: 0,
      skipped: 45
    },
    {
      id: 5,
      fileName: 'Q3_Applications.json',
      uploadDate: '2025-11-10 08:30',
      status: 'completed',
      type: 'transactions',
      records: 342,
      errors: 5,
      user: 'John Smith',
      size: '3.1 MB',
      duration: '1m 22s',
      imported: 337,
      skipped: 5
    },
    {
      id: 6,
      fileName: 'October_Contacts.csv',
      uploadDate: '2025-11-05 13:15',
      status: 'completed',
      type: 'leads',
      records: 567,
      errors: 8,
      user: 'Lisa Wang',
      size: '1.1 MB',
      duration: '58s',
      imported: 559,
      skipped: 8
    }
  ];

  const filters = [
    { id: 'all', label: 'All Uploads', count: uploadHistory.length },
    { id: 'completed', label: 'Completed', count: uploadHistory.filter(u => u.status === 'completed').length },
    { id: 'processing', label: 'Processing', count: uploadHistory.filter(u => u.status === 'processing').length },
    { id: 'failed', label: 'Failed', count: uploadHistory.filter(u => u.status === 'failed').length },
    { id: 'leads', label: 'Leads', count: uploadHistory.filter(u => u.type === 'leads').length },
    { id: 'documents', label: 'Documents', count: uploadHistory.filter(u => u.type === 'documents').length }
  ];

  const dateRanges = [
    { id: '7days', label: 'Last 7 Days' },
    { id: '30days', label: 'Last 30 Days' },
    { id: '90days', label: 'Last 90 Days' },
    { id: 'year', label: 'Last Year' }
  ];

  const getStatusIcon = (status: UploadStatus) => {
    switch(status) {
      case 'completed': return CheckCircle;
      case 'processing': return AlertCircle;
      case 'failed': return XCircle;
      default: return AlertCircle;
    }
  };

  const getStatusColor = (status: UploadStatus): string => {
    switch(status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'processing': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'failed': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getTypeIcon = (type: UploadType) => {
    switch(type) {
      case 'leads': return Users;
      case 'documents': return FileText;
      case 'properties': return BarChart3;
      case 'transactions': return Database;
      default: return FileText;
    }
  };

  const getTypeColor = (type: UploadType): string => {
    switch(type) {
      case 'leads': return 'bg-blue-500/20 text-blue-400';
      case 'documents': return 'bg-purple-500/20 text-purple-400';
      case 'properties': return 'bg-green-500/20 text-green-400';
      case 'transactions': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const filteredUploads = uploadHistory.filter(upload => {
    if (filter !== 'all') {
      if (filter === 'completed' && upload.status !== 'completed') return false;
      if (filter === 'processing' && upload.status !== 'processing') return false;
      if (filter === 'failed' && upload.status !== 'failed') return false;
      if (filter === 'leads' && upload.type !== 'leads') return false;
      if (filter === 'documents' && upload.type !== 'documents') return false;
    }
    
    if (searchTerm && !upload.fileName.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !upload.user.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const stats = {
    totalUploads: uploadHistory.length,
    totalRecords: uploadHistory.reduce((sum, u) => sum + u.records, 0),
    successRate: Math.round((uploadHistory.filter(u => u.status === 'completed').length / uploadHistory.length) * 100),
    avgProcessingTime: '1m 32s'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">Upload History</h2>
          <p className="text-[#9CA3AF]">Track all data imports and upload activities</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#2A2A2A] text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Advanced Filter
          </button>
          <button className="px-4 py-2 bg-[#00D1D1] text-white rounded-lg hover:bg-[#00B8B8] transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export History
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-[#00D1D1]/10 to-[#00B8B8]/5 border border-[#00D1D1]/30 rounded-xl p-6">
          <p className="text-[#9CA3AF] text-sm mb-2">Total Uploads</p>
          <h3 className="text-3xl font-bold text-white">{stats.totalUploads}</h3>
          <p className="text-[#9CA3AF] text-sm mt-2">All time uploads</p>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/30 rounded-xl p-6">
          <p className="text-[#9CA3AF] text-sm mb-2">Records Processed</p>
          <h3 className="text-3xl font-bold text-white">{stats.totalRecords.toLocaleString()}</h3>
          <p className="text-green-400 text-sm font-semibold mt-2">Total imported records</p>
        </div>
        
        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/30 rounded-xl p-6">
          <p className="text-[#9CA3AF] text-sm mb-2">Success Rate</p>
          <h3 className="text-3xl font-bold text-white">{stats.successRate}%</h3>
          <p className="text-blue-400 text-sm font-semibold mt-2">Completed uploads</p>
        </div>
        
        <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/30 rounded-xl p-6">
          <p className="text-[#9CA3AF] text-sm mb-2">Avg Processing Time</p>
          <h3 className="text-3xl font-bold text-white">{stats.avgProcessingTime}</h3>
          <p className="text-yellow-400 text-sm font-semibold mt-2">Per upload</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
        <div className="grid grid-cols-3 gap-6">
          <div>
            <label className="block text-[#9CA3AF] text-sm mb-2">Date Range</label>
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:border-[#00D1D1] outline-none"
            >
              {dateRanges.map((range) => (
                <option key={range.id} value={range.id}>{range.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[#9CA3AF] text-sm mb-2">Filter by Status</label>
            <div className="flex flex-wrap gap-2">
              {filters.map((filterItem) => (
                <button
                  key={filterItem.id}
                  onClick={() => setFilter(filterItem.id)}
                  className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-2 ${
                    filter === filterItem.id
                      ? 'bg-[#00D1D1] text-white'
                      : 'bg-[#2A2A2A] text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  <span>{filterItem.label}</span>
                  <span className={`px-1.5 py-0.5 rounded text-xs ${
                    filter === filterItem.id ? 'bg-white/20' : 'bg-[#1A1A1A]'
                  }`}>
                    {filterItem.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[#9CA3AF] text-sm mb-2">Search</label>
            <div className="relative">
              <Search className="w-5 h-5 text-[#9CA3AF] absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input 
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search files or users..."
                className="w-full pl-10 pr-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:border-[#00D1D1] outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Upload History Table */}
      <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-800 bg-[#2A2A2A]">
              <th className="text-left py-4 px-6 text-[#9CA3AF] font-semibold">File & Type</th>
              <th className="text-left py-4 px-6 text-[#9CA3AF] font-semibold">Upload Details</th>
              <th className="text-left py-4 px-6 text-[#9CA3AF] font-semibold">Records</th>
              <th className="text-left py-4 px-6 text-[#9CA3AF] font-semibold">Errors</th>
              <th className="text-left py-4 px-6 text-[#9CA3AF] font-semibold">Status</th>
              <th className="text-left py-4 px-6 text-[#9CA3AF] font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUploads.map((upload) => {
              const StatusIcon = getStatusIcon(upload.status);
              const TypeIcon = getTypeIcon(upload.type);
              return (
                <tr key={upload.id} className="border-b border-gray-800 hover:bg-[#2A2A2A] transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${getTypeColor(upload.type)} flex items-center justify-center`}>
                        <TypeIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">{upload.fileName}</div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-[#9CA3AF] text-xs">{upload.type}</span>
                          <span className="text-[#9CA3AF] text-xs">•</span>
                          <span className="text-[#9CA3AF] text-xs">{upload.size}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-sm">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-white">{upload.user}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">{upload.uploadDate}</span>
                      </div>
                      <div className="text-gray-400 text-xs">
                        Duration: {upload.duration}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="space-y-1">
                      <div className="text-white font-semibold">{upload.records.toLocaleString()}</div>
                      <div className="text-gray-400 text-sm">
                        Imported: {upload.imported} • Skipped: {upload.skipped}
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className={`text-lg font-bold ${upload.errors > 0 ? 'text-red-400' : 'text-green-400'}`}>
                      {upload.errors}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${getStatusColor(upload.status)}`}>
                      <StatusIcon className="w-4 h-4" />
                      <span className="font-semibold capitalize">{upload.status}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      {upload.status === 'completed' && (
                        <button className="p-2 bg-[#00D1D1] text-white rounded-lg hover:bg-[#00B8B8] transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                      )}
                      <button className="p-2 bg-[#2A2A2A] text-white rounded-lg hover:bg-gray-700 transition-colors">
                        View Details
                      </button>
                      <button className="p-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Upload Trends */}
      <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
        <h3 className="text-white text-xl font-semibold mb-4">Upload Trends</h3>
        <div className="grid grid-cols-3 gap-6">
          <div className="p-4 bg-[#2A2A2A] rounded-lg">
            <h4 className="text-white font-semibold mb-2">Uploads by Type</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Leads</span>
                <span className="text-white font-semibold">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Documents</span>
                <span className="text-white font-semibold">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Properties</span>
                <span className="text-white font-semibold">1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Transactions</span>
                <span className="text-white font-semibold">1</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#2A2A2A] rounded-lg">
            <h4 className="text-white font-semibold mb-2">Recent Activity</h4>
            <div className="space-y-2">
              <div className="text-sm">
                <span className="text-white">Today:</span>
                <span className="text-green-400 ml-2">2 uploads</span>
              </div>
              <div className="text-sm">
                <span className="text-white">This Week:</span>
                <span className="text-green-400 ml-2">8 uploads</span>
              </div>
              <div className="text-sm">
                <span className="text-white">This Month:</span>
                <span className="text-green-400 ml-2">24 uploads</span>
              </div>
              <div className="text-sm">
                <span className="text-white">Peak Hour:</span>
                <span className="text-blue-400 ml-2">2:00 PM</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-[#2A2A2A] rounded-lg">
            <h4 className="text-white font-semibold mb-2">Performance Metrics</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Records/Upload</span>
                <span className="text-white font-semibold">500</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Avg Error Rate</span>
                <span className="text-yellow-400 font-semibold">4.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Success Rate Trend</span>
                <span className="text-green-400 font-semibold">↑ 8%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Processing Speed</span>
                <span className="text-blue-400 font-semibold">Faster</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadHistory;