import { types, Instance ,onSnapshot} from 'mobx-state-tree'



const Book = types.model("Book", {
    name: types.string,
})
export type IBook = Instance<typeof Book>
const BookStore = types.model("BookStore", {
    books: types.array(Book)
}).extend(self=>{ 
    onSnapshot(self,()=>{ 
        console.log("changed")
    })
    return {}
}).actions((self) => ({
    addBook(book: IBook) {
        self.books.push(book)
    },
    removeBook(book : IBook){
        self.books.remove(book)
    }
})).create({
    books : [
        {
            name : '123'
        }
    ]
})
export default BookStore
