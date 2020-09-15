const names = ["Nguyen Chiem Hao", "Howie Nguyen", "Taffy", "Nguyen V Tai"]
const emails = ["Admin@admin.com", "Howie@122.com", "Taffy@asd.com", "Tai@yahoo.com.vn"]

const genders = ["Male", "Female", "Other"]

let mockData = []
for (let index = 0; index < 50; index++) {
  mockData.push({
    id: index,
    email: emails[Math.floor(Math.random() * emails.length)],
    name: names[Math.floor(Math.random() * names.length)],
    password: "123123",
    gender: genders[Math.floor(Math.random() * genders.length)],
  })
}

export default mockData;