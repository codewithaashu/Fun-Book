import React,{useState} from 'react'

export default function About(props) {
    return (
        <div>
            <h1 id="aboutHead" className="my-5" style={props.mode}>About us</h1>
            <div id="paraBox">
                <p id="aboutPara" style={props.mode}>
                    The Word Counter is a dynamic online tool used for counting words, characters, sentences, paragraphs and pages in real time, along with spelling and grammar checking. Writers leverage it to improve word choice and writing style as well as helping to detect grammar mistakes and plagiarism. Additionally, to assist with public speaking, our tool will accurately estimate speaking time to help with prep for class presentations, wedding speeches, or anything of the sort.

                    Use The Word Counter by typing directly into the text area above or pasting in your content. Word and character counts will display at the top, any writing mistakes will be underlined and your most frequently used keywords will appear to the right.

                    The Auto-Save feature will make sure you won't lose any changes while editing, even if you leave the site and come back later. NOTE: Bookmark this page now for easy future use.

                    Another utility of The Word Counter specifically designed for copywriters and digital marketers is the ability to track your text length against common web standards like Twitter's tweet character count (140), Google's meta description (300), and Facebook's average post display length (~250). Our tools and suite of offerings is ever evolving. If you see value in a new feature or tool, simply let us know and we will create it! Happy writing!
                </p>
            </div>
        </div>
    )
}
