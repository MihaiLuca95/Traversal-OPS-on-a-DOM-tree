// function which set data in the element 
const setData = (element, key, value) => {
    element.dataset[key] = value
}
// function which get data from the element
const getData = (element, key) => {
    return element.dataset[key]
}

// function which remove data from the element
const removeData = (element, key) => {
    delete element.dataset[key]
}

const bubbleEvent = (element, root) => {
    // check if the 'event' property exists in the element.dataset
    if(element.dataset.hasOwnProperty('event')) {
        setData(element.parentElement, Object.keys(element.dataset)[0], Object.values(element.dataset)[0])
    }

    if(element.parentElement == root) {
        return root
    }

    bubbleEvent(element.parentElement, root)
}


// set data in element 
setData(root.children[2].children[0], 'event', 'update') 

// insert data in parentElement
bubbleEvent(root.children[2].children[0], root)