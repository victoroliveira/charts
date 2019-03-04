export interface Widget {
  data: Array<WidgetData>;
}

export interface WidgetData {
  attributes: {
    children: string;
    count: number;
    date: string;
    timestamp: number;
  };
  id: string;
  type: string;
}

