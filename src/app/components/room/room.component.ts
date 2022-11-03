import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from 'src/shared/data/models';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  room: Room = {
    availableRoom: 3,
    bookedRoom: 2,
    totalRoom: 4
  }

  roomList: RoomList = {
    roomNumber: 302,
    roomType: "",
    amenities: "",
    prince: 100,
    photos: "",
    checkInDate: new Date(),
    checkOutDate: new Date(),
  }

  constructor() { }

  ngOnInit(): void {
  }

}
