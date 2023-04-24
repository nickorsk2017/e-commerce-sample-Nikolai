const firstDay = new Date();
const nextWeek = new Date(firstDay.getTime() + 7 * 24 * 60 * 60 * 1000);

const data: Entity.UserData = {
  user: {
    id: "1",
    fullName: "Стародубцев И.В.",
    companyName: "Метрострой Инвест", 
  },
  tariff: {
    name: "Unlimited PRO",
    until: nextWeek.toDateString(),
  },
  data: {
    outgoingResponses: {
      amount: 17,
    },
    incomingOrders: {
      amount: 8,
      increased: 2,
    },
    orders: {
      amount: 3
    },
    electronicSigns: {
      status: true
    }
  },
  users: [
    {
      id: "2",
      fullName: "Стародубцев И.В.",
      companyName: "Метрострой Инвест", 
    },
    {
      id: "3",
      fullName: "Стародубцев И.В.",
      companyName: "Метрострой Инвест", 
    },
  ],
}

export default data;