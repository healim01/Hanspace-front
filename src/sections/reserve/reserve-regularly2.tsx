// react
import { useEffect, useState } from "react";
import styled from 'styled-components';
// @mui
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// components
import { useForm } from 'react-hook-form';
import FormProvider , {
  RHFEditor,
  RHFSelect,
  RHFUpload,
  RHFSwitch,
  RHFSlider,
  RHFCheckbox,
  RHFTextField,
  RHFRadioGroup,
  RHFMultiSelect,
  RHFAutocomplete,
  RHFMultiCheckbox,
} from 'src/components/hook-form';

// ———————————————————————————————————
interface ReserveRegulary2Props {
    selectedData: {
        startDate: Date;
        endDate: Date;
        week: string;
        startTime: string;
        endTime: string;
        headCount: number;
        spaceId: number;
    }
}

interface InputField {
  value: string;
}

export default function ReserveRegularly2({ selectedData }: ReserveRegulary2Props) {  
  return (
    <Box>
        <Typography variant="h4" color="primary" sx={{marginBottom: '20px'}}> 
            예약 선택 정보
        </Typography>
        <Typography variant="subtitle1">{selectedData.startDate.toISOString()}</Typography>
        <Typography variant="subtitle1">{selectedData.endDate.toISOString()}</Typography>
        <Typography variant="subtitle1">{selectedData.week}</Typography>
        <Typography variant="subtitle1">{selectedData.startTime}</Typography>
        <Typography variant="subtitle1">{selectedData.endTime}</Typography>
        <Typography variant="subtitle1">{selectedData.headCount}</Typography>
        <Typography variant="subtitle1">{selectedData.spaceId}</Typography>
    </Box>
  );
}