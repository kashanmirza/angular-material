export interface Room{
    totalRoom: number;
    availableRoom: number;
    bookedRoom: number;
}

export interface RoomList{
    roomNumber: number;
    roomType: string;
    amenities: string;
    prince: number;
    photos: string;
    checkInDate: Date;
    checkOutDate: Date;
}