import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users  = [
        {
          "id": 1,
          "username": "jdoe01",
          "email": "jdoe01@example.com",
          "first_name": "John",
          "last_name": "Doe",
          "created_at": "2023-01-15T10:20:30Z"
        },
        {
          "id": 2,
          "username": "asmith02",
          "email": "asmith02@example.com",
          "first_name": "Alice",
          "last_name": "Smith",
          "created_at": "2023-02-20T11:10:45Z"
        },
        {
          "id": 3,
          "username": "bwayne03",
          "email": "bwayne03@example.com",
          "first_name": "Bruce",
          "last_name": "Wayne",
          "created_at": "2023-03-12T08:15:22Z"
        },
        {
          "id": 4,
          "username": "ckent04",
          "email": "ckent04@example.com",
          "first_name": "Clark",
          "last_name": "Kent",
          "created_at": "2023-04-05T14:05:11Z"
        },
        {
          "id": 5,
          "username": "dpierce05",
          "email": "dpierce05@example.com",
          "first_name": "Diana",
          "last_name": "Pierce",
          "created_at": "2023-05-10T09:35:55Z"
        },
        {
          "id": 6,
          "username": "pprince06",
          "email": "pprince06@example.com",
          "first_name": "Peter",
          "last_name": "Prince",
          "created_at": "2023-06-18T12:40:35Z"
        },
        {
          "id": 7,
          "username": "bwilson07",
          "email": "bwilson07@example.com",
          "first_name": "Barbara",
          "last_name": "Wilson",
          "created_at": "2023-07-25T07:55:42Z"
        },
        {
          "id": 8,
          "username": "rrogers08",
          "email": "rrogers08@example.com",
          "first_name": "Rogers",
          "last_name": "Rogers",
          "created_at": "2023-08-22T16:30:25Z"
        },
        {
          "id": 9,
          "username": "tstark09",
          "email": "tstark09@example.com",
          "first_name": "Tony",
          "last_name": "Stark",
          "created_at": "2023-09-11T18:20:30Z"
        },
        {
          "id": 10,
          "username": "nmiller10",
          "email": "nmiller10@example.com",
          "first_name": "Natalie",
          "last_name": "Miller",
          "created_at": "2023-10-01T13:15:50Z"
        }
    ]

    findAll() {
        return this.users
    }

    findOne(id:number) {
        return this.users.find((user) => user?.id == id)
    }

    create(body: {id: number, username: string, email:string, first_name:string, last_name:string, created_at:string}) {
       this.users = [...this.users, body];
       return 'success'
    }

    update(id:number, body: {username?: string, email?:string, first_name?:string, last_name?:string, created_at?:string}) {
      const userIndex = this.users.findIndex((user) => user.id === id);

      if (userIndex === -1) {
        return `User with ID ${id} not found`;
      }

      this.users[userIndex] = {...this.users[userIndex], ...body};
      
      return `updated user ${id}`;
    }

    delete(id:number) {
        this.users = this.users.filter((user) => user.id !== id);
        return `USER DELETED ${id}`;
    }
      
}
