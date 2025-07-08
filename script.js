let generatedUrl = ""

function clearForm() {
  document.getElementById("urlForm").reset()
  document.getElementById("previewContainer").style.display = "none"
  document.getElementById("rollError").textContent = ""
  generatedUrl = ""
}

document.getElementById("urlForm").addEventListener("submit", function (e) {
  e.preventDefault()

  const year = document.getElementById("year").value
  const part = document.getElementById("part").value
  const rollNumber = document.getElementById("rollNumber").value
  const category = document.getElementById("category").value

  if (!validateRollNumber(rollNumber)) return

  generatedUrl = generateUrl(year, part, rollNumber, category)
  displayResult(generatedUrl)
})

function validateRollNumber(rollNumber) {
  const errorDiv = document.getElementById("rollError")

  if (rollNumber.length !== 13 || !/^\d{13}$/.test(rollNumber)) {
    errorDiv.textContent = "Roll number must be exactly 13 digits and numeric."
    return false
  }

  errorDiv.textContent = ""
  return true
}

function generateUrl(year, part, rollNumber, category) {
  return `https://lu.indiaexaminfo.co.in/PATLIPUTRA/YEAR-${year}/${category}/${part}/${rollNumber}.pdf`
}

function displayResult(url) {
  const previewFrame = document.getElementById("previewFrame")
  const previewContainer = document.getElementById("previewContainer")

  previewFrame.src = url
  previewContainer.style.display = "block"
  previewContainer.scrollIntoView({ behavior: "smooth" })
}
