import React from 'react'

const Contact = () => {
  return (
<>
    
    <div className="contact">



        <main>
            <h1>Contact Us </h1>
        <form action="">


             

            
            <div>
                <label >Name</label>
                <input type="text"  placeholder='xyz'/>
            </div>
            <div>
                <label >Email </label>
                <input type="text"  placeholder='xyz@gmail.com'/>
            </div>
            <div>
                <label>Message </label>
                <input type="text"  placeholder=' Tell us about your query'/>
            </div>

            <button>
                Send 
            </button>


            
            

        </form>
        </main>
    </div>

    </>
  )
}

export default Contact