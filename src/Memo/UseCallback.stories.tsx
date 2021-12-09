import React, {useCallback, useMemo, useState} from "react";

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