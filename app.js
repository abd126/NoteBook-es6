const list = document.getElementById('list')
// console.log('firebase',firebase)
 Add = () => {
  const titleInput = document.getElementById('title');
  const discriptionInput = document.getElementById('Discription');
  if(titleInput.value.trim() == "" && discriptionInput.value.trim() == "" ){
    alert('add task')
  }else{
    const div = document.createElement('div')
    const title = document.createElement('h3')
    const Discription = document.createElement('p')
    const titleValue = document.createTextNode(titleInput.value + " ")
    const discriptionValue = document.createTextNode(discriptionInput.value + " ")
    console.log(titleValue,discriptionValue)
    title.appendChild(titleValue)
    Discription.appendChild(discriptionValue)
    div.appendChild(title)
    div.appendChild(Discription)
    list.appendChild(div)
    titleInput.value = ""
    discriptionInput.value = ""    
    div.setAttribute("class","col-lg-4 col-md-4 col-sm-12 bg-light shadow-lg p-3 mb-5 bg-body rounded notes")
    title.setAttribute("class","title text-center mt-2 text-decoration-underline")
    Discription.setAttribute("class","discription mt-2 text-decoration-underline")
    
  
  
    // Delet Button
    const dltBtn = document.createElement('i')
    // const dltTxt = document.createTextNode('Delet Todo ')
    dltBtn.setAttribute("onclick" , "dltBtn(this)")
    dltBtn.setAttribute("class" , "btnwork dltBtn fas fa-trash-alt fs-4")
    // dltBtn.appendChild(dltTxt)
    div.appendChild(dltBtn)

    // Edit button
    const EditBtn = document.createElement('i')
    // const EditTxt = document.createTextNode('Edit Todo ')
    EditBtn.setAttribute("onclick" , "editBtn(this)")
    EditBtn.setAttribute("class" , "btnwork editBtn fas fa-pen-square fs-4")
    // EditBtn.appendChild(EditTxt)
    div.appendChild(EditBtn)

}}

dltBtn = (d) => {
    d.parentNode.remove()
}

DeletAll = () => {
    list.innerHTML = ""
}

editBtn = (e) => {
    const edtval = prompt("Enter Updated Value " , e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = edtval;

    
}