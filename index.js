const users = [
    {
        name: 'Sandeep',
        age: 23,
        address: 'jabalpur MP'
    },
    {
        name: 'Sandeep',
        age: 23,
        address: 'jabalpur MP'
    },
    {
        name: 'Sandeep',
        age: 23,
        address: 'jabalpur MP'
    },
    {
        name: 'Sandeep',
        age: 23,
        address: 'jabalpur MP'
    },
    {
        name: 'Harsh',
        age: 23,
        address: 'jabalpur MP'
    }
    ,
    {
        name: 'Virendra',
        age: 23,
        address: 'jabalpur MP'
    }
    ,
    {
        name: 'Harsh',
        age: 23,
        address: 'jabalpur MP'
    }
    ,
    {
        name: 'Virendra',
        age: 23,
        address: 'jabalpur MP'
    }


]
window.onload = () => {
    console.log("Window is loaded...")

    const info = document.querySelector("#info")

    const templateElement = document.querySelector("#template")
    const templateHtml = templateElement.innerHTML
    console.log({ templateHtml, swig })

    const template = swig.compile(templateHtml)
    const html = template({ persons: users })
    console.log(html);


    info.innerHTML = html

    // const name = document.createElement("h1")
    // const age = document.createElement("h2")
    // const address = document.createElement("p")

    // name.innerHTML = user.name
    // age.innerHTML = user.age
    // address.innerHTML = user.address

    // const info = document.querySelector("#info")
    // info.appendChild(name)
    // info.appendChild(age)
    // info.appendChild(address)

}