import PostData from "./PostData";
const Data=[
    {imgsrc:PostData[0].imgsrc,
    title:PostData[0].heading1,
    content : PostData[0].h1content1[1].slice(0,205)+"...",
    link:PostData[0].link
},
{imgsrc:PostData[1].imgsrc,
    title:PostData[1].heading1,
    content : PostData[1].h1content1[1].slice(0,205)+"...",
    link:"/blog/post1"
},
{imgsrc:PostData[2].imgsrc,
    title:PostData[2].heading1,
    content : PostData[2].h1content1[1].slice(0,205)+"...",
    link:"/blog/post2"
},
{imgsrc:PostData[3].imgsrc,
    title:PostData[3].heading1,
    content : PostData[3].h1content1[1].slice(0,205)+"...",
    link:"/blog/post3"
},
{imgsrc:PostData[4].imgsrc,
    title:PostData[4].heading1,
    content : PostData[4].h1content1[1].slice(0,205)+"...",
    link:"/blog/post4"
},
{imgsrc:PostData[5].imgsrc,
    title:PostData[5].heading1,
    content : PostData[5].h1content1[1].slice(0,205)+"...",
    link:"/blog/post5"
}
]

export default Data;
//you can populate your data using database or create your api or json file or jsx file.