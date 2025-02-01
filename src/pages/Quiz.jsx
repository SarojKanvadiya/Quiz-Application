import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CheckBox from '../components/CheckBox';

const Quiz = () => {

    const [quizes, setQuiz] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [show, setShow] = useState(false);
    const [submit, setSubmit] = useState([]);

    useEffect(()=>{
        const fetchData = async() =>{
          try {
            const response = await axios.get(`https://working-kaput-macadamia.glitch.me/api/questions`)
            console.log(response.data.questions)
            setQuiz(response.data.questions)
            setLoading(false)
          } catch (error) {
             console.log(error)
             setError(error.response.data.message)
             setLoading(false)
          }
        }
     fetchData()
    },[])

    if(loading) return <h1>Loading...</h1>
    if(error) return <p>{error}</p>
  return (
    <div className='quiz-container'>
        
        <div className="quiz-list">
        <h1>Take the Quiz</h1>
            {
                quizes.length>0 && quizes.map((quiz)=>{
                    return (
                        <div className="quiz-card" key={quiz.id}>
                           <h3>Question:{quiz.id} {quiz.question}</h3>
                           <span><strong>Options:</strong></span>
                           {/* <CheckBox value={quiz.options}/> */}
                           {quiz.options.map((opt, index)=>{
                               
                               return(
                                <div className='option-container' key={index}>
                                <input type="radio" value={opt} name='answer' onChange={(e)=>setSubmit(e.target.value)}/>
                                <p>{opt}</p>
                            </div>
                            )
                           })}
                           <button onClick={()=>setShow(!show)}>{show?"Hide Answer":"Show Answer"}</button>
                           <h3 style={{display: show || "none"}}>{quiz.answer}</h3>
                        </div>
                    )
                })
            }
        </div>
       
    </div>
  )
}

export default Quiz
