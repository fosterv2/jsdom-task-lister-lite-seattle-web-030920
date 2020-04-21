document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const list = document.getElementById("list")

  const form = document.getElementById("create-task-form")

  const dropDown = document.createElement("select")
  dropDown.id = "priority-value"
  dropDown.innerHTML = "<option value='high'>High</option><option value='medium'>Medium</option><option value='low'>Low</option"
  form.insertBefore(dropDown, form.childNodes[4])

  form.addEventListener("submit", function(e){
    e.preventDefault()

    let li = document.createElement("li")
    li.className = e.target.lastElementChild.value
    li.textContent = e.target["new-task-description"].value

    let button = document.createElement("button")
    button.textContent = "Delete Task"
    li.appendChild(button)

    button.addEventListener("click", function(e){
      button.parentElement.remove()
    })

    list.appendChild(li)
  })


});
