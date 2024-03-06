import React, { useState, useEffect } from 'react';
import UserSidebar from '@/components/UserSidebar';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getUsage, getUsageCleanup } from '@/store/actions/get-usage';
import DataTable from 'react-data-table-component';
import moment from 'moment';

export default function Usage() {
  const router = useRouter();
  const dispatch = useDispatch();
  const getUsageState = useSelector((s) => s.getUsage);
  const [usage, setUsage] = useState([]);

  const id = localStorage.getItem('projectID');

  useEffect(() => {
    const body = {
      project_id: id,
      rows_to_return: 10,
    };
    dispatch(getUsage(body));
  }, [dispatch, id]);

  useEffect(() => {
    if (getUsageState.isSuccessful) {
      setUsage(getUsageState.data);
      dispatch(getUsageCleanup());
    } else if (getUsageState.error) {
      dispatch(getUsageCleanup());
    }
  }, [dispatch, getUsageState]);

  const columns = [
    {
      name: 'CPU Hours',
      selector: (row) => row.cpu_hours,
      sortable: true,
    },
    {
      name: 'Disk GB Hours',
      selector: (row) => row.disk_gb_hours,
      sortable: true,
    },
    {
      name: 'Servers',
      selector: (row) => row.servers,
      sortable: true,
    },
    {
      name: 'Start Date',
      selector: (row) => moment(row.start_date).format('MM/DD/YYYY'),
      sortable: true,
    },
    {
      name: 'End Date',
      selector: (row) => moment(row.end_date).format('MM/DD/YYYY'),
      sortable: true,
    },
  ];
  const customStyles = {
    headCells: {
      style: {
        backgroundColor: 'rgba(187, 204, 221, 1)',
      },
    },
  };
  return (
    <UserSidebar title="Usage">
      <div className="h-screen py-5 px-3 my-auto">
        {usage.length === 0 ? (
          <>
            <div className="spinner-border" role="status"></div>
          </>
        ) : (
          <>
            <h1 className="mb-8 text-2xl font-bold">Usage</h1>
            <div>
              <DataTable
                columns={columns}
                customStyles={customStyles}
                data={usage.data}
                pagination
              />
            </div>
          </>
        )}
      </div>
    </UserSidebar>
  );
}
