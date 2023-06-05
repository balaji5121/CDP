export interface StateDataItemInterface {
  confirmed: number;
  deceased: number;
  recovered: number;
  tested: number;
  active: number;
  vaccinated1: number;
  vaccinated2: number;
  stateName: string;
  stateCode: string;
}

export interface StateCovidDataList {
  covidDataList: StateDataItemInterface[];
}
