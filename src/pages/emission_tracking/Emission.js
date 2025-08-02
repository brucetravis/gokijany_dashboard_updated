import React from 'react'
import Header from '../../components/header/Header'
import NavigationTabs from '../../components/navigationtabs/NavigationTabs'
import TotalEmissions from '../../components/totalemissions/TotalEmissions';
import './Emission.css'
import ClimateEfficiencyCard from '../../components/ClimateEfficiency/ClimateEfficiencyCard';
import EmissionScopeCard from '../../components/EmissionScopeCard/EmissionScopeCard';
import UsageCard from '../../components/UsageCard/UsageCard';
import TasksCard from '../../components/TasksCard/TasksCard';
import UsageChartCard from '../../components/UsageChart/UsageChartCard';

function Emission() {
  const emissionTabs = [
    { id: 'overview', label: 'Emission overview' },
    { id: 'scope1', label: 'Scope 1' },
    { id: 'scope2', label: 'Scope 2' },
    { id: 'scope3', label: 'Scope 3' }
  ];

  const climateEfficiencyData = [
    { year: '2018', value: 0.8, color: '#6b7280' },
    { year: '2019', value: 0.7, color: '#9ca3af' },
    { year: '2020', value: 0.95, color: '#00a654' },
    { year: '2021', value: 0.85, color: '#86efac' }
  ];

  const UsageCardData = [
    { year: '2018', Kristianstad: 60000, Angelholm: 15000, Arboga: 0 },
    { year: '2019', Kristianstad: 60000, Angelholm: 20000, Arboga: 0 },
    { year: '2020', Kristianstad: 60000, Angelholm: 15000, Arboga: 0 },
    { year: '2021', Kristianstad: 60000, Angelholm: 20000, Arboga: 0 }
  ];

  const organizationUnitsData = ['Kristianstad', 'Angelholm', 'Arboga'];
  const colorsData = {
    Kristianstad: '#00a654',
    Angelholm: '#9ca3af',
    Arboga: '#6b7280'
  };

  const customTasksData = [
    { name: 'Current tasks', value: 18, color: '#6B7280', count: 18 },
    { name: 'Upcoming tasks', value: 6, color: '#9CA3AF', count: 6 },
    { name: 'Expired tasks', value: 6, color: '#D1D5DB', count: 6 },
    { name: 'Waiting approval', value: 3, color: '#34D399', count: 3 },
    { name: 'Completed', value: 4, color: '#00a654', count: 4 }
  ];

  const HeatingData = [
    { year: '2018', Kristianstad: 62000, Angelholm: 25000, Arboga: 16000 },
    { year: '2019', Kristianstad: 70000, Angelholm: 38000, Arboga: 35000 },
    { year: '2020', Kristianstad: 68000, Angelholm: 38000, Arboga: 18000 },
    { year: '2021', Kristianstad: 72000, Angelholm: 50000, Arboga: 18000 }
  ];
  // Data for EmissionScopeCard
  const emissionScopeData = [
    { year: '2018', scope1: 28200, scope2: 12500, scope3: 8300, total: 49000 },
    { year: '2019', scope1: 29700, scope2: 13200, scope3: 9100, total: 52000 },
    { year: '2020', scope1: 26900, scope2: 11800, scope3: 7600, total: 46300 },
    { year: '2021', scope1: 21600, scope2: 10500, scope3: 6900, total: 39000 },
    { year: '2022', scope1: 19800, scope2: 9200, scope3: 6100, total: 35100 }
  ];

  // Custom colors for EmissionScopeCard
  const emissionScopeColors = {
    scope1: '#dc2626', // Red for direct emissions
    scope2: '#f59e0b', // Orange for indirect emissions from energy
    scope3: '#6b7280', // Gray for other indirect emissions
    total: '#00a654'   // Green for total (matching your theme)
  };

  return (
    <div className='emission-page'>
      <Header/>
      <NavigationTabs
        tabs={emissionTabs}
        defaultActiveTab="overview"
        onTabChange={(tabId) => console.log('Emission tab changed to:', tabId)}
        showFilter={true}
        filterButtonText="Global Filter"
        filterButtonVariant="dark"
        onFilterClick={() => console.log('Filter clicked')}
      />
      
      <div className='emission-content'>
        {/* First Row: Total Emissions + Climate Efficiency */}
        <div className='emissions-row first-row'>
          <div className='card-wrapper total-emissions'>
            <TotalEmissions 
              title="Total emission for 2022 (MtCO2)"
              value="0.02195"
              changePercentage={5}
              changeDirection="down"
              changeText="lower to previous year"
              backgroundColor="#4b5563"
              dateRange="2022"
            />
          </div>
          <div className='card-wrapper climate-efficiency'>
            <ClimateEfficiencyCard 
              title="The climate efficiency of the business"
              data={climateEfficiencyData}
              dateRange="Date"
              chartHeight={200}
            />
          </div>
        </div>

        {/* Second Row: Emission Scope + Electricity Usage */}
        <div className='emissions-row'>
          <div className='card-wrapper'>
            <EmissionScopeCard
              title="Emission by Scope (tCO2e)"
              data={emissionScopeData}
              dateRange="2018-2022"
              showFilters={true}
              height={400}
              colors={emissionScopeColors}
            />
          </div>
          <div className='card-wrapper'>
            <UsageCard
              title='Electricity usage by Organization Unit'
              data={UsageCardData}
              organizationUnits={organizationUnitsData}
              colors={colorsData}
              yAxisMax='80000'
              dateFilter="Date"
              orgFilter="Organization Unit"
            />
          </div>
        </div>

        {/* Third Row: Tasks + Heating Usage */}
        <div className='emissions-row'>
          <div className='card-wrapper'>
            <TasksCard
              title="Tasks for the current month"
              data={customTasksData}
              dateFilter="Date"
              taskFilter="Task"
            />
          </div>
          <div className='card-wrapper'>
            <UsageChartCard  
              title="Heating usage by Organization Unit"
              data={HeatingData}
              dataKeys={['Kristianstad', 'Angelholm', 'Arboga']}
              colors={['#00a654', '#9ca3af', '#6b7280']}
              yAxisMax={80000}
              showDateFilter={true}
              showOrgFilter={true}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Emission