import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import { BarChart } from '@mui/x-charts/BarChart';

const highlightScope = {
  highlighted: 'series',
  faded: 'global',
};

const series = [
  {
    label: 'series 1',
    data: Array.from({ length: 20 }, () => Math.floor(Math.random() * 1000)),
  },
].sort((a, b) => a.data - b.data).map((s) => ({ ...s, highlightScope }));

export default function BarAnimation() {
  const [itemNb, setItemNb] = React.useState(5);

  const handleItemNbChange = (event, newValue) => {
    if (typeof newValue !== 'number') {
      return;
    }
    setItemNb(newValue);
  }

  return (
    <Box sx={{ width: '100%' }}>
      <BarChart
        height={700}
        series={series.map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}
      />
      <Typography id="input-item-number" gutterBottom>
        Number of items
      </Typography>
      <Slider
        value={itemNb}
        onChange={handleItemNbChange}
        valueLabelDisplay="auto"
        min={5}
        max={20}
        aria-labelledby="input-item-number"
      />
    </Box>
  );
}