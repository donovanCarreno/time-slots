const availTimeSlots = require('./getTimeSlots')

const from = (startTime) => ({
  to: (endTime) => ({startTime, endTime})
})

it('removes spans landing neatly on start and end times', () => {
  const availabilities = [
    from(1).to(4),
    from(8).to(10)
  ]

  const bookings = [
    from(2).to(3),
    from(8).to(9)
  ]

  const results = [
    from(1).to(2),
    from(3).to(4),
    from(9).to(10)
  ]

  expect(availTimeSlots(availabilities, bookings)).toEqual(results)
})

it('removes entire availability', () => {
  const availabilities = [
    from(1).to(6),
    from(8).to(12)
  ]

  const bookings = [
    from(1).to(3),
    from(8).to(12)
  ]

  const results = [
    from(3).to(6),
  ]

  expect(availTimeSlots(availabilities, bookings)).toEqual(results)
})

it('removes start and end time from availability without affecting irrelevant availability', () => {
  const availabilities = [
    from(1).to(6),
    from(8).to(12)
  ]

  const bookings = [
    from(1).to(3),
    from(4).to(6)
  ]
  const results = [
    from(3).to(4),
    from(8).to(12),
  ]

  expect(availTimeSlots(availabilities, bookings)).toEqual(results)
})

it('removes start and end time from availability', () => {
  const availabilities = [
    from(1).to(6)
  ]

  const bookings = [
    from(1).to(3),
    from(4).to(6)
  ]

  const results = [
    from(3).to(4)
  ]

  expect(availTimeSlots(availabilities, bookings)).toEqual(results)
})

it('works when booking lands in second available time slot', () => {
  const availabilities = [
    from(1).to(6),
    from(8).to(12)
  ]

  const bookings = [
    from(9).to(10)
  ]

  const results = [
    from(1).to(6),
    from(8).to(9),
    from(10).to(12)
  ]

  expect(availTimeSlots(availabilities, bookings)).toEqual(results)
})
