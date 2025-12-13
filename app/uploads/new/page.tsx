"use client";

import React, { useState, ChangeEvent, DragEvent } from 'react';
import { Upload, FileText, Table, AlertCircle, CheckCircle, XCircle, Database, Users, Home, Mail, Phone, MapPin, DollarSign, LucideIcon } from 'lucide-react';

interface UploadType {
  id: string;
  label: string;
  icon: LucideIcon;
  description: string;
}

interface Field {
  id: keyof Mapping;
  label: string;
  icon: LucideIcon;
  required: boolean;
}

interface Mapping {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  loanAmount: string;
}

interface FileInfo {
  name: string;
  size: number;
  type: string;
}

const NewUpload = () => {
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadType, setUploadType] = useState<string>('leads');
  const [mapping, setMapping] = useState<Mapping>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    loanAmount: ''
  });

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleMappingChange = (field: keyof Mapping, value: string) => {
    setMapping({ ...mapping, [field]: value });
  };

  const uploadTypes: UploadType[] = [
    { id: 'leads', label: 'Leads', icon: Users, description: 'Import new leads or contacts' },
    { id: 'documents', label: 'Documents', icon: FileText, description: 'Upload client documents' },
    { id: 'properties', label: 'Properties', icon: Home, description: 'Property data and listings' },
    { id: 'transactions', label: 'Transactions', icon: Database, description: 'Loan application data' }
  ];

  const requiredFields: Field[] = [
    { id: 'firstName', label: 'First Name', icon: Users, required: true },
    { id: 'lastName', label: 'Last Name', icon: Users, required: true },
    { id: 'email', label: 'Email', icon: Mail, required: false },
    { id: 'phone', label: 'Phone', icon: Phone, required: true },
    { id: 'address', label: 'Address', icon: MapPin, required: false },
    { id: 'loanAmount', label: 'Loan Amount', icon: DollarSign, required: false }
  ];

  const sampleColumns = ['first_name', 'last_name', 'email', 'phone', 'property_address', 'loan_amount', 'source'];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">New Upload</h2>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-[#2A2A2A] text-white rounded-lg hover:bg-gray-700 transition-colors">
            Cancel
          </button>
          <button className="px-6 py-2 bg-[#00D1D1] text-white rounded-lg hover:bg-[#00B8B8] transition-colors font-semibold">
            Start Upload
          </button>
        </div>
      </div>

      {/* Upload Type Selection */}
      <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
        <h3 className="text-white text-lg font-semibold mb-4">Select Upload Type</h3>
        <div className="grid grid-cols-4 gap-4">
          {uploadTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.id}
                onClick={() => setUploadType(type.id)}
                className={`p-4 rounded-lg border transition-all ${
                  uploadType === type.id
                    ? 'border-[#00D1D1] bg-[#00D1D1]/10'
                    : 'border-gray-700 bg-[#2A2A2A] hover:border-gray-600'
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className={`w-5 h-5 ${uploadType === type.id ? 'text-[#00D1D1]' : 'text-gray-400'}`} />
                  <span className={`font-semibold ${uploadType === type.id ? 'text-white' : 'text-gray-300'}`}>
                    {type.label}
                  </span>
                </div>
                <p className="text-gray-400 text-xs text-left">{type.description}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Upload Area */}
      <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
        <h3 className="text-white text-lg font-semibold mb-4">Upload File</h3>
        <div 
          className={`border-2 border-dashed rounded-xl p-12 text-center transition-all ${
            dragActive 
              ? 'border-[#00D1D1] bg-[#00D1D1]/10' 
              : 'border-gray-700 bg-[#1A1A1A] hover:border-gray-600'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="w-16 h-16 text-[#00D1D1] mx-auto mb-4" />
          
          {selectedFile ? (
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <FileText className="w-10 h-10 text-[#00D1D1]" />
                <div className="text-left">
                  <h4 className="text-white font-semibold text-lg">{selectedFile.name}</h4>
                  <p className="text-[#9CA3AF] text-sm">
                    {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB • {selectedFile.type}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedFile(null)}
                className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
              >
                Remove File
              </button>
            </div>
          ) : (
            <>
              <h4 className="text-white text-xl font-semibold mb-2">
                Drop your CSV or Excel file here
              </h4>
              <p className="text-[#9CA3AF] mb-6">
                or click to browse from your computer
              </p>
              <label className="px-6 py-3 bg-[#00D1D1] text-white font-semibold rounded-lg hover:bg-[#00B8B8] transition-colors cursor-pointer inline-block">
                <input 
                  type="file" 
                  className="hidden"
                  accept=".csv,.xlsx,.xls"
                  onChange={handleFileSelect}
                />
                Select File
              </label>
              <p className="text-[#9CA3AF] text-sm mt-4">
                Supported formats: CSV, XLSX, XLS (Max 50MB)
              </p>
            </>
          )}
        </div>
      </div>

      {/* Field Mapping */}
      <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-white text-lg font-semibold">Field Mapping</h3>
            <p className="text-[#9CA3AF]">Map your CSV columns to system fields</p>
          </div>
          <button className="px-4 py-2 bg-[#2A2A2A] text-white rounded-lg hover:bg-gray-700 transition-colors">
            Auto-Detect
          </button>
        </div>

        {/* Sample Header Row */}
        <div className="mb-6">
          <h4 className="text-white font-semibold mb-2">Sample Data Columns</h4>
          <div className="flex flex-wrap gap-2">
            {sampleColumns.map((col, idx) => (
              <span key={idx} className="px-3 py-2 bg-[#2A2A2A] text-gray-300 rounded-lg text-sm">
                {col}
              </span>
            ))}
          </div>
        </div>

        {/* Mapping Fields */}
        <div className="space-y-4">
          {requiredFields.map((field) => {
            const Icon = field.icon;
            return (
              <div key={field.id} className="flex items-center gap-4 p-4 bg-[#2A2A2A] rounded-lg">
                <div className="flex items-center gap-3 w-48">
                  <Icon className="w-5 h-5 text-[#00D1D1]" />
                  <div>
                    <span className="text-white font-semibold">{field.label}</span>
                    {field.required && (
                      <span className="text-red-400 text-xs ml-2">Required</span>
                    )}
                  </div>
                </div>
                <span className="text-[#9CA3AF]">→</span>
                <select
                  value={mapping[field.id]}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => handleMappingChange(field.id, e.target.value)}
                  className="flex-1 px-4 py-2 bg-black text-white rounded-lg border border-gray-700 focus:border-[#00D1D1] outline-none"
                >
                  <option value="">Select Column</option>
                  {sampleColumns.map((col, idx) => (
                    <option key={idx} value={col}>{col}</option>
                  ))}
                </select>
                <div className="w-24">
                  {mapping[field.id] ? (
                    <span className="flex items-center gap-1 text-green-400">
                      <CheckCircle className="w-4 h-4" />
                      Mapped
                    </span>
                  ) : field.required ? (
                    <span className="flex items-center gap-1 text-red-400">
                      <XCircle className="w-4 h-4" />
                      Required
                    </span>
                  ) : (
                    <span className="text-gray-400">Optional</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Validation Status */}
        <div className="mt-6 p-4 bg-[#2A2A2A] rounded-lg">
          <div className="flex items-center gap-3 mb-2">
            <AlertCircle className="w-5 h-5 text-yellow-400" />
            <h4 className="text-white font-semibold">Validation Status</h4>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">4</div>
              <div className="text-gray-400 text-sm">Required fields mapped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">2</div>
              <div className="text-gray-400 text-sm">Optional fields mapped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">0</div>
              <div className="text-gray-400 text-sm">Validation warnings</div>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Options */}
      <div className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
        <h3 className="text-white text-lg font-semibold mb-4">Upload Options</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-300 mb-2">Duplicate Handling</label>
            <select className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:border-[#00D1D1] outline-none">
              <option>Skip duplicates</option>
              <option>Update existing records</option>
              <option>Create new records</option>
              <option>Flag for review</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-300 mb-2">On Error</label>
            <select className="w-full px-4 py-2 bg-[#2A2A2A] text-white rounded-lg border border-gray-700 focus:border-[#00D1D1] outline-none">
              <option>Continue processing</option>
              <option>Stop on first error</option>
              <option>Skip error rows</option>
              <option>Flag and continue</option>
            </select>
          </div>
          <div>
            <label className="flex items-center gap-2 text-gray-300">
              <input type="checkbox" className="w-4 h-4 accent-[#00D1D1]" defaultChecked />
              Send email notification
            </label>
            <p className="text-gray-400 text-sm mt-1">Receive email when upload completes</p>
          </div>
          <div>
            <label className="flex items-center gap-2 text-gray-300">
              <input type="checkbox" className="w-4 h-4 accent-[#00D1D1]" defaultChecked />
              Auto-assign leads
            </label>
            <p className="text-gray-400 text-sm mt-1">Assign leads to available loan officers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewUpload;