export interface WidgetList {
  list: Array<WidgetInputData>;
}

export interface WidgetInputData {
  title: string;
  url: string;
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
