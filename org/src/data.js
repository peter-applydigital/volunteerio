export const roles = [
  { name: "Driver", description: "Transports people and supplies", driversLicense: true, car: true, minAge: 19 },
  { name: "Packer", description: "Loads and unloads supplies", driversLicense: false, car: false, minAge: 10 },
]

export const jobs = [
  {
    id: 1,
    role: 'Driver',
    quantity: 5,
    tags: 'Daily lunch',
    location: "191 New Toronto St",
    dateTime: '02/13/2022 12:30',
    duration: 1,
    confirmed: 5,
  },
  {
    id: 2,
    role: 'Packer',
    quantity: 7,
    tags: 'Sunday dinner',
    location: "8201 Keele St",
    dateTime: '02/13/2022 14:00',
    duration: 1,
    confirmed: 2,
  },
]

export default jobs