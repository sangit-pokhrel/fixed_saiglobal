"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Statistic {
  id: number;
  title: string;
  number: number;
}

const StatisticsSection: React.FC = () => {
  const [statistics, setStatistics] = useState<Statistic[]>([]);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get('https://api.saiglobal.getintoto.com/api/v1/school-statistics/');
        setStatistics(response.data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <div className="bg-[#1a2b3c] py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:justify-around">
        {statistics.map((stat, index) => (
          <React.Fragment key={stat.id}>
            <div className={`text-center mx-4 ${index !== 0 ? 'mt-8 md:mt-0' : ''}`}>
              <div className="text-4xl font-bold text-white">{stat.number}</div>
              <div className="text-white mt-2">{stat.title}</div>
            </div>
            {index !== statistics.length - 1 && (
              <div className="border-b border-white mt-8 md:mt-0 md:border-b-0 md:border-l md:h-12 mx-0 md:mx-8"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default StatisticsSection;
