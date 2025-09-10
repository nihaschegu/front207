const Home = ()=>{
  return(
    <div>
      <p>welcome to home component</p>
    </div>
    
  )

}
const Contact =() =>{
  return(
    <div>
      <h4> welcome to contact component</h4>
    </div>
  )
}
const About= ()=>{
  return(
    <div>
      <h4>welcome to about component</h4>
    </div>
  )
  
}
const Hello=(props) =>{
  return (
    <div>
      <h4>name: {props.name}   age{props.age}</h4>
    </div>
  )
}
const Hello1=(props) =>{
  return (
    <div>
      <h4>name  : {props.name}  </h4>
    </div>
  )
}
const App=()  =>  {
  const now =new Date()
  const a=10
  const b=30
  console.log('console welcome')
  return(
    <div>
      
      <h1>Welcome to react application</h1>
      <p> {a} plus {b} = {a+b}</p>
      <p> Date: {now.toString()}</p>
      <Home />
      <About />
      <Contact />
      <Hello name='ganesh' age=':24'/>
      <Hello1 name='ravi'/>
    </div>
  )
}
export default  App