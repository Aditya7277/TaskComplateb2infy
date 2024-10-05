import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import StatusOverview from './components/StatusOverview';
import ProposalTable from './components/ProposalTable';
import Header from './components/Header';

const App = () => {
  // State to track selected status
  const [selectedStatus, setSelectedStatus] = useState('All');

  return (
    <div className="flex">
      {/* Sidebar will stay on the left */}
      <div className="w-[20%]">
        <Sidebar />
      </div>

      {/* Main content area */}
      <div className="w-[85%] flex flex-col">
        {/* Header */}
        <Header />

        {/* Flex container for StatusOverview and ProposalTable */}
        <div className="flex mt-4">
          {/* StatusOverview takes some portion of the width */}
          <div className="w-[20%]">
            <StatusOverview setSelectedStatus={setSelectedStatus} />
          </div>

          {/* ProposalTable takes the rest of the width */}
          <div className="w-[80%]">
            <ProposalTable selectedStatus={selectedStatus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
