# Little Yellow Component Library

I really enjoy creating reusable components at work, so I thought I'd create my own little component library as a personal project :)

## Rationales (Just Incase You Were Wondering)

Jest: This is the testing framework that I am familiar with

Styled-components: I chose to work with styled-components instead of CSS Modules for two reasons: (1) I like the simplicity of keeping my component and its styling code in the same file. It is easier to work with as all the info you need is in the same place, you don't need to move around from one file to another. (2) There is no risk of potentially affecting other elements on the page that I didn't intend to style, like there is with a global approach such as CSS Modules. I understand there is a trade off here as styled-components can be slower than plain CSS for large, complex applications, but this is just a wee little project so I'm not concerned about that here.