import moment from "moment";

const start_date = moment().startOf("day").format("YYYY-MM-DDTHH:mm:ss");
const end_date = moment().endOf("day").format("YYYY-MM-DDTHH:mm:ss");

console.log({ start_date, end_date });

export const projectData = {
  calendars: [
    {
      id: "general",
      name: "General",
      intervals: [
        {
          recurrentStartDate: "on Sat at 0:00",
          recurrentEndDate: "on Mon at 0:00",
          isWorking: false,
        },
      ],
      expanded: true,
      children: [
        {
          id: "business",
          name: "Business",
          intervals: [
            {
              recurrentStartDate: "every weekday at 12:00",
              recurrentEndDate: "every weekday at 13:00",
              isWorking: false,
            },
            {
              recurrentStartDate: "every weekday at 17:00",
              recurrentEndDate: "every weekday at 08:00",
              isWorking: false,
            },
          ],
        },
        {
          id: "night",
          name: "Night shift",
          intervals: [
            {
              recurrentStartDate: "every weekday at 6:00",
              recurrentEndDate: "every weekday at 22:00",
              isWorking: false,
            },
          ],
        },
      ],
    },
  ],

  tasks: [
    {
      id: 1000,
      name: "Today Schedule",
      percentDone: 10,
      startDate: start_date,
      endDate: end_date,

      expanded: true,
      children: [
        {
          id: 1,
          name: "Meeting",
          percentDone: 50,
          startDate: "2023-09-06",
          endDate: "2023-09-06",
          rollup: true,
          expanded: true,
          children: [],
          baselines: [
            {
              startDate: "2019-01-13T23:00:00",
              endDate: "2019-01-22T23:00:00",
            },
          ],
        },
        {
          id: 2,
          name: "Lunch",
          percentDone: 60,
          startDate: "2023-09-06",
          rollup: true,
          endDate: "2023-09-06",
          expanded: true,
          children: [],
          baselines: [
            {
              startDate: "2019-01-22T23:00:00",
              endDate: "2019-02-08T23:00:00",
            },
          ],
        },
        {
          id: 3,
          name: "Presentation",
          percentDone: 20,
          startDate: "2023-09-06",
          expanded: true,
          children: [],
          endDate: "2023-09-06",
          baselines: [
            {
              startDate: "2019-01-13T23:00:00",
              endDate: "2019-02-01T23:00:00",
            },
          ],
        },
      ],
      baselines: [
        {
          startDate: start_date,
          endDate: end_date,
        },
      ],
    },
  ],

  dependencies: [
    {
      id: 1,
      fromTask: 11,
      toTask: 15,
      lag: 2,
    },
    {
      id: 2,
      fromTask: 12,
      toTask: 15,
    },
    {
      id: 3,
      fromTask: 13,
      toTask: 15,
    },
    {
      id: 4,
      fromTask: 14,
      toTask: 15,
    },
    {
      id: 5,
      fromTask: 15,
      toTask: 21,
    },
    {
      id: 7,
      fromTask: 21,
      toTask: 22,
    },
    {
      id: 8,
      fromTask: 22,
      toTask: 23,
    },
    {
      id: 9,
      fromTask: 23,
      toTask: 24,
    },
    {
      id: 10,
      fromTask: 24,
      toTask: 25,
    },
    {
      id: 11,
      fromTask: 31,
      toTask: 331,
    },
    {
      id: 111,
      fromTask: 31,
      toTask: 332,
    },
    {
      id: 112,
      fromTask: 31,
      toTask: 333,
    },
    {
      id: 113,
      fromTask: 31,
      toTask: 334,
    },
    {
      id: 12,
      fromTask: 400,
      toTask: 401,
    },
    {
      id: 13,
      fromTask: 401,
      toTask: 402,
    },
    {
      id: 15,
      fromTask: 3,
      toTask: 4,
    },
    {
      id: 16,
      fromTask: 41,
      toTask: 45,
    },
    {
      id: 17,
      fromTask: 42,
      toTask: 45,
    },
    {
      id: 18,
      fromTask: 43,
      toTask: 45,
    },
    {
      id: 19,
      fromTask: 44,
      toTask: 45,
    },
    {
      id: 20,
      fromTask: 4034,
      toTask: 4035,
    },
  ],

  resources: [
    {
      id: 1,
      name: "Celia",
      city: "Barcelona",
      calendar: null,
      image: "celia.jpg",
    },
    {
      id: 2,
      name: "Lee",
      city: "London",
      calendar: null,
      image: "lee.jpg",
    },
    {
      id: 3,
      name: "Macy",
      city: "New York",
      calendar: null,
      image: "macy.jpg",
    },
    {
      id: 4,
      name: "Madison",
      city: "Barcelona",
      calendar: null,
      image: "madison.jpg",
    },
    {
      id: 5,
      name: "Rob",
      city: "Rome",
      calendar: "business",
      image: "rob.jpg",
    },
    {
      id: 6,
      name: "Dave",
      city: "Barcelona",
      calendar: "night",
      image: "dave.jpg",
    },
    {
      id: 7,
      name: "Dan",
      city: "London",
      calendar: "night",
      image: "dan.jpg",
    },
    {
      id: 8,
      name: "George",
      city: "New York",
      calendar: null,
      image: "george.jpg",
    },
    {
      id: 9,
      name: "Gloria",
      city: "Rome",
      calendar: null,
      image: "gloria.jpg",
    },
    {
      id: 10,
      name: "Henrik",
      city: "London",
      calendar: null,
      image: "henrik.jpg",
    },
  ],

  assignments: [
    { id: 1, event: 11, resource: 1 },
    { id: 2, event: 4033, resource: 1 },
    { id: 3, event: 12, resource: 9 },
    { id: 4, event: 13, resource: 2 },
    { id: 5, event: 13, resource: 3 },
    { id: 6, event: 13, resource: 6 },
    { id: 7, event: 13, resource: 7 },
    { id: 8, event: 13, resource: 8 },
    { id: 9, event: 21, resource: 5 },
    { id: 10, event: 21, resource: 9 },
    { id: 11, event: 22, resource: 8 },
    { id: 12, event: 25, resource: 3 },
  ],

  timeRanges: [
    {
      id: 1,
      name: "Important date",
      startDate: "2023-09-06",
      duration: 0,
      durationUnit: "h",
      cls: "b-fa b-fa-diamond",
    },
  ],
};
