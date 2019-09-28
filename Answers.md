
1. What problem does the context API help solve?
    Context API provides a way to pass data through the component tree without having 
    to explicitly without having to pass a prop through every level of the tree.

------------------------------------------------------------------------------------------

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions - payloads of information that send data from your application to your store

    Reducers - a pure function that takes the previous state and an action, and returns the next state.

    Store - holds the entire state tree of an application.  The only way to change the state inside
            of it is to dispatch an action on it, which is why it is known as the single source of 
            truth for the application. 


------------------------------------------------------------------------------------------

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is global and can be accessed anywhere in an application. Component state is local and can only be updated within that component and passed down to its children through props.


-------------------------------------------------------------------------------------------
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux-Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, ehich is then used to dispatch regular synchronous actions inside the body of the function once the asynchronous perations have completed.

--------------------------------------------------------------------------------------------


1. What is your favorite state management system you've learned and this sprint? Please explain why!

    Redux is my favorite because it is the easiest system I've learned thus far.
