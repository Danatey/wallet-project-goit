import React from "react";
import TableStats from "./TableStats";
import PieChart from "./PieChart";
import s from './diagramm.module.scss'

const data = [
  { name: "Основные расходы", value: 8700.0 },
  { name: "Продукты", value: 3800.74 },
  { name: "Машина", value: 1500.0 },
  { name: "Забота о себе", value: 800.0 },
  { name: "Забота о детях", value: 2208.5 },
  { name: "Товары для дома", value: 300 },
  { name: "Образование", value: 3400.0 },
  { name: "Досуг", value: 1230.0 },
  { name: "Другие расходы", value: 610.0 },
];
const sumIncome = [
  { type:"Расходы:", money: 5000.00 },
  { type:"Доходы:", money: 10000.00 },
]

const colors = [
  "#FED057",
  "#FFD8D0",
  "#FD9498",
  "#C5BAFF",
  "#6E78E8",
  "#4A56E2",
  "#81E1FF",
  "#24CCA7",
  "#00AD84",
];

export class DiagramTab extends React.Component {
  render() {
    return (
      <>
        <div className={s.statsSheet}>
          <PieChart data={data} colors={colors} sumIncome={sumIncome}/>
          <TableStats data={data} sumIncome={sumIncome} colors={colors} />
        </div>
      </>
    );
  }
}

export default DiagramTab;
