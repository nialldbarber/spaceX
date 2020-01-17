// Get unique values
export const getUniqueValues = (arr) => [...new Set(arr)]

// Get flight stuff
export const getFlightStatus = (launch) => {
  if (launch === null) return 'TBD'
  else if (launch) return 'SUCCESS'
  else return 'FAILURE'
}
