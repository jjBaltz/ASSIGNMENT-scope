const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

for (const location of locations) {
    const invalidLocation = true

    if (location[0] > 1) {
      console.log("This location is valid")
    }

    if (invalidLocation) {
        console.log("This location is invalid")
    }
}
