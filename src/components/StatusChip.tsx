import React from 'react';
import { Chip } from '@mui/material';

interface StatusChipProps {
  label: string;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

const StatusChip: React.FC<StatusChipProps> = ({ label, color = 'default' }) => {
  return <Chip label={label} color={color} />;
};

export default StatusChip;
