import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.scss']
})
export class CardMenuComponent implements OnInit {
users = [
  {
    firstName: 'Steve',
    lastName: 'Jobs',
    email: 'steve@techbees.com',
    phone: '9832134823',
    Role: 'Administrator'
  },
  {
    firstName: 'Elon',
    lastName: 'Musk',
    email: 'elon@techbees.com',
    phone: '9832134823',
    Role: 'Administrator'
  },
  {
    firstName: 'Sundar',
    lastName: 'Pitchai',
    email: 'sundar@techbees.com',
    phone: '9832134823',
    Role: 'Administrator'
  },
  {
    firstName: 'Bill',
    lastName: 'Gates',
    email: 'bill@techbees.com',
    phone: '9832134823',
    Role: 'Administrator'
  },
  {
    firstName: 'Manimaran',
    lastName: 'Selvam',
    email: 'ms@techbees.com',
    phone: '9832134823',
    Role: 'Administrator'
  }
];
  constructor() { }

  ngOnInit() {
  }

}
