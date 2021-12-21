import React, {useEffect, useState} from 'react'

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)
    console.log('useEffect example')

    useEffect(() => {
        //api.getUsers().then('')           |
        //setInterval                       |
        //indexedDB                         |side effects
        //document.getElementById           |
        //document.title = 'Vlad'           |
        document.title = counter.toString()
        console.log('useEffect every render')
    })

    useEffect(() => {
        document.title = counter.toString()
        console.log('useEffect only first render')
    }, [])

    useEffect(() => {
        document.title = counter.toString()
        console.log('useEffect first render and every counter change ')
    }, [counter])

    return <>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        Hello {counter} {fake}
    </>
}

export const SimpleTimeoutExample = () => {
    const [fake, setFake] = useState(0)
    const [counter, setCounter] = useState(0)
    console.log('useEffect SimpleTimeoutExample')

    // useEffect(() => {
    //     //api.getUsers().then('')           |
    //     //setInterval                       |
    //     //indexedDB                         |side effects
    //     //document.getElementById           |
    //     //document.title = 'Vlad'           |
    //     document.title = counter.toString()
    //     console.log('useEffect every render')
    // })

    useEffect(() => {
        setTimeout(() => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000)
    }, [counter])


    return <>
        <button onClick={() => setFake(fake + 1)}>fake+</button>
        <button onClick={() => setCounter(counter + 1)}>counter+</button>
        Hello {counter} {fake}
    </>
}

export const SimpleIntervalExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('useEffect SimpleIntervalExample')

    // useEffect(() => {
    //     //api.getUsers().then('')           |
    //     //setInterval                       |
    //     //indexedDB                         |side effects
    //     //document.getElementById           |
    //     //document.title = 'Vlad'           |
    //     document.title = counter.toString()
    //     console.log('useEffect every render')
    // })

    useEffect(() => {
        setInterval(() => {
            console.log('tick' + counter)
            setCounter(state => state + 1)
        }, 1000)
    }, [])


    return <>
        Hello, counter : {counter}
        Hello, fake : {fake}
    </>
}