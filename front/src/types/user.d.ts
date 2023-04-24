declare namespace Entity {
    type User = {
        id: Entity.ID;
        companyName: string;
        fullName: string; 
    };

    type UserData = {
        user: User;
        tariff: {
          name: string,
          until: string | null,
        },
        data: {
          outgoingResponses: {
            amount: number;
          },
          incomingOrders: {
            amount: number;
            increased: number;
          },
          orders: {
            amount: number;
          },
          electronicSigns: {
            status: boolean;
          }
        },
        users: Array<User>;
      
    }
}