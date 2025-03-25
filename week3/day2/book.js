const allBooks = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        image: "https://th.bing.com/th/id/OIP.2DmsuyWpvFnCgQTZc85NDQHaIv?rs=1&pid=ImgDetMain"
        alreadyRead: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "https://th.bing.com/th/id/OIP.2DmsuyWpvFnCgQTZc85NDQHaIv?rs=1&pid=ImgDetMain",
        alreadyRead: false
    }
];
const bookSection=document.querySelector(".listBooks")
allBooks.forEach(book => {
let bookDiv=document.createElement("div")
bookDiv.classList.add("book")

if(book.alreadyRead){
    bookDiv.classList.add("read")

}
let ImageBook=document.createElement("img")
ImageBook.src=book.image
ImageBook.alt=book.title
let bookDetail = document.createElement("div");
bookDetail.innerHTML = `<h3>${book.title}</h3><p>By ${book.author}</p>`;
bookDiv.appendChild(ImageBook);
bookDiv.appendChild(bookDetail);

bookSection.appendChild(bookDiv);

});