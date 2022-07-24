import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-lg font-bold'>1. How will you improve the performance of a React Application?</h1>
            <p>
                Using Immutable Data Structures can improve react application.

                Avoiding Inline Function Definition in the Render Function,
                Throttling and Debouncing Event Action in JavaScript,
                Avoiding using Index as Key for map can work to improve a react application
            </p>
            <h1 className='text-lg font-bold'>2. What are the different ways to manage a state in a React application?
            </h1>
            <p> A state can be managed in a react application in many ways such as Local state,
                Global state,
                Server state
                URL state.</p>
            <h1 className='text-lg font-bold'>3. How does prototypical inheritance work?

            </h1>
            <p>

                By  prototypal inheritance  we can add new properties to prototypes after they are created. This allows  to add new methods to a prototype which will be automatically made available to all the objects which delegate to that prototype
            </p>
            <h1 className='text-lg font-bold'>4. Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts


            </h1>
            <p>The state is updated in an array with the usestate. so if we put an array in usestate function, we do not have to set the state again in an array. usestate will update it</p>
            <h1 className='text-lg font-bold'>5. You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?



            </h1>
            <p>Fetching the array and using the name as  search query one can find the product from an array  </p>
            <h1 className='text-lg font-bold'>6.  What is a unit test? Why should write unit tests?



            </h1>
            <p>unit testing is a software testing method by which individual units of source code—sets of one or more computer program modules together with associated control data, usage procedures, and operating procedures—are tested to determine whether they are fit for use</p>


        </div>
    );
};

export default Blogs;