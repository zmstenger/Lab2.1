const milesToKilometers = miles => {
  const km = miles * 1.60934
  const result = `The distance of ${km} kms is equal to ${miles} miles`
  return result
}

const result = milesToKilometers(209.2142)
console.log(result)
