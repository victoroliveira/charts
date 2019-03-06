export interface ChartInputData {
  title: string;
  url: string;
}

export interface ChartData {
  data: Array<ChartItem>;
}

export interface ChartItem {
  attributes: {
  children: string;
  count: number;
    date: string;
    timestamp: number;
  };
  id: string;
  type: string;
}
