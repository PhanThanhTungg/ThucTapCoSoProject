// change status
const buttonChangeStatus = document.querySelectorAll("[button-change-status]")
if(buttonChangeStatus.length >0){

    const formChangeStatus = document.querySelector("#form-change-status")
    const path = formChangeStatus.getAttribute("data-path")


    buttonChangeStatus.forEach(button =>{
        button.addEventListener("click",()=>{
            const statusCurrent = button.getAttribute("data-status")
            const id = button.getAttribute("data-id")

            let changeStatus = statusCurrent == "active"?"inactive":"active"

            const action = path + `/${changeStatus}/${id}?_method=PATCH`
            formChangeStatus.action = action //~~ setAttribute
            formChangeStatus.submit() // submit len url de be xu li
        })
    })
}
// end change status

//delete item
const buttonDelete = document.querySelectorAll("[button-delete]")
if(buttonDelete.length>0){
    const formDeleteItem = document.querySelector("#form-delete-item")
    const path = formDeleteItem.getAttribute("data-path")

    buttonDelete.forEach(button=>{
        button.addEventListener("click", ()=>{
            const isConfirm = confirm("Bạn có chắc muốn xóa sản phẩm")
            if(isConfirm){
                const id = button.getAttribute("data-id")

                const action = `${path}/${id}?_method=DELETE`

                formDeleteItem.action = action

                formDeleteItem.submit()
            }
        })
    })
}
//end delete item

//add size
const buttonAddSize = document.querySelector(".buttonAddSize")
const buttonDelSize = document.querySelector(".buttonDelSize")
buttonAddSize.addEventListener("click",()=>{
    const tableData = document.querySelector(".tableSize tbody .data")
    const tableSize = document.querySelector(".tableSize tbody")
    tableSize.innerHTML = tableSize.innerHTML + tableData.innerHTML
    console.log(tableSize)
})
buttonDelSize.addEventListener("click", ()=>{
    const tableSize = document.querySelector(".tableSize tbody")
    const lastRow = tableSize.lastElementChild
    tableSize.removeChild(lastRow)
    console.log(lastRow)
})




//end add size
