export type ItemType = {
  _id: number | string;
  name: string;
  project: string;
  branch: string;
  status: string;
  email: string;
  amount: number;
  unit: string;
};

export const ItemData: ItemType[] = [
  {
    _id: "1",
    name: "item1",
    project: "project5",
    branch: "branch1",
    status: "success",
    email: "email1",
    amount: 100,
    unit: "kg",
  },
  {
    _id: "2",
    name: "item2",
    project: "project1",
    branch: "branch2",
    status: "pending",
    email: "email2",
    amount: 200,
    unit: "kg",
  },
  {
    _id: "3",
    name: "item3",
    project: "project2",
    branch: "branch3",
    status: "success",
    email: "email3",
    amount: 300,
    unit: "kg",
  },
  {
    _id: "4",
    name: "item4",

    project: "project3",
    branch: "branch4",
    status: "failed",
    email: "email4",
    amount: 400,
    unit: "kg",
  },
  {
    _id: "5",
    name: "item5",
    project: "project4",
    branch: "branch5",
    status: "success",
    email: "email5",
    amount: 500,
    unit: "kg",
  },
];
