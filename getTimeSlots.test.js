const availTimeSlots = require('./getTimeSlots')

// const availabilities = [
//   {
//     startTime: moment().subtract(8, 'hours'),
//     endTime: moment().subtract(4, 'hours')
//   },
//   {
//     startTime: moment().subtract(2, 'hours'),
//     endTime: moment()
//   }
// ]
//
// const bookings = [
//   {
//     startTime: moment().subtract(6, 'hours'),
//     endTime: moment().subtract(5, 'hours')
//   },
//   {
//     startTime: moment().subtract(2, 'hours'),
//     endTime: moment().subtract(1, 'hours')
//   }
// ]


it('returns array of available time slots', () => {
  let availabilities = [
    {
      startTime: 1,
      endTime: 4
    },
    {
      startTime: 8,
      endTime: 10
    }
  ]

  let bookings = [
    {
      startTime: 2,
      endTime: 3
    },
    {
      startTime: 8,
      endTime: 9
    }
  ]

  let results = [
    {
      startTime: 1,
      endTime: 2
    },
    {
      startTime: 3,
      endTime: 4
    },
    {
      startTime: 9,
      endTime: 10
    }
  ]

  expect(availTimeSlots(availabilities, bookings)).toEqual(results)

  availabilities = [
    {
      startTime: 1,
      endTime: 6
    },
    {
      startTime: 8,
      endTime: 12
    }
  ]

  bookings = [
    {
      startTime: 1,
      endTime: 3
    },
    {
      startTime: 8,
      endTime: 12
    }
  ]

  results = [
    {
      startTime: 3,
      endTime: 6
    }
  ]

  expect(availTimeSlots(availabilities, bookings)).toEqual(results)

  availabilities = [
    {
      startTime: 1,
      endTime: 6
    },
    {
      startTime: 8,
      endTime: 12
    }
  ]

  bookings = [
    {
      startTime: 1,
      endTime: 3
    },
    {
      startTime: 4,
      endTime: 6
    }
  ]

  results = [
    {
      startTime: 3,
      endTime: 4
    },
    {
      startTime: 8,
      endTime: 12
    }
  ]

  expect(availTimeSlots(availabilities, bookings)).toEqual(results)

  availabilities = [
    {
      startTime: 1,
      endTime: 6
    }
  ]

  bookings = [
    {
      startTime: 1,
      endTime: 3
    },
    {
      startTime: 4,
      endTime: 6
    }
  ]

  results = [
    {
      startTime: 3,
      endTime: 4
    }
  ]

  expect(availTimeSlots(availabilities, bookings)).toEqual(results)
})
