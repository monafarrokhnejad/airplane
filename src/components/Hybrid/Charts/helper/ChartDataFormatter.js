import { convertTime } from "~/helper/dateMoment";
import { NORMAL_DATE } from "~/utilities/dateFormat";

export const areaChartDataFormatter = (model) => {
  const { mainDataProperty, cols, rows } = model ?? {};
  return mainDataProperty?.map((main) => ({
    name: cols?.find((col) => col.id === main)?.label,
    data: rowDataToArray(rows, main),
  }));
};
export const categorySection = (model) => model?.rows?.map((item) => item[model?.xAxisProperty]);
export const rowDataToArray = (rows, mainProp) => rows?.map((row) => row?.[mainProp]);
export const axisDateFormatter = (date) => convertTime({ date, format: NORMAL_DATE });
