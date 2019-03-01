function availTimeSlots (availabilities, booked) {
  let results = []
  let index = 0

  availabilities.forEach((a, i, arr) => {
    let start = a.startTime
    let end = a.endTime
    let bookings = false
    let leftover = false

    for (index; index < booked.length; index++) {
      bookings = true
      let booking = booked[index]
      let bookedStart = booking.startTime
      let bookedEnd = booking.endTime

      if (bookedStart === start) {
        if (index === booked.length - 1 && bookedEnd === end) {
          break
        } else if(index === booked.length - 1) {
          results.push({startTime: bookedEnd, endTime: end})
        } else {
          start = bookedEnd
        }
      } else if (bookedStart > start && bookedStart < end) {
        if (bookedEnd < end) {
          results.push({startTime: start, endTime: bookedStart})
          start = bookedEnd
          leftover = start < end && arr.length - 1 === i
        } else {
          results.push({startTime: start, endTime: bookedStart})
        }
      } else {
        results.push({startTime: start, endTime: end})
        break
      }
    }

    if (!bookings || leftover) {
      results.push({startTime: start, endTime: end})
    }
  })

  // console.log({results})

  return results
}

module.exports = availTimeSlots
