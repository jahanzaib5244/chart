/**
 * Application configuration
 */
import React from "react";
import DemoButton from "./components/DemoButton";
import DemoEditor from "./components/DemoEditor";

// It's meant to be used as a development stage helper only so please set it to false for production systems.
// This config enables response validation and dumping of found errors to the browser console.
const projectConfig = {
  autoLoad: true,
  validateResponse: true,
  calendar: "general",
  startDate: "2023-09-06",
  hoursPerDay: 24,
  daysPerWeek: 5,
  daysPerMonth: 20,
};

const ganttConfig = {
  columns: [
    {
      type: "name",
      field: "name",
      width: 250,
      renderer: ({ record }) => {
        return record.isLeaf ? (
          <span>{record?.name}</span>
        ) : (
          <b>{record?.name}</b>
        );
      },
    },
    {
      text: 'Edit<div class="small-text"></div>',
      htmlEncodeHeaderText: false,
      width: 120,
      editor: false,
      align: "center",
      // Using custom React component
      renderer: ({ record, grid, grid: { extraData } }) =>
        record.isLeaf ? (
          <DemoButton
            text={"Edit"}
            onClick={() => extraData.handleEditClick({ record, grid })}
          />
        ) : null,
    },
    {
      field: "draggable",
      text: 'Draggable<div class="small-text"></div>',
      htmlEncodeHeaderText: false,
      width: 100,
      align: "center",
      editor: (ref) => <DemoEditor ref={ref} />,
      renderer: ({ value }) => (value ? "Yes" : "No"),
    },
  ],

  viewPreset: "weekAndDayLetter",
  barMargin: 10,
};

export { ganttConfig, projectConfig };
