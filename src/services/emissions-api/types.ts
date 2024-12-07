type RawEmissionRecord = {
  date: number;
  value: number;
  unit: string;
};

export type ApiResponse = {
  "Total emissions": RawEmissionRecord[];
  "Emission intensity": RawEmissionRecord[];
};

export type EmissionData = {
  date: Date;
  total: {
    label: string;
    value: number;
    unit: string;
  };
  intensity: {
    label: string;
    value: number;
    unit: string;
  };
};
