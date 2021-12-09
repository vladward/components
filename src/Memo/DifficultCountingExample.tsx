import React, {useCallback, useMemo, useState} from 'react';

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)
    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 1000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResultA *= 1 //       tempResultA = tempResultA * 1
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }
    return (
        <div>
            <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
            <hr/>
            <div>
                Result for a: {resultA}
            </div>
            <div>
                Result for b: {resultB}
            </div>
        </div>

    );
};

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('users secret')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(["Vlad", "Andrey", "Katya", "Yulya"])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter((counter + 1))}>+</button>
        <button onClick={() => addUser()}>addUser</button>
        {counter}
        <Users users={newArray}/>
    </>
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS", "HTML"])

    // const memoizedAddBook = useMemo(() => {
    //     return () => {
    //         console.log(books)
    //         const newBooks = [...books, 'Angular' + new Date().getTime()]
    //         setBooks(newBooks)
    //     }
    // }, [books])

    const memoizedAddBook1 = useCallback(() => {
            console.log(books)
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
    }, [books])

    return <>
        <button onClick={() => setCounter((counter + 1))}>+</button>

        {counter}
        <BooksSecret addBook={memoizedAddBook1}/>
    </>
}

type BooksSecretType =  {
    addBook: () => void
}

const BooksSecret = (props: BooksSecretType) => {
    console.log('books secret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)